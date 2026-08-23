"use client";

import { PerspectiveCamera } from "@react-three/drei";
import type { OrbitalQuality } from "@/experience/orbital/orbitalQuality";

interface OrbitalCameraProps {
  quality: OrbitalQuality;
}

export function OrbitalCamera({ quality }: OrbitalCameraProps) {
  const zPosition = quality === "high" ? 6.2 : 6.8;

  return (
    <PerspectiveCamera
      makeDefault
      fov={38}
      position={[0, 0, zPosition]}
      near={0.1}
      far={100}
    />
  );
}
