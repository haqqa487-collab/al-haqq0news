"use client";
import { useActionState } from "react";
import { login } from "@/lib/admin-actions";

export default function LoginForm() {
  const [state, action, pending] = useActionState(login, null);
  return (
    <form action={action}>
      {state?.error && <div className="flash flash--err" role="alert">{state.error}</div>}
      <div className="field">
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" className="input" required autoComplete="current-password" autoFocus />
      </div>
      <button className="btn" disabled={pending} style={{ width: "100%" }}>{pending ? "Signing in…" : "Sign in"}</button>
    </form>
  );
}
