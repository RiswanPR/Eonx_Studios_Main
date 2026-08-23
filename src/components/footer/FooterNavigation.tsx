import Link from "next/link";
import { footerContent } from "@/content/footer/footer";

export function FooterNavigation() {
  return (
    <nav aria-label="Footer navigation">
      <p className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--foreground-muted)]">
        Explore
      </p>

      <ul className="mt-5 space-y-3">
        {footerContent.navigation.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="text-sm text-[var(--foreground-muted)] transition-colors duration-[var(--duration-fast)] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-periwinkle)]"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
