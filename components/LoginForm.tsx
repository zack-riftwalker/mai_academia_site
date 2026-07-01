"use client";

import { useActionState } from "react";
import { login, type LoginFormState } from "@/lib/auth";

const initialState: LoginFormState = {};

export default function LoginForm() {
  const [state, formAction, pending] = useActionState(login, initialState);

  return (
    <form
      action={formAction}
      className="glass-panel flex w-full max-w-sm flex-col gap-6 p-8"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="password" className="text-main text-sm font-bold">
          رمز عبور
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          autoFocus
          className="text-main rounded-lg border border-[var(--color-primary-neon)]/30 bg-transparent px-4 py-3 outline-none focus:border-[var(--color-primary-neon)]"
        />
      </div>

      {state.error && (
        <p className="text-sm text-red-400" role="alert">
          {state.error}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="neon-glow rounded-xl bg-[var(--color-primary-neon)] px-8 py-3 font-bold text-[#070B1A] transition-all hover:brightness-110 disabled:opacity-60"
      >
        {pending ? "در حال ورود..." : "ورود"}
      </button>
    </form>
  );
}
