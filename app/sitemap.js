export const dynamic = "force-dynamic";
import { getPublished } from "@/lib/content";
import { SECTIONS } from "@/lib/sections";
import { pages } from "@/content/pages";
import { siteUrl } from "@/lib/format";

export default async function sitemap() {
  const base = siteUrl();
  return [
    { url: base, changeFrequency: "daily", priority: 1 },
    ...SECTIONS.map((s) => ({ url: `${base}/section/${s.slug}`, changeFrequency: "daily", priority: 0.8 })),
    { url: `${base}/author/abdi-fatah`, priority: 0.7 },
    { url: `${base}/contact`, priority: 0.4 },
    ...Object.keys(pages).map((p) => ({ url: `${base}/${p}`, priority: 0.4 })),
    ...(await getPublished({ limit: 5000 })).map((a) => ({ url: `${base}/article/${a.slug}`, lastModified: a.updated_at, priority: 0.9 })),
  ];
}
