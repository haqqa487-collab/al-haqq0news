import Link from "next/link";
import { getLead, getEditorsPicks, getPublished, getSettings } from "@/lib/content";
import { Card, ListCard, Photo, Meta, Kicker, SectionHead } from "@/components/Cards";
import { NewsletterForm } from "@/components/Forms";
import { SECTIONS, slugify } from "@/lib/sections";

const EAST_AFRICA = ["Kenya", "Somalia", "Ethiopia", "Sudan", "South Sudan", "Uganda", "Tanzania", "Regional Security"];

function FeatureRow({ a }) {
  return (
    <article className="feature-row">
      <Link href={`/article/${a.slug}`} tabIndex={-1} aria-hidden="true">
        <Photo hero={a.hero} ratio="16 / 10" />
      </Link>
      <div className="card">
        <Kicker a={a} />
        <h3 className="headline card__title"><Link href={`/article/${a.slug}`}>{a.title}</Link></h3>
        <p className="dek" style={{ fontSize: 18 }}>{a.dek}</p>
        <Meta a={a} />
      </div>
    </article>
  );
}

function Empty({ children }) {
  return <p className="empty">{children}</p>;
}

export default async function Home() {
  const all = await getPublished({ limit: 200 });
  const lead = await getLead();
  const settings = await getSettings();

  if (!lead) {
    return (
      <div className="wrap section">
        <Empty>The first edition of AL-HAQQ is being prepared. Please return soon.</Empty>
      </div>
    );
  }

  const others = all.filter((a) => a.id !== lead.id);
  const picks = await getEditorsPicks([lead.id], 4);
  const eastAfrica = all.filter((a) => a.section === "east-africa" || a.tags.some((t) => EAST_AFRICA.includes(t)));
  const investigations = all.filter((a) => a.section === "investigations" || a.type === "Investigation");
  const conflict = all.filter((a) => a.section === "conflict");
  const international = all.filter((a) => a.section === "international");
  const opinion = all.filter((a) => a.section === "opinion" || a.type === "Analysis" || a.type === "Opinion");
  const sec = Object.fromEntries(SECTIONS.map((s) => [s.slug, s]));

  return (
    <>
      {/* A. Lead story */}
      <section className="lead" aria-labelledby="lead-title">
        <div className="wrap lead__grid">
          <article className="lead__text">
            <Link href={`/article/${lead.slug}`} tabIndex={-1} aria-hidden="true">
              <Photo hero={lead.hero} ratio="16 / 10" priority />
            </Link>
            <Kicker a={lead} />
            <h1 id="lead-title" className="headline lead__title">
              <Link href={`/article/${lead.slug}`}>{lead.title}</Link>
            </h1>
            <p className="dek lead__dek">{lead.dek}</p>
            <div className="byline meta">
              By <Link href="/author/abdi-fatah"><strong>{lead.author}</strong></Link> · {lead.readingTime} min read ·{" "}
              {lead.type}
            </div>
          </article>
          <aside className="lead__side" aria-label="Also on the front page">
            <h3>Also in this edition</h3>
            {others.slice(0, 4).map((a) => (
              <ListCard key={a.id} a={a} />
            ))}
          </aside>
        </div>
      </section>

      {/* C. Editor's selection */}
      {picks.length > 0 && (
        <section className="picks" aria-labelledby="picks-h">
          <div className="wrap">
            <div className="section-head"><h2 id="picks-h">The Editor&rsquo;s Selection</h2></div>
            <p className="picks__note">The investigations and analysis Abdi Fatah considers essential reading this week.</p>
            <div className="grid grid--4 grid--ruled">
              {picks.map((a, i) => (
                <div key={a.id} style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  <span className="picks__num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                  <Card a={a} size="sm" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* D. East Africa */}
      <section className="section" aria-label="East Africa">
        <div className="wrap">
          <SectionHead title="East Africa" href="/section/east-africa" sub={sec["east-africa"].description} />
          <div className="region__countries">
            {EAST_AFRICA.map((c) => (
              <Link key={c} className="chip" href={`/topic/${slugify(c)}`}>{c === "Regional Security" ? "Diplomacy & Security" : c}</Link>
            ))}
          </div>
          {eastAfrica.length ? (
            <div className="region">
              <Card a={eastAfrica[0]} size="lg" ratio="16 / 10" />
              <div className="region__list">
                {eastAfrica.slice(1, 5).map((a) => <ListCard key={a.id} a={a} />)}
              </div>
            </div>
          ) : (
            <Empty>East Africa reporting will appear here.</Empty>
          )}
        </div>
      </section>

      {/* E. Investigations */}
      <section className="investigations" aria-label="Investigations">
        <div className="wrap">
          <SectionHead title="Investigations" href="/section/investigations" sub="Accountability journalism: corruption, governance, human rights and institutional failure." />
          {investigations.length ? (
            <div className="investigations__grid">
              <div className="investigations__feature"><Card a={investigations[0]} size="lg" ratio="16 / 9" /></div>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {investigations.slice(1, 4).map((a) => <ListCard key={a.id} a={a} />)}
                <div className="investigations__principle">
                  &ldquo;Every AL-HAQQ investigation separates what is established from what is alleged, what officials
                  claim, and what remains unanswered.&rdquo;
                  <div className="meta" style={{ marginTop: 10, fontStyle: "normal" }}>
                    <Link href="/editorial-standards" className="link">Read our editorial standards →</Link>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <Empty>Investigations will appear here.</Empty>
          )}
        </div>
      </section>

      {/* F. Conflict & humanitarian */}
      <section className="section" aria-label="Conflict and humanitarian affairs">
        <div className="wrap">
          <SectionHead title="Conflict & Humanitarian Affairs" href="/section/conflict" sub={sec.conflict.description} more="All conflict reporting" />
          {conflict.length ? (
            <div className="region">
              <Card a={conflict[0]} size="lg" ratio="16 / 10" />
              <div className="stack">
                {conflict.slice(1, 4).map((a, i) =>
                  i === 0 ? <Card key={a.id} a={a} dek={false} ratio="16 / 9" /> : <ListCard key={a.id} a={a} />
                )}
              </div>
            </div>
          ) : (
            <Empty>Conflict reporting will appear here.</Empty>
          )}
        </div>
      </section>

      {/* G. International affairs */}
      <section className="section" aria-label="International affairs">
        <div className="wrap">
          <SectionHead title="International Affairs" href="/section/international" sub={sec.international.description} />
          {international.length === 1 ? (
            <FeatureRow a={international[0]} />
          ) : international.length ? (
            <div className="grid grid--3 grid--ruled">
              {international.slice(0, 3).map((a) => <Card key={a.id} a={a} />)}
            </div>
          ) : (
            <Empty>International affairs coverage will appear here.</Empty>
          )}
        </div>
      </section>

      {/* H. Opinion & analysis */}
      <section className="section" aria-label="Opinion and analysis">
        <div className="wrap">
          <SectionHead title="Opinion & Analysis" href="/section/opinion" />
          <div className="opinion">
            <div className="opinion__author">
              <div className="portrait">
                {settings.author_portrait ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={settings.author_portrait} alt="Portrait of Abdi Fatah" />
                ) : (
                  <div className="portrait__empty" aria-label="Portrait placeholder">AF</div>
                )}
              </div>
              <div className="kicker">From the editor</div>
              <h3 className="headline" style={{ fontSize: 30 }}>Abdi Fatah</h3>
              <p className="dek" style={{ fontSize: 16 }}>{settings.author_short_bio}</p>
              <Link href="/author/abdi-fatah" className="link meta">All writing by Abdi Fatah →</Link>
            </div>
            <div className="opinion__list">
              {opinion.length ? (
                opinion.slice(0, 4).map((a) => (
                  <article key={a.id} className="opinion__item">
                    <div className="kicker">{a.type}</div>
                    <h3 className="headline"><Link href={`/article/${a.slug}`}>{a.title}</Link></h3>
                    <p className="dek" style={{ fontSize: 16, marginTop: 8 }}>{a.dek}</p>
                    <Meta a={a} showAuthor={false} />
                  </article>
                ))
              ) : (
                <Empty>Essays and analysis will appear here.</Empty>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* I. Latest */}
      <section className="section" aria-label="Latest stories">
        <div className="wrap">
          <SectionHead title="Latest Stories" />
          <div className="latest">
            {all.slice(0, 8).map((a) => <Card key={a.id} a={a} size="sm" />)}
          </div>
        </div>
      </section>

      {/* J. Newsletter */}
      <section className="newsletter" id="newsletter" aria-labelledby="nl-h">
        <div className="wrap newsletter__inner">
          <div>
            <div className="kicker">The AL-HAQQ Dispatch</div>
            <h2 id="nl-h">Investigations and analysis, delivered when they matter.</h2>
            <p>
              Receive AL-HAQQ&rsquo;s most important investigations and analysis by email — written by Abdi Fatah, with
              the evidence behind every claim. No advertising. No noise.
            </p>
          </div>
          <NewsletterForm />
        </div>
      </section>
    </>
  );
}
