import type { Metadata } from "next";
import { BorderSweep } from "@/components/shared/light/BorderSweep";
import { KineticLight } from "@/components/shared/light/KineticLight";
import { SectionDivider } from "@/components/shared/light/SectionDivider";

export const metadata: Metadata = {
  title: "Kinetic Light Test — Eonx Studios",
  description: "D6 Kinetic Light System verification harness",
  robots: {
    index: false,
    follow: false,
  },
};

export default function LightTestPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--color-eonx-black)] px-6 py-32">
      <KineticLight variant="hero" />

      <div className="relative z-[var(--z-content)] mx-auto max-w-6xl">
        <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
          EONX / D6
        </p>

        <h1 className="mt-6 max-w-[8ch] font-[var(--font-display)] text-[clamp(4rem,9vw,9rem)] leading-[0.86] tracking-[-0.05em] text-white">
          KINETIC
          <br />
          LIGHT.
        </h1>

        <SectionDivider label="01 / MOTIFS" />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <BorderSweep className="rounded-[var(--radius-xl)]">
            <div className="eonx-glass eonx-reflection min-h-72 rounded-[var(--radius-xl)] p-8">
              <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
                Border Sweep
              </p>
              <div className="mt-16 size-24 rounded-full bg-[var(--color-ultrasonic-blue)] shadow-[var(--shadow-glow-blue)]" />
            </div>
          </BorderSweep>

          <div className="relative min-h-72 overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border-subtle)] bg-[rgba(8,10,14,0.4)] p-8">
            <p className="relative z-10 font-mono text-[9px] uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
              Orbital Beam Preset
            </p>
            <KineticLight variant="orbital" />
          </div>
        </div>
      </div>
    </main>
  );
}
