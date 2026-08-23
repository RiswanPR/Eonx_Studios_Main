"use client";

import { useId } from "react";
import { useLightIntensity } from "@/lib/light/useLightIntensity";

interface LineMotifProps {
  className?: string;
  variant?: "horizontal" | "diagonal" | "curve";
}

export function LineMotif({
  className = "",
  variant = "horizontal",
}: LineMotifProps) {
  const gradientId = useId();
  const intensity = useLightIntensity();

  const isAnimated = intensity.speed > 0;

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 400 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      className={`pointer-events-none absolute ${className}`}
      style={{ opacity: intensity.intensity }}
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="var(--color-ultrasonic-blue)" stopOpacity="0" />
          <stop offset="35%" stopColor="var(--color-ultrasonic-blue)" stopOpacity="0.75" />
          <stop offset="60%" stopColor="var(--color-periwinkle)" stopOpacity="0.9" />
          <stop offset="85%" stopColor="var(--color-hyper-magenta)" stopOpacity="0.65" />
          <stop offset="100%" stopColor="var(--color-hyper-magenta)" stopOpacity="0" />
        </linearGradient>
      </defs>

      {variant === "horizontal" && (
        <path
          d="M 0 30 L 400 30"
          stroke={`url(#${gradientId})`}
          strokeWidth="1.2"
          strokeDasharray={isAnimated ? "24 16" : "none"}
          className={isAnimated ? "animate-[eonx-dash_12s_linear_infinite]" : ""}
        />
      )}

      {variant === "diagonal" && (
        <path
          d="M 0 50 L 400 10"
          stroke={`url(#${gradientId})`}
          strokeWidth="1.2"
          strokeDasharray={isAnimated ? "28 18" : "none"}
          className={isAnimated ? "animate-[eonx-dash_14s_linear_infinite]" : ""}
        />
      )}

      {variant === "curve" && (
        <path
          d="M 0 45 C 120 10, 280 50, 400 15"
          stroke={`url(#${gradientId})`}
          strokeWidth="1.2"
          strokeDasharray={isAnimated ? "24 16" : "none"}
          className={isAnimated ? "animate-[eonx-dash_10s_linear_infinite]" : ""}
        />
      )}
    </svg>
  );
}
