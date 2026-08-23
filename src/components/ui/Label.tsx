import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

export function Label({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "type-label",
        "inline-flex items-center",
        "text-[var(--foreground-muted)]",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
