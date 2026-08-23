"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitalCamera } from "@/experience/camera/OrbitalCamera";
import { EonxLighting } from "@/experience/core/EonxLighting";
import { OrbitalGroup } from "./OrbitalGroup";
import type { OrbitalQuality } from "./orbitalQuality";
import { orbitalQualityConfig } from "./orbitalQuality";

interface EonxOrbitalProps {
  quality?: OrbitalQuality;
}

export function EonxOrbital({ quality = "standard" }: EonxOrbitalProps) {
  const config = orbitalQualityConfig[quality];

  return (
    <div className="relative size-full">
      <Canvas
        dpr={[1, config.dpr]}
        gl={{
          antialias: quality !== "reduced",
          alpha: true,
          powerPreference: "high-performance",
        }}
        frameloop="always"
        style={{ pointerEvents: "none" }}
      >
        <OrbitalCamera quality={quality} />
        <EonxLighting />
        <OrbitalGroup quality={quality} />
      </Canvas>
    </div>
  );
}
