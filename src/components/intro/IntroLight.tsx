import { cn } from "@/lib/utils/cn";

interface IntroLightProps {
  stage: "black" | "light" | "orbital" | "logo" | "atmosphere" | "reveal" | "done";
}

export function IntroLight({ stage }: IntroLightProps) {
  const isLight = stage !== "black" && stage !== "done";
  const isExpanded = stage === "orbital" || stage === "logo" || stage === "atmosphere" || stage === "reveal";

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      {/* Central concentrated laser point */}
      <div
        className={cn(
          "size-2 rounded-full bg-[var(--color-periwinkle)]",
          "shadow-[0_0_24px_6px_var(--color-ultrasonic-blue),0_0_60px_16px_var(--color-periwinkle)]",
          "transition-all duration-[var(--duration-cinematic)] ease-[var(--ease-cinematic)]",
          isLight ? "scale-100 opacity-100" : "scale-0 opacity-0",
          isExpanded && "scale-150 opacity-60",
        )}
      />

      {/* Radiant expansion sphere */}
      <div
        className={cn(
          "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full",
          "bg-[radial-gradient(circle,rgba(73,40,194,0.35)_0%,rgba(191,64,250,0.15)_40%,transparent_70%)]",
          "transition-all duration-[var(--duration-cinematic)] ease-[var(--ease-cinematic)]",
          isExpanded ? "size-96 opacity-80" : "size-16 opacity-0",
        )}
      />
    </div>
  );
}
