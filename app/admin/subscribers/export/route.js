import { isEditor } from "@/lib/auth";
import { all } from "@/lib/db";

export async function GET() {
  if (!(await isEditor())) return new Response("Unauthorised", { status: 401 });
  const rows = await all("SELECT email, created_at FROM subscribers ORDER BY created_at");
  const csv = ["email,subscribed_at", ...rows.map((r) => `"${r.email.replace(/"/g, '""')}",${r.created_at}`)].join("\n");
  return new Response(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": 'attachment; filename="alhaqq-subscribers.csv"',
    },
  });
}
