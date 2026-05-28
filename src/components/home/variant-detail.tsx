// Variant Detail — per-variant editorial block. Used twice: Premium Pale Lager + Low Carb.
// Two-column on desktop (image | content), single-column on mobile.
// `reverse` flips column order for magazine-spread feel.

'use client';

import Image from 'next/image';
import type { Variant } from '@/lib/products/data';

interface VariantDetailProps {
  variant: Variant;
  reverse?: boolean;
}

const INSTAGRAM_DM = 'https://ig.me/m/scout.brewing';

export default function VariantDetail({ variant, reverse = false }: VariantDetailProps) {
  const price = variant.id === 'lager' ? 52 : 55;

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
        {/* ─── IMAGE COLUMN — photo fills the accent panel ─── */}
        <div
          className="relative overflow-hidden md:w-1/2"
          style={{ backgroundColor: variant.accent, minHeight: '50vh' }}
        >
          <Image
            src={variant.moody}
            alt={`Scout ${variant.name} — 330ml bottle`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />

          {/* Subtle noise texture overlay */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-10 opacity-[0.04] mix-blend-multiply"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
              backgroundSize: '256px 256px',
            }}
          />
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

            {/* ─── SPECS ROW ─── */}
            <div className="mb-10 grid grid-cols-2 gap-4">
              {(
                [
                  { label: 'ABV', value: variant.abv },
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

            {/* Price + Instagram DM order link */}
            <div className="flex flex-col gap-4 border-t border-navy/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-navy font-mono text-[16px] font-bold">
                  ${price} AUD{' '}
                  <span className="text-navy/45 text-[11px] font-normal">/ CASE OF 24</span>
                </p>
                <p className="text-navy/40 mt-0.5 font-mono text-[9px] tracking-[0.08em] uppercase">
                  In stock · Free delivery for 3+ cases
                </p>
              </div>

              <a
                href={INSTAGRAM_DM}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-navy text-cream hover:bg-red inline-block px-8 py-4 text-center font-mono text-[10px] font-bold tracking-[0.16em] uppercase transition-colors duration-200 focus-visible:outline-none"
                style={{ borderRadius: 2 }}
              >
                DM on Instagram →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
