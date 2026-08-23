"use client";

import { cn } from "@/lib/utils/cn";

interface ServicesTriggerProps {
  open: boolean;
  active: boolean;
  onClick: () => void;
}

export function ServicesTrigger({
  open,
  active,
  onClick,
}: ServicesTriggerProps) {
  return (
    <button
      type="button"
      aria-expanded={open}
      aria-haspopup="true"
      onClick={onClick}
      className={cn(
        "group relative flex items-center gap-2",
        "rounded-full px-4 py-2.5",
        "text-[10px] uppercase tracking-[0.15em]",
        "transition-colors duration-[var(--duration-fast)]",
        active || open
          ? "text-[var(--color-text-primary)]"
          : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]",
      )}
    >
      <span>Services</span>

      <span
        aria-hidden="true"
        className={cn(
          "text-[9px] transition-transform duration-[var(--duration-standard)]",
          open && "rotate-180",
        )}
      >
        ↓
      </span>

      <span
        aria-hidden="true"
        className={cn(
          "absolute bottom-[5px] left-1/2 h-px -translate-x-1/2",
          "bg-[var(--color-periwinkle)]",
          "transition-all duration-[var(--duration-standard)]",
          active || open ? "w-4" : "w-0 group-hover:w-3",
        )}
      />
    </button>
  );
}
