import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 glass-panel !rounded-none border-b border-[var(--color-primary-neon)]/20">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link href="/" className="font-bold text-xl text-main text-glow">
            آکادمی مایا
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-muted hover:text-primary-neon transition-colors">
            صفحه اصلی
          </Link>
          <Link href="/products" className="text-muted hover:text-primary-neon transition-colors">
            محصولات
          </Link>
          <Link href="/about" className="text-muted hover:text-primary-neon transition-colors">
            درباره ما
          </Link>
        </nav>

        {/* Action Button */}
        <div className="flex items-center">
          <button className="px-6 py-2.5 rounded-lg border border-[var(--color-primary-neon)]/40 hover:neon-glow-secondary transition-all duration-300">
            پشتیبانی
          </button>
        </div>
      </div>
    </header>
  );
}
