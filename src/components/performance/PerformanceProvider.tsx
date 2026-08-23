"use client";

import { createContext, useContext, useSyncExternalStore, type ReactNode } from "react";
import { isFinePointer, isReducedMotion, isWebGLAvailable } from "@/lib/performance/browser";
import { getEffectiveConnectionType, getSaveData } from "@/lib/performance/connection";

interface PerformanceState {
  reducedMotion: boolean;
  finePointer: boolean;
  webGLAvailable: boolean;
  saveData: boolean;
  effectiveConnectionType: string;
}

const defaultState: PerformanceState = {
  reducedMotion: false,
  finePointer: true,
  webGLAvailable: false,
  saveData: false,
  effectiveConnectionType: "4g",
};

let cachedState: PerformanceState | null = null;

function subscribe(callback: () => void) {
  if (typeof window === "undefined") {
    return () => {};
  }
  const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  const pointerQuery = window.matchMedia("(pointer: fine)");

  const update = () => {
    cachedState = {
      reducedMotion: isReducedMotion(),
      finePointer: isFinePointer(),
      webGLAvailable: isWebGLAvailable(),
      saveData: getSaveData(),
      effectiveConnectionType: getEffectiveConnectionType(),
    };
    callback();
  };

  motionQuery.addEventListener("change", update);
  pointerQuery.addEventListener("change", update);

  return () => {
    motionQuery.removeEventListener("change", update);
    pointerQuery.removeEventListener("change", update);
  };
}

function getSnapshot(): PerformanceState {
  if (!cachedState) {
    cachedState = {
      reducedMotion: isReducedMotion(),
      finePointer: isFinePointer(),
      webGLAvailable: isWebGLAvailable(),
      saveData: getSaveData(),
      effectiveConnectionType: getEffectiveConnectionType(),
    };
  }
  return cachedState;
}

function getServerSnapshot(): PerformanceState {
  return defaultState;
}

const PerformanceContext = createContext<PerformanceState>(defaultState);

export function PerformanceProvider({ children }: { children: ReactNode }) {
  const state = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return (
    <PerformanceContext.Provider value={state}>
      {children}
    </PerformanceContext.Provider>
  );
}

export function usePerformance() {
  return useContext(PerformanceContext);
}
