import { requireEditor } from "@/lib/auth";
import { getSettings } from "@/lib/content";
import SettingsForm from "./SettingsForm";

export default async function SettingsPage() {
  await requireEditor();
  return (
    <>
      <h1>Settings</h1>
      <p className="meta" style={{ marginBottom: 20 }}>
        Your public profile, contact details and social media links. Empty social links are hidden on the site.
      </p>
      <SettingsForm s={await getSettings()} />
    </>
  );
}
