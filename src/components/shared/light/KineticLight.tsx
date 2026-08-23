"use client";

import { cn } from "@/lib/utils/cn";
import { LightStreak } from "./LightStreak";
import { LineMotif } from "./LineMotif";
import { OrbitalBeam } from "./OrbitalBeam";

interface KineticLightProps {
  variant?: "hero" | "section" | "orbital";
  className?: string;
}

export function KineticLight({
  variant = "hero",
  className = "",
}: KineticLightProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      {variant === "hero" && (
        <>
          {/* Top Angled Streak */}
          <LightStreak
            className="top-[28%] w-[120%] -rotate-[14deg] -left-[10%]"
            delay="0s"
            duration="8s"
          />

          {/* Center Line Motif */}
          <LineMotif
            className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-[900px] opacity-70"
            variant="diagonal"
          />

          {/* Lower Counter Streak */}
          <LightStreak
            className="top-[68%] w-[120%] rotate-[10deg] -left-[10%]"
            delay="4s"
            duration="10s"
          />

          {/* Orbital Ambient Beam */}
          <OrbitalBeam className="top-[52%]" />
        </>
      )}

      {variant === "section" && (
        <>
          <LightStreak
            className="top-[45%] w-full"
            delay="1s"
            duration="12s"
          />
          <LineMotif
            className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] max-w-[600px] opacity-50"
            variant="horizontal"
          />
        </>
      )}

      {variant === "orbital" && (
        <>
          <OrbitalBeam />
          <LightStreak
            className="top-[50%] w-full -rotate-[8deg]"
            delay="2s"
            duration="9s"
          />
        </>
      )}
    </div>
  );
}
