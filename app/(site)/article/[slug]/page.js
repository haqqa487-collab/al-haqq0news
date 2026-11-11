import Link from "next/link";
import { notFound } from "next/navigation";
import { getBySlug, getRelated, getSettings } from "@/lib/content";
import { isEditor } from "@/lib/auth";
import { renderMarkdown } from "@/lib/markdown";
import { formatDate, siteUrl } from "@/lib/format";
import { sectionBySlug, LEDGER_KINDS, slugify } from "@/lib/sections";
import { Photo, Card, SectionHead, Portrait } from "@/components/Cards";
import ReadingProgress from "@/components/ReadingProgress";
import { ShareBar } from "@/components/Forms";

async function load(slug) {
  const editor = await isEditor();
  return { a: await getBySlug(slug, { includeDrafts: editor }), editor };
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const { a } = await load(slug);
  if (!a) return { title: "Not found" };
  return {
    title: a.title,
    description: a.dek,
    authors: [{ name: a.author }],
    alternates: { canonical: `/article/${a.slug}` },
    openGraph: {
      type: "article",
      title: a.title,
      description: a.dek,
      publishedTime: a.published_at,
      modifiedTime: a.updated_at,
      authors: [a.author],
      section: sectionBySlug(a.section)?.name,
      images: a.hero?.src ? [{ url: a.hero.src, alt: a.hero.alt }] : [],
    },
  };
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const { a, editor } = await load(slug);
  if (!a) notFound();
  const section = sectionBySlug(a.section);
  const related = await getRelated(a, 3);
  const settings = await getSettings();
  const url = `${siteUrl()}/article/${a.slug}`;
  const updated = a.updated_at && a.updated_at.slice(0, 10) !== a.published_at?.slice(0, 10);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": a.type === "Opinion" ? "OpinionNewsArticle" : a.type === "Analysis" ? "AnalysisNewsArticle" : a.type === "Investigation" ? "ReportageNewsArticle" : "NewsArticle",
    headline: a.title,
    description: a.dek,
    datePublished: a.published_at,
    dateModified: a.updated_at,
    author: [{ "@type": "Person", name: a.author, url: `${siteUrl()}/author/abdi-fatah` }],
    publisher: { "@type": "NewsMediaOrganization", name: "AL-HAQQ", url: siteUrl() },
    image: a.hero?.src ? [a.hero.src] : undefined,
    mainEntityOfPage: url,
    articleSection: section?.name,
    keywords: a.tags.join(", "),
  };

  return (
    <article>
      <ReadingProgress />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />

      {a.status !== "published" && (
        <div className="wrap" style={{ paddingTop: 20 }}>
          <div className="flash flash--err">Draft preview — visible only to the signed-in editor. <Link className="link" href={`/admin/articles/${a.id}`}>Edit</Link></div>
        </div>
      )}

      <header className="article-head wrap">
        <Link href={`/section/${a.section}`} className="kicker">{section?.name}{a.kicker ? ` · ${a.kicker.split("·")[0].trim()}` : ""}</Link>
        <h1 className="headline">{a.title}</h1>
        <p className="dek">{a.dek}</p>
        <div className="article-head__meta byline">
          <span>By <Link href="/author/abdi-fatah"><strong>{a.author}</strong></Link></span>
          <span><span className="card__type">{a.type}</span></span>
          <span>Published <time dateTime={a.published_at}>{formatDate(a.published_at)}</time></span>
          {updated && <span>Updated <time dateTime={a.updated_at}>{formatDate(a.updated_at)}</time></span>}
          <span>{a.readingTime} min read</span>
        </div>
      </header>

      <div className="article-hero wrap">
        <Photo hero={a.hero} ratio="16 / 9" caption priority />
      </div>

      <div className="wrap">
        <div className="article-layout">
          <aside className="article-layout__rail" aria-label="Article tools">
            <div className="sticky">
              <ShareBar url={url} title={a.title} />
              {a.last_verified && (
                <div className="rail-card">
                  <h4>Last verified</h4>
                  Facts in this article were checked against the cited sources on {formatDate(a.last_verified)}.
                </div>
              )}
              <div className="rail-card">
                <h4>Topics</h4>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 6 }}>
                  {a.tags.map((t) => <Link key={t} href={`/topic/${slugify(t)}`} className="chip">{t}</Link>)}
                </div>
              </div>
              {editor && <Link className="btn btn--ghost btn--sm" href={`/admin/articles/${a.id}`}>Edit article</Link>}
            </div>
          </aside>

          <div>
            {a.update_note && (
              <div className="notice" role="note">
                <strong>Editor&rsquo;s note</strong>
                {a.update_note}
              </div>
            )}

            {a.ledger.length > 0 && (
              <section className="ledger" aria-labelledby="ledger-h">
                <div className="ledger__head">
                  <h2 id="ledger-h">The Evidence Ledger</h2>
                  <span>What we know · What is claimed · What is unresolved</span>
                </div>
                <ul>
                  {a.ledger.map((l, i) => (
                    <li key={i}>
                      <span className={`tag-kind tag-kind--${l.kind}`}>{LEDGER_KINDS[l.kind]?.label || l.kind}</span>
                      <span>{l.text}</span>
                    </li>
                  ))}
                </ul>
                <div className="ledger__legend">
                  <b>Established</b>: confirmed by documents or multiple independent sources. <b>Official statement</b>: what
                  authorities or parties say — reported, not endorsed. <b>Allegation</b>: claimed, not independently verified
                  by AL-HAQQ. <b>Unresolved</b>: open questions.
                </div>
              </section>
            )}

            <div className="prose" dangerouslySetInnerHTML={{ __html: renderMarkdown(a.body) }} />

            {a.sources.length > 0 && (
              <section className="sources" aria-labelledby="sources-h">
                <h2 id="sources-h">Sources and further reading</h2>
                <ol>
                  {a.sources.map((s, i) => (
                    <li key={i}>
                      <a href={s.url} target="_blank" rel="noopener noreferrer">{s.title}</a>{" "}
                      <span className="sources__pub">— {s.publisher}{s.date ? `, ${s.date}` : ""}</span>
                    </li>
                  ))}
                </ol>
                <p className="verify">
                  AL-HAQQ links to original sources wherever possible. Where we rely on reporting by other outlets, we say so.
                  Spotted an error? <Link className="link" href={`/contact?type=correction&ref=${encodeURIComponent(a.slug)}`}>Request a correction</Link>.
                </p>
              </section>
            )}

            <section className="author-box" aria-label="About the author">
              <Portrait src={settings.author_portrait} name={settings.author_name} className="portrait--sm" />
              <div>
                <div className="kicker">About the author</div>
                <h3>{settings.author_name}</h3>
                <p>{settings.author_short_bio}</p>
                <div className="actions meta">
                  <Link className="link" href="/author/abdi-fatah">Profile and all articles</Link>
                  <Link className="link" href="/contact?type=letter">Write to the editor</Link>
                </div>
              </div>
            </section>
          </div>

          <div aria-hidden="true" />
        </div>
      </div>

      {related.length > 0 && (
        <section className="section wrap" aria-label="Related stories" style={{ paddingBottom: 56 }}>
          <SectionHead title="Related Reporting" />
          <div className="grid grid--3 grid--ruled">
            {related.map((r) => <Card key={r.id} a={r} size="sm" />)}
          </div>
        </section>
      )}
    </article>
  );
}
