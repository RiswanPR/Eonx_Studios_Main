"use client";

import { useState } from "react";
import { EonxOrbitalExperience } from "@/components/shared/experience/EonxOrbitalExperience";
import type { OrbitalQuality } from "@/experience/orbital/orbitalQuality";

export default function OrbitalTestPage() {
  const [quality, setQuality] = useState<OrbitalQuality>("high");

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[var(--color-eonx-black)] px-6 py-20">
      {/* Testbed Header */}
      <div className="relative z-10 mb-8 text-center">
        <span className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-periwinkle)]">
          D5 / ORBITAL IDENTITY TESTBED
        </span>
        <h1 className="mt-3 font-[var(--font-display)] text-4xl text-white md:text-5xl">
          Eonx 3D Orbital Signature
        </h1>
        <p className="mx-auto mt-2 max-w-md text-xs text-[var(--color-text-secondary)]">
          Derived from the canonical Eonx vector mark with 3 asymmetrical elliptical rings, deterministic orbital nodes, and particle halo.
        </p>
      </div>

      {/* Primary 3D Orbital Experience */}
      <div className="relative z-10 flex size-full max-w-[560px] items-center justify-center">
        <EonxOrbitalExperience forcedQuality={quality} />
      </div>

      {/* Development-Only Quality Tier Selector */}
      {process.env.NODE_ENV === "development" && (
        <div className="relative z-20 mt-10 flex flex-wrap items-center justify-center gap-2 rounded-full border border-[var(--color-border-default)] bg-[rgba(10,12,18,0.85)] p-1.5 backdrop-blur-md">
          {(["high", "standard", "reduced", "static"] as OrbitalQuality[]).map((tier) => (
            <button
              key={tier}
              type="button"
              onClick={() => setQuality(tier)}
              className={`rounded-full px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] transition-colors ${
                quality === tier
                  ? "bg-[var(--color-periwinkle)] font-semibold text-[var(--color-eonx-black)]"
                  : "text-[var(--color-text-muted)] hover:text-white"
              }`}
            >
              {tier}
            </button>
          ))}
        </div>
      )}
    </main>
  );
}
