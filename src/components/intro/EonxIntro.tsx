"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { introConfig } from "@/lib/intro/introConfig";
import { markIntroSeen } from "@/lib/intro/introStorage";
import { useIntroEligibility } from "@/lib/intro/useIntroEligibility";
import { cn } from "@/lib/utils/cn";
import { IntroLight } from "./IntroLight";
import { IntroLogo } from "./IntroLogo";
import { IntroOrbital } from "./IntroOrbital";
import { IntroProgress } from "./IntroProgress";
import { IntroSkip } from "./IntroSkip";

type IntroStage =
  | "black"
  | "light"
  | "orbital"
  | "logo"
  | "atmosphere"
  | "reveal"
  | "done";

export function EonxIntro() {
  const { ready, shouldPlay, mobile } = useIntroEligibility();
  const [stage, setStage] = useState<IntroStage>("black");
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const rafRef = useRef<number | null>(null);
  const exitTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const failsafeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const isFinishedRef = useRef(false);

  const duration = mobile
    ? introConfig.mobileDuration
    : introConfig.maxDuration;

  const currentStages = mobile
    ? introConfig.mobileStages
    : introConfig.stages;

  // Complete and tear down intro
  const finish = useCallback(() => {
    if (isFinishedRef.current) return;
    isFinishedRef.current = true;

    markIntroSeen();

    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }

    if (failsafeTimeoutRef.current) {
      clearTimeout(failsafeTimeoutRef.current);
      failsafeTimeoutRef.current = null;
    }

    setIsExiting(true);

    exitTimeoutRef.current = setTimeout(() => {
      setIsDone(true);
      document.body.style.overflow = "";
    }, 220);
  }, []);

  // Main timeline runner
  useEffect(() => {
    if (!ready || !shouldPlay || isDone) return;

    // Lock body scroll while intro is playing
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Emergency failsafe timeout (hard anti-stuck guarantee)
    failsafeTimeoutRef.current = setTimeout(() => {
      finish();
    }, introConfig.failsafeDuration);

    const step = (time: number) => {
      if (isFinishedRef.current) return;

      if (startTimeRef.current === null) {
        startTimeRef.current = time;
      }

      const elapsed = time - startTimeRef.current;
      const normalized = Math.min(1, Math.max(0, elapsed / duration));
      setProgress(normalized);

      // Determine current stage
      if (elapsed >= currentStages.reveal) {
        setStage("reveal");
      } else if (elapsed >= currentStages.atmosphere) {
        setStage("atmosphere");
      } else if (elapsed >= currentStages.logo) {
        setStage("logo");
      } else if (elapsed >= currentStages.orbital) {
        setStage("orbital");
      } else if (elapsed >= currentStages.light) {
        setStage("light");
      } else {
        setStage("black");
      }

      if (elapsed >= duration) {
        finish();
      } else {
        rafRef.current = requestAnimationFrame(step);
      }
    };

    rafRef.current = requestAnimationFrame(step);

    // Escape key skip listener
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        finish();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = prevOverflow;

      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      if (exitTimeoutRef.current) {
        clearTimeout(exitTimeoutRef.current);
      }
      if (failsafeTimeoutRef.current) {
        clearTimeout(failsafeTimeoutRef.current);
      }
    };
  }, [ready, shouldPlay, isDone, duration, currentStages, finish]);

  // If not ready, or not eligible (reduced motion / already seen), or finished
  if (!ready || !shouldPlay || isDone) {
    return null;
  }

  const isOrbitalActive =
    stage === "orbital" ||
    stage === "logo" ||
    stage === "atmosphere" ||
    stage === "reveal";

  const isLogoActive =
    stage === "logo" || stage === "atmosphere" || stage === "reveal";

  return (
    <div
      role="region"
      aria-label="Eonx Cinematic Introduction"
      className={cn(
        "fixed inset-0 z-[var(--z-overlay)] flex items-center justify-center",
        "bg-[var(--color-eonx-black)] transition-opacity duration-200 ease-out",
        isExiting ? "pointer-events-none opacity-0" : "opacity-100",
      )}
    >
      {/* Subtle intro atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(73,40,194,0.15)_0%,transparent_60%)]"
      />

      {/* Skip Button */}
      <IntroSkip onSkip={finish} />

      {/* Cinematic Identity Cluster */}
      <div className="relative flex items-center justify-center">
        <IntroLight stage={stage} />
        <IntroOrbital active={isOrbitalActive} />
        <IntroLogo active={isLogoActive} />
      </div>

      {/* Progress Cue */}
      <IntroProgress progress={progress} />
    </div>
  );
}
