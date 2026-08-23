"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { services } from "@/content/services/services";
import { trackCTA } from "@/lib/analytics/events";
import { cn } from "@/lib/utils/cn";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  onOpenCommand?: () => void;
}

export function MobileMenu({ open, onClose, onOpenCommand }: MobileMenuProps) {
  const [servicesExpanded, setServicesExpanded] = useState(false);
  const pathname = usePathname();

  // Close on route change
  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  // Lock body scroll while open
  useEffect(() => {
    if (open) {
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prevOverflow;
      };
    }
  }, [open]);

  // Escape key handler
  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      id="mobile-navigation"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
      className="fixed inset-0 z-[var(--z-overlay)] flex flex-col bg-[var(--color-eonx-black)] md:hidden"
    >
      {/* Subtle Background Atmosphere for Mobile */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(73,40,194,0.2),transparent_60%)]"
      />

      <div className="relative z-10 flex h-full flex-col overflow-y-auto px-6 pb-8 pt-24">
        {/* Quick Search Shortcut */}
        {onOpenCommand && (
          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenCommand();
            }}
            className="mb-6 flex w-full items-center justify-between rounded-xl border border-[var(--color-border-default)] bg-[rgba(255,255,255,0.03)] px-4 py-3 text-xs text-[var(--color-text-muted)]"
          >
            <span>Search commands or services...</span>
            <span className="font-mono text-[10px]">⌘K</span>
          </button>
        )}

        <nav aria-label="Mobile Navigation Links" className="flex flex-col">
          {/* About */}
          <Link
            href="/about"
            onClick={onClose}
            className="flex items-center justify-between border-b border-[var(--color-border-subtle)] py-4 font-[var(--font-display)] text-3xl text-[var(--color-text-primary)]"
          >
            <span>About</span>
            <span className="font-mono text-xs text-[var(--color-text-muted)]">
              01
            </span>
          </Link>

          {/* Services Accordion */}
          <div className="border-b border-[var(--color-border-subtle)]">
            <button
              type="button"
              aria-expanded={servicesExpanded}
              onClick={() => setServicesExpanded((prev) => !prev)}
              className="flex w-full items-center justify-between py-4 text-left font-[var(--font-display)] text-3xl text-[var(--color-text-primary)]"
            >
              <span>Services</span>
              <span
                aria-hidden="true"
                className={cn(
                  "font-mono text-lg text-[var(--color-text-muted)] transition-transform duration-[var(--duration-standard)]",
                  servicesExpanded && "rotate-45",
                )}
              >
                +
              </span>
            </button>

            {servicesExpanded && (
              <div className="space-y-1 pb-4 pl-4 animate-[eonx-mobile-menu_240ms_var(--ease-standard)_both]">
                <Link
                  href="/services"
                  onClick={onClose}
                  className="block py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-periwinkle)]"
                >
                  All Services ↗
                </Link>

                {services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    onClick={onClose}
                    className="flex items-center gap-3 py-2 text-sm text-[var(--color-text-secondary)] hover:text-white"
                  >
                    <span className="font-mono text-[10px] text-[var(--color-text-muted)]">
                      {service.number}
                    </span>
                    <span>{service.name}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Work */}
          <Link
            href="/work"
            onClick={onClose}
            className="flex items-center justify-between border-b border-[var(--color-border-subtle)] py-4 font-[var(--font-display)] text-3xl text-[var(--color-text-primary)]"
          >
            <span>Work</span>
            <span className="font-mono text-xs text-[var(--color-text-muted)]">
              03
            </span>
          </Link>
        </nav>

        {/* Mobile CTA */}
        <div className="mt-auto pt-8">
          <Link
            href="/book-a-call"
            onClick={() => {
              trackCTA("navbar", "Book a Call");
              onClose();
            }}
            className="flex w-full items-center justify-center gap-3 rounded-full bg-[var(--color-periwinkle)] py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-eonx-black)]"
          >
            <span>Book a Call</span>
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
