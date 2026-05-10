// Variant Detail — per-variant editorial block. Used twice: Lager + Low Carb.
// Two-column on desktop (image | content), single-column on mobile.
// `reverse` flips column order for magazine-spread feel.
// No motion in this phase — Phase 6 adds scroll choreography.

import Image from 'next/image';
import type { Variant } from '@/lib/products/data';

interface VariantDetailProps {
  variant: Variant;
  reverse?: boolean;
}

export default function VariantDetail({ variant, reverse = false }: VariantDetailProps) {
  const styleWord = variant.style.split(' ')[0]?.toUpperCase() ?? variant.style.toUpperCase();

  return (
    <section
      id={variant.id}
      className="w-full"
      style={{ minHeight: '90vh' }}
      aria-labelledby={`${variant.id}-heading`}
    >
      <div
        className={`flex min-h-[90vh] flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''}`}
      >
        {/* ─── IMAGE COLUMN ─── */}
        {/* Accent-colored block with bottle image centered */}
        <div
          className="relative flex items-center justify-center md:w-1/2"
          style={{ backgroundColor: variant.accent, minHeight: '50vh' }}
        >
          {/* Subtle noise texture overlay */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-multiply"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
              backgroundSize: '256px 256px',
            }}
          />

          {/* Bottle image — aspect 3:4, centered, drop shadow */}
          <div className="relative z-10 px-12 py-16 md:px-16 md:py-20">
            <Image
              src={variant.moody}
              alt={`Scout ${variant.name} — 330ml bottle`}
              width={556}
              height={990}
              className="drop-shadow-[0_40px_80px_rgba(0,0,0,0.35)]"
              style={{
                width: 'clamp(160px, 18vw, 300px)',
                height: 'auto',
              }}
            />
          </div>
        </div>

        {/* ─── CONTENT COLUMN ─── */}
        <div className="bg-cream flex items-center md:w-1/2">
          <div className="px-8 py-14 md:px-[7vw] md:py-20">
            {/* Eyebrow */}
            <p
              className="mb-6 font-mono text-[10px] tracking-[0.3em] uppercase"
              style={{ color: variant.accent }}
            >
              ◆ NO.&nbsp;{variant.number}&nbsp;·&nbsp;{variant.origin.toUpperCase()}
            </p>

            {/* Variant name — display, poster scale */}
            <h2
              id={`${variant.id}-heading`}
              className="font-display text-navy mb-4 leading-none tracking-tight"
              style={{ fontSize: 'clamp(56px, 8vw, 100px)' }}
            >
              {variant.name}
            </h2>

            {/* Tagline — serif italic */}
            <p
              className="text-navy/70 mb-6 font-serif leading-snug italic"
              style={{ fontSize: 'clamp(17px, 1.4vw, 22px)' }}
            >
              &ldquo;{variant.tagline}&rdquo;
            </p>

            {/* Description — sans */}
            <p
              className="text-navy/75 mb-10 font-sans leading-relaxed"
              style={{ fontSize: 'clamp(15px, 1vw, 18px)', maxWidth: '36ch' }}
            >
              {variant.description}
            </p>

            {/* ─── SPECS ROW ─── 4-col desktop, 2×2 mobile */}
            <div className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-4">
              {(
                [
                  { label: 'ABV', value: variant.abv },
                  { label: 'IBU', value: String(variant.ibu) },
                  { label: 'STYLE', value: styleWord },
                  { label: 'PACK', value: '24×' },
                ] as { label: string; value: string }[]
              ).map(({ label, value }) => (
                <div key={label} className="flex flex-col gap-1">
                  <span className="font-mono text-[9px] tracking-[0.2em] uppercase opacity-50">
                    {label}
                  </span>
                  <span
                    className="font-display text-navy text-[22px] leading-none tracking-tight"
                    aria-label={`${label}: ${value}`}
                  >
                    {value}
                  </span>
                </div>
              ))}
            </div>

            {/* ─── TASTING NOTES + PAIRS — 2-col desktop, stacked mobile ─── */}
            <div className="mb-10 grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* Tasting Notes */}
              <div>
                <p
                  className="mb-3 font-mono text-[9px] tracking-[0.24em] uppercase"
                  style={{ color: variant.accent }}
                >
                  ◆ TASTING NOTES
                </p>
                <ul className="space-y-1.5">
                  {variant.tasting.map((note) => (
                    <li key={note} className="flex items-center gap-2">
                      <span
                        className="inline-block h-1 w-1 shrink-0 rounded-full"
                        style={{ backgroundColor: variant.accent }}
                        aria-hidden="true"
                      />
                      <span className="text-navy/80 font-sans text-[13px]">{note}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pairs With */}
              <div>
                <p
                  className="mb-3 font-mono text-[9px] tracking-[0.24em] uppercase"
                  style={{ color: variant.accent }}
                >
                  ◆ PAIRS WITH
                </p>
                <ul className="space-y-1.5">
                  {variant.pairs.map((pair) => (
                    <li key={pair} className="flex items-center gap-2">
                      <span
                        className="inline-block h-1 w-1 shrink-0 rounded-full"
                        style={{ backgroundColor: variant.accent }}
                        aria-hidden="true"
                      />
                      <span className="text-navy/80 font-sans text-[13px]">{pair}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ─── BREWING DETAIL ROW — Hops · Malt · Yeast ─── */}
            <div className="border-navy/10 grid grid-cols-2 gap-4 border-t pt-6 md:grid-cols-3">
              <div>
                <span className="text-navy/45 font-mono text-[9px] tracking-[0.18em] uppercase">
                  Hops:{' '}
                </span>
                <span className="text-navy/75 font-mono text-[9px]">{variant.hops}</span>
              </div>
              <div>
                <span className="text-navy/45 font-mono text-[9px] tracking-[0.18em] uppercase">
                  Malt:{' '}
                </span>
                <span className="text-navy/75 font-mono text-[9px]">{variant.malt}</span>
              </div>
              <div className="col-span-2 md:col-span-1">
                <span className="text-navy/45 font-mono text-[9px] tracking-[0.18em] uppercase">
                  Yeast:{' '}
                </span>
                <span className="text-navy/75 font-mono text-[9px]">{variant.yeast}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
