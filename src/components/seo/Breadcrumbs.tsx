import Link from "next/link";
import type { BreadcrumbItem } from "@/types/breadcrumb";

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.1em] text-[var(--foreground-muted)] ${className}`}
    >
      <Link
        href="/"
        className="transition-colors duration-[var(--duration-fast)] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-periwinkle)]"
      >
        Home
      </Link>

      {items.map((item) => (
        <span key={item.href} className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="text-[var(--color-border-default)]"
          >
            /
          </span>

          <Link
            href={item.href}
            className="transition-colors duration-[var(--duration-fast)] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-periwinkle)]"
          >
            {item.name}
          </Link>
        </span>
      ))}
    </nav>
  );
}
