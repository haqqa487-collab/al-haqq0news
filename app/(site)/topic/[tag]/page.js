import Link from "next/link";
import { getPublished, getAllTags } from "@/lib/content";
import { SECTIONS, slugify } from "@/lib/sections";
import ArchiveList from "@/components/ArchiveList";

async function resolveTag(slug) {
  const known = new Set([...SECTIONS.flatMap((s) => s.topics), ...(await getAllTags()).map(([t]) => t)]);
  return [...known].find((t) => slugify(t) === slug) || slug.replace(/-/g, " ");
}

export async function generateMetadata({ params }) {
  const tag = await resolveTag((await params).tag);
  return { title: tag, description: `AL-HAQQ reporting and analysis on ${tag}.` };
}

export default async function TopicPage({ params, searchParams }) {
  const { tag: slug } = await params;
  const { type } = await searchParams;
  const tag = await resolveTag(slug);
  const articles = await getPublished({ tag, limit: 500 });
  const tags = await getAllTags();
  return (
    <div className="wrap">
      <header className="page-head">
        <div className="kicker">Topic</div>
        <h1>{tag}</h1>
        <p>{articles.length} {articles.length === 1 ? "article" : "articles"} from AL-HAQQ</p>
        <div className="region__countries" style={{ marginTop: 20, marginBottom: 0 }}>
          {tags.map(([t]) => (
            <Link key={t} className="chip" href={`/topic/${slugify(t)}`} aria-current={t === tag ? "page" : undefined}>{t}</Link>
          ))}
        </div>
      </header>
      <ArchiveList articles={articles} basePath={`/topic/${slug}`} activeType={type} emptyText={`AL-HAQQ has not yet published on ${tag}.`} />
    </div>
  );
}
