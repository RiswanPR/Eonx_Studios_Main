"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { useExperience } from "@/experience/ExperienceProvider";
import { EonxScene } from "@/experience/scene/EonxScene";
import { QUALITY_CONFIG } from "@/experience/performance/qualityConfig";

export function EonxCanvas() {
  const { quality, webGLAvailable } = useExperience();

  if (!webGLAvailable || quality === "static") {
    return null;
  }

  const config = QUALITY_CONFIG[quality];

  return (
    <Canvas
      dpr={config.pixelRatio}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      }}
      camera={{
        position: [0, 0, 5],
        fov: 42,
        near: 0.1,
        far: 100,
      }}
    >
      <Suspense fallback={null}>
        <EonxScene quality={quality} />
      </Suspense>
    </Canvas>
  );
}
