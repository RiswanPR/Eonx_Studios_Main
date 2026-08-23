"use client";

import type { ReactNode } from "react";
import { ButtonLink } from "@/components/ui/Button";
import { trackCTA } from "@/lib/analytics/events";

interface TrackedCTAProps {
  href: string;
  label: string;
  location: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  children?: ReactNode;
}

export function TrackedCTA({
  href,
  label,
  location,
  variant = "primary",
  size = "md",
  className,
  children,
}: TrackedCTAProps) {
  return (
    <ButtonLink
      href={href}
      variant={variant}
      size={size}
      className={className}
      data-analytics={`cta-${location}`}
      onClick={() => trackCTA(location, label)}
    >
      {children ?? label}
    </ButtonLink>
  );
}
