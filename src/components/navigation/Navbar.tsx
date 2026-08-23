"use client";

import { useCallback, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useCommandPalette } from "@/hooks/useCommandPalette";
import { cn } from "@/lib/utils/cn";
import { CommandPalette } from "./CommandPalette";
import { DesktopNav } from "./DesktopNav";
import { MobileMenu } from "./MobileMenu";
import { MobileMenuButton } from "./MobileMenuButton";
import { NavbarBackdrop } from "./NavbarBackdrop";
import { NavbarCTA } from "./NavbarCTA";
import { NavigationLogo } from "./NavigationLogo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [commandOpen, setCommandOpen] = useState(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  // Close overlays immediately when route changes
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileOpen(false);
    setCommandOpen(false);
  }

  // Passive threshold scroll listener
  useEffect(() => {
    const handleScroll = () => {
      const isPastThreshold = window.scrollY > 24;
      setScrolled((prev) => (prev === isPastThreshold ? prev : isPastThreshold));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Hook global ⌘K / Ctrl+K keyboard shortcut
  const handleOpenCommand = useCallback(() => {
    setMobileOpen(false);
    setCommandOpen(true);
  }, []);

  useCommandPalette(handleOpenCommand);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-3 md:top-5 z-[var(--z-navbar)]",
          "mx-auto w-[calc(100%-1.5rem)] md:w-[calc(100%-3rem)] max-w-[1520px]",
          "transition-all duration-[var(--duration-standard)]",
        )}
      >
        <div
          className={cn(
            "relative flex h-16 items-center justify-between px-5 md:px-8",
            "rounded-full transition-all duration-[var(--duration-standard)]",
            scrolled
              ? "eonx-glass-strong border border-[var(--color-border-default)] shadow-[var(--shadow-sm)]"
              : "border border-transparent bg-transparent",
          )}
        >
          {/* Subtle directional reflection on scroll */}
          <NavbarBackdrop active={scrolled} />

          {/* Left: Brand Identity */}
          <div className="relative z-10 flex items-center">
            <NavigationLogo />
          </div>

          {/* Center: Desktop Navigation & Mega Menu */}
          <div className="relative z-10">
            <DesktopNav onOpenCommand={handleOpenCommand} />
          </div>

          {/* Right: Conversion CTA & Mobile Toggle */}
          <div className="relative z-10 flex items-center gap-3">
            <div className="hidden sm:block">
              <NavbarCTA />
            </div>

            <MobileMenuButton
              open={mobileOpen}
              onClick={() => {
                setCommandOpen(false);
                setMobileOpen((prev) => !prev);
              }}
            />
          </div>
        </div>
      </header>

      {/* Full-screen Mobile Menu */}
      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        onOpenCommand={handleOpenCommand}
      />

      {/* Global ⌘K Command Palette */}
      <CommandPalette
        open={commandOpen}
        onClose={() => setCommandOpen(false)}
      />
    </>
  );
}
