"use client";

import { useActionState } from "react";
import { createOrder, type OrderFormState } from "@/lib/orders";

const initialState: OrderFormState = {};

export default function OrderForm({
  defaultPlan,
}: {
  defaultPlan: "1-year" | "18-month";
}) {
  const [state, formAction, pending] = useActionState(
    createOrder,
    initialState,
  );

  return (
    <form
      action={formAction}
      className="glass-panel flex w-full flex-col gap-6 p-8"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="customer_name" className="text-main text-sm font-bold">
          نام و نام خانوادگی
        </label>
        <input
          id="customer_name"
          name="customer_name"
          type="text"
          required
          className="text-main rounded-lg border border-[var(--color-primary-neon)]/30 bg-transparent px-4 py-3 outline-none focus:border-[var(--color-primary-neon)]"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="contact" className="text-main text-sm font-bold">
          شماره تماس یا آیدی تلگرام
        </label>
        <input
          id="contact"
          name="contact"
          type="text"
          placeholder="مثلاً 09xxxxxxxxx یا @username"
          required
          className="text-main rounded-lg border border-[var(--color-primary-neon)]/30 bg-transparent px-4 py-3 outline-none focus:border-[var(--color-primary-neon)]"
        />
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-main text-sm font-bold">پلن</span>
        <div className="flex flex-col gap-3 sm:flex-row">
          <label className="glass-panel flex flex-1 cursor-pointer items-center gap-3 px-4 py-3 has-[:checked]:border-[var(--color-primary-neon)]">
            <input
              type="radio"
              name="plan"
              value="1-year"
              defaultChecked={defaultPlan === "1-year"}
              className="accent-[var(--color-primary-neon)]"
            />
            <span className="text-main text-sm">اکانت یک‌ساله</span>
          </label>
          <label className="glass-panel flex flex-1 cursor-pointer items-center gap-3 px-4 py-3 has-[:checked]:border-[var(--color-primary-neon)]">
            <input
              type="radio"
              name="plan"
              value="18-month"
              defaultChecked={defaultPlan === "18-month"}
              className="accent-[var(--color-primary-neon)]"
            />
            <span className="text-main text-sm">اکانت ۱۸ ماهه (اقتصادی)</span>
          </label>
        </div>
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
        {pending ? "در حال ثبت..." : "ثبت سفارش"}
      </button>
    </form>
  );
}
