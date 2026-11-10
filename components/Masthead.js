import Link from "next/link";
import { SECTIONS } from "@/lib/sections";
import { todayLong } from "@/lib/format";

const NAV = [
  { href: "/", label: "Front Page" },
  ...SECTIONS.map((s) => ({ href: `/section/${s.slug}`, label: s.name.replace(" & Humanitarian", "") })),
  { href: "/author/abdi-fatah", label: "The Editor" },
];

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}

export function Wordmark() {
  return (
    <>
      AL<span className="hyphen">-</span>HAQQ
    </>
  );
}

export default function Masthead({ compact = false }) {
  return (
    <header>
      <div className="topbar">
        <div className="wrap">
          <span>{todayLong()}</span>
          <div className="topbar__links">
            <Link href="/about">About</Link>
            <Link href="/editorial-standards">Standards</Link>
            <Link href="/contact">Write to the Editor</Link>
            <Link href="/#newsletter">Newsletter</Link>
          </div>
        </div>
      </div>

      <div className={`masthead ${compact ? "masthead--compact" : ""}`}>
        <div className="wrap">
          <div className="masthead__title" role="banner">
            <Link href="/" aria-label="AL-HAQQ — front page">
              <Wordmark />
            </Link>
          </div>
          <p className="masthead__tagline">The Truth. Beyond the Headlines.</p>
        </div>
      </div>

      {!compact && (
        <div className="dateline">
          <div className="wrap">
            <span>Independent Journalism · Investigations · International Affairs</span>
            <span>Edited by Abdi Fatah</span>
          </div>
        </div>
      )}

      <nav className="nav" aria-label="Main">
        <div className="wrap">
          <Link href="/" className="nav__brand" aria-label="AL-HAQQ front page">
            <Wordmark />
          </Link>
          <ul className="nav__list nav__desktop">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link href={n.href}>{n.label}</Link>
              </li>
            ))}
          </ul>
          <details className="nav__menu nav__mobile">
            <summary aria-label="Open sections menu">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
              Sections
            </summary>
            <ul className="nav__list">
              {NAV.map((n) => (
                <li key={n.href}>
                  <Link href={n.href}>{n.label}</Link>
                </li>
              ))}
              <li><Link href="/search">Search</Link></li>
            </ul>
          </details>
          <Link href="/search" className="nav__search" aria-label="Search AL-HAQQ">
            <SearchIcon />
            <span className="nav__desktop">Search</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
