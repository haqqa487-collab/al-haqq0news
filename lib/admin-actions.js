"use server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { get, run } from "@/lib/db";
import { checkPassword, createSession, destroySession, requireEditor, rateLimit } from "@/lib/auth";
import { SECTIONS, ARTICLE_TYPES, LEDGER_KINDS, slugify } from "@/lib/sections";
import { defaultSettings } from "@/content/settings";

// ---------- Session ----------
export async function login(_prev, formData) {
  const h = await headers();
  const ip = h.get("x-forwarded-for")?.split(",")[0] || "local";
  if (!rateLimit(`login:${ip}`, 6)) return { error: "Too many attempts. Wait ten minutes and try again." };
  if (!checkPassword(formData.get("password") || "")) {
    return { error: "Incorrect password. (If you have not set one, edit ADMIN_PASSWORD in .env.local.)" };
  }
  await createSession();
  redirect("/admin");
}

export async function logout() {
  await destroySession();
  redirect("/admin/login");
}

// ---------- Articles ----------
const str = (f, k, max = 100000) => String(f.get(k) ?? "").trim().slice(0, max);

function parseLedger(text) {
  return text
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean)
    .map((l) => {
      const i = l.indexOf("|");
      const kind = (i > -1 ? l.slice(0, i) : "fact").trim().toLowerCase();
      return { kind: LEDGER_KINDS[kind] ? kind : "fact", text: (i > -1 ? l.slice(i + 1) : l).trim() };
    })
    .filter((x) => x.text);
}

function parseSources(text) {
  return text
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean)
    .map((l) => {
      const [title = "", publisher = "", url = "", date = ""] = l.split("|").map((x) => x.trim());
      return { title, publisher, url: /^https?:\/\//i.test(url) ? url : "", date };
    })
    .filter((s) => s.title);
}

function toIso(local) {
  if (!local) return new Date().toISOString();
  const d = new Date(local);
  return isNaN(d) ? new Date().toISOString() : d.toISOString();
}

export async function saveArticle(_prev, formData) {
  await requireEditor();
  const id = Number(formData.get("id")) || null;
  const title = str(formData, "title", 300);
  const body = str(formData, "body");
  const section = SECTIONS.some((s) => s.slug === formData.get("section")) ? formData.get("section") : "east-africa";
  const type = ARTICLE_TYPES.includes(formData.get("type")) ? formData.get("type") : "Report";
  let slug = slugify(str(formData, "slug", 120) || title);
  if (!title || !body) return { error: "A headline and article text are required." };
  if (!slug) return { error: "Please provide a web address (slug) for the article." };

  const clash = await get("SELECT id FROM articles WHERE slug = ? AND id IS NOT ?", slug, id);
  if (clash) return { error: `Another article already uses the address /article/${slug}. Choose a different slug.` };

  const status = formData.get("intent") === "publish" ? "published" : formData.get("intent") === "draft" ? "draft" : str(formData, "status") || "draft";
  const featured = formData.get("featured") === "on" ? 1 : 0;
  const hero = {
    src: str(formData, "hero_src", 2000),
    alt: str(formData, "hero_alt", 500),
    caption: str(formData, "hero_caption", 1500),
    credit: str(formData, "hero_credit", 300),
    license: str(formData, "hero_license", 200),
    licenseUrl: str(formData, "hero_license_url", 2000),
    sourceUrl: str(formData, "hero_source_url", 2000),
  };
  if (hero.src && !/^https?:\/\//i.test(hero.src) && !hero.src.startsWith("/")) return { error: "The image address must start with https:// or /" };
  if (hero.src && (!hero.credit || !hero.alt)) return { error: "Every photograph needs a credit and alternative text." };

  const now = new Date().toISOString();
  const values = {
    slug,
    title,
    dek: str(formData, "dek", 1000),
    kicker: str(formData, "kicker", 120),
    section,
    type,
    tags: JSON.stringify(str(formData, "tags", 1000).split(",").map((t) => t.trim()).filter(Boolean)),
    author: str(formData, "author", 120) || "Abdi Fatah",
    body,
    ledger: JSON.stringify(parseLedger(str(formData, "ledger"))),
    sources: JSON.stringify(parseSources(str(formData, "sources"))),
    hero: JSON.stringify(hero),
    featured,
    editors_pick: formData.get("editors_pick") === "on" ? 1 : 0,
    status,
    published_at: toIso(str(formData, "published_at")),
    updated_at: now,
    last_verified: str(formData, "last_verified", 20) || null,
    update_note: str(formData, "update_note", 2000),
  };

  if (featured) await run("UPDATE articles SET featured = 0 WHERE id IS NOT ?", id);
  let newId = id;
  if (id) {
    const cols = Object.keys(values).map((k) => `${k} = ?`).join(", ");
    await run(`UPDATE articles SET ${cols} WHERE id = ?`, ...Object.values(values), id);
  } else {
    const cols = Object.keys(values);
    const r = await run(`INSERT INTO articles (${cols.join(",")}) VALUES (${cols.map(() => "?").join(",")})`, ...Object.values(values));
    newId = Number(r.lastId);
  }
  revalidatePath("/", "layout");
  redirect(`/admin/articles/${newId}?saved=1`);
}

export async function deleteArticle(formData) {
  await requireEditor();
  await run("DELETE FROM articles WHERE id = ?", Number(formData.get("id")));
  revalidatePath("/", "layout");
  redirect("/admin?deleted=1");
}

export async function makeLead(formData) {
  await requireEditor();
  const id = Number(formData.get("id"));
  await run("UPDATE articles SET featured = 0");
  await run("UPDATE articles SET featured = 1 WHERE id = ?", id);
  revalidatePath("/", "layout");
  redirect("/admin?lead=1");
}

export async function toggleStatus(formData) {
  await requireEditor();
  const id = Number(formData.get("id"));
  await run(
    "UPDATE articles SET status = CASE status WHEN 'published' THEN 'draft' ELSE 'published' END, updated_at = ? WHERE id = ?",
    new Date().toISOString(), id
  );
  revalidatePath("/", "layout");
  redirect("/admin");
}

// ---------- Settings ----------
export async function saveSettings(_prev, formData) {
  await requireEditor();
  const updates = [];
  for (const key of Object.keys(defaultSettings)) {
    if (!formData.has(key)) continue;
    let v = String(formData.get(key) || "").trim().slice(0, 8000);
    if (key === "author_interests") v = v.split("\n").map((x) => x.trim()).filter(Boolean);
    if (key.startsWith("social_") || key === "author_portrait") {
      if (v && !/^https?:\/\//i.test(v) && !String(v).startsWith("/")) return { error: `${key.replace("_", " ")} must be a full web address starting with https://` };
    }
    updates.push([key, JSON.stringify(v)]);
  }
  for (const [key, value] of updates) {
    await run("INSERT INTO settings (key, value) VALUES (?, ?) ON CONFLICT(key) DO UPDATE SET value = excluded.value", key, value);
  }
  revalidatePath("/", "layout");
  return { ok: "Settings saved." };
}

// ---------- Messages ----------
export async function markMessage(formData) {
  await requireEditor();
  const id = Number(formData.get("id"));
  if (formData.get("op") === "delete") await run("DELETE FROM messages WHERE id = ?", id);
  else await run("UPDATE messages SET read = 1 - read WHERE id = ?", id);
  redirect("/admin/messages");
}

export async function removeSubscriber(formData) {
  await requireEditor();
  await run("DELETE FROM subscribers WHERE id = ?", Number(formData.get("id")));
  redirect("/admin/subscribers");
}
