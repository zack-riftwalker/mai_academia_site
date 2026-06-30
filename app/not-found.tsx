import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <div className="glass-panel text-main inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm">
        <span className="h-2 w-2 rounded-full bg-[var(--color-secondary-neon)]"></span>
        خطای ۴۰۴
      </div>

      <h1 className="text-glow text-main mt-6 mb-4 text-5xl font-bold md:text-7xl">
        صفحه پیدا نشد
      </h1>

      <p className="text-muted mb-10 max-w-xl text-lg">
        صفحه‌ای که دنبالش می‌گردید وجود ندارد یا جابه‌جا شده است.
      </p>

      <Link
        href="/"
        className="neon-glow rounded-xl bg-[var(--color-primary-neon)] px-8 py-3 font-bold text-[#070B1A] transition-all hover:brightness-110"
      >
        بازگشت به صفحه اصلی
      </Link>
    </main>
  );
}
