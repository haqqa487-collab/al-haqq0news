import Link from "next/link";
import { Card } from "@/components/Cards";
import { ARTICLE_TYPES } from "@/lib/sections";

// A filterable archive grid. Filters are plain links (?type=...), so they work without JavaScript.
export default function ArchiveList({ articles, basePath, activeType, emptyText = "No articles yet." }) {
  const types = ARTICLE_TYPES.filter((t) => articles.some((a) => a.type === t));
  const shown = activeType ? articles.filter((a) => a.type === activeType) : articles;
  return (
    <>
      {types.length > 1 && (
        <nav className="tabs-row" aria-label="Filter by article type">
          <Link className="chip" href={basePath} aria-current={!activeType ? "page" : undefined}>All</Link>
          {types.map((t) => (
            <Link key={t} className="chip" href={`${basePath}?type=${encodeURIComponent(t)}`} aria-current={activeType === t ? "page" : undefined}>
              {t}
            </Link>
          ))}
        </nav>
      )}
      <div className="section">
        {shown.length ? (
          <div className="latest">
            {shown.map((a) => <Card key={a.id} a={a} size="sm" />)}
          </div>
        ) : (
          <p className="empty">{emptyText}</p>
        )}
      </div>
    </>
  );
}
