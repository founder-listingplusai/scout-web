import HeroEntrance from './hero-entrance';

// SVG noise pattern (data URI) — mix-blend-multiply, very low opacity
const NOISE_SVG = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`;

export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-cream relative min-h-screen w-full overflow-hidden"
      aria-labelledby="hero-wordmark"
    >
      {/* Noise / grain texture overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 opacity-[0.035] mix-blend-multiply"
        style={{ backgroundImage: NOISE_SVG, backgroundSize: '256px 256px' }}
      />

      <HeroEntrance>
        <div className="relative flex min-h-screen flex-col items-center justify-center pt-14 md:pt-[72px]">
          {/* ─── BRAND EMBLEM ─── */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            id="hero-wordmark"
            data-hero-wordmark
            src="/brand/scout-emblem.svg"
            alt="Scout Brewing &amp; Co."
            className="pointer-events-none relative z-0 select-none"
            style={{ width: 'clamp(380px, 72vw, 1000px)', height: 'auto' }}
          />
        </div>

        {/* ─── SCROLL INDICATOR ─── */}
        <div
          data-hero-scroll
          className="absolute bottom-6 left-1/2 z-30 -translate-x-1/2"
          aria-hidden="true"
        >
          <p className="text-navy/40 animate-pulse font-mono text-[9px] tracking-[0.22em] uppercase">
            ↓ scroll to discover
          </p>
        </div>
      </HeroEntrance>
    </section>
  );
}
