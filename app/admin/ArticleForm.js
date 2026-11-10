"use client";
import { useActionState, useState } from "react";
import { saveArticle } from "@/lib/admin-actions";
import { SECTIONS, ARTICLE_TYPES } from "@/lib/sections";

function toLocalInput(iso) {
  const d = iso ? new Date(iso) : new Date();
  const pad = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

export default function ArticleForm({ a }) {
  const [state, action, pending] = useActionState(saveArticle, null);
  const [heroSrc, setHeroSrc] = useState(a?.hero?.src || "");
  const ledger = (a?.ledger || []).map((l) => `${l.kind} | ${l.text}`).join("\n");
  const sources = (a?.sources || []).map((s) => [s.title, s.publisher, s.url, s.date].join(" | ")).join("\n");

  return (
    <form action={action}>
      {a?.id && <input type="hidden" name="id" value={a.id} />}
      <input type="hidden" name="status" value={a?.status || "draft"} />
      {state?.error && <div className="flash flash--err" role="alert">{state.error}</div>}

      <div className="panel">
        <h2>Headline and summary</h2>
        <div className="field">
          <label htmlFor="title">Headline</label>
          <input id="title" name="title" className="input" defaultValue={a?.title} required style={{ fontFamily: "var(--f-head)", fontSize: 22 }} />
        </div>
        <div className="field">
          <label htmlFor="dek">Subtitle (standfirst)</label>
          <textarea id="dek" name="dek" className="input" defaultValue={a?.dek} style={{ minHeight: 80 }} />
        </div>
        <div className="field-grid">
          <div className="field">
            <label htmlFor="kicker">Kicker</label>
            <input id="kicker" name="kicker" className="input" defaultValue={a?.kicker} placeholder="e.g. Sudan · One year on" />
          </div>
          <div className="field">
            <label htmlFor="slug">Web address (slug)</label>
            <input id="slug" name="slug" className="input" defaultValue={a?.slug} placeholder="Generated from the headline if left blank" />
          </div>
          <div className="field">
            <label htmlFor="section">Section</label>
            <select id="section" name="section" className="input" defaultValue={a?.section || "east-africa"}>
              {SECTIONS.map((s) => <option key={s.slug} value={s.slug}>{s.name}</option>)}
            </select>
          </div>
          <div className="field">
            <label htmlFor="type">Article type</label>
            <select id="type" name="type" className="input" defaultValue={a?.type || "Report"}>
              {ARTICLE_TYPES.map((t) => <option key={t}>{t}</option>)}
            </select>
            <small>Use &ldquo;Opinion&rdquo; or &ldquo;Analysis&rdquo; for argued pieces — readers see the label.</small>
          </div>
          <div className="field">
            <label htmlFor="tags">Topics (comma separated)</label>
            <input id="tags" name="tags" className="input" defaultValue={(a?.tags || []).join(", ")} placeholder="Kenya, Accountability, Governance" />
            <small>Country names link the article to the East Africa pages, e.g. Kenya, Somalia, Ethiopia, Sudan, South Sudan, Uganda, Tanzania.</small>
          </div>
          <div className="field">
            <label htmlFor="author">Author</label>
            <input id="author" name="author" className="input" defaultValue={a?.author || "Abdi Fatah"} />
          </div>
        </div>
      </div>

      <div className="panel">
        <h2>Photograph</h2>
        <p className="help">
          Use only photographs you have the right to publish: your own, or images whose licence permits reuse (for example
          Creative Commons images on Wikimedia Commons, or photos you have licensed from an agency). Always give the credit,
          licence and a caption that says when and where the photograph was taken. Leave the address empty to show a
          labelled placeholder.
        </p>
        <div className="field">
          <label htmlFor="hero_src">Image address (URL)</label>
          <input id="hero_src" name="hero_src" className="input" value={heroSrc} onChange={(e) => setHeroSrc(e.target.value)} placeholder="https://…" />
        </div>
        {heroSrc && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={heroSrc} alt="Preview" style={{ maxHeight: 220, marginBottom: 18, border: "1px solid var(--ink)" }} />
        )}
        <div className="field-grid">
          <div className="field"><label htmlFor="hero_credit">Photographer / credit</label><input id="hero_credit" name="hero_credit" className="input" defaultValue={a?.hero?.credit} /></div>
          <div className="field"><label htmlFor="hero_license">Licence</label><input id="hero_license" name="hero_license" className="input" defaultValue={a?.hero?.license} placeholder="e.g. CC BY-SA 4.0" /></div>
          <div className="field"><label htmlFor="hero_license_url">Licence link</label><input id="hero_license_url" name="hero_license_url" className="input" defaultValue={a?.hero?.licenseUrl} /></div>
          <div className="field"><label htmlFor="hero_source_url">Original source page</label><input id="hero_source_url" name="hero_source_url" className="input" defaultValue={a?.hero?.sourceUrl} /></div>
        </div>
        <div className="field"><label htmlFor="hero_alt">Alternative text (describes the image for blind readers)</label><input id="hero_alt" name="hero_alt" className="input" defaultValue={a?.hero?.alt} /></div>
        <div className="field"><label htmlFor="hero_caption">Caption</label><textarea id="hero_caption" name="hero_caption" className="input" defaultValue={a?.hero?.caption} style={{ minHeight: 80 }} /></div>
      </div>

      <div className="panel">
        <h2>Evidence Ledger</h2>
        <p className="help">
          One line per item, in the form <code>kind | text</code>. Kinds: <code>fact</code> (established),{" "}
          <code>official</code> (official statement), <code>allegation</code>, <code>unresolved</code>. Leave empty to hide the ledger.
        </p>
        <textarea name="ledger" aria-label="Evidence ledger" className="input" defaultValue={ledger} placeholder={"fact | The building collapsed on 23 October.\nofficial | The governor said the building had approval.\nallegation | …\nunresolved | Who allowed shops to open?"} />
      </div>

      <div className="panel">
        <h2>Article text</h2>
        <p className="help">
          Write in plain text. Leave a blank line between paragraphs. Start a line with <code>## </code> for a section
          heading. Start a line with <code>&gt; </code> for a pull quote, adding <code>— Name, Title</code> at the end to
          attribute it. Use <code>**bold**</code>, <code>*italic*</code> and <code>[link text](https://…)</code>.
        </p>
        <textarea name="body" aria-label="Article text" className="input" defaultValue={a?.body} required style={{ minHeight: 520, fontFamily: "ui-monospace, Consolas, monospace", fontSize: 14 }} />
      </div>

      <div className="panel">
        <h2>Sources</h2>
        <p className="help">One source per line: <code>Title | Publisher | https://link | Date</code></p>
        <textarea name="sources" aria-label="Sources" className="input" defaultValue={sources} />
      </div>

      <div className="panel">
        <h2>Publication</h2>
        <div className="field-grid">
          <div className="field">
            <label htmlFor="published_at">Publication date and time</label>
            <input id="published_at" name="published_at" type="datetime-local" className="input" defaultValue={toLocalInput(a?.published_at)} />
            <small>Set a future time to schedule the article; it appears automatically at that time.</small>
          </div>
          <div className="field">
            <label htmlFor="last_verified">Facts last verified on</label>
            <input id="last_verified" name="last_verified" type="date" className="input" defaultValue={a?.last_verified || ""} />
          </div>
        </div>
        <div className="field">
          <label htmlFor="update_note">Correction / update notice (shown at the top of the article and in the corrections log)</label>
          <textarea id="update_note" name="update_note" className="input" defaultValue={a?.update_note} style={{ minHeight: 70 }} />
        </div>
        <label className="check"><input type="checkbox" name="featured" defaultChecked={a?.featured} /> Lead story on the front page (replaces the current lead)</label>
        <label className="check"><input type="checkbox" name="editors_pick" defaultChecked={a?.editors_pick} /> Include in the Editor&rsquo;s Selection</label>
        <div className="actions" style={{ marginTop: 16 }}>
          <button className="btn" name="intent" value="publish" disabled={pending}>{a?.status === "published" ? "Save and keep published" : "Publish"}</button>
          <button className="btn btn--ghost" name="intent" value="draft" disabled={pending}>{a?.status === "published" ? "Unpublish and save as draft" : "Save draft"}</button>
          {pending && <span className="meta">Saving…</span>}
        </div>
      </div>
    </form>
  );
}
