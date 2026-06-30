export default function Footer() {
  return (
    <footer className="mt-20 w-full border-t border-[var(--color-primary-neon)]/20 bg-[var(--color-surface)]/30 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row">
        <div className="text-muted text-sm">
          © 2026 آکادمی مایا. تمامی حقوق محفوظ است.
        </div>
        <a
          href="https://t.me/maiposhtibani"
          target="_blank"
          rel="noopener noreferrer"
          className="text-main flex items-center gap-2 text-sm transition-colors hover:text-[var(--color-primary-neon)]"
        >
          <svg
            className="h-5 w-5 text-[var(--color-primary-neon)]"
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
          پشتیبانی تلگرام
        </a>
      </div>
    </footer>
  );
}
