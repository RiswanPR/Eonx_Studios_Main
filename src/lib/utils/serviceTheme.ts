import type { Service } from "@/types/service";

export function getServiceAccent(theme: Service["visualTheme"]): string {
  const accents: Record<Service["visualTheme"], string> = {
    purple: "var(--color-velvet-purple)",
    blue: "var(--color-ultrasonic-blue)",
    dark: "var(--color-ultrasonic-blue)",
    magenta: "var(--color-hyper-magenta)",
    periwinkle: "var(--color-periwinkle)",
  };

  return accents[theme];
}
