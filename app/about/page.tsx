import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "درباره ما | آکادمی مایا",
  description:
    "آکادمی مایا، مرجع دسترسی به اکانت‌های پرمیوم هوش مصنوعی با تحویل سریع و پشتیبانی اختصاصی.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col pt-24">
        <section className="mx-auto flex w-full max-w-4xl flex-col items-center px-4 py-20 text-center">
          <h1 className="text-glow text-main mb-6 text-4xl font-bold md:text-6xl">
            درباره{" "}
            <span className="text-[var(--color-primary-neon)]">
              آکادمی مایا
            </span>
          </h1>
          <p className="text-muted mb-16 max-w-2xl text-lg leading-relaxed">
            آکادمی مایا با هدف فراهم‌کردن دسترسی ساده و پایدار به ابزارهای هوش
            مصنوعی برای کاربران فارسی‌زبان فعالیت می‌کند.
          </p>

          <div className="grid w-full grid-cols-1 gap-6 text-right md:grid-cols-2">
            <div className="glass-panel p-6">
              <h2 className="text-main mb-2 text-xl font-bold">
                دسترسی پایدار
              </h2>
              <p className="text-muted text-sm leading-relaxed">
                اکانت‌ها با IP های معتبر تنظیم می‌شوند تا دسترسی شما به Gemini
                Advanced بدون قطعی و بدون نگرانی از محدودیت‌های منطقه‌ای برقرار
                بماند.
              </p>
            </div>

            <div className="glass-panel p-6">
              <h2 className="text-main mb-2 text-xl font-bold">تحویل سریع</h2>
              <p className="text-muted text-sm leading-relaxed">
                پس از ثبت سفارش از طریق پشتیبانی تلگرام، اطلاعات اکانت شما در
                سریع‌ترین زمان ممکن ارسال می‌شود.
              </p>
            </div>

            <div className="glass-panel p-6 md:col-span-2">
              <h2 className="text-main mb-2 text-xl font-bold">
                پشتیبانی اختصاصی
              </h2>
              <p className="text-muted text-sm leading-relaxed">
                تیم پشتیبانی ما در تلگرام پاسخگوی سوالات شما پیش و پس از خرید
                است؛ از نحوه‌ی فعال‌سازی اکانت تا رفع مشکلات احتمالی در طول
                دوره‌ی استفاده.
              </p>
            </div>
          </div>

          <a
            href="https://t.me/maiposhtibani"
            target="_blank"
            rel="noopener noreferrer"
            className="neon-glow mt-16 rounded-xl bg-[var(--color-primary-neon)] px-8 py-3 font-bold text-[#070B1A] transition-all hover:brightness-110"
          >
            گفتگو با پشتیبانی
          </a>
        </section>

        {/* FAQ Section */}
        <section className="mx-auto flex w-full max-w-4xl flex-col items-center px-4 py-20">
          <h2 className="text-main mb-12 text-3xl font-bold md:text-4xl">
            سوالات{" "}
            <span className="text-[var(--color-primary-neon)]">متداول</span>
          </h2>

          <div className="flex w-full flex-col gap-4 text-right">
            <div className="glass-panel p-6">
              <h3 className="text-main mb-2 font-bold">
                اکانت چگونه تحویل داده می‌شود؟
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                پس از ثبت سفارش از طریق پشتیبانی تلگرام، اطلاعات اکانت در
                سریع‌ترین زمان ممکن برای شما ارسال می‌شود.
              </p>
            </div>

            <div className="glass-panel p-6">
              <h3 className="text-main mb-2 font-bold">روش پرداخت چیست؟</h3>
              <p className="text-muted text-sm leading-relaxed">
                پرداخت به‌صورت کارت‌به‌کارت انجام می‌شود؛ شماره کارت را پس از
                هماهنگی از طریق پشتیبانی تلگرام دریافت می‌کنید.
              </p>
            </div>

            <div className="glass-panel p-6">
              <h3 className="text-main mb-2 font-bold">
                آیا دسترسی در طول مدت اشتراک قطع می‌شود؟
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                اکانت‌ها با IP های معتبر تنظیم می‌شوند تا دسترسی شما بدون قطعی
                برقرار بماند.
              </p>
            </div>

            <div className="glass-panel p-6">
              <h3 className="text-main mb-2 font-bold">
                قیمت پلن‌ها چقدر است؟
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                برای استعلام قیمت به‌روز هر پلن، از طریق پشتیبانی تلگرام با ما
                در ارتباط باشید.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
