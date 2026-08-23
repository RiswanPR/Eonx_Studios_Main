"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils/cn";

interface NavLinkProps {
  label: string;
  href: string;
}

export function NavLink({ label, href }: NavLinkProps) {
  const pathname = usePathname();

  const active =
    pathname === href ||
    (href !== "/" && pathname.startsWith(`${href}/`));

  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={cn(
        "group relative rounded-full px-4 py-2.5",
        "text-[10px] uppercase tracking-[0.15em]",
        "transition-colors duration-[var(--duration-fast)]",
        active
          ? "text-[var(--color-text-primary)]"
          : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]",
      )}
    >
      <span>{label}</span>

      <span
        aria-hidden="true"
        className={cn(
          "absolute bottom-[5px] left-1/2 h-px -translate-x-1/2",
          "bg-[var(--color-periwinkle)]",
          "transition-all duration-[var(--duration-standard)]",
          active ? "w-4" : "w-0 group-hover:w-3",
        )}
      />
    </Link>
  );
}
