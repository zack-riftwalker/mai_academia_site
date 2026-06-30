"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <div className="glass-panel text-main inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm">
        <span className="h-2 w-2 rounded-full bg-[var(--color-secondary-neon)]"></span>
        خطای غیرمنتظره
      </div>

      <h1 className="text-glow text-main mt-6 mb-4 text-5xl font-bold md:text-7xl">
        مشکلی پیش آمد
      </h1>

      <p className="text-muted mb-10 max-w-xl text-lg">
        متأسفانه خطایی در بارگذاری این صفحه رخ داد. لطفاً دوباره تلاش کنید.
      </p>

      <button
        onClick={() => reset()}
        className="neon-glow rounded-xl bg-[var(--color-primary-neon)] px-8 py-3 font-bold text-[#070B1A] transition-all hover:brightness-110"
      >
        تلاش مجدد
      </button>
    </main>
  );
}
