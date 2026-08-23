import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  size?: "lg" | "md" | "sm";
  muted?: boolean;
}

const sizeClasses = {
  lg: "type-body-lg",
  md: "type-body",
  sm: "type-body-sm",
};

export function Text({
  size = "md",
  muted = false,
  className,
  children,
  ...props
}: TextProps) {
  return (
    <p
      className={cn(
        sizeClasses[size],
        muted && "text-[var(--foreground-muted)]",
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
}