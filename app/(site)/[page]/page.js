import Link from "next/link";
import { notFound } from "next/navigation";
import { pages } from "@/content/pages";
import { renderMarkdown } from "@/lib/markdown";
import { getPublished } from "@/lib/content";
import { formatDate } from "@/lib/format";

export async function generateMetadata({ params }) {
  const p = pages[(await params).page];
  return p ? { title: p.title, description: p.intro, alternates: { canonical: `/${(await params).page}` } } : {};
}

export default async function EditorialPage({ params }) {
  const { page } = await params;
  const p = pages[page];
  if (!p) notFound();
  const log = page === "corrections" ? (await getPublished({ limit: 500 })).filter((a) => a.update_note) : [];
  return (
    <div className="wrap">
      <header className="page-head">
        <div className="kicker">{p.kicker}</div>
        <h1>{p.title}</h1>
        <p>{p.intro}</p>
      </header>
      <div className="page-body">
        <div className="prose" dangerouslySetInnerHTML={{ __html: renderMarkdown(p.body) }} />
        {page === "corrections" && (
          <section className="sources">
            <h2>Corrections and updates log</h2>
            {log.length ? (
              <ol>
                {log.map((a) => (
                  <li key={a.id}>
                    <Link className="link" href={`/article/${a.slug}`}>{a.title}</Link>
                    <div className="meta">{formatDate(a.updated_at)} — {a.update_note}</div>
                  </li>
                ))}
              </ol>
            ) : (
              <p className="meta">No corrections have been published.</p>
            )}
          </section>
        )}
      </div>
    </div>
  );
}
