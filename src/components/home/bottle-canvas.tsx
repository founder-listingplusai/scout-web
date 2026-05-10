'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useTexture, ContactShadows, Environment, Float } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import * as THREE from 'three';
import type { Mesh } from 'three';

// ─── Bottle plane (moody PNG with alpha, mouse-parallax tilt) ────────────────

function BottlePlane({ src }: { src: string }) {
  const ref = useRef<Mesh>(null);
  const { mouse } = useThree();
  const texture = useTexture(src);

  // moody images: 556 × 990 → aspect ≈ 0.5616
  const w = 4.2 * (556 / 990);
  const h = 4.2;

  useFrame(() => {
    if (!ref.current) return;
    ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, mouse.x * 0.28, 0.055);
    ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, -mouse.y * 0.14, 0.055);
  });

  return (
    <mesh ref={ref}>
      <planeGeometry args={[w, h]} />
      <meshStandardMaterial map={texture} transparent alphaTest={0.01} roughness={0.3} />
    </mesh>
  );
}

// ─── Fallback geometry shown while texture loads ─────────────────────────────

function FallbackPlane() {
  return (
    <mesh>
      <planeGeometry args={[2.36, 4.2]} />
      <meshStandardMaterial color="#f1e8cb" transparent opacity={0} />
    </mesh>
  );
}

// ─── Canvas export ────────────────────────────────────────────────────────────

export default function BottleCanvas({ moody }: { moody: string }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 30 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent', width: '100%', height: '100%' }}
    >
      <ambientLight intensity={0.9} />
      <directionalLight position={[4, 8, 6]} intensity={1.4} />

      <Suspense fallback={<FallbackPlane />}>
        <Environment preset="city" />
        <Float speed={1.5} rotationIntensity={0} floatIntensity={0.45}>
          <BottlePlane src={moody} />
        </Float>
        <ContactShadows
          position={[0, -2.4, 0]}
          opacity={0.35}
          scale={3.5}
          blur={2.5}
          color="#203145"
        />
      </Suspense>
    </Canvas>
  );
}
