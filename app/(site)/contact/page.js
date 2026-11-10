import { ContactForm } from "@/components/Forms";
import { getSettings } from "@/lib/content";

export const metadata = { title: "Contact the Editor", description: "Write to the editor of AL-HAQQ, report an error or share information." };

export default async function ContactPage({ searchParams }) {
  const { type } = await searchParams;
  const s = await getSettings();
  return (
    <div className="wrap">
      <header className="page-head">
        <div className="kicker">Correspondence</div>
        <h1>Contact the Editor</h1>
        <p>Letters, corrections, information and enquiries reach Abdi Fatah directly.</p>
      </header>
      <div className="page-body">
        <div className="help">
          <b>Letters to the editor</b> may be published, edited for length, with your name — tell us if you would prefer not.{" "}
          <b>Corrections</b> are reviewed by the editor under our corrections policy.{" "}
          <b>Sources</b>: if your safety could be at risk, do not include identifying details here; describe what you have
          and the editor will reply with a safer channel.
          {s.contact_email && <> You can also email <a className="link" href={`mailto:${s.contact_email}`}>{s.contact_email}</a>.</>}
        </div>
        <ContactForm initialKind={["letter", "correction", "tip"].includes(type) ? type : "general"} />
      </div>
    </div>
  );
}
