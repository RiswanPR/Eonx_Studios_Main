"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  mainNavigation,
  primaryCta,
} from "@/config/navigation";
import { MegaMenu } from "@/components/navigation/MegaMenu";
import { ButtonLink } from "@/components/ui/Button";
import { cn } from "@/lib/utils/cn";

export function DesktopNav() {
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] =
    useState(false);

  return (
    <nav
      className="hidden items-center gap-8 md:flex"
      aria-label="Primary navigation"
      onMouseLeave={() => setServicesOpen(false)}
    >
      <div className="flex items-center gap-7">
        {mainNavigation.map((item) => {
          const isServices = Boolean(item.children);

          const active = isServices
            ? pathname.startsWith("/services")
            : pathname === item.href;

          if (isServices) {
            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() =>
                  setServicesOpen(true)
                }
              >
                <button
                  type="button"
                  className={cn(
                    "group inline-flex items-center gap-2",
                    "type-body-sm",
                    "text-[var(--foreground)]",
                    "transition-colors duration-[var(--duration-fast)]",
                    "hover:text-[var(--color-periwinkle)]",
                    "focus-visible:outline-2",
                    "focus-visible:outline-offset-4",
                    "focus-visible:outline-[var(--color-periwinkle)]",
                    active &&
                      "text-[var(--color-periwinkle)]",
                  )}
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                  onClick={() =>
                    setServicesOpen(
                      (current) => !current,
                    )
                  }
                >
                  {item.label}

                  <span
                    aria-hidden="true"
                    className={cn(
                      "text-xs transition-transform duration-[var(--duration-standard)]",
                      servicesOpen && "rotate-180",
                    )}
                  >
                    ↓
                  </span>
                </button>

                {servicesOpen ? (
                  <MegaMenu
                    items={item.children ?? []}
                    onClose={() =>
                      setServicesOpen(false)
                    }
                  />
                ) : null}
              </div>
            );
          }

          return (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "type-body-sm",
                "text-[var(--foreground)]",
                "transition-colors duration-[var(--duration-fast)]",
                "hover:text-[var(--color-periwinkle)]",
                "focus-visible:outline-2",
                "focus-visible:outline-offset-4",
                "focus-visible:outline-[var(--color-periwinkle)]",
                active &&
                  "text-[var(--color-periwinkle)]",
              )}
            >
              {item.label}
            </Link>
          );
        })}
      </div>

      <ButtonLink
        href={primaryCta.href}
        size="sm"
      >
        {primaryCta.label}
      </ButtonLink>
    </nav>
  );
}
