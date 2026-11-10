import { requireEditor } from "@/lib/auth";
import { all } from "@/lib/db";
import { removeSubscriber } from "@/lib/admin-actions";
import { formatDate } from "@/lib/format";

export default async function Subscribers() {
  await requireEditor();
  const rows = await all("SELECT * FROM subscribers ORDER BY created_at DESC");
  return (
    <>
      <div className="actions" style={{ justifyContent: "space-between" }}>
        <div>
          <h1>Newsletter subscribers</h1>
          <p className="meta">{rows.length} subscribers.</p>
        </div>
        <a className="btn" href="/admin/subscribers/export">Download CSV</a>
      </div>
      <p className="help" style={{ marginTop: 16 }}>
        <b>Sending the newsletter is not yet connected.</b> Sign-ups are stored securely here. To send emails, create an
        account with an email service (for example Buttondown, Mailchimp or Brevo), import this CSV, and send from there.
        A developer can later connect the service directly so that sign-ups sync automatically.
      </p>
      <div className="table-wrap">
        <table className="table">
          <thead>
            <tr><th>Email</th><th>Subscribed</th><th></th></tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id}>
                <td>{r.email}</td>
                <td>{formatDate(r.created_at)}</td>
                <td>
                  <form action={removeSubscriber}>
                    <input type="hidden" name="id" value={r.id} />
                    <button className="btn btn--danger btn--sm">Remove</button>
                  </form>
                </td>
              </tr>
            ))}
            {rows.length === 0 && (
              <tr><td colSpan={3} className="meta">No subscribers yet.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
