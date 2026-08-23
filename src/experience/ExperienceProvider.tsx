"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  useSyncExternalStore,
} from "react";
import type { ReactNode } from "react";

import type { ExperienceQuality } from "@/experience/types/quality";
import { getExperienceQuality } from "@/experience/performance/getExperienceQuality";
import { isWebGLAvailable } from "@/experience/performance/isWebGLAvailable";

interface ExperienceContextValue {
  quality: ExperienceQuality;
  webGLAvailable: boolean;
  setQuality: (quality: ExperienceQuality) => void;
}

const ExperienceContext = createContext<ExperienceContextValue | null>(null);

let cachedQuality: ExperienceQuality | null = null;
let cachedWebGL: boolean | null = null;

function subscribeQuality(callback: () => void) {
  if (typeof window === "undefined") {
    return () => {};
  }
  const handleQualityUpdate = () => {
    cachedQuality = getExperienceQuality();
    cachedWebGL = isWebGLAvailable();
    callback();
  };

  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  mediaQuery.addEventListener("change", handleQualityUpdate);
  window.addEventListener("resize", handleQualityUpdate, { passive: true });

  return () => {
    mediaQuery.removeEventListener("change", handleQualityUpdate);
    window.removeEventListener("resize", handleQualityUpdate);
  };
}

function getQualitySnapshot(): ExperienceQuality {
  if (!cachedQuality) {
    cachedQuality = getExperienceQuality();
  }
  return cachedQuality;
}

function getQualityServerSnapshot(): ExperienceQuality {
  return "standard";
}

function getWebGLSnapshot(): boolean {
  if (cachedWebGL === null) {
    cachedWebGL = isWebGLAvailable();
  }
  return cachedWebGL;
}

function getWebGLServerSnapshot(): boolean {
  return false;
}

interface ExperienceProviderProps {
  children: ReactNode;
}

export function ExperienceProvider({ children }: ExperienceProviderProps) {
  const storeQuality = useSyncExternalStore(
    subscribeQuality,
    getQualitySnapshot,
    getQualityServerSnapshot,
  );
  const storeWebGL = useSyncExternalStore(
    subscribeQuality,
    getWebGLSnapshot,
    getWebGLServerSnapshot,
  );

  const [overrideQuality, setOverrideQuality] =
    useState<ExperienceQuality | null>(null);

  const quality = overrideQuality ?? storeQuality;
  const webGLAvailable = storeWebGL;

  const value = useMemo(
    () => ({
      quality,
      webGLAvailable,
      setQuality: setOverrideQuality,
    }),
    [quality, webGLAvailable],
  );

  return (
    <ExperienceContext.Provider value={value}>
      {children}
    </ExperienceContext.Provider>
  );
}

export function useExperience() {
  const context = useContext(ExperienceContext);

  if (!context) {
    throw new Error(
      "useExperience must be used inside ExperienceProvider",
    );
  }

  return context;
}
