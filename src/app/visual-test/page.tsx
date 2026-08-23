import { EonxGrid } from "@/components/shared/visual/EonxGrid";
import { EonxLight } from "@/components/shared/visual/EonxLight";

export default function VisualTestPage() {
  return (
    <main className="relative min-h-screen overflow-hidden p-8 pt-32">
      <EonxGrid />

      <div className="relative z-10 mx-auto max-w-6xl">
        <p className="font-mono text-xs uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
          EONX / VISUAL DNA
        </p>

        <h1 className="mt-6 max-w-[8ch] font-[var(--font-display)] text-[clamp(4rem,9vw,9rem)] leading-[0.86] tracking-[-0.05em]">
          VISUAL
          <br />
          SYSTEM.
        </h1>

        <div className="mt-16 grid gap-4 md:grid-cols-2">
          <div className="eonx-glass eonx-reflection rounded-[var(--radius-xl)] p-8">
            <p className="text-sm text-[var(--color-text-muted)]">
              Glass Surface
            </p>

            <div className="mt-8 size-24 rounded-full bg-[var(--color-ultrasonic-blue)] shadow-[var(--glow-blue)]" />
          </div>

          <div className="relative min-h-64 overflow-hidden rounded-[var(--radius-xl)] bg-[var(--color-surface-01)]">
            <EonxLight className="left-[-20%] top-1/2 w-[140%]" />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(191,64,250,0.16),transparent_45%)]" />
          </div>
        </div>
      </div>
    </main>
  );
}
