import Link from "next/link";
import { isEditor } from "@/lib/auth";
import { logout } from "@/lib/admin-actions";

export const metadata = { title: "Editor's Desk", robots: { index: false, follow: false } };

export default async function AdminLayout({ children }) {
  const signedIn = await isEditor();
  return (
    <>
      <div className="admin-bar">
        <div className="wrap">
          <Link href="/admin" className="admin-brand">AL-HAQQ <span style={{ fontFamily: "var(--f-body)", fontWeight: 400, fontSize: 12, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--gold)" }}>Editor&rsquo;s Desk</span></Link>
          {signedIn && (
            <nav aria-label="Admin">
              <Link href="/admin">Articles</Link>
              <Link href="/admin/articles/new">New article</Link>
              <Link href="/admin/messages">Messages</Link>
              <Link href="/admin/subscribers">Subscribers</Link>
              <Link href="/admin/settings">Settings</Link>
              <Link href="/" target="_blank">View site ↗</Link>
              <form action={logout}><button style={{ background: "none", border: 0, color: "inherit", cursor: "pointer", letterSpacing: ".08em", textTransform: "uppercase", fontSize: 12, padding: 0 }}>Sign out</button></form>
            </nav>
          )}
        </div>
      </div>
      <main id="main" className="admin-main"><div className="wrap">{children}</div></main>
    </>
  );
}
