import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col pt-24">
        {/* Hero Section */}
        <section className="relative min-h-[75vh] flex flex-col items-center justify-center text-center px-4">
          {/* Radial Gradient Background Anchor */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] md:w-[40rem] h-[30rem] md:h-[40rem] bg-[var(--color-primary-neon)] rounded-full blur-[8rem] md:blur-[10rem] opacity-10 pointer-events-none -z-10"></div>

          {/* Top Badge (Micro-interaction) */}
          <div className="glass-panel inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm text-main">
            <span className="w-2 h-2 rounded-full bg-[var(--color-primary-neon)] animate-pulse"></span>
            نسل جدید ابزارهای هوش مصنوعی
          </div>

          {/* Main Headline (H1) */}
          <h1 className="text-5xl md:text-7xl font-bold mt-6 mb-4 leading-tight text-glow text-main">
            هوش مصنوعی، بدون محدودیت
          </h1>

          {/* Sub-headline (p) */}
          <p className="text-lg md:text-xl text-muted max-w-2xl mb-10 leading-relaxed">
            دسترسی فوری و تضمین‌شده به اکانت‌های پرمیوم Gemini Pro ویژه برنامه‌نویسان، دانشجویان و تولیدکنندگان محتوا.
          </p>

          {/* Call to Action (CTA) Group */}
          <div className="flex flex-col sm:flex-row gap-4 relative z-10">
            {/* Primary Button */}
            <button className="bg-[var(--color-primary-neon)] text-[#070B1A] px-8 py-3 rounded-xl font-bold transition-all neon-glow hover:brightness-110">
              مشاهده محصولات
            </button>

            {/* Secondary Button */}
            <button className="glass-panel px-8 py-3 rounded-xl font-medium text-main hover:text-[var(--color-secondary-neon)] transition-all hover:neon-glow-secondary">
              پشتیبانی تلگرام
            </button>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="w-full max-w-6xl mx-auto px-4 py-20 flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-main">
            پلن‌های <span className="text-[var(--color-primary-neon)]">جمینای پرو</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
            {/* Card 1: Gemini Pro (1 Year) */}
            <article className="glass-panel p-8 flex flex-col h-full relative overflow-hidden hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(17,216,255,0.15)] transition-all duration-300">
              <h3 className="text-2xl font-bold text-main mb-2">اکانت یک‌ساله</h3>
              <p className="text-muted text-sm mb-6">دسترسی پایدار برای استفاده شخصی</p>
              
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-center text-main text-sm before:content-['✓'] before:text-[var(--color-primary-neon)] before:ml-3 before:font-bold">دسترسی نامحدود به Gemini Advanced</li>
                <li className="flex items-center text-main text-sm before:content-['✓'] before:text-[var(--color-primary-neon)] before:ml-3 before:font-bold">بدون قطعی و تحریم</li>
                <li className="flex items-center text-main text-sm before:content-['✓'] before:text-[var(--color-primary-neon)] before:ml-3 before:font-bold">تحویل فوری و تضمینی</li>
                <li className="flex items-center text-main text-sm before:content-['✓'] before:text-[var(--color-primary-neon)] before:ml-3 before:font-bold">پشتیبانی اختصاصی</li>
              </ul>
              
              <div className="text-xl font-bold text-[var(--color-primary-neon)] mb-6">قیمت: استعلام</div>
              
              <button className="w-full py-3 rounded-xl border border-[var(--color-primary-neon)] text-[var(--color-primary-neon)] hover:bg-[var(--color-primary-neon)] hover:text-[#070B1A] transition-colors font-bold mt-auto">
                سفارش و دریافت شماره کارت
              </button>
            </article>

            {/* Card 2: Gemini Pro (18 Months) */}
            <article className="glass-panel p-8 flex flex-col h-full relative overflow-hidden hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(17,216,255,0.15)] transition-all duration-300">
              <div className="absolute top-0 right-0 bg-[var(--color-secondary-neon)] text-[#070B1A] text-xs font-bold px-3 py-1 rounded-bl-xl">پیشنهاد ویژه</div>
              
              <h3 className="text-2xl font-bold text-main mb-2">اکانت ۱۸ ماهه (اقتصادی)</h3>
              <p className="text-muted text-sm mb-6">بهترین انتخاب برای برنامه‌نویسان و تیم‌ها</p>
              
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-center text-main text-sm before:content-['✓'] before:text-[var(--color-primary-neon)] before:ml-3 before:font-bold">دسترسی نامحدود به Gemini Advanced</li>
                <li className="flex items-center text-main text-sm before:content-['✓'] before:text-[var(--color-primary-neon)] before:ml-3 before:font-bold">بدون قطعی و تحریم</li>
                <li className="flex items-center text-main text-sm before:content-['✓'] before:text-[var(--color-primary-neon)] before:ml-3 before:font-bold">تحویل فوری و تضمینی</li>
                <li className="flex items-center text-main text-sm before:content-['✓'] before:text-[var(--color-primary-neon)] before:ml-3 before:font-bold">پشتیبانی اختصاصی</li>
              </ul>
              
              <div className="text-xl font-bold text-[var(--color-primary-neon)] mb-6">قیمت: استعلام</div>
              
              <button className="w-full py-3 rounded-xl bg-[var(--color-primary-neon)] text-[#070B1A] hover:opacity-90 transition-colors font-bold mt-auto neon-glow">
                سفارش و دریافت شماره کارت
              </button>
            </article>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full max-w-6xl mx-auto px-4 py-20 flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-main">
            چرا <span className="text-[var(--color-primary-neon)]">آکادمی مایا</span>؟
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {/* Feature 1 */}
            <div className="glass-panel p-6 text-center hover:border-[var(--color-primary-neon)] transition-all duration-300">
              <div className="flex justify-center mb-4">
                <svg className="w-10 h-10 text-[var(--color-primary-neon)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-main">تحویل سریع و ایمن</h3>
              <p className="text-muted text-sm mt-2 leading-relaxed">
                اکانت شما در سریع‌ترین زمان ممکن و با امنیت کامل تحویل داده می‌شود.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="glass-panel p-6 text-center hover:border-[var(--color-primary-neon)] transition-all duration-300">
              <div className="flex justify-center mb-4">
                <svg className="w-10 h-10 text-[var(--color-primary-neon)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-main">بدون قطعی و تحریم</h3>
              <p className="text-muted text-sm mt-2 leading-relaxed">
                دسترسی پایدار به هوش مصنوعی با IP های معتبر و بدون خطر مسدودی.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="glass-panel p-6 text-center hover:border-[var(--color-primary-neon)] transition-all duration-300">
              <div className="flex justify-center mb-4">
                <svg className="w-10 h-10 text-[var(--color-primary-neon)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-main">پشتیبانی اختصاصی</h3>
              <p className="text-muted text-sm mt-2 leading-relaxed">
                تیم پشتیبانی ما در تلگرام همواره آماده پاسخگویی به مشکلات شماست.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Minimal Footer */}
      <footer className="w-full border-t border-[var(--color-primary-neon)]/20 mt-20 backdrop-blur-md bg-[var(--color-surface)]/30">
        <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-muted text-sm">
            © 2026 آکادمی مایا. تمامی حقوق محفوظ است.
          </div>
          <a href="#" className="text-main hover:text-[var(--color-primary-neon)] transition-colors text-sm flex items-center gap-2">
            <svg className="w-5 h-5 text-[var(--color-primary-neon)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
            پشتیبانی تلگرام
          </a>
        </div>
      </footer>
    </>
  );
}
