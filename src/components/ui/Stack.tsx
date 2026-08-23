import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

interface StackProps extends HTMLAttributes<HTMLDivElement> {
  gap?: "sm" | "md" | "lg";
}

const gapClasses = {
  sm: "gap-[var(--space-4)]",
  md: "gap-[var(--space-8)]",
  lg: "gap-[var(--space-12)]",
};

export function Stack({
  gap = "md",
  className,
  children,
  ...props
}: StackProps) {
  return (
    <div
      className={cn(
        "flex flex-col",
        gapClasses[gap],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}