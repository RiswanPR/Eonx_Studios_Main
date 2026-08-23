import { cn } from "@/lib/utils/cn";

interface IntroOrbitalProps {
  active: boolean;
}

export function IntroOrbital({ active }: IntroOrbitalProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
        "flex size-44 items-center justify-center md:size-64",
        "transition-all duration-[var(--duration-cinematic)] ease-[var(--ease-cinematic)]",
        active ? "scale-100 opacity-100" : "scale-[0.25] opacity-0",
      )}
    >
      {/* Outer Orbital Ring with dashed gradient stroke */}
      <div
        className={cn(
          "eonx-intro-orbit absolute inset-0 rounded-full border border-[rgba(191,64,250,0.25)]",
          "border-t-[var(--color-periwinkle)] border-r-transparent border-b-[rgba(73,40,194,0.35)] border-l-transparent",
          "animate-[eonx-intro-orbit_14s_linear_infinite]",
        )}
      />

      {/* Middle Counter-Rotating Ring */}
      <div
        className={cn(
          "eonx-intro-orbit absolute inset-4 rounded-full border border-[rgba(73,40,194,0.3)]",
          "border-b-[var(--color-ultrasonic-blue)] border-l-transparent border-t-transparent border-r-[rgba(191,64,250,0.3)]",
          "animate-[eonx-intro-orbit-reverse_9s_linear_infinite]",
        )}
      />

      {/* Inner Glowing Core */}
      <div
        className={cn(
          "absolute inset-10 rounded-full border border-[rgba(255,255,255,0.08)]",
          "bg-[radial-gradient(circle,rgba(73,40,194,0.25)_0%,transparent_70%)]",
        )}
      />

      {/* Subtle Atmospheric Halo */}
      <div className="absolute inset-[-15%] rounded-full bg-[radial-gradient(circle,rgba(73,40,194,0.18)_0%,transparent_65%)] blur-xl" />
    </div>
  );
}
