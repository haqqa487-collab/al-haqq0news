import { search, getAllTags } from "@/lib/content";
import { Card } from "@/components/Cards";
import Link from "next/link";
import { slugify } from "@/lib/sections";

export const metadata = { title: "Search", robots: { index: false } };

export default async function SearchPage({ searchParams }) {
  const { q = "" } = await searchParams;
  const query = String(q).slice(0, 120);
  const results = query ? await search(query) : [];
  const allTags = query ? [] : await getAllTags();
  return (
    <div className="wrap">
      <header className="page-head">
        <div className="kicker">Search the archive</div>
        <h1>Search AL-HAQQ</h1>
        <form className="searchbar" role="search" action="/search">
          <label htmlFor="q" className="sr-only">Search terms</label>
          <input id="q" className="input" name="q" defaultValue={query} placeholder="Search by place, person, institution or subject…" autoFocus />
          <button className="btn">Search</button>
        </form>
      </header>
      <div className="section">
        {query ? (
          <>
            <p className="meta" style={{ textAlign: "center", marginTop: -12, marginBottom: 28 }}>
              {results.length} {results.length === 1 ? "result" : "results"} for &ldquo;{query}&rdquo;
            </p>
            {results.length ? (
              <div className="latest">{results.map((a) => <Card key={a.id} a={a} size="sm" />)}</div>
            ) : (
              <p className="empty">Nothing matched your search. Try a country, an institution or a broader term.</p>
            )}
          </>
        ) : (
          <div className="region__countries">
            {allTags.map(([t]) => <Link key={t} className="chip" href={`/topic/${slugify(t)}`}>{t}</Link>)}
          </div>
        )}
      </div>
    </div>
  );
}
