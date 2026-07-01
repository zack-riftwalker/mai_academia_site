import Link from "next/link";

type ProductCardProps = {
  title: string;
  subtitle: string;
  features: string[];
  plan: "1-year" | "18-month";
  highlighted?: boolean;
  badge?: string;
};

export default function ProductCard({
  title,
  subtitle,
  features,
  plan,
  highlighted = false,
  badge,
}: ProductCardProps) {
  return (
    <article className="glass-panel relative flex h-full flex-col overflow-hidden p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(17,216,255,0.15)]">
      {badge && (
        <div className="absolute top-0 right-0 rounded-bl-xl bg-[var(--color-secondary-neon)] px-3 py-1 text-xs font-bold text-[#070B1A]">
          {badge}
        </div>
      )}

      <h3 className="text-main mb-2 text-2xl font-bold">{title}</h3>
      <p className="text-muted mb-6 text-sm">{subtitle}</p>

      <ul className="mb-8 flex-grow space-y-4">
        {features.map((feature) => (
          <li
            key={feature}
            className="text-main flex items-center text-sm before:ml-3 before:font-bold before:text-[var(--color-primary-neon)] before:content-['✓']"
          >
            {feature}
          </li>
        ))}
      </ul>

      <div className="mb-6 text-xl font-bold text-[var(--color-primary-neon)]">
        قیمت: استعلام
      </div>

      <Link
        href={`/order?plan=${plan}`}
        className={
          highlighted
            ? "neon-glow mt-auto w-full rounded-xl bg-[var(--color-primary-neon)] py-3 text-center font-bold text-[#070B1A] transition-colors hover:opacity-90"
            : "mt-auto w-full rounded-xl border border-[var(--color-primary-neon)] py-3 text-center font-bold text-[var(--color-primary-neon)] transition-colors hover:bg-[var(--color-primary-neon)] hover:text-[#070B1A]"
        }
      >
        سفارش و دریافت شماره کارت
      </Link>
    </article>
  );
}
