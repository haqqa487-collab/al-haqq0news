"use client";
import { useActionState, useState } from "react";
import { subscribe, sendMessage } from "@/lib/public-actions";

export function NewsletterForm() {
  const [state, action, pending] = useActionState(subscribe, null);
  return (
    <form action={action} aria-label="Newsletter subscription">
      <label htmlFor="nl-email" className="sr-only">Email address</label>
      <div className="form-row">
        <input id="nl-email" className="input" type="email" name="email" required placeholder="Your email address" autoComplete="email" />
        <input type="text" name="website" tabIndex={-1} autoComplete="off" className="sr-only" aria-hidden="true" />
        <button className="btn btn--gold" disabled={pending}>{pending ? "Subscribing…" : "Subscribe"}</button>
      </div>
      <p className={`form-note ${state ? (state.ok ? "form-note--ok" : "form-note--err") : ""}`} role="status">
        {state?.message || "Free. No advertising. Unsubscribe at any time."}
      </p>
    </form>
  );
}

const LABELS = {
  letter: "Letter to the editor",
  correction: "Report an error or request a correction",
  tip: "Share information or documents",
  general: "General enquiry",
};

export function ContactForm({ initialKind = "general" }) {
  const [state, action, pending] = useActionState(sendMessage, null);
  const [kind, setKind] = useState(initialKind);
  if (state?.ok) return <div className="flash" role="status">{state.message}</div>;
  return (
    <form action={action}>
      {state && !state.ok && <div className="flash flash--err" role="alert">{state.message}</div>}
      <div className="field">
        <label htmlFor="kind">Purpose</label>
        <select id="kind" name="kind" className="input" value={kind} onChange={(e) => setKind(e.target.value)}>
          {Object.entries(LABELS).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
        </select>
        {kind === "tip" && (
          <small>
            Please do not send anything that could identify you if your safety is at risk. This form is not end-to-end
            encrypted. Describe what you have, and the editor will reply with a safer way to share it.
          </small>
        )}
      </div>
      <div className="field-grid">
        <div className="field">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" className="input" required autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" className="input" required autoComplete="email" />
        </div>
      </div>
      <div className="field">
        <label htmlFor="subject">Subject {kind === "correction" && "(article title or link)"}</label>
        <input id="subject" name="subject" className="input" />
      </div>
      <div className="field">
        <label htmlFor="body">Message</label>
        <textarea id="body" name="body" className="input" required />
      </div>
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="sr-only" aria-hidden="true" />
      <button className="btn" disabled={pending}>{pending ? "Sending…" : "Send to the editor"}</button>
    </form>
  );
}

export function ShareBar({ url, title }) {
  const [copied, setCopied] = useState(false);
  const u = encodeURIComponent(url);
  const t = encodeURIComponent(title);
  const links = [
    ["X", `https://twitter.com/intent/tweet?url=${u}&text=${t}`, "Share on X"],
    ["f", `https://www.facebook.com/sharer/sharer.php?u=${u}`, "Share on Facebook"],
    ["in", `https://www.linkedin.com/sharing/share-offsite/?url=${u}`, "Share on LinkedIn"],
    ["WhatsApp", `https://wa.me/?text=${t}%20${u}`, "Share on WhatsApp"],
    ["Email", `mailto:?subject=${t}&body=${u}`, "Share by email"],
  ];
  return (
    <div className="share">
      <span className="share__label">Share this article</span>
      <div className="share__row">
        {links.map(([label, href, aria]) => (
          <a key={label} className="share__btn" href={href} target="_blank" rel="noopener noreferrer" aria-label={aria}>{label}</a>
        ))}
        <button
          type="button"
          className="share__btn"
          onClick={async () => {
            try {
              if (navigator.share) await navigator.share({ title, url });
              else { await navigator.clipboard.writeText(url); setCopied(true); setTimeout(() => setCopied(false), 2000); }
            } catch {}
          }}
        >
          {copied ? "Copied" : "Copy link"}
        </button>
      </div>
    </div>
  );
}
