"use client";

import { cn } from "@/lib/utils/cn";

interface ProjectFilterProps {
  categories: string[];
  active: string;
  onChange: (category: string) => void;
}

export function ProjectFilter({
  categories,
  active,
  onChange,
}: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap gap-2" aria-label="Project filters">
      {categories.map((category) => {
        const selected = active === category;

        return (
          <button
            key={category}
            type="button"
            onClick={() => onChange(category)}
            aria-pressed={selected}
            data-filter={category}
            className={cn(
              "rounded-full border px-4 py-2 text-xs uppercase tracking-[0.12em]",
              "transition-colors duration-[var(--duration-standard)]",
              "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-periwinkle)]",
              selected
                ? "border-[var(--color-periwinkle)] bg-[var(--color-periwinkle)] text-[var(--color-eonx-black)]"
                : "border-[var(--color-border-default)] text-[var(--foreground-muted)] hover:border-[var(--color-border-strong)] hover:text-[var(--foreground)]",
            )}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
