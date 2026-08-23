interface NavbarBackdropProps {
  active: boolean;
}

export function NavbarBackdrop({ active }: NavbarBackdropProps) {
  return (
    <div
      aria-hidden="true"
      className={[
        "pointer-events-none absolute inset-0 rounded-full",
        "transition-opacity duration-[var(--duration-standard)]",
        active ? "opacity-100" : "opacity-0",
      ].join(" ")}
    >
      <div className="absolute inset-0 rounded-full bg-[linear-gradient(115deg,transparent_15%,rgba(255,255,255,0.035)_48%,transparent_62%)]" />
      <div className="absolute inset-x-[12%] bottom-0 h-px bg-[linear-gradient(90deg,transparent,var(--color-ultrasonic-blue),var(--color-periwinkle),transparent)] opacity-40" />
    </div>
  );
}
