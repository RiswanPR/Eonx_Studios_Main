import Link from "next/link";
import { services } from "@/content/services/services";

export function FooterServices() {
  return (
    <nav aria-label="Services navigation">
      <p className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--foreground-muted)]">
        Services
      </p>

      <ul className="mt-5 space-y-3">
        {services.map((service) => (
          <li key={service.slug}>
            <Link
              href={`/services/${service.slug}`}
              className="text-sm text-[var(--foreground-muted)] transition-colors duration-[var(--duration-fast)] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-periwinkle)]"
            >
              {service.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
