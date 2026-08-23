"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useOrbitalInteraction } from "@/experience/interaction/useOrbitalInteraction";
import { useOrbitalScroll } from "@/experience/interaction/useOrbitalScroll";
import { OrbitalCore } from "./OrbitalCore";
import { OrbitalNodes } from "./OrbitalNodes";
import type { OrbitalQuality } from "./orbitalQuality";
import { OrbitalRings } from "./OrbitalRings";
import { OrbitalParticles } from "@/experience/particles/OrbitalParticles";

interface OrbitalGroupProps {
  quality: OrbitalQuality;
}

export function OrbitalGroup({ quality }: OrbitalGroupProps) {
  const groupRef = useRef<THREE.Group>(null);
  const pointer = useOrbitalInteraction();
  const scrollProgress = useOrbitalScroll();
  const isReduced = quality === "reduced" || quality === "static";

  useFrame((_, delta) => {
    if (!groupRef.current) return;

    if (!isReduced) {
      const scroll = scrollProgress.current;
      const ptr = pointer.current;

      // Base auto rotation: slow and cinematic (0.035 rad/s + subtle scroll)
      groupRef.current.rotation.y += delta * (0.035 + scroll * 0.15);

      // Damped pointer & scroll pitch (X axis)
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        ptr.y * 0.1 + scroll * 0.2,
        0.04,
      );

      // Damped pointer roll (Z axis)
      groupRef.current.rotation.z = THREE.MathUtils.lerp(
        groupRef.current.rotation.z,
        ptr.x * 0.08,
        0.04,
      );
    } else {
      // Reduced motion / low tier: minimal slow auto rotation
      groupRef.current.rotation.y += delta * 0.02;
    }
  });

  return (
    <group ref={groupRef} name="eonx-orbital-root">
      <OrbitalCore />
      <OrbitalRings quality={quality} />
      <OrbitalNodes quality={quality} />
      <OrbitalParticles quality={quality} />
    </group>
  );
}
