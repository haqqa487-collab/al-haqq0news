import Link from "next/link";
import { getPublished, getSettings } from "@/lib/content";
import { Card, ListCard, SectionHead } from "@/components/Cards";

export async function generateMetadata() {
  const s = await getSettings();
  return { title: s.author_name, description: s.author_short_bio, alternates: { canonical: "/author/abdi-fatah" } };
}

export default async function AuthorPage() {
  const s = await getSettings();
  const mine = (await getPublished({ limit: 500 })).filter((a) => a.author === s.author_name);
  const investigations = mine.filter((a) => a.type === "Investigation" || a.type === "Report");
  const opinion = mine.filter((a) => a.type === "Opinion" || a.type === "Analysis");
  const paragraphs = String(s.author_bio || "").split(/\n{2,}/).filter(Boolean);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: s.author_name,
    jobTitle: s.author_role,
    worksFor: { "@type": "NewsMediaOrganization", name: "AL-HAQQ" },
  };

  return (
    <div className="wrap">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <section className="author-hero">
        <div className="portrait">
          {s.author_portrait ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={s.author_portrait} alt={`Portrait of ${s.author_name}`} />
          ) : (
            <div className="portrait__empty" role="img" aria-label="Portrait placeholder">
              <div style={{ textAlign: "center" }}>AF<div style={{ fontFamily: "var(--f-body)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", marginTop: 6 }}>Portrait to be added</div></div>
            </div>
          )}
        </div>
        <div>
          <div className="kicker">Founder &amp; Editor</div>
          <h1>{s.author_name}</h1>
          <p className="author-hero__role">{s.author_role}</p>
          <div className="author-hero__bio">
            {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <div className="kicker" style={{ color: "var(--ink)", marginTop: 8 }}>Journalism interests</div>
          <ul className="interests">
            {(s.author_interests || []).map((t) => <li key={t} className="chip">{t}</li>)}
          </ul>
          <div className="actions">
            <Link className="btn" href="/contact?type=letter">Write to the editor</Link>
            <Link className="btn btn--ghost" href="/contact?type=tip">Share information</Link>
            {s.contact_email && <a className="btn btn--ghost" href={`mailto:${s.contact_email}`}>Email</a>}
          </div>
        </div>
      </section>

      {investigations.length > 0 && (
        <section className="section">
          <SectionHead title="Investigations & Reporting" />
          <div className="grid grid--3 grid--ruled">
            {investigations.map((a) => <Card key={a.id} a={a} size="sm" />)}
          </div>
        </section>
      )}

      {opinion.length > 0 && (
        <section className="section">
          <SectionHead title="Opinion & Analysis" />
          <div className="grid grid--3 grid--ruled">
            {opinion.map((a) => <Card key={a.id} a={a} size="sm" />)}
          </div>
        </section>
      )}

      <section className="section" style={{ paddingBottom: 56 }}>
        <SectionHead title="All Published Articles" />
        <div style={{ display: "grid", gap: 20, maxWidth: 820, margin: "0 auto" }}>
          {mine.length ? mine.map((a) => <ListCard key={a.id} a={a} />) : <p className="empty">No articles published yet.</p>}
        </div>
      </section>
    </div>
  );
}
