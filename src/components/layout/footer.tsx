// Footer — heritage compliance footer.
// Inverted: bg-ink / text-cream — the only dark section on the page.
// Layout: 4-column desktop, 2-column tablet, stacked mobile.

export default function Footer() {
  return (
    <footer className="bg-ink text-cream" role="contentinfo" aria-label="Site footer">
      {/* ─── MAIN GRID ─── */}
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-4 md:gap-8">
          {/* ─── COLUMN 1: Brand block ─── */}
          <div className="flex flex-col gap-3">
            {/* Wordmark */}
            <p className="font-display text-cream text-[32px] leading-none tracking-tight">SCOUT</p>
            <p className="text-cream/50 font-mono text-[10px] tracking-[0.2em] uppercase">
              Brewing &amp; Co. · Melbourne
            </p>
            {/* Tagline — serif italic */}
            <p className="text-cream/60 mt-2 font-serif text-[13px] leading-snug italic">
              &ldquo;Keep exploring.&rdquo;
            </p>
          </div>

          {/* ─── COLUMN 2: Navigate ─── */}
          <div className="flex flex-col gap-4">
            <p className="text-cream/40 font-mono text-[9px] tracking-[0.26em] uppercase">
              ◆ NAVIGATE
            </p>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2.5">
                {[
                  { href: '#lager', label: 'Lager' },
                  { href: '#lowcarb', label: 'Low Carb' },
                  { href: '#story', label: 'Story' },
                  {
                    href: 'mailto:scoutbrewingandco@gmail.com?subject=Notify+me+%E2%80%93+Scout+Brewing',
                    label: 'Notify me',
                  },
                ].map(({ href, label }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-cream/70 hover:text-cream font-mono text-[11px] tracking-[0.1em] uppercase transition-colors duration-200"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* ─── COLUMN 3: Find us ─── */}
          <div className="flex flex-col gap-4">
            <p className="text-cream/40 font-mono text-[9px] tracking-[0.26em] uppercase">
              ◆ FIND US
            </p>
            <address className="not-italic">
              <ul className="space-y-2.5">
                <li>
                  <a
                    href="mailto:scoutbrewingandco@gmail.com"
                    className="text-cream/70 hover:text-cream font-mono text-[11px] tracking-[0.06em] lowercase transition-colors duration-200"
                  >
                    scoutbrewingandco@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/scout.brewing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cream/70 hover:text-cream font-mono text-[11px] tracking-[0.1em] uppercase transition-colors duration-200"
                  >
                    @scout.brewing ↗
                  </a>
                </li>
              </ul>
            </address>
          </div>

          {/* ─── COLUMN 4: Fine print / compliance ─── */}
          <div className="flex flex-col gap-4">
            <p className="text-cream/40 font-mono text-[9px] tracking-[0.26em] uppercase">
              ◆ THE FINE PRINT
            </p>
            <ul className="space-y-2.5">
              <li className="text-cream/50 font-mono text-[10px]">
                {/* TODO: real ABN */}
                ABN 12 345 678 901
              </li>
              <li>
                <a
                  href="https://drinkwise.org.au"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/70 hover:text-cream font-mono text-[10px] tracking-[0.1em] uppercase transition-colors duration-200"
                >
                  DRINKWISE.ORG.AU ↗
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ─── BOTTOM BAND ─── */}
      <div className="border-cream/10 mx-auto max-w-7xl border-t px-6 py-6 md:px-10">
        <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
          {/* Left */}
          <p className="text-cream/40 font-mono text-[10px] tracking-[0.1em] uppercase">
            &copy; 2026 SCOUT BREWING &amp; CO.
          </p>

          {/* Centre — responsibility message */}
          <p className="text-cream/35 font-mono text-[9px] tracking-[0.14em] uppercase">
            BE A GOOD SCOUT — DRINK RESPONSIBLY.
          </p>

          {/* Right */}
          <p className="text-cream/35 font-mono text-[10px] tracking-[0.06em]">
            Made with care in Melbourne.
          </p>
        </div>
      </div>
    </footer>
  );
}
