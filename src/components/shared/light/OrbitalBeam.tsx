"use client";

import { useLightIntensity } from "@/lib/light/useLightIntensity";
import { cn } from "@/lib/utils/cn";

interface OrbitalBeamProps {
  className?: string;
}

export function OrbitalBeam({ className = "" }: OrbitalBeamProps) {
  const intensity = useLightIntensity();
  const isAnimated = intensity.speed > 0;

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
        "h-px w-[140%] max-w-[900px]",
        className,
      )}
      style={{
        opacity: intensity.intensity * 0.7,
      }}
    >
      <div
        className={cn(
          "size-full",
          isAnimated ? "animate-[eonx-orbital-beam_12s_ease-in-out_infinite]" : "opacity-40",
        )}
        style={{
          background: "var(--eonx-light-gradient-soft)",
          boxShadow: `0 0 ${24 * intensity.glow}px rgba(73,40,194,0.3)`,
        }}
      />
    </div>
  );
}
