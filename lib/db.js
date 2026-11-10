import "server-only";
import { getCloudflareContext } from "@opennextjs/cloudflare";

// The database is Cloudflare D1 (SQLite), bound to the Worker as `DB` in wrangler.jsonc.
// Locally, `npm run dev` uses a local copy of D1 stored in .wrangler/state.
// The schema and the launch content live in /migrations.

async function d1() {
  const { env } = await getCloudflareContext({ async: true });
  if (!env.DB) throw new Error("D1 database binding `DB` is missing. Check wrangler.jsonc.");
  return env.DB;
}

const clean = (params) => params.map((p) => (p === undefined ? null : p));

export async function all(sql, ...params) {
  const { results } = await (await d1()).prepare(sql).bind(...clean(params)).all();
  return results || [];
}

export async function get(sql, ...params) {
  return (await (await d1()).prepare(sql).bind(...clean(params)).first()) || null;
}

export async function run(sql, ...params) {
  const r = await (await d1()).prepare(sql).bind(...clean(params)).run();
  return { changes: r.meta?.changes ?? 0, lastId: r.meta?.last_row_id ?? null };
}
