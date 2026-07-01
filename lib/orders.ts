"use server";

import { redirect } from "next/navigation";
import { supabaseAdmin } from "@/lib/supabase/server";

export type OrderFormState = {
  error?: string;
};

function generateOrderNumber() {
  const datePart = new Date().toISOString().slice(2, 10).replace(/-/g, "");
  const randomPart = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `MA-${datePart}-${randomPart}`;
}

export async function createOrder(
  _prevState: OrderFormState,
  formData: FormData,
): Promise<OrderFormState> {
  const customerName = String(formData.get("customer_name") ?? "").trim();
  const contact = String(formData.get("contact") ?? "").trim();
  const plan = String(formData.get("plan") ?? "");

  if (!customerName) {
    return { error: "لطفاً نام خود را وارد کنید." };
  }
  if (!contact) {
    return { error: "لطفاً شماره تماس یا آیدی تلگرام خود را وارد کنید." };
  }
  if (plan !== "1-year" && plan !== "18-month") {
    return { error: "لطفاً یک پلن معتبر انتخاب کنید." };
  }

  let orderNumber = "";
  for (let attempt = 0; attempt < 3; attempt++) {
    orderNumber = generateOrderNumber();
    const { error } = await supabaseAdmin.from("orders").insert({
      order_number: orderNumber,
      customer_name: customerName,
      contact,
      plan,
      status: "pending",
    });

    if (!error) {
      redirect(`/order/confirmation/${orderNumber}`);
    }

    if (error.code !== "23505") {
      return { error: "ثبت سفارش با خطا مواجه شد. لطفاً دوباره تلاش کنید." };
    }
  }

  return { error: "ثبت سفارش با خطا مواجه شد. لطفاً دوباره تلاش کنید." };
}
