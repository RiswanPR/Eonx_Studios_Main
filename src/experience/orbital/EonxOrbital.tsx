"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

import type { ExperienceQuality } from "@/experience/types/quality";
import { OrbitalCore } from "@/experience/orbital/OrbitalCore";
import { OrbitalRing } from "@/experience/orbital/OrbitalRing";
import { QUALITY_CONFIG } from "@/experience/performance/qualityConfig";
import { usePointerTarget } from "@/experience/hooks/usePointerTarget";
import { useScrollProgress } from "@/experience/hooks/useScrollProgress";

interface EonxOrbitalProps {
  quality: ExperienceQuality;
}

export function EonxOrbital({ quality }: EonxOrbitalProps) {
  const group = useRef<THREE.Group>(null);
  const config = QUALITY_CONFIG[quality];
  const pointer = usePointerTarget();
  const scrollProgress = useScrollProgress();
  const reduced = quality === "reduced";

  useFrame((_, delta) => {
    if (!group.current) {
      return;
    }

    if (!reduced) {
      const scroll = scrollProgress.current;

      group.current.rotation.y += delta * (0.08 + scroll * 0.2);

      group.current.rotation.x = THREE.MathUtils.lerp(
        group.current.rotation.x,
        pointer.current.y * 0.12 + scroll * 0.2,
        0.04,
      );

      group.current.rotation.z = THREE.MathUtils.lerp(
        group.current.rotation.z,
        pointer.current.x * 0.08,
        0.04,
      );
    } else {
      group.current.rotation.y += delta * 0.04;
    }
  });

  return (
    <group ref={group}>
      <OrbitalCore />

      <OrbitalRing
        radius={1.55}
        speed={0.12}
        tilt={0.25}
        segments={config.orbitalSegments}
        color="#4928C2"
      />

      <OrbitalRing
        radius={1.9}
        speed={-0.08}
        tilt={-0.42}
        segments={config.orbitalSegments}
        color="#BF40FA"
      />

      <OrbitalRing
        radius={1.25}
        speed={0.16}
        tilt={0.65}
        segments={config.orbitalSegments}
        color="#E3D9FC"
      />
    </group>
  );
}
