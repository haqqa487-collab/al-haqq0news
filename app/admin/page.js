import Link from "next/link";
import { requireEditor } from "@/lib/auth";
import { getAllForAdmin } from "@/lib/content";
import { get } from "@/lib/db";
import { makeLead, toggleStatus } from "@/lib/admin-actions";
import { formatDate } from "@/lib/format";
import { sectionBySlug } from "@/lib/sections";

export default async function Dashboard({ searchParams }) {
  await requireEditor();
  const sp = await searchParams;
  const articles = await getAllForAdmin();
  const subs = (await get("SELECT COUNT(*) n FROM subscribers")).n;
  const unread = (await get("SELECT COUNT(*) n FROM messages WHERE read = 0")).n;
  const now = new Date().toISOString();

  return (
    <>
      <div className="actions" style={{ justifyContent: "space-between" }}>
        <div>
          <h1>Articles</h1>
          <p className="meta">Write, edit, schedule and publish. The lead story is the one marked &ldquo;Lead&rdquo;.</p>
        </div>
        <Link className="btn" href="/admin/articles/new">+ New article</Link>
      </div>
      {sp.deleted && <div className="flash">Article deleted.</div>}
      {sp.lead && <div className="flash">Lead story changed. The front page now leads with it.</div>}

      <div className="stat-row">
        <div className="stat"><b>{articles.filter((a) => a.status === "published").length}</b><span>Published</span></div>
        <div className="stat"><b>{articles.filter((a) => a.status === "draft").length}</b><span>Drafts</span></div>
        <div className="stat"><b>{subs}</b><span>Subscribers</span></div>
        <div className="stat"><b>{unread}</b><span><Link href="/admin/messages" className="link">Unread messages</Link></span></div>
      </div>

      <div className="table-wrap">
        <table className="table">
          <thead>
            <tr><th>Headline</th><th>Section</th><th>Status</th><th>Date</th><th>Actions</th></tr>
          </thead>
          <tbody>
            {articles.map((a) => (
              <tr key={a.id}>
                <td style={{ minWidth: 280 }}>
                  <Link href={`/admin/articles/${a.id}`} style={{ fontFamily: "var(--f-head)", fontSize: 17, fontWeight: 600 }}>{a.title}</Link>
                  <div className="meta">{a.type} · {a.author}</div>
                </td>
                <td>{sectionBySlug(a.section)?.name}</td>
                <td>
                  <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
                    {a.status === "published" ? (
                      a.published_at > now ? <span className="badge badge--draft">Scheduled</span> : <span className="badge badge--pub">Published</span>
                    ) : (
                      <span className="badge badge--draft">Draft</span>
                    )}
                    {a.featured && <span className="badge badge--lead">Lead</span>}
                    {a.editors_pick && <span className="badge">Editor&rsquo;s pick</span>}
                  </div>
                </td>
                <td style={{ whiteSpace: "nowrap" }}>{formatDate(a.published_at)}</td>
                <td>
                  <div className="actions">
                    <Link className="btn btn--ghost btn--sm" href={`/admin/articles/${a.id}`}>Edit</Link>
                    <Link className="btn btn--ghost btn--sm" href={`/article/${a.slug}`} target="_blank">View</Link>
                    {!a.featured && (
                      <form action={makeLead}><input type="hidden" name="id" value={a.id} /><button className="btn btn--ghost btn--sm">Make lead</button></form>
                    )}
                    <form action={toggleStatus}><input type="hidden" name="id" value={a.id} /><button className="btn btn--ghost btn--sm">{a.status === "published" ? "Unpublish" : "Publish"}</button></form>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
