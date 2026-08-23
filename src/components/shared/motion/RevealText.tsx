"use client";

import { useLayoutEffect, useRef } from "react";
import type { HTMLAttributes } from "react";
import { gsap } from "@/lib/motion/gsap";
import { motionConfig } from "@/lib/motion/config";
import { prefersReducedMotion } from "@/lib/motion/reducedMotion";
import { cn } from "@/lib/utils/cn";

interface RevealTextProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  delay?: number;
}

export function RevealText({
  children,
  delay = 0,
  className,
  ...props
}: RevealTextProps) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    if (prefersReducedMotion()) {
      gsap.set(element, { opacity: 1, yPercent: 0, filter: "blur(0px)" });
      return;
    }

    const animation = gsap.fromTo(
      element,
      {
        opacity: 0,
        yPercent: 110,
        filter: `blur(${motionConfig.reveal.blur}px)`,
      },
      {
        opacity: 1,
        yPercent: 0,
        filter: "blur(0px)",
        duration: motionConfig.duration.smooth,
        delay,
        ease: motionConfig.ease.eonx,
      },
    );

    return () => {
      animation.kill();
    };
  }, [delay]);

  return (
    <div className="overflow-hidden" {...props}>
      <div
        ref={ref}
        className={cn(
          "will-change-transform",
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
}
