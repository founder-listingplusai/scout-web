'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  /** Pixels to slide up from. Default 36. */
  y?: number;
  /** Extra delay in seconds. Default 0. */
  delay?: number;
  /** Start trigger point. Default 'top 88%'. */
  start?: string;
}

export default function ScrollReveal({
  children,
  className,
  y = 36,
  delay = 0,
  start = 'top 88%',
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const el = ref.current;
    const ctx = gsap.context(() => {
      gsap.from(el, {
        y,
        opacity: 0,
        duration: 1.0,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start,
          toggleActions: 'play none none none',
        },
      });
    }, el);

    return () => ctx.revert();
  }, [y, delay, start]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
