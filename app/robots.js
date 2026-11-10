import { siteUrl } from "@/lib/format";

export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/admin", "/search"] }],
    sitemap: `${siteUrl()}/sitemap.xml`,
  };
}
