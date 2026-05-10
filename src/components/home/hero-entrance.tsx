'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

/**
 * Wraps hero inner content and runs a staggered entrance timeline on mount.
 * Animates elements tagged with data-hero-* attributes.
 * No-ops when prefers-reduced-motion is set.
 */
export default function HeroEntrance({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const root = ref.current;
    const wordmark = root.querySelector<HTMLElement>('[data-hero-wordmark]');
    const bottle = root.querySelector<HTMLElement>('[data-hero-bottle]');
    const cards = root.querySelectorAll<HTMLElement>('[data-hero-card]');
    const scroll = root.querySelector<HTMLElement>('[data-hero-scroll]');

    const targets = [wordmark, bottle, ...Array.from(cards), scroll].filter(Boolean);

    const ctx = gsap.context(() => {
      // Start everything invisible (GSAP manages opacity, not CSS, to avoid flash)
      gsap.set(targets, { opacity: 0, y: 20 });

      const tl = gsap.timeline({ delay: 0.05 });

      // Wordmark first — the largest element anchors the composition
      tl.to(wordmark ?? [], { opacity: 1, y: 0, duration: 1.1, ease: 'power3.out' }, 0);

      // Bottle slightly after — feels like it rises from the wordmark
      tl.to(bottle ?? [], { opacity: 1, y: 0, duration: 1.3, ease: 'power3.out' }, 0.18);

      // Cards staggered — small, last, don't compete
      tl.to(
        Array.from(cards),
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.14, ease: 'power2.out' },
        0.55,
      );

      // Scroll indicator fades in last
      tl.to(scroll ?? [], { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, 1.1);
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className="contents">
      {children}
    </div>
  );
}
