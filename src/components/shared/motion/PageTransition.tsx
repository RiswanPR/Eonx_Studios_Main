"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "@/lib/motion/gsap";
import { prefersReducedMotion } from "@/lib/motion/reducedMotion";

interface PageTransitionProps {
  children: React.ReactNode;
}

export function PageTransition({
  children,
}: PageTransitionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useLayoutEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    if (prefersReducedMotion()) {
      gsap.set(element, { opacity: 1 });
      return;
    }

    const animation = gsap.fromTo(
      element,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.35,
        ease: "power2.out",
      },
    );

    return () => {
      animation.kill();
    };
  }, [pathname]);

  return <div ref={ref}>{children}</div>;
}
