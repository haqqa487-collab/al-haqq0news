"use client";
import { useActionState } from "react";
import { saveSettings } from "@/lib/admin-actions";

function F({ name, label, s, help, area, ...rest }) {
  const value = Array.isArray(s[name]) ? s[name].join("\n") : s[name];
  return (
    <div className="field">
      <label htmlFor={name}>{label}</label>
      {area ? (
        <textarea id={name} name={name} className="input" defaultValue={value} {...rest} />
      ) : (
        <input id={name} name={name} className="input" defaultValue={value} {...rest} />
      )}
      {help && <small>{help}</small>}
    </div>
  );
}

export default function SettingsForm({ s }) {
  const [state, action, pending] = useActionState(saveSettings, null);
  return (
    <form action={action}>
      {state?.ok && <div className="flash" role="status">{state.ok}</div>}
      {state?.error && <div className="flash flash--err" role="alert">{state.error}</div>}
      <div className="panel">
        <h2>Editor profile</h2>
        <div className="field-grid">
          <F name="author_name" label="Name" s={s} />
          <F name="author_role" label="Position" s={s} />
        </div>
        <F name="author_short_bio" label="Short biography (shown under articles)" s={s} area style={{ minHeight: 90 }} />
        <F name="author_bio" label="Full biography (author page)" s={s} area help="Leave a blank line between paragraphs. Include only details you want to be public." style={{ minHeight: 220 }} />
        <F name="author_interests" label="Journalism interests (one per line)" s={s} area style={{ minHeight: 120 }} />
        <F name="author_portrait" label="Portrait image address" s={s} help="A link to a professional portrait (https://...) or /portrait.jpg if you place the file in the public folder. Leave empty for the placeholder." />
      </div>
      <div className="panel">
        <h2>Contact and social media</h2>
        <F name="contact_email" label="Public contact email (optional)" s={s} type="email" help="Shown on the contact and author pages. Messages from the contact form always arrive in Admin > Messages." />
        <div className="field-grid">
          <F name="social_x" label="X / Twitter URL" s={s} />
          <F name="social_facebook" label="Facebook URL" s={s} />
          <F name="social_linkedin" label="LinkedIn URL" s={s} />
          <F name="social_instagram" label="Instagram URL" s={s} />
          <F name="social_youtube" label="YouTube URL" s={s} />
        </div>
      </div>
      <button className="btn" disabled={pending}>{pending ? "Saving..." : "Save settings"}</button>
    </form>
  );
}
