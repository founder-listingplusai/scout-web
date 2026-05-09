export default function Home() {
  return (
    <main className="bg-cream text-navy flex min-h-screen flex-col items-center justify-center gap-3">
      <p className="text-navy/60 font-mono text-[11px] tracking-[0.2em] uppercase">
        Brewed in Melbourne · Est. 2024
      </p>
      <h1 className="font-display text-navy text-7xl leading-none tracking-tight md:text-9xl">
        SCOUT
      </h1>
      <p className="text-navy/55 font-mono text-[11px] tracking-[0.3em] uppercase">Brewing & Co.</p>
      <p className="text-navy/70 mt-8 max-w-md text-center font-serif text-base leading-relaxed italic">
        A no-nonsense Australian lager. Crisp, cold, classic — and dangerously drinkable.
      </p>
    </main>
  );
}
