import type {
  TextareaHTMLAttributes,
} from "react";
import { cn } from "@/lib/utils/cn";

export function Textarea({
  className,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "min-h-32 w-full resize-y rounded-[var(--radius-md)]",
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
        className,
      )}
      {...props}
    />
  );
}
