import Link from "next/link";
import { SECTIONS } from "@/lib/sections";
import { getSettings } from "@/lib/content";
import { Wordmark } from "@/components/Masthead";

const SOCIAL = [
  ["social_x", "X / Twitter"],
  ["social_facebook", "Facebook"],
  ["social_linkedin", "LinkedIn"],
  ["social_instagram", "Instagram"],
  ["social_youtube", "YouTube"],
];

export default async function Footer() {
  const s = await getSettings();
  const social = SOCIAL.filter(([k]) => s[k]);
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__grid">
          <div>
            <div className="footer__brand"><Wordmark /></div>
            <div className="footer__tag">The Truth. Beyond the Headlines.</div>
            <p className="footer__about">
              AL-HAQQ is an independent publication of investigative journalism and analysis, founded and edited by
              Abdi Fatah. We report on East Africa, African conflicts and international affairs — with evidence, with
              care, and without fear or favour.
            </p>
          </div>
          <div>
            <h3>Sections</h3>
            <ul>
              {SECTIONS.map((x) => (
                <li key={x.slug}><Link href={`/section/${x.slug}`}>{x.name}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3>The Publication</h3>
            <ul>
              <li><Link href="/about">About AL-HAQQ</Link></li>
              <li><Link href="/editorial-independence">Editorial Independence</Link></li>
              <li><Link href="/editorial-standards">Editorial Principles</Link></li>
              <li><Link href="/fact-checking">Fact-Checking Policy</Link></li>
              <li><Link href="/corrections">Corrections Policy</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3>Contact</h3>
            <ul>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/contact?type=letter">Write to the Editor</Link></li>
              <li><Link href="/contact?type=correction">Report an Error</Link></li>
              <li><Link href="/contact?type=tip">Share Information</Link></li>
              <li><Link href="/author/abdi-fatah">About the Editor</Link></li>
            </ul>
            {social.length > 0 && (
              <>
                <h3 style={{ marginTop: 22 }}>Follow</h3>
                <div className="footer__social">
                  {social.map(([k, label]) => (
                    <a key={k} href={s[k]} target="_blank" rel="noopener noreferrer">{label}</a>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} AL-HAQQ. All rights reserved. Photographs are credited to their owners and used under the licences stated.</span>
          <span>Editor: Abdi Fatah</span>
        </div>
      </div>
    </footer>
  );
}
