"use client";

import { useMemo, useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

import type { ExperienceQuality } from "@/experience/types/quality";
import { QUALITY_CONFIG } from "@/experience/performance/qualityConfig";

interface OrbitalParticlesProps {
  quality: ExperienceQuality;
}

function pseudoRandom(seed: number): number {
  const x = Math.sin(seed * 12.9898 + 78.233) * 43758.5453;
  return x - Math.floor(x);
}

export function OrbitalParticles({ quality }: OrbitalParticlesProps) {
  const ref = useRef<THREE.Points>(null);
  const count = QUALITY_CONFIG[quality].particles;

  const positions = useMemo(() => {
    const data = new Float32Array(count * 3);

    for (let index = 0; index < count; index += 1) {
      const i = index * 3;
      data[i] = (pseudoRandom(index * 3 + 1) - 0.5) * 6;
      data[i + 1] = (pseudoRandom(index * 3 + 2) - 0.5) * 4;
      data[i + 2] = (pseudoRandom(index * 3 + 3) - 0.5) * 4;
    }

    return data;
  }, [count]);

  const geometry = useMemo(() => {
    const geom = new THREE.BufferGeometry();
    geom.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geom;
  }, [positions]);

  useEffect(() => {
    return () => {
      geometry.dispose();
    };
  }, [geometry]);

  useFrame((_, delta) => {
    if (!ref.current) {
      return;
    }

    ref.current.rotation.y += delta * 0.01;
  });

  if (count === 0) {
    return null;
  }

  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial
        color="#E3D9FC"
        size={0.018}
        transparent
        opacity={0.35}
        sizeAttenuation
      />
    </points>
  );
}
