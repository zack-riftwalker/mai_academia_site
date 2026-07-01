import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OrderForm from "@/components/OrderForm";

export const metadata: Metadata = {
  title: "ثبت سفارش | آکادمی مایا",
  description: "فرم ثبت سفارش اکانت پرمیوم Gemini Pro.",
};

export default async function OrderPage({
  searchParams,
}: {
  searchParams: Promise<{ plan?: string }>;
}) {
  const { plan } = await searchParams;
  const defaultPlan = plan === "18-month" ? "18-month" : "1-year";

  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center px-4 pt-24">
        <section className="mx-auto flex w-full max-w-xl flex-col items-center py-20">
          <h1 className="text-glow text-main mb-4 text-center text-3xl font-bold md:text-5xl">
            ثبت سفارش
          </h1>
          <p className="text-muted mb-10 max-w-md text-center leading-relaxed">
            فرم زیر را تکمیل کنید. پس از ثبت، یک شماره سفارش دریافت می‌کنید و
            راهنمای پرداخت از طریق پشتیبانی تلگرام در اختیارتان قرار می‌گیرد.
          </p>

          <OrderForm defaultPlan={defaultPlan} />
        </section>
      </main>
      <Footer />
    </>
  );
}
