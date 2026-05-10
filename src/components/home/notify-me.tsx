import NotifyForm from './notify-form';

export default function NotifyMe() {
  return (
    <section
      id="notify-me"
      className="bg-navy w-full px-6 md:px-10"
      style={{ paddingTop: '14vh', paddingBottom: '14vh' }}
      aria-labelledby="notify-heading"
    >
      <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
        {/* Eyebrow */}
        <p className="text-cream/50 mb-8 font-mono text-[11px] tracking-[0.28em] uppercase">
          ◆ FIELD DISPATCH
        </p>

        {/* Headline */}
        <h2
          id="notify-heading"
          className="text-cream font-display mb-6 leading-none tracking-tight"
          style={{ fontSize: 'clamp(40px, 6.5vw, 72px)' }}
        >
          Be first through the gate.
        </h2>

        {/* Subtext */}
        <p
          className="text-cream/65 mb-10 font-serif leading-relaxed italic"
          style={{ fontSize: 'clamp(16px, 1.2vw, 20px)', maxWidth: '44ch' }}
        >
          Cases ship to your door across Australia. Sign up and we&rsquo;ll let you know the moment
          we&rsquo;re ready to send them out.
        </p>

        {/* Pricing note */}
        <div className="mb-10 flex flex-wrap justify-center gap-4">
          {[
            { label: 'Lager', detail: '$89 AUD · case of 24' },
            { label: 'Low Carb', detail: '$79 AUD · case of 24' },
          ].map(({ label, detail }) => (
            <div
              key={label}
              className="border-cream/15 flex flex-col gap-0.5 border px-5 py-3 text-center"
              style={{ borderRadius: 2 }}
            >
              <span className="text-cream/45 font-mono text-[9px] tracking-[0.22em] uppercase">
                {label}
              </span>
              <span className="text-cream font-mono text-[12px] tracking-[0.08em]">{detail}</span>
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="w-full max-w-md">
          <NotifyForm />
        </div>

        {/* Fine print */}
        <p className="text-cream/30 mt-6 font-mono text-[10px] tracking-[0.14em] uppercase">
          No spam. Free shipping on 2+ cases.
        </p>
      </div>
    </section>
  );
}
