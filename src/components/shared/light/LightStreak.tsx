"use client";

import { useLightIntensity } from "@/lib/light/useLightIntensity";

interface LightStreakProps {
  className?: string;
  delay?: string;
  duration?: string;
}

export function LightStreak({
  className = "",
  delay = "0s",
  duration = "8s",
}: LightStreakProps) {
  const intensity = useLightIntensity();

  if (intensity.speed === 0 && intensity.density < 0.2) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute h-px overflow-hidden ${className}`}
      style={{
        opacity: intensity.intensity,
      }}
    >
      <div
        className="h-full w-1/3 animate-[eonx-light-pass_linear_infinite]"
        style={{
          animationDuration: intensity.speed > 0 ? duration : "0s",
          animationDelay: delay,
          background: "var(--eonx-light-gradient)",
          boxShadow: `0 0 ${18 * intensity.glow}px rgba(73,40,194,0.18)`,
        }}
      />
    </div>
  );
}
