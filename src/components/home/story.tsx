// Story — brand outro. Minimal: keep-exploring line + Instagram handle.

export default function Story() {
  return (
    <section
      id="story"
      className="bg-cream-dark w-full px-6 md:px-10"
      style={{ paddingTop: '14vh', paddingBottom: '14vh' }}
      aria-labelledby="story-heading"
    >
      <div className="mx-auto max-w-3xl">
        {/* Eyebrow */}
        <p className="text-navy/50 mb-8 font-mono text-[11px] tracking-[0.28em] uppercase">
          ◆ FROM THE FIELD
        </p>

        {/* Headline — display, large */}
        <h2
          id="story-heading"
          className="font-display text-navy mb-8 leading-none tracking-tight"
          style={{ fontSize: 'clamp(42px, 6.5vw, 76px)' }}
        >
          Keep exploring.
        </h2>

        {/* Instagram handle */}
        <a
          href="https://instagram.com/scout.brewing"
          target="_blank"
          rel="noopener noreferrer"
          className="text-navy hover:text-red inline-flex items-center gap-2 font-mono text-[14px] tracking-[0.14em] uppercase transition-colors duration-200"
        >
          @scout.brewing ↗
        </a>

        {/* Decorative rule */}
        <div className="bg-navy/15 mt-14 h-px w-16" />
      </div>
    </section>
  );
}
