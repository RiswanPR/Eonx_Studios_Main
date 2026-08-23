import type { Service } from "@/types/service";

interface ServiceVisualProps {
  service: Service;
}

const themeGradients: Record<Service["visualTheme"], string> = {
  purple:
    "bg-[radial-gradient(circle_at_center,rgba(91,42,98,0.48),transparent_65%)]",
  blue:
    "bg-[radial-gradient(circle_at_center,rgba(73,40,194,0.36),transparent_65%)]",
  dark:
    "bg-[radial-gradient(circle_at_center,rgba(73,40,194,0.22),transparent_65%)]",
  magenta:
    "bg-[radial-gradient(circle_at_center,rgba(191,64,250,0.32),transparent_65%)]",
  periwinkle:
    "bg-[radial-gradient(circle_at_center,rgba(227,217,252,0.24),transparent_65%)]",
};

const themeAccents: Record<Service["visualTheme"], string> = {
  purple: "bg-[var(--color-velvet-purple)]",
  blue: "bg-[var(--color-ultrasonic-blue)]",
  dark: "bg-[var(--color-ultrasonic-blue)]",
  magenta: "bg-[var(--color-hyper-magenta)]",
  periwinkle: "bg-[var(--color-periwinkle)]",
};

export function ServiceVisual({ service }: ServiceVisualProps) {
  return (
    <div
      aria-hidden="true"
      className="relative aspect-square w-full overflow-hidden rounded-[var(--radius-xl)] bg-[var(--color-eonx-black)]"
    >
      <div
        className={`absolute inset-0 ${themeGradients[service.visualTheme]}`}
      />

      <div className="absolute inset-[15%] rounded-full border border-[var(--color-border-default)]" />

      <div className="absolute inset-[25%] rotate-[-15deg] rounded-[50%] border border-[rgba(191,64,250,0.24)]" />

      <div className="absolute inset-[35%] rotate-[25deg] rounded-[50%] border border-[rgba(227,217,252,0.28)]" />

      <div
        className={`absolute left-1/2 top-1/2 size-16 -translate-x-1/2 -translate-y-1/2 rounded-full ${themeAccents[service.visualTheme]} shadow-[var(--shadow-glow-blue)]`}
      />
    </div>
  );
}
