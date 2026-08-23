"use client";

import { useSyncExternalStore } from "react";
import { hasSeenIntro } from "./introStorage";

export interface IntroEligibility {
  ready: boolean;
  shouldPlay: boolean;
  reducedMotion: boolean;
  mobile: boolean;
}

const emptySubscribe = () => () => {};

function getClientSnapshot(): string {
  if (typeof window === "undefined") {
    return JSON.stringify({
      ready: false,
      shouldPlay: false,
      reducedMotion: false,
      mobile: false,
    });
  }

  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  const mobile = window.innerWidth < 768;
  const seen = hasSeenIntro();

  return JSON.stringify({
    ready: true,
    shouldPlay: !seen && !reducedMotion,
    reducedMotion,
    mobile,
  });
}

function getServerSnapshot(): string {
  return JSON.stringify({
    ready: false,
    shouldPlay: false,
    reducedMotion: false,
    mobile: false,
  });
}

export function useIntroEligibility(): IntroEligibility {
  const raw = useSyncExternalStore(
    emptySubscribe,
    getClientSnapshot,
    getServerSnapshot,
  );

  return JSON.parse(raw) as IntroEligibility;
}
