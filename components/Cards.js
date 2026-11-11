import Link from "next/link";
import { formatDate } from "@/lib/format";
import { sectionBySlug } from "@/lib/sections";

export function Photo({ hero, ratio = "3 / 2", caption = false, priority = false, sizes }) {
  const has = hero && hero.src;
  return (
    <figure className="photo">
      <div className="photo__frame" style={{ "--ratio": ratio }}>
        {has ? (
          // Plain <img> so the editor can use any licensed image URL without code changes.
          // eslint-disable-next-line @next/next/no-img-element
          <img src={hero.src} alt={hero.alt || ""} loading={priority ? "eager" : "lazy"} fetchPriority={priority ? "high" : "auto"} sizes={sizes} />
        ) : (
          <div className="placeholder" role="img" aria-label="Image placeholder — no licensed photograph selected">
            <div><span>الحق</span>Photograph to be added</div>
          </div>
        )}
      </div>
      {caption && has && (
        <figcaption>
          {hero.caption}{" "}
          <span className="photo__credit">
            Photo: {hero.credit}
            {hero.license && (
              <>
                {" · "}
                {hero.licenseUrl ? (
                  <a href={hero.licenseUrl} target="_blank" rel="noopener noreferrer license">{hero.license}</a>
                ) : (
                  hero.license
                )}
              </>
            )}
            {hero.sourceUrl && (
              <>
                {" · "}
                <a href={hero.sourceUrl} target="_blank" rel="noopener noreferrer">Source</a>
              </>
            )}
          </span>
        </figcaption>
      )}
    </figure>
  );
}

// The editor's portrait, or an engraved monogram until a photograph is added in Admin → Settings.
export function Portrait({ src, name = "Abdi Fatah", label, className = "" }) {
  const initials = name.split(/\s+/).map((w) => w[0]).join("").slice(0, 2).toUpperCase();
  return (
    <div className={`portrait ${src ? "" : "portrait--monogram"} ${className}`}>
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={`Portrait of ${name}`} />
      ) : (
        <div className="monogram" role="img" aria-label={`${name} monogram`}>
          <span className="monogram__initials">{initials}</span>
          {label && <span className="monogram__label">{label}</span>}
        </div>
      )}
    </div>
  );
}

export function Meta({ a, showAuthor = true }) {
  return (
    <div className="meta">
      {showAuthor && (
        <>
          By <strong>{a.author}</strong> ·{" "}
        </>
      )}
      <time dateTime={a.published_at}>{formatDate(a.published_at)}</time> · {a.readingTime} min read
    </div>
  );
}

export function Kicker({ a }) {
  const sec = sectionBySlug(a.section);
  return (
    <div className="kicker">
      {a.kicker || sec?.name}
    </div>
  );
}

export function Card({ a, size = "md", image = true, dek = true, ratio }) {
  const href = `/article/${a.slug}`;
  return (
    <article className={`card card--${size}`}>
      {image && (
        <Link href={href} tabIndex={-1} aria-hidden="true">
          <Photo hero={a.hero} ratio={ratio || "3 / 2"} />
        </Link>
      )}
      <Kicker a={a} />
      <h3 className="headline card__title">
        <Link href={href}>{a.title}</Link>
      </h3>
      {dek && <p className="dek card__dek">{a.dek}</p>}
      <Meta a={a} />
    </article>
  );
}

export function ListCard({ a, image = true }) {
  const href = `/article/${a.slug}`;
  return (
    <article className="card card--list">
      {image && (
        <Link href={href} className="card__thumb" tabIndex={-1} aria-hidden="true">
          <Photo hero={a.hero} ratio="1 / 1" />
        </Link>
      )}
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <Kicker a={a} />
        <h3 className="headline card__title">
          <Link href={href}>{a.title}</Link>
        </h3>
        <Meta a={a} showAuthor={false} />
      </div>
    </article>
  );
}

export function SectionHead({ title, href, sub, more }) {
  return (
    <div className="section-head">
      <h2>{href ? <Link href={href}>{title}</Link> : title}</h2>
      {sub && <p className="section-head__sub">{sub}</p>}
      {more && href && (
        <Link className="section-head__more" href={href}>
          {more} →
        </Link>
      )}
    </div>
  );
}
