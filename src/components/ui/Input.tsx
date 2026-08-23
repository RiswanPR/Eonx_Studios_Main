import type {
  InputHTMLAttributes,
} from "react";
import { cn } from "@/lib/utils/cn";

export function Input({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "min-h-12 w-full rounded-[var(--radius-md)]",
        "border border-[var(--color-border-default)]",
        "bg-[var(--color-surface-01)]",
        "px-4 py-3",
        "text-[var(--foreground)]",
        "placeholder:text-[var(--foreground-muted)]",
        "transition-colors duration-[var(--duration-standard)]",
        "focus:border-[var(--color-ultrasonic-blue)]",
        "focus:outline-none",
        "focus:ring-2",
        "focus:ring-[rgba(73,40,194,0.3)]",
        "disabled:cursor-not-allowed",
        "disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}
