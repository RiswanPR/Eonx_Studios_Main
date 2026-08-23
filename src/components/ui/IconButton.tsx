import type {
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { cn } from "@/lib/utils/cn";

interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  children: ReactNode;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: "size-9",
  md: "size-11",
  lg: "size-13",
};

export function IconButton({
  label,
  children,
  size = "md",
  className,
  ...props
}: IconButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      className={cn(
        "inline-flex items-center justify-center rounded-full",
        "border border-[var(--color-border-default)]",
        "text-[var(--foreground)]",
        "transition-all duration-[var(--duration-standard)]",
        "hover:border-[var(--color-border-strong)]",
        "hover:bg-[var(--color-surface-01)]",
        "focus-visible:outline-2",
        "focus-visible:outline-offset-4",
        "focus-visible:outline-[var(--color-periwinkle)]",
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
