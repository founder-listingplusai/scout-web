import TopNav from '@/components/layout/top-nav';
import Hero from '@/components/home/hero';

export default function Home() {
  return (
    <>
      <TopNav />
      <main>
        <Hero />

        {/* Phase 3b placeholder sections — anchors for nav links */}
        <section
          id="lager"
          className="bg-cream-dark flex min-h-[50vh] items-center justify-center"
          aria-label="Lager section — coming in Phase 3b"
        >
          <p className="text-navy/30 font-mono text-[11px] tracking-[0.2em] uppercase">
            Lager · Phase 3b
          </p>
        </section>

        <section
          id="lowcarb"
          className="bg-cream flex min-h-[50vh] items-center justify-center"
          aria-label="Low Carb section — coming in Phase 3b"
        >
          <p className="text-navy/30 font-mono text-[11px] tracking-[0.2em] uppercase">
            Low Carb · Phase 3b
          </p>
        </section>

        <section
          id="story"
          className="bg-cream-dark flex min-h-[50vh] items-center justify-center"
          aria-label="Story section — coming in Phase 3b"
        >
          <p className="text-navy/30 font-mono text-[11px] tracking-[0.2em] uppercase">
            Story · Phase 3b
          </p>
        </section>
      </main>
    </>
  );
}
