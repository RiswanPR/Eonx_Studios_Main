"use client";

import { useLightIntensity } from "@/lib/light/useLightIntensity";
import { cn } from "@/lib/utils/cn";

interface BorderSweepProps {
  children: React.ReactNode;
  className?: string;
  duration?: string;
}

export function BorderSweep({
  children,
  className = "",
  duration = "7s",
}: BorderSweepProps) {
  const intensity = useLightIntensity();
  const enableSweep = intensity.speed > 0 && intensity.density >= 0.7;

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {enableSweep && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-x-full -inset-y-[200%] z-10"
        >
          <div
            className="h-full w-1/3 -skew-x-12 animate-[eonx-border-sweep_ease-in-out_infinite] opacity-40 blur-[1px]"
            style={{
              animationDuration: duration,
              background: "var(--eonx-light-gradient-soft)",
            }}
          />
        </div>
      )}

      {children}
    </div>
  );
}
