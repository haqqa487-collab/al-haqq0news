import "server-only";
import { marked } from "marked";

// Article bodies are written in Markdown by the editor.
// - "## Heading" creates a section heading
// - "> quote — Attribution" creates a pull quote
// - "**bold**", "*italic*", lists and [links](https://...) work as usual
// Raw HTML is escaped so the editor cannot accidentally break the page.

const renderer = new marked.Renderer();
renderer.html = ({ text }) => escapeHtml(text);
renderer.blockquote = function ({ tokens }) {
  const inner = this.parser.parse(tokens);
  const text = inner.replace(/<\/?p>/g, "").trim();
  const m = text.match(/^(.*?)\s+[—–-]\s+([^—–]+)$/s);
  if (m) {
    return `<figure class="pullquote"><blockquote>${m[1]}</blockquote><figcaption>${m[2]}</figcaption></figure>`;
  }
  return `<figure class="pullquote"><blockquote>${text}</blockquote></figure>`;
};
renderer.link = function ({ href, title, tokens }) {
  const text = this.parser.parseInline(tokens);
  const safe = /^(https?:|mailto:|\/|#)/i.test(href) ? href : "#";
  const ext = /^https?:/i.test(safe);
  return `<a href="${escapeHtml(safe)}"${title ? ` title="${escapeHtml(title)}"` : ""}${ext ? ' target="_blank" rel="noopener noreferrer"' : ""}>${text}</a>`;
};
renderer.image = () => "";

export function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
}

export function renderMarkdown(md) {
  return marked.parse(md || "", { renderer, gfm: true, breaks: false });
}

export function headingsOf(md) {
  return (md || "")
    .split("\n")
    .filter((l) => l.startsWith("## "))
    .map((l) => l.slice(3).trim());
}
