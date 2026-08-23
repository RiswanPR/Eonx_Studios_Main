"use client";

import { useMemo } from "react";
import * as THREE from "three";
import { createRingMaterial, EONX_PALETTE } from "@/experience/materials/eonxMaterials";
import type { OrbitalQuality } from "./orbitalQuality";
import { orbitalQualityConfig } from "./orbitalQuality";

interface OrbitalRingsProps {
  quality: OrbitalQuality;
}

function createEllipticalGeometry(
  radiusX: number,
  radiusY: number,
  segments: number,
): THREE.BufferGeometry {
  const points: THREE.Vector3[] = [];
  for (let i = 0; i <= segments; i++) {
    const theta = (i / segments) * Math.PI * 2;
    points.push(new THREE.Vector3(Math.cos(theta) * radiusX, 0, Math.sin(theta) * radiusY));
  }
  return new THREE.BufferGeometry().setFromPoints(points);
}

export function OrbitalRings({ quality }: OrbitalRingsProps) {
  const config = orbitalQualityConfig[quality];
  const segments = config.ringSegments;

  const { ring1Geo, ring2Geo, ring3Geo, mat1, mat2, mat3 } = useMemo(() => {
    const r1 = createEllipticalGeometry(1.5, 1.32, segments);
    const r2 = createEllipticalGeometry(1.82, 1.6, segments);
    const r3 = createEllipticalGeometry(2.1, 1.85, segments);

    const m1 = createRingMaterial(EONX_PALETTE.ultrasonicBlue, 0.48);
    const m2 = createRingMaterial(EONX_PALETTE.periwinkle, 0.32);
    const m3 = createRingMaterial(EONX_PALETTE.hyperMagenta, 0.24);

    return {
      ring1Geo: r1,
      ring2Geo: r2,
      ring3Geo: r3,
      mat1: m1,
      mat2: m2,
      mat3: m3,
    };
  }, [segments]);

  return (
    <group name="orbital-rings">
      {/* Ring 1: Ultrasonic Blue */}
      <group rotation={[0.95, 0.25, 0]}>
        <primitive object={new THREE.LineLoop(ring1Geo, mat1)} />
      </group>

      {/* Ring 2: Periwinkle */}
      <group rotation={[1.2, -0.55, 0.2]}>
        <primitive object={new THREE.LineLoop(ring2Geo, mat2)} />
      </group>

      {/* Ring 3: Hyper Magenta */}
      <group rotation={[0.7, 1.15, -0.3]}>
        <primitive object={new THREE.LineLoop(ring3Geo, mat3)} />
      </group>
    </group>
  );
}
