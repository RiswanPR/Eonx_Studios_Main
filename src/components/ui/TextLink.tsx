import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils/cn";

interface TextLinkProps extends ComponentProps<typeof Link> {
  showArrow?: boolean;
}

export function TextLink({
  children,
  className,
  showArrow = true,
  ...props
}: TextLinkProps) {
  return (
    <Link
      className={cn(
        "group inline-flex items-center gap-2",
        "type-body-sm",
        "text-[var(--foreground)]",
        "transition-colors duration-[var(--duration-fast)]",
        "hover:text-[var(--color-periwinkle)]",
        "focus-visible:outline-2",
        "focus-visible:outline-offset-4",
        "focus-visible:outline-[var(--color-periwinkle)]",
        className,
      )}
      {...props}
    >
      <span>{children}</span>

      {showArrow ? (
        <span
          aria-hidden="true"
          className="transition-transform duration-[var(--duration-standard)] group-hover:translate-x-1"
        >
          →
        </span>
      ) : null}
    </Link>
  );
}
