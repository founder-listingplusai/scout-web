// Story — brand origin section. Heritage editorial feel.
// Typography-driven; no image needed (logo keeps this clean).
// No motion in this phase — Phase 6 adds scroll choreography.

import Image from 'next/image';

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

        {/* Logo mark — restrained, anchors the section without overpowering */}
        <div className="mb-10 flex items-center gap-5">
          <Image
            src="/brand/scout-logo.png"
            alt="Scout Brewing & Co. — compass badge"
            width={72}
            height={72}
            className="rounded-full opacity-90"
          />
          <div>
            <p className="font-display text-navy text-[22px] leading-none tracking-tight">SCOUT</p>
            <p className="text-navy/50 mt-0.5 font-mono text-[9px] tracking-[0.2em] uppercase">
              Brewing &amp; Co · Melbourne
            </p>
          </div>
        </div>

        {/* Headline — display, large */}
        <h2
          id="story-heading"
          className="font-display text-navy mb-12 leading-none tracking-tight"
          style={{ fontSize: 'clamp(42px, 6.5vw, 76px)' }}
        >
          Compass true.
          <br />
          Beer truer.
        </h2>

        {/* Body — Inter sans, 3 short paragraphs */}
        <div className="space-y-6" style={{ maxWidth: '58ch' }}>
          <p
            className="text-navy/80 font-sans leading-relaxed"
            style={{ fontSize: 'clamp(15px, 1.05vw, 18px)' }}
          >
            Scout Brewing &amp; Co. started where most good things start: a kitchen, a problem, and
            too many friends willing to help solve it. We wanted a lager that didn&rsquo;t have to
            apologise for itself.
          </p>

          <p
            className="text-navy/80 font-sans leading-relaxed"
            style={{ fontSize: 'clamp(15px, 1.05vw, 18px)' }}
          >
            We brew small batches in a tin shed in Melbourne&rsquo;s inner north. We don&rsquo;t
            have a brewery dog. We don&rsquo;t have an IPA. We have two beers and a pretty firm
            opinion about how cold they should be served.
          </p>

          <p
            className="text-navy/80 font-sans leading-relaxed"
            style={{ fontSize: 'clamp(15px, 1.05vw, 18px)' }}
          >
            Find a pint at our taproom in Collingwood, or sign up below to be the first to know when
            we&rsquo;re ready to ship cases to your door.
          </p>
        </div>

        {/* Decorative rule */}
        <div className="bg-navy/15 mt-14 h-px w-16" />
      </div>
    </section>
  );
}
