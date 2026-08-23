"use client";

import { useSyncExternalStore } from "react";
import {
  atmosphereConfig,
  type AtmosphereIntensity,
  type AtmosphereProfile,
} from "./atmosphereConfig";

function getSnapshot(): AtmosphereProfile {
  if (typeof window === "undefined") {
    return "desktop";
  }

  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (reducedMotion) {
    return "reducedMotion";
  }

  if (window.innerWidth < 768) {
    return "mobile";
  }

  if (window.innerWidth < 1024) {
    return "tablet";
  }

  return "desktop";
}

function getServerSnapshot(): AtmosphereProfile {
  return "desktop";
}

function subscribe(callback: () => void) {
  if (typeof window === "undefined") {
    return () => {};
  }

  window.addEventListener("resize", callback);

  const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  motionQuery.addEventListener("change", callback);

  return () => {
    window.removeEventListener("resize", callback);
    motionQuery.removeEventListener("change", callback);
  };
}

export function useAtmosphereIntensity(): AtmosphereIntensity {
  const profile = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  return atmosphereConfig[profile];
}
