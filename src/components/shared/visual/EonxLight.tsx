interface EonxLightProps {
  className?: string;
}

export function EonxLight({ className = "" }: EonxLightProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute h-px bg-[linear-gradient(90deg,transparent,var(--color-ultrasonic-blue),var(--color-periwinkle),transparent)] ${className}`}
    />
  );
}
