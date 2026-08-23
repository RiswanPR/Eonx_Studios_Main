"use client";

import { useEffect, useState } from "react";
import { DesktopNav } from "@/components/navigation/DesktopNav";
import { MobileNav } from "@/components/navigation/MobileNav";
import { NavigationLogo } from "@/components/navigation/NavigationLogo";
import { cn } from "@/lib/utils/cn";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll,
      );
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen
      ? "hidden"
      : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    };

    document.addEventListener(
      "keydown",
      handleKeyDown,
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown,
      );
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50",
          "transition-all duration-[var(--duration-standard)]",
          scrolled
            ? "border-b border-[var(--color-border-subtle)] bg-[rgba(4,6,7,0.78)] backdrop-blur-[var(--blur-md)]"
            : "bg-transparent",
        )}
      >
        <div className="mx-auto flex h-20 w-full max-w-[var(--container-max)] items-center justify-between px-[var(--page-padding)]">
          <NavigationLogo />

          <DesktopNav />

          <button
            type="button"
            aria-label={
              mobileOpen
                ? "Close navigation"
                : "Open navigation"
            }
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            className="relative z-50 inline-flex size-11 items-center justify-center rounded-full border border-[var(--color-border-default)] text-[var(--foreground)] md:hidden"
            onClick={() =>
              setMobileOpen((current) => !current)
            }
          >
            <span
              aria-hidden="true"
              className="relative block h-4 w-5"
            >
              <span
                className={cn(
                  "absolute left-0 top-0 h-px w-full bg-current transition-transform duration-[var(--duration-standard)]",
                  mobileOpen &&
                    "top-1/2 -translate-y-1/2 rotate-45",
                )}
              />

              <span
                className={cn(
                  "absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-current transition-opacity duration-[var(--duration-fast)]",
                  mobileOpen && "opacity-0",
                )}
              />

              <span
                className={cn(
                  "absolute bottom-0 left-0 h-px w-full bg-current transition-transform duration-[var(--duration-standard)]",
                  mobileOpen &&
                    "bottom-1/2 translate-y-1/2 -rotate-45",
                )}
              />
            </span>
          </button>
        </div>
      </header>

      <MobileNav
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />
    </>
  );
}
