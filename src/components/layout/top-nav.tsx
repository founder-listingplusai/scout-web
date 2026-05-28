'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function TopNav() {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 h-14 md:h-[72px] bg-cream/80 backdrop-blur-md" role="banner">
      {/* Subtle bottom border — faint navy rule */}
      <div className="border-navy/10 flex h-full items-center border-b px-6 md:px-10">
        {/* Three-column grid */}
        <div className="grid w-full grid-cols-3 items-center gap-4">

          {/* Left — Logo + Wordmark */}
          <Link href="/" className="flex items-center group cursor-pointer focus:outline-none select-none justify-self-start">
            <motion.svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-navy mr-2.5 shrink-0"
              whileHover="hover"
            >
              {/* Compass outer ring - rotates on hover */}
              <motion.circle
                cx="12"
                cy="12"
                r="9.5"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeDasharray="3 3"
                variants={{
                  hover: { rotate: 90 }
                }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              />
              {/* Diamond needle - scale pulse on hover */}
              <motion.path
                d="M12 4L14.5 12L12 20L9.5 12L12 4Z"
                fill="currentColor"
                variants={{
                  hover: { scaleY: 1.15, scaleX: 0.85 }
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              />
              {/* Center point - electric red accent */}
              <circle cx="12" cy="12" r="1.5" fill="var(--color-red)" />
            </motion.svg>

            <div className="flex flex-col justify-center">
              <span className="font-display text-navy text-[13px] leading-none tracking-tight md:text-[15px] group-hover:text-red transition-colors duration-200">
                SCOUT
              </span>
              <span className="text-navy/55 mt-0.5 font-mono text-[9px] tracking-[0.18em] uppercase md:text-[10px]">
                Brewing &amp; Co
              </span>
            </div>
          </Link>

          {/* Centre — anchor links */}
          <nav
            className="flex items-center justify-center gap-5 md:gap-7"
            aria-label="Site navigation"
          >
            <Link
              href="/#lager"
              className="text-navy/70 hover:text-navy font-mono text-[10px] tracking-[0.12em] uppercase transition-colors duration-200 focus-visible:outline-none"
            >
              Lager
            </Link>
            <Link
              href="/#lowcarb"
              className="text-navy/70 hover:text-navy font-mono text-[10px] tracking-[0.12em] uppercase transition-colors duration-200 focus-visible:outline-none"
            >
              Low Carb
            </Link>
            <Link
              href="/#story"
              className="text-navy/70 hover:text-navy font-mono text-[10px] tracking-[0.12em] uppercase transition-colors duration-200 focus-visible:outline-none"
            >
              Story
            </Link>
          </nav>

          {/* Right — 18+ */}
          <div className="flex items-center justify-end gap-5">
            <span
              className="border-navy/30 text-navy/50 hidden items-center rounded-sm border px-1.5 py-0.5 font-mono text-[9px] tracking-[0.1em] uppercase md:flex select-none"
              aria-label="18 years and over only"
            >
              18+
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
