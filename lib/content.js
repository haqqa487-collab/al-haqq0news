import "server-only";
import { all, get } from "@/lib/db";

function hydrate(row) {
  if (!row) return null;
  const words = row.body.split(/\s+/).filter(Boolean).length;
  return {
    ...row,
    tags: JSON.parse(row.tags || "[]"),
    ledger: JSON.parse(row.ledger || "[]"),
    sources: JSON.parse(row.sources || "[]"),
    hero: JSON.parse(row.hero || "{}"),
    featured: !!row.featured,
    editors_pick: !!row.editors_pick,
    readingTime: Math.max(1, Math.round(words / 230)),
  };
}

const PUBLISHED = "status = 'published' AND published_at <= ?";
const now = () => new Date().toISOString();

export async function getPublished({ section, tag, limit = 50, excludeIds = [] } = {}) {
  const rows = section
    ? await all(`SELECT * FROM articles WHERE ${PUBLISHED} AND section = ? ORDER BY published_at DESC`, now(), section)
    : await all(`SELECT * FROM articles WHERE ${PUBLISHED} ORDER BY published_at DESC`, now());
  return rows
    .map(hydrate)
    .filter((a) => !excludeIds.includes(a.id))
    .filter((a) => !tag || a.tags.some((t) => t.toLowerCase() === tag.toLowerCase()))
    .slice(0, limit);
}

export async function getLead() {
  const featured = await get(
    `SELECT * FROM articles WHERE ${PUBLISHED} AND featured = 1 ORDER BY published_at DESC LIMIT 1`,
    now()
  );
  return hydrate(featured) || (await getPublished({ limit: 1 }))[0] || null;
}

export async function getEditorsPicks(excludeIds = [], limit = 4) {
  return (await all(`SELECT * FROM articles WHERE ${PUBLISHED} AND editors_pick = 1 ORDER BY published_at DESC`, now()))
    .map(hydrate)
    .filter((a) => !excludeIds.includes(a.id))
    .slice(0, limit);
}

export async function getBySlug(slug, { includeDrafts = false } = {}) {
  const a = hydrate(await get("SELECT * FROM articles WHERE slug = ?", slug));
  if (!a) return null;
  if (!includeDrafts && (a.status !== "published" || a.published_at > now())) return null;
  return a;
}

export async function getById(id) {
  return hydrate(await get("SELECT * FROM articles WHERE id = ?", id));
}

export async function getAllForAdmin() {
  return (await all("SELECT * FROM articles ORDER BY COALESCE(published_at, updated_at) DESC")).map(hydrate);
}

export async function getRelated(article, limit = 3) {
  const list = await getPublished({ excludeIds: [article.id], limit: 500 });
  const score = (a) =>
    a.tags.filter((t) => article.tags.includes(t)).length * 2 + (a.section === article.section ? 1 : 0);
  return list
    .map((a) => ({ a, s: score(a) }))
    .sort((x, y) => y.s - x.s || (y.a.published_at > x.a.published_at ? 1 : -1))
    .slice(0, limit)
    .map((x) => x.a);
}

export async function search(q) {
  if (!q.trim()) return [];
  const term = `%${q.trim()}%`;
  return (
    await all(
      `SELECT * FROM articles WHERE ${PUBLISHED} AND (title LIKE ? OR dek LIKE ? OR body LIKE ? OR tags LIKE ? OR kicker LIKE ?) ORDER BY published_at DESC LIMIT 40`,
      now(), term, term, term, term, term
    )
  ).map(hydrate);
}

export async function getAllTags() {
  const tags = new Map();
  for (const a of await getPublished({ limit: 1000 })) for (const t of a.tags) tags.set(t, (tags.get(t) || 0) + 1);
  return [...tags.entries()].sort((a, b) => b[1] - a[1]);
}

export async function getSettings() {
  const rows = await all("SELECT key, value FROM settings");
  return Object.fromEntries(rows.map((r) => [r.key, JSON.parse(r.value)]));
}
