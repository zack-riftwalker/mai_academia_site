import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getOrderByNumber, planLabel } from "@/lib/supabase/orders-data";

export default async function OrderConfirmationPage({
  params,
}: {
  params: Promise<{ orderNumber: string }>;
}) {
  const { orderNumber } = await params;
  const order = await getOrderByNumber(orderNumber);

  if (!order) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center px-4 pt-24 text-center">
        <section className="mx-auto flex w-full max-w-xl flex-col items-center py-20">
          <div className="glass-panel mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm">
            <span className="h-2 w-2 rounded-full bg-[var(--color-primary-neon)]"></span>
            سفارش ثبت شد
          </div>

          <h1 className="text-glow text-main mb-4 text-3xl font-bold md:text-5xl">
            {order.order_number}
          </h1>

          <p className="text-muted mb-10 max-w-md leading-relaxed">
            سفارش شما برای «{planLabel(order.plan)}» ثبت شد. برای پرداخت و
            دریافت شماره کارت، شماره سفارش بالا را برای پشتیبانی تلگرام ارسال
            کنید.
          </p>

          <a
            href="https://t.me/maiposhtibani"
            target="_blank"
            rel="noopener noreferrer"
            className="neon-glow rounded-xl bg-[var(--color-primary-neon)] px-8 py-3 font-bold text-[#070B1A] transition-all hover:brightness-110"
          >
            ارسال شماره سفارش به پشتیبانی
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
