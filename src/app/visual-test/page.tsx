import { AtmosphereEngine } from "@/components/shared/atmosphere/AtmosphereEngine";
import { EonxLight } from "@/components/shared/visual/EonxLight";

export default function VisualTestPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <AtmosphereEngine />

      <div className="relative z-[var(--z-content)] mx-auto min-h-screen max-w-7xl px-6 py-32">
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
          EONX / D2
        </p>

        <h1 className="mt-6 max-w-[8ch] font-[var(--font-display)] text-[clamp(4rem,9vw,9rem)] leading-[0.86] tracking-[-0.05em]">
          ATMOSPHERE
          <br />
          ENGINE.
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-8 text-[var(--color-text-secondary)]">
          Technical structure, ambient light and controlled motion.
        </p>

        <div className="mt-24 grid gap-6 md:grid-cols-2">
          <div className="eonx-glass eonx-reflection rounded-[var(--radius-xl)] p-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-text-muted)]">
              Eonx Glass
            </p>

            <div className="mt-16 size-24 rounded-full bg-[var(--color-ultrasonic-blue)] shadow-[var(--glow-blue)]" />
          </div>

          <div className="relative min-h-72 overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border-default)] bg-[rgba(255,255,255,0.01)]">
            <EonxLight className="left-[-10%] top-1/2 w-[120%]" />
          </div>
        </div>
      </div>
    </main>
  );
}
