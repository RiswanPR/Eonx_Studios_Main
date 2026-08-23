interface IntroProgressProps {
  progress: number;
}

export function IntroProgress({ progress }: IntroProgressProps) {
  const clamped = Math.min(1, Math.max(0, progress));

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute bottom-8 left-1/2 w-[min(240px,50vw)] -translate-x-1/2"
    >
      <div className="h-px overflow-hidden bg-white/10">
        <div
          className="h-full origin-left bg-[linear-gradient(90deg,var(--color-ultrasonic-blue),var(--color-periwinkle),var(--color-hyper-magenta))] transition-transform duration-150"
          style={{
            transform: `scaleX(${clamped})`,
          }}
        />
      </div>

      <div className="mt-3 flex justify-between font-mono text-[8px] uppercase tracking-[0.14em] text-white/35">
        <span>EONX</span>
        <span>{Math.round(clamped * 100)}%</span>
      </div>
    </div>
  );
}
