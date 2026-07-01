import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "محصولات | آکادمی مایا",
  description:
    "پلن‌های اکانت پرمیوم Gemini Pro و Gemini Advanced با تحویل فوری.",
};

const sharedFeatures = [
  "دسترسی نامحدود به Gemini Advanced",
  "بدون قطعی و تحریم",
  "تحویل فوری و تضمینی",
  "پشتیبانی اختصاصی",
];

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col pt-24">
        <section className="mx-auto flex w-full max-w-6xl flex-col items-center px-4 py-20">
          <h1 className="text-glow text-main mb-4 text-center text-4xl font-bold md:text-6xl">
            پلن‌های{" "}
            <span className="text-[var(--color-primary-neon)]">جمینای پرو</span>
          </h1>
          <p className="text-muted mb-12 max-w-2xl text-center text-lg leading-relaxed">
            دسترسی فوری و تضمین‌شده به اکانت‌های پرمیوم Gemini Pro، ویژه
            برنامه‌نویسان، دانشجویان و تولیدکنندگان محتوا.
          </p>

          <div className="grid w-full max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
            <ProductCard
              title="اکانت یک‌ساله"
              subtitle="دسترسی پایدار برای استفاده شخصی"
              features={sharedFeatures}
              plan="1-year"
            />
            <ProductCard
              title="اکانت ۱۸ ماهه (اقتصادی)"
              subtitle="بهترین انتخاب برای برنامه‌نویسان و تیم‌ها"
              features={sharedFeatures}
              plan="18-month"
              badge="پیشنهاد ویژه"
              highlighted
            />
          </div>

          <p className="text-muted mt-12 max-w-2xl text-center text-sm leading-relaxed">
            برای استعلام قیمت و ثبت سفارش، از طریق دکمه‌ی هر پلن با پشتیبانی
            تلگرام ما در ارتباط باشید.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
