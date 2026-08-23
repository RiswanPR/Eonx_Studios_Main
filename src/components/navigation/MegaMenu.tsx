"use client";

import Link from "next/link";
import { useState } from "react";
import type { NavigationItem } from "@/types/navigation";
import { ArrowRight } from "@/components/ui/icons/ArrowRight";
import { cn } from "@/lib/utils/cn";

interface MegaMenuProps {
  items: NavigationItem[];
  onClose: () => void;
}

export function MegaMenu({
  items,
  onClose,
}: MegaMenuProps) {
  const [active, setActive] = useState(items[0]);

  if (!active) {
    return null;
  }

  return (
    <div
      className="absolute left-1/2 top-full w-[min(92vw,880px)] -translate-x-1/2 pt-4"
      role="menu"
    >
      <div className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[rgba(9,10,16,0.96)] shadow-[var(--shadow-lg)] backdrop-blur-[var(--blur-lg)]">
        <div className="grid grid-cols-[1fr_1fr]">
          <div className="border-r border-[var(--color-border-subtle)] p-5">
            <div className="mb-4">
              <span className="type-label text-[var(--foreground-muted)]">
                Services
              </span>
            </div>

            <div className="space-y-1">
              {items.map((item, index) => {
                const selected =
                  active.href === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    role="menuitem"
                    onMouseEnter={() =>
                      setActive(item)
                    }
                    onFocus={() =>
                      setActive(item)
                    }
                    onClick={onClose}
                    className={cn(
                      "group flex items-center gap-4 rounded-[var(--radius-md)] px-4 py-3",
                      "transition-colors duration-[var(--duration-standard)]",
                      "focus-visible:outline-2",
                      "focus-visible:outline-[var(--color-periwinkle)]",
                      selected
                        ? "bg-[var(--color-surface-02)] text-[var(--color-periwinkle)]"
                        : "text-[var(--foreground)] hover:bg-[var(--color-surface-01)]",
                    )}
                  >
                    <span className="font-mono text-xs text-[var(--foreground-muted)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="type-body-sm">
                      {item.label}
                    </span>

                    <span
                      aria-hidden="true"
                      className={cn(
                        "ml-auto opacity-0 transition-all duration-[var(--duration-standard)]",
                        selected &&
                          "translate-x-0 opacity-100",
                        !selected &&
                          "translate-x-[-4px]",
                      )}
                    >
                      →
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="relative flex min-h-[420px] flex-col justify-between overflow-hidden p-8">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(73,40,194,0.28),transparent_55%)]"
            />

            <div
              aria-hidden="true"
              className="absolute right-[-15%] top-[10%] size-72 rounded-full border border-[rgba(191,64,250,0.2)]"
            />

            <div className="relative z-10">
              <span className="type-label text-[var(--color-periwinkle)]">
                {active.label}
              </span>

              <h3 className="mt-5 max-w-[15ch] font-[var(--font-display)] text-5xl leading-[0.95] tracking-[var(--tracking-display)] md:text-6xl">
                {active.label}
              </h3>
            </div>

            <div className="relative z-10">
              <p className="type-body-sm max-w-md text-[var(--foreground-muted)]">
                {active.description}
              </p>

              <Link
                href={active.href}
                onClick={onClose}
                className="group mt-6 inline-flex items-center gap-3 text-sm font-medium text-[var(--color-periwinkle)]"
              >
                Explore service

                <span className="transition-transform duration-[var(--duration-standard)] group-hover:translate-x-1">
                  <ArrowRight />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
