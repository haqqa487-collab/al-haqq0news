import Link from "next/link";
export default function NotFound() {
  return (
    <div className="wrap">
      <header className="page-head" style={{ borderBottom: 0 }}>
        <div className="kicker">Error 404</div>
        <h1>This page could not be found.</h1>
        <p>It may have been moved, or the address may be mistyped.</p>
        <p style={{ marginTop: 24 }}><Link className="btn" href="/">Return to the front page</Link></p>
      </header>
    </div>
  );
}
