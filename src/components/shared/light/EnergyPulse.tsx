"use client";

import { useLightIntensity } from "@/lib/light/useLightIntensity";
import { cn } from "@/lib/utils/cn";

interface EnergyPulseProps {
  className?: string;
  size?: number;
}

export function EnergyPulse({
  className = "",
  size = 180,
}: EnergyPulseProps) {
  const intensity = useLightIntensity();
  const isAnimated = intensity.speed > 0;

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute flex items-center justify-center",
        className,
      )}
      style={{
        width: size,
        height: size,
        opacity: intensity.intensity,
      }}
    >
      {/* Outer Hairline Ring */}
      <div
        className={cn(
          "absolute inset-0 rounded-full border border-[rgba(164,180,245,0.25)]",
          isAnimated && "animate-[eonx-energy-pulse_6s_ease-in-out_infinite]",
        )}
      />

      {/* Central Soft Glow */}
      <div
        className="size-1/2 rounded-full bg-[radial-gradient(circle,rgba(73,40,194,0.35)_0%,transparent_70%)] blur-lg"
      />
    </div>
  );
}
