// Top nav — static, transparent. Scroll-driven styling added in Phase 6.
// Server Component — no interactivity needed at this phase.

export default function TopNav() {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 h-14 md:h-[72px]" role="banner">
      {/* Subtle bottom border — faint navy rule */}
      <div className="border-navy/10 flex h-full items-center border-b px-6 md:px-10">
        {/* Three-column grid */}
        <div className="grid w-full grid-cols-3 items-center gap-4">
          {/* Left — wordmark */}
          <div className="flex flex-col justify-center">
            <span className="font-display text-navy text-[13px] leading-none tracking-tight md:text-[15px]">
              SCOUT
            </span>
            <span className="text-navy/55 mt-0.5 font-mono text-[9px] tracking-[0.18em] uppercase md:text-[10px]">
              Brewing &amp; Co · Melbourne
            </span>
          </div>

          {/* Centre — anchor links */}
          <nav
            className="flex items-center justify-center gap-5 md:gap-7"
            aria-label="Site navigation"
          >
            <a
              href="#lager"
              className="text-navy/70 hover:text-navy font-mono text-[10px] tracking-[0.12em] uppercase transition-colors duration-200"
            >
              Lager
            </a>
            <a
              href="#lowcarb"
              className="text-navy/70 hover:text-navy font-mono text-[10px] tracking-[0.12em] uppercase transition-colors duration-200"
            >
              Low Carb
            </a>
            <a
              href="#story"
              className="text-navy/70 hover:text-navy font-mono text-[10px] tracking-[0.12em] uppercase transition-colors duration-200"
            >
              Story
            </a>
          </nav>

          {/* Right — notify + 18+ */}
          <div className="flex items-center justify-end gap-4">
            <a
              href="mailto:hello@scoutbrewing.com.au?subject=Notify+me+%E2%80%93+Scout+Brewing"
              className="text-navy/70 hover:text-navy font-mono text-[10px] tracking-[0.12em] uppercase transition-colors duration-200"
            >
              Notify me
            </a>
            <span
              className="border-navy/30 text-navy/50 hidden items-center rounded-sm border px-1.5 py-0.5 font-mono text-[9px] tracking-[0.1em] uppercase md:flex"
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
