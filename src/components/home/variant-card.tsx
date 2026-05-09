import type { Variant } from '@/lib/products/data';

interface VariantCardProps {
  variant: Variant;
}

export default function VariantCard({ variant }: VariantCardProps) {
  const notifyHref = `mailto:hello@scoutbrewing.com.au?subject=${encodeURIComponent(variant.notifyEmailSubject)}`;

  return (
    <article className="w-[260px] max-w-full" aria-label={`${variant.name} — ${variant.style}`}>
      {/* Micro label: number · style · abv */}
      <p
        className="mb-2 font-mono text-[10px] tracking-[0.22em] uppercase"
        style={{ color: variant.accent }}
      >
        ◆ NO.&nbsp;{variant.number} · {variant.style} · {variant.abv} ABV
      </p>

      {/* Variant name */}
      <h2 className="font-display text-navy mb-1 text-[36px] leading-none tracking-tight">
        {variant.name.toUpperCase()}
      </h2>

      {/* Tagline — serif italic */}
      <p className="text-navy/65 mb-3 font-serif text-[14px] leading-snug italic">
        &ldquo;{variant.tagline}&rdquo;
      </p>

      {/* Volume */}
      <p className="text-navy/45 mb-4 font-mono text-[10px] tracking-[0.16em] uppercase">
        {variant.packSize} · case
      </p>

      {/* Notify CTA */}
      <a
        href={notifyHref}
        className="text-navy/60 group inline-flex items-center gap-1 font-mono text-[11px] tracking-[0.14em] uppercase"
      >
        <span
          className="transition-colors duration-200 group-hover:underline"
          style={
            {
              '--accent': variant.accent,
            } as React.CSSProperties
          }
        >
          Notify me
        </span>
        <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5">
          →
        </span>
      </a>
    </article>
  );
}
