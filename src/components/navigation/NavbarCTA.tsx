"use client";

import Link from "next/link";
import { trackCTA } from "@/lib/analytics/events";

export function NavbarCTA() {
  const handleClick = () => {
    trackCTA("navbar", "Book a Call");
  };

  return (
    <Link
      href="/book-a-call"
      onClick={handleClick}
      className="group inline-flex items-center gap-3 rounded-full bg-[var(--color-periwinkle)] px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--color-eonx-black)] transition-transform duration-[var(--duration-fast)] hover:-translate-y-0.5"
    >
      <span>Book a Call</span>
      <span
        aria-hidden="true"
        className="transition-transform duration-[var(--duration-fast)] group-hover:translate-x-0.5"
      >
        ↗
      </span>
    </Link>
  );
}
