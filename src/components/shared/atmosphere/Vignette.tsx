"use client";

import { useAtmosphereIntensity } from "@/lib/atmosphere/useAtmosphereIntensity";

export function Vignette() {
  const intensity = useAtmosphereIntensity();

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[2]"
      style={{
        opacity: intensity.vignetteOpacity,
        background:
          "radial-gradient(circle at center, transparent 48%, rgba(0,0,0,0.48) 100%)",
      }}
    />
  );
}
