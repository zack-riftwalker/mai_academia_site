import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col pt-24">
        {/* Hero Section */}
        <section className="relative flex min-h-[75vh] flex-col items-center justify-center px-4 text-center">
          {/* Radial Gradient Background Anchor */}
          <div className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-primary-neon)] opacity-10 blur-[8rem] md:h-[40rem] md:w-[40rem] md:blur-[10rem]"></div>

          {/* Top Badge (Micro-interaction) */}
          <div className="glass-panel text-main inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[var(--color-primary-neon)]"></span>
            نسل جدید ابزارهای هوش مصنوعی
          </div>

          {/* Main Headline (H1) */}
          <h1 className="text-glow text-main mt-6 mb-4 text-5xl leading-tight font-bold md:text-7xl">
            هوش مصنوعی، بدون محدودیت
          </h1>

          {/* Sub-headline (p) */}
          <p className="text-muted mb-10 max-w-2xl text-lg leading-relaxed md:text-xl">
            دسترسی فوری و تضمین‌شده به اکانت‌های پرمیوم Gemini Pro ویژه
            برنامه‌نویسان، دانشجویان و تولیدکنندگان محتوا.
          </p>

          {/* Call to Action (CTA) Group */}
          <div className="relative z-10 flex flex-col gap-4 sm:flex-row">
            {/* Primary Button */}
            <Link
              href="/products"
              className="neon-glow rounded-xl bg-[var(--color-primary-neon)] px-8 py-3 font-bold text-[#070B1A] transition-all hover:brightness-110"
            >
              مشاهده محصولات
            </Link>

            {/* Secondary Button */}
            <a
              href="https://t.me/maiposhtibani"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel text-main hover:neon-glow-secondary rounded-xl px-8 py-3 font-medium transition-all hover:text-[var(--color-secondary-neon)]"
            >
              پشتیبانی تلگرام
            </a>
          </div>
        </section>

        {/* Products Teaser Section */}
        <section
          id="products"
          className="mx-auto flex w-full max-w-6xl flex-col items-center px-4 py-20 text-center"
        >
          <h2 className="text-main mb-4 text-3xl font-bold md:text-4xl">
            پلن‌های{" "}
            <span className="text-[var(--color-primary-neon)]">جمینای پرو</span>
          </h2>
          <p className="text-muted mb-8 max-w-2xl leading-relaxed">
            اکانت یک‌ساله و اکانت ۱۸ ماهه‌ی اقتصادی، با دسترسی نامحدود به Gemini
            Advanced و تحویل فوری.
          </p>
          <Link
            href="/products"
            className="rounded-xl border border-[var(--color-primary-neon)] px-8 py-3 font-bold text-[var(--color-primary-neon)] transition-colors hover:bg-[var(--color-primary-neon)] hover:text-[#070B1A]"
          >
            مشاهده همه‌ی پلن‌ها
          </Link>
        </section>

        {/* Features Section */}
        <section
          id="features"
          className="mx-auto flex w-full max-w-6xl flex-col items-center px-4 py-20"
        >
          <h2 className="text-main mb-12 text-center text-3xl font-bold md:text-4xl">
            چرا{" "}
            <span className="text-[var(--color-primary-neon)]">
              آکادمی مایا
            </span>
            ؟
          </h2>

          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
            {/* Feature 1 */}
            <div className="glass-panel p-6 text-center transition-all duration-300 hover:border-[var(--color-primary-neon)]">
              <div className="mb-4 flex justify-center">
                <svg
                  className="h-10 w-10 text-[var(--color-primary-neon)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-main text-xl font-bold">تحویل سریع و ایمن</h3>
              <p className="text-muted mt-2 text-sm leading-relaxed">
                اکانت شما در سریع‌ترین زمان ممکن و با امنیت کامل تحویل داده
                می‌شود.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="glass-panel p-6 text-center transition-all duration-300 hover:border-[var(--color-primary-neon)]">
              <div className="mb-4 flex justify-center">
                <svg
                  className="h-10 w-10 text-[var(--color-primary-neon)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-main text-xl font-bold">بدون قطعی و تحریم</h3>
              <p className="text-muted mt-2 text-sm leading-relaxed">
                دسترسی پایدار به هوش مصنوعی با IP های معتبر و بدون خطر مسدودی.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="glass-panel p-6 text-center transition-all duration-300 hover:border-[var(--color-primary-neon)]">
              <div className="mb-4 flex justify-center">
                <svg
                  className="h-10 w-10 text-[var(--color-primary-neon)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </div>
              <h3 className="text-main text-xl font-bold">پشتیبانی اختصاصی</h3>
              <p className="text-muted mt-2 text-sm leading-relaxed">
                تیم پشتیبانی ما در تلگرام همواره آماده پاسخگویی به مشکلات شماست.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
