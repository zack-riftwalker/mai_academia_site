import "server-only";
import { supabaseAdmin } from "@/lib/supabase/server";
import type { OrderPlan } from "@/lib/supabase/types";

const PLAN_LABELS: Record<OrderPlan, string> = {
  "1-year": "اکانت یک‌ساله",
  "18-month": "اکانت ۱۸ ماهه (اقتصادی)",
};

export async function getOrderByNumber(orderNumber: string) {
  const { data } = await supabaseAdmin
    .from("orders")
    .select("*")
    .eq("order_number", orderNumber)
    .maybeSingle();

  return data;
}

export function planLabel(plan: OrderPlan) {
  return PLAN_LABELS[plan];
}

export async function getAllOrders() {
  const { data } = await supabaseAdmin
    .from("orders")
    .select("*")
    .order("created_at", { ascending: false });

  return data ?? [];
}
