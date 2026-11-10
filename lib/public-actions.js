"use server";
import { headers } from "next/headers";
import { run } from "@/lib/db";
import { rateLimit } from "@/lib/auth";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

async function clientKey(prefix) {
  const h = await headers();
  return `${prefix}:${h.get("x-forwarded-for")?.split(",")[0] || h.get("x-real-ip") || "local"}`;
}

export async function subscribe(_prev, formData) {
  const email = String(formData.get("email") || "").trim().toLowerCase();
  if (formData.get("website")) return { ok: true, message: "Thank you." }; // honeypot
  if (!EMAIL.test(email) || email.length > 200) return { ok: false, message: "Please enter a valid email address." };
  if (!rateLimit(await clientKey("sub"), 5)) return { ok: false, message: "Too many attempts. Please try again later." };
  const res = await run("INSERT OR IGNORE INTO subscribers (email, created_at) VALUES (?, ?)", email, new Date().toISOString());
  return {
    ok: true,
    message: res.changes
      ? "Thank you. You are on the list for AL-HAQQ investigations and analysis."
      : "You are already subscribed. Thank you.",
  };
}

const KINDS = ["letter", "correction", "tip", "general"];

export async function sendMessage(_prev, formData) {
  if (formData.get("website")) return { ok: true, message: "Thank you." }; // honeypot
  const name = String(formData.get("name") || "").trim().slice(0, 120);
  const email = String(formData.get("email") || "").trim().slice(0, 200);
  const kind = KINDS.includes(formData.get("kind")) ? formData.get("kind") : "general";
  const subject = String(formData.get("subject") || "").trim().slice(0, 200);
  const body = String(formData.get("body") || "").trim().slice(0, 10000);
  if (!name || !EMAIL.test(email) || body.length < 10)
    return { ok: false, message: "Please give your name, a valid email address and a message of at least a few words." };
  if (!rateLimit(await clientKey("msg"), 5)) return { ok: false, message: "Too many messages. Please try again later." };
  await run(
    "INSERT INTO messages (name,email,kind,subject,body,created_at) VALUES (?,?,?,?,?,?)",
    name, email, kind, subject, body, new Date().toISOString()
  );
  return { ok: true, message: "Thank you. Your message has reached the editor." };
}
