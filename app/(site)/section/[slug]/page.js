import Link from "next/link";
import { notFound } from "next/navigation";
import { getPublished } from "@/lib/content";
import { sectionBySlug, slugify } from "@/lib/sections";
import ArchiveList from "@/components/ArchiveList";

export async function generateMetadata({ params }) {
  const s = sectionBySlug((await params).slug);
  return s ? { title: s.name, description: s.description, alternates: { canonical: `/section/${s.slug}` } } : {};
}

export default async function SectionPage({ params, searchParams }) {
  const { slug } = await params;
  const { type } = await searchParams;
  const s = sectionBySlug(slug);
  if (!s) notFound();

  let articles = await getPublished({ section: slug, limit: 500 });
  // Opinion & Analysis also collects analytical pieces filed in other sections.
  if (slug === "opinion") {
    articles = (await getPublished({ limit: 500 })).filter((a) => a.section === "opinion" || a.type === "Analysis" || a.type === "Opinion");
  }
  if (slug === "east-africa") {
    const ea = s.topics;
    articles = (await getPublished({ limit: 500 })).filter((a) => a.section === "east-africa" || a.tags.some((t) => ea.includes(t)));
  }

  return (
    <div className="wrap">
      <header className="page-head">
        <div className="kicker">Section</div>
        <h1>{s.name}</h1>
        <p>{s.description}</p>
        <div className="region__countries" style={{ marginTop: 20, marginBottom: 0 }}>
          {s.topics.map((t) => <Link key={t} className="chip" href={`/topic/${slugify(t)}`}>{t}</Link>)}
        </div>
      </header>
      <ArchiveList articles={articles} basePath={`/section/${slug}`} activeType={type} emptyText={`No ${s.name} articles have been published yet.`} />
    </div>
  );
}
