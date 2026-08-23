import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  spacing?: "default" | "large" | "small" | "none";
}

const spacingClasses = {
  default: "py-[var(--space-24)]",
  large: "py-[var(--space-40)]",
  small: "py-[var(--space-16)]",
  none: "py-0",
};

export function Section({
  className,
  spacing = "default",
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(spacingClasses[spacing], className)}
      {...props}
    >
      {children}
    </section>
  );
}