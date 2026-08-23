import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

export function Grid({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "grid grid-cols-4 gap-[var(--grid-gap)] md:grid-cols-8 lg:grid-cols-12",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}