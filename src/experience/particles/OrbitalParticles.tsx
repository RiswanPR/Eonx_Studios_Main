"use client";

import { useMemo } from "react";
import * as THREE from "three";
import { createParticleMaterial } from "@/experience/materials/eonxMaterials";
import type { OrbitalQuality } from "@/experience/orbital/orbitalQuality";
import { orbitalQualityConfig } from "@/experience/orbital/orbitalQuality";

interface OrbitalParticlesProps {
  quality: OrbitalQuality;
}

export function OrbitalParticles({ quality }: OrbitalParticlesProps) {
  const config = orbitalQualityConfig[quality];
  const count = config.particleCount;

  const { geometry, material } = useMemo(() => {
    if (count === 0) {
      return {
        geometry: new THREE.BufferGeometry(),
        material: createParticleMaterial(),
      };
    }

    const positions = new Float32Array(count * 3);

    // Deterministic pseudo-random distribution for reproducible particle field
    for (let i = 0; i < count; i++) {
      const u = (i * 1.61803398875) % 1;
      const v = (i * 0.75487766624) % 1;
      const theta = u * Math.PI * 2;
      const radius = 2.2 + v * 1.4; // 2.2 to 3.6 halo
      const y = (Math.sin(i * 3.7) * 0.75);

      positions[i * 3] = Math.cos(theta) * radius;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = Math.sin(theta) * radius;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const mat = createParticleMaterial();

    return { geometry: geo, material: mat };
  }, [count]);

  if (count === 0) return null;

  return (
    <points geometry={geometry} material={material} />
  );
}
