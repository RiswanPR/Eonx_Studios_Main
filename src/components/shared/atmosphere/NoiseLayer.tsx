"use client";

import { useAtmosphereIntensity } from "@/lib/atmosphere/useAtmosphereIntensity";

export function NoiseLayer() {
  const intensity = useAtmosphereIntensity();

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[1] mix-blend-soft-light"
      style={{
        opacity: intensity.noiseOpacity,
        backgroundImage: "url('/textures/noise.webp')",
        backgroundRepeat: "repeat",
        backgroundSize: "180px 180px",
      }}
    />
  );
}
