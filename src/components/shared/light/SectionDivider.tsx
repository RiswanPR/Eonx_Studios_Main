"use client";

import { useLightIntensity } from "@/lib/light/useLightIntensity";
import { cn } from "@/lib/utils/cn";
import { LineMotif } from "./LineMotif";

interface SectionDividerProps {
  label?: string;
  className?: string;
}

export function SectionDivider({
  label,
  className = "",
}: SectionDividerProps) {
  const intensity = useLightIntensity();

  return (
    <div
      className={cn(
        "relative my-12 flex w-full items-center justify-center gap-6 overflow-hidden py-4",
        className,
      )}
    >
      {/* Left Hairline */}
      <div
        aria-hidden="true"
        className="h-px flex-1 bg-[linear-gradient(90deg,transparent,var(--color-border-default))]"
        style={{ opacity: intensity.intensity }}
      />

      {/* Center Label and Motif */}
      <div className="relative flex items-center justify-center px-4">
        <LineMotif className="inset-0 size-full opacity-60" variant="horizontal" />

        {label && (
          <span className="relative z-10 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
            {label}
          </span>
        )}
      </div>

      {/* Right Hairline */}
      <div
        aria-hidden="true"
        className="h-px flex-1 bg-[linear-gradient(90deg,var(--color-border-default),transparent)]"
        style={{ opacity: intensity.intensity }}
      />
    </div>
  );
}
