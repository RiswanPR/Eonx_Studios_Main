"use client";

import { useState } from "react";
import Link from "next/link";
import { TrackedCTA } from "@/components/analytics/TrackedCTA";
import {
  mainNavigation,
  primaryCta,
} from "@/config/navigation";
import { cn } from "@/lib/utils/cn";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export function MobileNav({
  open,
  onClose,
}: MobileNavProps) {
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <div
      id="mobile-navigation"
      aria-hidden={!open}
      className={cn(
        "fixed inset-0 z-40 md:hidden",
        "bg-[var(--color-eonx-black)]",
        "transition-[opacity,visibility] duration-[var(--duration-standard)]",
        open
          ? "visible opacity-100"
          : "pointer-events-none invisible opacity-0",
      )}
    >
      <div className="flex h-full flex-col overflow-y-auto px-[var(--page-padding)] pb-8 pt-28">
        <nav
          aria-label="Mobile navigation"
          className="flex flex-col"
        >
          {mainNavigation.map((item, index) => {
            const isServices = Boolean(item.children);

            if (isServices) {
              return (
                <div
                  key={item.label}
                  className="border-b border-[var(--color-border-subtle)]"
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between py-5 text-left"
                    aria-expanded={servicesOpen}
                    onClick={() =>
                      setServicesOpen(
                        (current) => !current,
                      )
                    }
                  >
                    <span className="font-[var(--font-display)] text-3xl">
                      {item.label}
                    </span>

                    <span
                      aria-hidden="true"
                      className={cn(
                        "text-xl transition-transform duration-[var(--duration-standard)]",
                        servicesOpen && "rotate-45",
                      )}
                    >
                      +
                    </span>
                  </button>

                  <div
                    className={cn(
                      "grid transition-[grid-template-rows,opacity] duration-[var(--duration-standard)]",
                      servicesOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <div className="overflow-hidden">
                      <div className="space-y-1 pb-5">
                        {item.children?.map(
                          (service, serviceIndex) => (
                            <Link
                              key={service.href}
                              href={service.href}
                              onClick={onClose}
                              className="flex items-center gap-3 py-3 text-[var(--foreground-muted)]"
                            >
                              <span className="font-mono text-xs">
                                {String(
                                  serviceIndex + 1,
                                ).padStart(2, "0")}
                              </span>

                              <span className="type-body-sm">
                                {service.label}
                              </span>
                            </Link>
                          ),
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="border-b border-[var(--color-border-subtle)] py-5"
              >
                <span className="mr-4 font-mono text-xs text-[var(--foreground-muted)]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="font-[var(--font-display)] text-3xl">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto pt-10" onClick={onClose}>
          <TrackedCTA
            href={primaryCta.href}
            size="lg"
            className="w-full"
            location="navbar"
            label={primaryCta.label}
          >
            {primaryCta.label}
          </TrackedCTA>
        </div>
      </div>
    </div>
  );
}
