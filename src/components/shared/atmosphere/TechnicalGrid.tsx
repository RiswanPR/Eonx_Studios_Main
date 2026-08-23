"use client";

import { useAtmosphereIntensity } from "@/lib/atmosphere/useAtmosphereIntensity";

export function TechnicalGrid() {
  const intensity = useAtmosphereIntensity();

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[var(--z-base)]"
      style={{
        opacity: intensity.gridOpacity,
        backgroundImage: `
          linear-gradient(
            45deg,
            var(--grid-line) 1px,
            transparent 1px
          ),
          linear-gradient(
            -45deg,
            rgba(255,255,255,0.018) 1px,
            transparent 1px
          )
        `,
        backgroundSize: "var(--grid-size) var(--grid-size)",
      }}
    />
  );
}
