import { redirect } from "next/navigation";
import { isEditor } from "@/lib/auth";
import LoginForm from "./LoginForm";

export default async function LoginPage() {
  if (await isEditor()) redirect("/admin");
  return (
    <div style={{ maxWidth: 420, margin: "48px auto" }}>
      <div className="panel">
        <div className="kicker">Restricted</div>
        <h1 style={{ fontFamily: "var(--f-head)", fontSize: 32, margin: "6px 0 18px" }}>Editor sign-in</h1>
        <LoginForm />
      </div>
    </div>
  );
}
