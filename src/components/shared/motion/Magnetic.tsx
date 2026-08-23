"use client";

import { useEffect, useRef } from "react";
import type { HTMLAttributes, PointerEvent } from "react";
import { gsap } from "@/lib/motion/gsap";
import { motionConfig } from "@/lib/motion/config";
import { prefersReducedMotion } from "@/lib/motion/reducedMotion";

interface MagneticProps extends HTMLAttributes<HTMLDivElement> {
  strength?: number;
}

export function Magnetic({
  children,
  strength = motionConfig.magnetic.strength,
  ...props
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (event: PointerEvent<HTMLDivElement>) => {
    const element = ref.current;

    const finePointer =
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: fine)").matches;

    if (
      !element ||
      prefersReducedMotion() ||
      !finePointer ||
      event.pointerType === "touch"
    ) {
      return;
    }

    const rect = element.getBoundingClientRect();

    const x = event.clientX - (rect.left + rect.width / 2);
    const y = event.clientY - (rect.top + rect.height / 2);

    gsap.to(element, {
      x: x * strength,
      y: y * strength,
      duration: 0.35,
      ease: motionConfig.ease.eonx,
      overwrite: true,
    });
  };

  const handleLeave = () => {
    const element = ref.current;

    if (!element) {
      return;
    }

    gsap.to(element, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: motionConfig.ease.eonx,
      overwrite: true,
    });
  };

  useEffect(() => {
    const element = ref.current;
    return () => {
      if (element) {
        gsap.killTweensOf(element);
        gsap.set(element, { x: 0, y: 0 });
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      {...props}
    >
      {children}
    </div>
  );
}
