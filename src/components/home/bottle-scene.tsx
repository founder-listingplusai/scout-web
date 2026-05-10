'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useSyncExternalStore } from 'react';
import type { Variant } from '@/lib/products/data';

// Load the R3F canvas only on the client — Three.js has no SSR path.
const BottleCanvas = dynamic(() => import('./bottle-canvas'), { ssr: false });

// ─── WebGL capability store ───────────────────────────────────────────────────
// Checks once on first subscribe (client-only); notifies via useSyncExternalStore.

let webGLSupported = false;
let checked = false;
const webGLListeners: Array<() => void> = [];

function checkWebGL() {
  if (checked) return;
  checked = true;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reducedMotion) return;
  try {
    const c = document.createElement('canvas');
    const gl = c.getContext('webgl2') ?? c.getContext('webgl');
    if (gl) {
      webGLSupported = true;
      queueMicrotask(() => webGLListeners.forEach((l) => l()));
    }
  } catch {
    // WebGL unavailable — static fallback
  }
}

function subscribeWebGL(cb: () => void) {
  webGLListeners.push(cb);
  checkWebGL();
  return () => {
    const i = webGLListeners.indexOf(cb);
    if (i !== -1) webGLListeners.splice(i, 1);
  };
}

const getWebGLSnapshot = () => webGLSupported;
const getWebGLServerSnapshot = () => false;

// ─── Component ────────────────────────────────────────────────────────────────

interface Props {
  variant: Variant;
}

export default function BottleScene({ variant }: Props) {
  const useWebGL = useSyncExternalStore(subscribeWebGL, getWebGLSnapshot, getWebGLServerSnapshot);

  if (!useWebGL) {
    return (
      <Image
        src={variant.bottle}
        alt={`Scout ${variant.name} — 330ml bottle`}
        width={460}
        height={824}
        priority
        className="drop-shadow-[0_28px_56px_rgba(32,49,69,0.16)]"
        style={{ width: 'clamp(180px, 24vw, 400px)', height: 'auto' }}
      />
    );
  }

  return (
    <div
      aria-label={`Scout ${variant.name} — 330ml bottle`}
      style={{
        width: 'clamp(200px, 26vw, 440px)',
        height: 'clamp(358px, 46.5vw, 785px)',
      }}
    >
      <BottleCanvas moody={variant.moody} />
    </div>
  );
}
