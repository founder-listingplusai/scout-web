export default function SkipLink() {
  return (
    <a
      href="#main-content"
      className="bg-red text-cream sr-only fixed top-4 left-4 z-[10000] px-4 py-2 font-mono text-[11px] font-bold tracking-[0.2em] uppercase focus:not-sr-only focus:outline-none"
      style={{ borderRadius: 2 }}
    >
      Skip to main content
    </a>
  );
}
