// Field Notes — editorial intro section immediately after the hero.
// Single-column, centered prose. Cream background, navy text.
// No motion in this phase — Phase 6 adds scroll choreography.

export default function FieldNotes() {
  return (
    <section
      id="field-notes"
      className="bg-cream w-full px-6 md:px-10"
      style={{ paddingTop: '13vh', paddingBottom: '13vh' }}
      aria-labelledby="field-notes-heading"
    >
      <div className="mx-auto max-w-2xl">
        {/* Eyebrow — mono uppercase, navy reduced opacity */}
        <p className="text-navy/50 mb-8 font-mono text-[11px] tracking-[0.28em] uppercase">
          ◆ FIELD NOTES NO.&nbsp;01
        </p>

        {/* Headline — display font, poster scale */}
        <h2
          id="field-notes-heading"
          className="font-display text-navy mb-10 leading-none tracking-tight"
          style={{ fontSize: 'clamp(44px, 7vw, 80px)' }}
        >
          Brewed for long afternoons.
        </h2>

        {/* Body — Source Serif 4 italic, two paragraphs */}
        <div className="space-y-6">
          <p
            className="text-navy/80 font-serif leading-relaxed italic"
            style={{ fontSize: 'clamp(17px, 1.25vw, 20px)' }}
          >
            We don&rsquo;t make beer to be discussed. We make beer to be drunk — at the cricket, on
            the deck, halfway through a long lunch that started before noon and ended somewhere near
            the harbour.
          </p>
          <p
            className="text-navy/80 font-serif leading-relaxed italic"
            style={{ fontSize: 'clamp(17px, 1.25vw, 20px)' }}
          >
            Two beers, one philosophy: get out of the way. The Lager is what a lager should be. The
            Low Carb is what your future self thanks you for picking. That&rsquo;s the entire menu.
          </p>
        </div>
      </div>
    </section>
  );
}
