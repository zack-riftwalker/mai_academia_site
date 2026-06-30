import Link from "next/link";

export default function Navbar() {
  return (
    <header className="glass-panel fixed top-0 z-50 w-full !rounded-none border-b border-[var(--color-primary-neon)]/20">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link href="/" className="text-main text-glow text-xl font-bold">
            آکادمی مایا
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-muted hover:text-primary-neon transition-colors"
          >
            صفحه اصلی
          </Link>
          <Link
            href="/products"
            className="text-muted hover:text-primary-neon transition-colors"
          >
            محصولات
          </Link>
          <Link
            href="/about"
            className="text-muted hover:text-primary-neon transition-colors"
          >
            درباره ما
          </Link>
        </nav>

        {/* Action Button */}
        <div className="flex items-center">
          <button className="hover:neon-glow-secondary rounded-lg border border-[var(--color-primary-neon)]/40 px-6 py-2.5 transition-all duration-300">
            پشتیبانی
          </button>
        </div>
      </div>
    </header>
  );
}
