"use client";

import { useSyncExternalStore } from "react";
import type { LightQuality } from "./lightConfig";
import { lightConfig } from "./lightConfig";

function subscribeLight(callback: () => void) {
  if (typeof window === "undefined") {
    return () => {};
  }

  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", callback);
  window.addEventListener("resize", callback, { passive: true });

  return () => {
    media.removeEventListener("change", callback);
    window.removeEventListener("resize", callback);
  };
}

function getLightSnapshot(): LightQuality {
  if (typeof window === "undefined") {
    return "standard";
  }

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reducedMotion) {
    return "reduced";
  }

  if (window.innerWidth < 768) {
    return "reduced";
  }

  if (window.innerWidth >= 1440) {
    return "high";
  }

  return "standard";
}

function getLightServerSnapshot(): LightQuality {
  return "standard";
}

export function useLightIntensity() {
  const quality = useSyncExternalStore(
    subscribeLight,
    getLightSnapshot,
    getLightServerSnapshot,
  );

  return lightConfig[quality];
}
