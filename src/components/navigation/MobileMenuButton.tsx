"use client";

import { cn } from "@/lib/utils/cn";

interface MobileMenuButtonProps {
  open: boolean;
  onClick: () => void;
}

export function MobileMenuButton({ open, onClick }: MobileMenuButtonProps) {
  return (
    <button
      type="button"
      aria-label={open ? "Close navigation" : "Open navigation"}
      aria-expanded={open}
      aria-controls="mobile-navigation"
      onClick={onClick}
      className="relative z-50 inline-flex size-10 items-center justify-center rounded-full border border-[var(--color-border-default)] bg-[rgba(255,255,255,0.03)] text-[var(--color-text-primary)] transition-colors hover:border-[var(--color-border-strong)] md:hidden"
    >
      <span aria-hidden="true" className="relative block h-3.5 w-4">
        <span
          className={cn(
            "absolute left-0 top-0 h-px w-full bg-current transition-transform duration-[var(--duration-standard)]",
            open && "top-1/2 -translate-y-1/2 rotate-45",
          )}
        />
        <span
          className={cn(
            "absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-current transition-opacity duration-[var(--duration-fast)]",
            open && "opacity-0",
          )}
        />
        <span
          className={cn(
            "absolute bottom-0 left-0 h-px w-full bg-current transition-transform duration-[var(--duration-standard)]",
            open && "bottom-1/2 translate-y-1/2 -rotate-45",
          )}
        />
      </span>
    </button>
  );
}
