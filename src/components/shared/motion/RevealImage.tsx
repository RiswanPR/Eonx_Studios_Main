"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "@/lib/motion/gsap";
import { motionConfig } from "@/lib/motion/config";
import { prefersReducedMotion } from "@/lib/motion/reducedMotion";

interface RevealImageProps {
  children: React.ReactNode;
  delay?: number;
}

export function RevealImage({
  children,
  delay = 0,
}: RevealImageProps) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    if (prefersReducedMotion()) {
      gsap.set(element, { clipPath: "inset(0 0% 0 0)" });
      return;
    }

    const animation = gsap.fromTo(
      element,
      {
        clipPath: "inset(0 100% 0 0)",
      },
      {
        clipPath: "inset(0 0% 0 0)",
        duration: motionConfig.duration.cinematic,
        delay,
        ease: motionConfig.ease.cinematic,
      },
    );

    return () => {
      animation.kill();
    };
  }, [delay]);

  return <div ref={ref}>{children}</div>;
}
