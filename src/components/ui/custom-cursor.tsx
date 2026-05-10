'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only on pointer-fine (mouse) devices
    if (window.matchMedia('(pointer: coarse)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mx = -200;
    let my = -200;
    let rx = -200;
    let ry = -200;
    let rafId = 0;

    function onMove(e: MouseEvent) {
      mx = e.clientX;
      my = e.clientY;
    }

    function tick() {
      // Dot follows cursor directly (instant)
      dot!.style.transform = `translate(${mx - 4}px, ${my - 4}px)`;

      // Ring lerps behind the dot
      rx += (mx - rx) * 0.13;
      ry += (my - ry) * 0.13;
      ring!.style.transform = `translate(${rx - 16}px, ${ry - 16}px)`;

      rafId = requestAnimationFrame(tick);
    }

    document.addEventListener('mousemove', onMove);
    document.body.style.cursor = 'none';
    dot.style.opacity = '1';
    ring.style.opacity = '1';
    rafId = requestAnimationFrame(tick);

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId);
      document.body.style.cursor = '';
    };
  }, []);

  return (
    <>
      {/* Dot — snappy, red */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className="bg-red pointer-events-none fixed top-0 left-0 z-[9999] h-2 w-2 rounded-full opacity-0"
        style={{ willChange: 'transform' }}
      />
      {/* Ring — lerp, navy outline */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className="border-navy/30 pointer-events-none fixed top-0 left-0 z-[9998] h-8 w-8 rounded-full border opacity-0"
        style={{ willChange: 'transform' }}
      />
    </>
  );
}
