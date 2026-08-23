"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { navigationItems } from "@/config/navigation";
import { NavLink } from "./NavLink";
import { ServicesMegaMenu } from "./ServicesMegaMenu";
import { ServicesTrigger } from "./ServicesTrigger";

interface DesktopNavProps {
  onOpenCommand: () => void;
}

export function DesktopNav({ onOpenCommand }: DesktopNavProps) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  const isServicesActive = pathname.startsWith("/services");

  return (
    <nav
      aria-label="Primary Desktop Navigation"
      className="relative hidden items-center gap-1 md:flex"
    >
      {navigationItems.map((item) => {
        if (item.megaMenu === "services") {
          return (
            <div key={item.label} className="relative">
              <ServicesTrigger
                open={servicesOpen}
                active={isServicesActive}
                onClick={() => setServicesOpen((prev) => !prev)}
              />

              <ServicesMegaMenu
                open={servicesOpen}
                onClose={() => setServicesOpen(false)}
              />
            </div>
          );
        }

        return <NavLink key={item.label} label={item.label} href={item.href} />;
      })}

      {/* Command Palette Trigger */}
      <button
        type="button"
        onClick={onOpenCommand}
        aria-label="Open Eonx command center"
        className="group relative ml-2 flex items-center gap-1.5 rounded-full border border-[var(--color-border-default)] bg-[rgba(255,255,255,0.03)] px-3 py-1.5 text-[10px] font-mono uppercase tracking-[0.14em] text-[var(--color-text-muted)] transition-colors hover:border-[var(--color-border-strong)] hover:text-white"
      >
        <span>⌘K</span>
      </button>
    </nav>
  );
}
