import Image from 'next/image';
import { VARIANTS } from '@/lib/products/data';
import VariantCard from './variant-card';
import BottleScene from './bottle-scene';
import HeroEntrance from './hero-entrance';

const lager = VARIANTS[0]!;
const lowcarb = VARIANTS[1]!;

// SVG noise pattern (data URI) — mix-blend-multiply, very low opacity
const NOISE_SVG = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`;

export default function Hero() {
  return (
    <>
      {/* ─── HERO SECTION ─── */}
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
            {/* ─── POSTER WORDMARK ─── */}
            <h1
              id="hero-wordmark"
              data-hero-wordmark
              className="font-display text-navy pointer-events-none relative z-0 text-center leading-none tracking-tight select-none"
              style={{ fontSize: 'clamp(80px, 22vw, 320px)' }}
              aria-label="Scout Brewing &amp; Co."
            >
              SCOUT
            </h1>

            {/* ─── BOTTLE: WebGL on desktop (with static fallback), image on mobile ─── */}
            <div
              data-hero-bottle
              className="pointer-events-none absolute bottom-[14%] left-1/2 z-20 hidden -translate-x-1/2 md:flex md:items-end md:justify-center"
            >
              <BottleScene variant={lager} />
            </div>

            {/* Mobile: always static image */}
            <div
              className="pointer-events-none absolute bottom-[14%] left-1/2 z-20 block -translate-x-1/2 md:hidden"
              aria-hidden="true"
            >
              <Image
                src={lager.bottle}
                alt="Scout Lager — 330ml bottle"
                width={460}
                height={824}
                priority
                className="drop-shadow-[0_28px_56px_rgba(32,49,69,0.16)]"
                style={{ width: 'clamp(180px, 24vw, 400px)', height: 'auto' }}
              />
            </div>

            {/* ─── VARIANT CARDS — desktop absolute only ─── */}
            <div data-hero-card className="absolute bottom-[8vh] left-[6vw] z-30 hidden md:block">
              <VariantCard variant={lager} />
            </div>

            <div data-hero-card className="absolute top-[38vh] right-[5vw] z-30 hidden md:block">
              <VariantCard variant={lowcarb} />
            </div>
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

      {/* ─── MOBILE: variant cards in normal flow below hero ─── */}
      <div className="bg-cream border-navy/10 flex flex-col gap-10 border-t px-6 py-10 md:hidden">
        <VariantCard variant={lager} />
        <VariantCard variant={lowcarb} />
      </div>
    </>
  );
}
