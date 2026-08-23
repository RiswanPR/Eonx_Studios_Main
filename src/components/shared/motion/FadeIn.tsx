"use client";

import { useLayoutEffect, useRef } from "react";
import type { HTMLAttributes } from "react";
import { gsap } from "@/lib/motion/gsap";
import { motionConfig } from "@/lib/motion/config";
import { prefersReducedMotion } from "@/lib/motion/reducedMotion";
import { cn } from "@/lib/utils/cn";

interface FadeInProps extends HTMLAttributes<HTMLDivElement> {
  delay?: number;
  y?: number;
}

export function FadeIn({
  children,
  className,
  delay = 0,
  y = motionConfig.reveal.y,
  ...props
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    if (prefersReducedMotion()) {
      gsap.set(element, { opacity: 1, y: 0 });
      return;
    }

    let animation: gsap.core.Tween | null = null;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        animation = gsap.fromTo(
          element,
          {
            opacity: 0,
            y,
          },
          {
            opacity: 1,
            y: 0,
            duration: motionConfig.duration.smooth,
            delay,
            ease: motionConfig.ease.eonx,
          },
        );

        observer.disconnect();
      },
      {
        threshold: 0.15,
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      animation?.kill();
    };
  }, [delay, y]);

  return (
    <div ref={ref} className={cn(className)} {...props}>
      {children}
    </div>
  );
}
