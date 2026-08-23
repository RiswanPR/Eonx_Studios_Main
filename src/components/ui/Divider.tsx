import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  strong?: boolean;
}

export function Divider({
  strong = false,
  className,
  ...props
}: DividerProps) {
  return (
    <hr
      className={cn(
        "m-0 w-full border-0 border-t",
        strong
          ? "border-[var(--color-border-strong)]"
          : "border-[var(--color-border-subtle)]",
        className,
      )}
      {...props}
    />
  );
}
