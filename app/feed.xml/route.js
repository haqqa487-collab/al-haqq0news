import { getPublished } from "@/lib/content";
import { siteUrl } from "@/lib/format";

const MAP = { "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", '"': "&quot;" };
const esc = (s) => String(s).replace(/[<>&'"]/g, (c) => MAP[c]);

export async function GET() {
  const base = siteUrl();
  const items = (await getPublished({ limit: 30 }))
    .map(
      (a) =>
        `<item><title>${esc(a.title)}</title><link>${base}/article/${a.slug}</link><guid>${base}/article/${a.slug}</guid>` +
        `<pubDate>${new Date(a.published_at).toUTCString()}</pubDate><dc:creator>${esc(a.author)}</dc:creator>` +
        `<description>${esc(a.dek)}</description></item>`
    )
    .join("");
  const xml =
    `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0" xmlns:dc="http://purl.org/dc/elements/1.1/"><channel>` +
    `<title>AL-HAQQ</title><link>${base}</link><description>The Truth. Beyond the Headlines.</description><language>en-gb</language>` +
    `${items}</channel></rss>`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
