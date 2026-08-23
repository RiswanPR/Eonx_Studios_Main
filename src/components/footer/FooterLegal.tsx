import Link from "next/link";
import { footerContent } from "@/content/footer/footer";

export function FooterLegal() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex flex-col items-center justify-between gap-4 border-t border-[var(--color-border-subtle)] pt-8 sm:flex-row">
      <p className="text-xs text-[var(--foreground-muted)]">
        &copy; {currentYear} Eonx Studios. All rights reserved.
      </p>

      <nav aria-label="Legal navigation">
        <ul className="flex flex-wrap items-center gap-6 text-xs text-[var(--foreground-muted)]">
          {footerContent.legal.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="transition-colors duration-[var(--duration-fast)] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-periwinkle)]"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
