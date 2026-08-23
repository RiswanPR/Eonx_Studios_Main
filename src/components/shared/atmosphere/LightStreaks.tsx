"use client";

import { useAtmosphereIntensity } from "@/lib/atmosphere/useAtmosphereIntensity";

const streaks = [
  {
    top: "22%",
    left: "-18%",
    width: "34%",
    duration: "9s",
    delay: "0s",
  },
  {
    top: "57%",
    left: "-28%",
    width: "45%",
    duration: "13s",
    delay: "3s",
  },
  {
    top: "81%",
    left: "-20%",
    width: "28%",
    duration: "11s",
    delay: "5s",
  },
];

export function LightStreaks() {
  const intensity = useAtmosphereIntensity();

  if (intensity.streakOpacity === 0) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[var(--z-base)] overflow-hidden"
      style={{
        opacity: intensity.streakOpacity,
      }}
    >
      {streaks.map((streak, index) => (
        <div
          key={index}
          className="absolute h-px animate-[eonx-light-streak_linear_infinite]"
          style={{
            top: streak.top,
            left: streak.left,
            width: streak.width,
            animationDuration: streak.duration,
            animationDelay: streak.delay,
            background:
              index === 1
                ? "linear-gradient(90deg, transparent, var(--color-velvet-purple), var(--color-hyper-magenta), transparent)"
                : "linear-gradient(90deg, transparent, var(--color-ultrasonic-blue), var(--color-periwinkle), transparent)",
            boxShadow:
              index === 1
                ? "0 0 18px rgba(191,64,250,0.16)"
                : "0 0 18px rgba(73,40,194,0.16)",
          }}
        />
      ))}
    </div>
  );
}
