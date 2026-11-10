import { requireEditor } from "@/lib/auth";
import { all } from "@/lib/db";
import { markMessage } from "@/lib/admin-actions";
import { formatDate } from "@/lib/format";

const KIND = { letter: "Letter to the editor", correction: "Correction request", tip: "Information / tip", general: "General" };

export default async function Messages() {
  await requireEditor();
  const rows = await all("SELECT * FROM messages ORDER BY created_at DESC");
  return (
    <>
      <h1>Messages</h1>
      <p className="meta" style={{ marginBottom: 20 }}>Messages sent through the contact form. Reply from your own email account.</p>
      {rows.length === 0 && <p className="empty">No messages yet.</p>}
      {rows.map((m) => (
        <div key={m.id} className="panel" style={{ opacity: m.read ? 0.7 : 1 }}>
          <div className="actions" style={{ justifyContent: "space-between" }}>
            <div>
              <span className="badge badge--lead">{KIND[m.kind] || m.kind}</span>{" "}
              {!m.read && <span className="badge badge--pub">New</span>}
              <h2 style={{ margin: "8px 0 2px" }}>{m.subject || "(no subject)"}</h2>
              <div className="meta">
                From <strong>{m.name}</strong> · <a className="link" href={`mailto:${m.email}`}>{m.email}</a> · {formatDate(m.created_at)}
              </div>
            </div>
            <div className="actions">
              <form action={markMessage}>
                <input type="hidden" name="id" value={m.id} />
                <button className="btn btn--ghost btn--sm">{m.read ? "Mark unread" : "Mark read"}</button>
              </form>
              <form action={markMessage}>
                <input type="hidden" name="id" value={m.id} />
                <input type="hidden" name="op" value="delete" />
                <button className="btn btn--danger btn--sm">Delete</button>
              </form>
            </div>
          </div>
          <p style={{ whiteSpace: "pre-wrap", marginBottom: 0 }}>{m.body}</p>
        </div>
      ))}
    </>
  );
}
