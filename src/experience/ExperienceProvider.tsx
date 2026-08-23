"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  useEffect,
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

interface ExperienceProviderProps {
  children: ReactNode;
}

export function ExperienceProvider({ children }: ExperienceProviderProps) {
  const [quality, setQuality] = useState<ExperienceQuality>(getExperienceQuality);
  const [webGLAvailable, setWebGLAvailable] = useState<boolean>(isWebGLAvailable);

  useEffect(() => {
    const handleQualityUpdate = () => {
      setQuality(getExperienceQuality());
      setWebGLAvailable(isWebGLAvailable());
    };

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    mediaQuery.addEventListener("change", handleQualityUpdate);
    window.addEventListener("resize", handleQualityUpdate, { passive: true });

    return () => {
      mediaQuery.removeEventListener("change", handleQualityUpdate);
      window.removeEventListener("resize", handleQualityUpdate);
    };
  }, []);

  const value = useMemo(
    () => ({
      quality,
      webGLAvailable,
      setQuality,
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
