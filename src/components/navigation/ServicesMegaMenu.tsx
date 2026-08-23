"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { services } from "@/content/services/services";
import { cn } from "@/lib/utils/cn";

interface ServicesMegaMenuProps {
  open: boolean;
  onClose: () => void;
}

export function ServicesMegaMenu({ open, onClose }: ServicesMegaMenuProps) {
  const [activeService, setActiveService] = useState(services[0]);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Close on route change
  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  // Handle click outside and Escape key
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      ref={menuRef}
      role="region"
      aria-label="Services Navigation Menu"
      className={cn(
        "absolute left-1/2 top-[calc(100%+12px)] w-[min(92vw,920px)] -translate-x-1/2",
        "animate-[eonx-menu-in_320ms_var(--ease-standard)_both]",
        "z-[var(--z-overlay)]",
      )}
    >
      <div className="eonx-glass-strong eonx-reflection overflow-hidden rounded-[28px] border border-[var(--color-border-default)] p-6 shadow-[var(--shadow-lg)]">
        <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
          {/* Service Links List */}
          <div className="flex flex-col justify-between border-b border-[var(--color-border-subtle)] pb-6 md:border-b-0 md:border-r md:pb-0 md:pr-6">
            <div>
              <div className="mb-3 flex items-center justify-between px-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
                  EONX / SERVICES
                </span>
                <Link
                  href="/services"
                  onClick={onClose}
                  className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-periwinkle)] transition-colors hover:text-white"
                >
                  View all ↗
                </Link>
              </div>

              <nav aria-label="Services Directory" className="grid grid-cols-1 gap-1">
                {services.map((service) => {
                  const isSelected = activeService.slug === service.slug;

                  return (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      onMouseEnter={() => setActiveService(service)}
                      onFocus={() => setActiveService(service)}
                      onClick={onClose}
                      className={cn(
                        "group flex items-center justify-between rounded-[var(--radius-md)] px-3 py-2",
                        "transition-colors duration-[var(--duration-fast)]",
                        isSelected
                          ? "bg-[rgba(255,255,255,0.06)] text-[var(--color-text-primary)]"
                          : "text-[var(--color-text-secondary)] hover:bg-[rgba(255,255,255,0.03)] hover:text-[var(--color-text-primary)]",
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-[11px] text-[var(--color-text-muted)] group-hover:text-[var(--color-periwinkle)]">
                          {service.number}
                        </span>
                        <span className="text-xs font-medium tracking-[0.02em]">
                          {service.name}
                        </span>
                      </div>

                      <span
                        aria-hidden="true"
                        className={cn(
                          "text-xs text-[var(--color-periwinkle)] transition-transform duration-[var(--duration-fast)]",
                          isSelected
                            ? "translate-x-0 opacity-100"
                            : "-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100",
                        )}
                      >
                        →
                      </span>
                    </Link>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Active Service Preview Pane */}
          <div className="relative flex flex-col justify-between overflow-hidden rounded-[20px] border border-[var(--color-border-subtle)] bg-[rgba(8,10,14,0.5)] p-6">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(73,40,194,0.22),transparent_55%)]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-10 -right-10 size-48 rounded-full border border-[rgba(191,64,250,0.12)]"
            />

            <div className="relative z-10">
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-periwinkle)]">
                {activeService.number} / FOCUS
              </span>

              <h3 className="mt-3 font-[var(--font-display)] text-3xl leading-tight text-white">
                {activeService.name}
              </h3>

              <p className="mt-3 text-xs leading-relaxed text-[var(--color-text-muted)]">
                {activeService.shortDescription}
              </p>
            </div>

            <div className="relative z-10 pt-6">
              <Link
                href={`/services/${activeService.slug}`}
                onClick={onClose}
                className="group inline-flex items-center gap-2 rounded-full border border-[var(--color-border-strong)] bg-[rgba(255,255,255,0.04)] px-4 py-2 text-[11px] font-medium text-[var(--color-periwinkle)] transition-colors hover:border-[var(--color-periwinkle)] hover:bg-[var(--color-periwinkle)] hover:text-[var(--color-eonx-black)]"
              >
                <span>Explore service</span>
                <span
                  aria-hidden="true"
                  className="transition-transform duration-[var(--duration-fast)] group-hover:translate-x-0.5"
                >
                  ↗
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
