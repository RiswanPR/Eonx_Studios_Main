"use client";

import { useLayoutEffect, useRef } from "react";
import type { HTMLAttributes } from "react";
import { createScrollReveal } from "@/lib/motion/scroll";
import { cn } from "@/lib/utils/cn";

export function ScrollReveal({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    return createScrollReveal(element);
  }, []);

  return (
    <div ref={ref} className={cn(className)} {...props}>
      {children}
    </div>
  );
}
