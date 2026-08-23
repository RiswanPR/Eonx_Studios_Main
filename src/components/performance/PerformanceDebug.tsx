"use client";

import { useState, useSyncExternalStore } from "react";
import { usePerformance } from "@/components/performance/PerformanceProvider";
import { useExperience } from "@/experience/ExperienceProvider";
import { getDeviceTier } from "@/experience/performance/deviceTier";

const emptySubscribe = () => () => {};

export function PerformanceDebug() {
  const isMounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
  const [isOpen, setIsOpen] = useState(false);
  const perf = usePerformance();
  const exp = useExperience();

  // Never render during SSR hydration or in production
  if (!isMounted || process.env.NODE_ENV === "production") {
    return null;
  }

  const deviceTier = typeof window !== "undefined" ? getDeviceTier() : "standard";

  return (
    <div className="fixed bottom-4 right-4 z-50 font-mono text-xs">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="rounded bg-[var(--color-surface-01)] px-3 py-1.5 text-xs text-[var(--color-periwinkle)] border border-[var(--color-border-default)] shadow-lg hover:border-[var(--color-periwinkle)]"
      >
        PERF DEBUG ({exp.quality})
      </button>

      {isOpen && (
        <div className="mt-2 w-72 rounded-lg border border-[var(--color-border-default)] bg-[var(--color-eonx-black)] p-4 shadow-2xl backdrop-blur-md">
          <div className="flex items-center justify-between border-b border-[var(--color-border-subtle)] pb-2">
            <span className="font-semibold text-white">Performance State</span>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-[10px] text-[var(--foreground-muted)] hover:text-white"
            >
              Close
            </button>
          </div>

          <div className="mt-3 space-y-1.5 text-[10px]">
            <div className="flex justify-between">
              <span className="text-[var(--foreground-muted)]">Experience Quality:</span>
              <span className="font-semibold text-[var(--color-periwinkle)]">{exp.quality}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[var(--foreground-muted)]">Device Tier:</span>
              <span className="text-white">{deviceTier}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[var(--foreground-muted)]">WebGL Available:</span>
              <span className={exp.webGLAvailable ? "text-emerald-400" : "text-amber-400"}>
                {String(exp.webGLAvailable)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-[var(--foreground-muted)]">Reduced Motion:</span>
              <span className="text-white">{String(perf.reducedMotion)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[var(--foreground-muted)]">Save Data:</span>
              <span className="text-white">{String(perf.saveData)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[var(--foreground-muted)]">Fine Pointer:</span>
              <span className="text-white">{String(perf.finePointer)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[var(--foreground-muted)]">Connection:</span>
              <span className="text-white">{perf.effectiveConnectionType}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
