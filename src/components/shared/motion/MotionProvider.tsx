"use client";

import { useEffect } from "react";
import { prefersReducedMotion } from "@/lib/motion/reducedMotion";

interface MotionProviderProps {
  children: React.ReactNode;
}

export function MotionProvider({
  children,
}: MotionProviderProps) {
  useEffect(() => {
    const updateMotionPreference = () => {
      document.documentElement.dataset.reducedMotion =
        prefersReducedMotion() ? "true" : "false";
    };

    updateMotionPreference();

    const mediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    const handleChange = () => {
      updateMotionPreference();
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange);
    } else {
      mediaQuery.addListener(handleChange);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", handleChange);
      } else {
        mediaQuery.removeListener(handleChange);
      }
    };
  }, []);

  return <>{children}</>;
}
