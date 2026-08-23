import type { ExperienceQuality } from "@/experience/types/quality";
import { getDeviceTier } from "./deviceTier";

export function getExperienceQuality(): ExperienceQuality {
  if (typeof window === "undefined") {
    return "standard";
  }

  // 3D Emergency Kill Switch
  const enable3D = process.env.NEXT_PUBLIC_ENABLE_3D !== "false";
  if (!enable3D) {
    return "static";
  }

  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (reducedMotion) {
    return "reduced";
  }

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

  if (window.innerWidth < 768) {
    return "reduced";
  }

  const tier = getDeviceTier();

  if (tier === "high") {
    return "high";
  }

  if (tier === "standard") {
    return "standard";
  }

  return "reduced";
}
