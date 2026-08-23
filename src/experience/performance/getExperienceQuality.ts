import type { ExperienceQuality } from "@/experience/types/quality";

export function getExperienceQuality(): ExperienceQuality {
  if (typeof window === "undefined") {
    return "standard";
  }

  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (reducedMotion) {
    return "reduced";
  }

  const width = window.innerWidth;

  const connection = (
    navigator as Navigator & {
      connection?: {
        saveData?: boolean;
      };
    }
  ).connection;

  if (connection?.saveData) {
    return "reduced";
  }

  if (width < 768) {
    return "reduced";
  }

  return "high";
}
