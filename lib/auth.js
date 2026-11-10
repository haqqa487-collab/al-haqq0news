import "server-only";
import crypto from "node:crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const COOKIE = "alhaqq_session";
const MAX_AGE = 60 * 60 * 12; // 12 hours

function secret() {
  const s = process.env.SESSION_SECRET;
  if (!s || s.length < 32) throw new Error("SESSION_SECRET must be set (32+ characters) in .env.local");
  return s;
}

function sign(payload) {
  return crypto.createHmac("sha256", secret()).update(payload).digest("base64url");
}

function safeEqual(a, b) {
  const x = Buffer.from(String(a));
  const y = Buffer.from(String(b));
  return x.length === y.length && crypto.timingSafeEqual(x, y);
}

export function checkPassword(input) {
  const pw = process.env.ADMIN_PASSWORD;
  if (!pw || pw === "change-me-to-a-long-passphrase") return false;
  // Compare hashes so length differences do not leak timing information.
  const h = (v) => crypto.createHash("sha256").update(String(v)).digest("hex");
  return safeEqual(h(input), h(pw));
}

export async function createSession() {
  const exp = Date.now() + MAX_AGE * 1000;
  const payload = `editor.${exp}`;
  (await cookies()).set(COOKIE, `${payload}.${sign(payload)}`, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: MAX_AGE,
  });
}

export async function destroySession() {
  (await cookies()).delete(COOKIE);
}

export async function isEditor() {
  const raw = (await cookies()).get(COOKIE)?.value;
  if (!raw) return false;
  const i = raw.lastIndexOf(".");
  const payload = raw.slice(0, i);
  const sig = raw.slice(i + 1);
  if (!safeEqual(sig, sign(payload))) return false;
  const exp = Number(payload.split(".")[1]);
  return Number.isFinite(exp) && exp > Date.now();
}

export async function requireEditor() {
  if (!(await isEditor())) redirect("/admin/login");
}

// Very small in-memory rate limiter for login and public forms.
const hits = globalThis.__alhaqqHits || (globalThis.__alhaqqHits = new Map());
export function rateLimit(key, max = 8, windowMs = 10 * 60 * 1000) {
  const now = Date.now();
  const arr = (hits.get(key) || []).filter((t) => now - t < windowMs);
  arr.push(now);
  hits.set(key, arr);
  return arr.length <= max;
}
