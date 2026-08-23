import Link from "next/link";
import { services } from "@/content/services/services";
import type { Service } from "@/types/service";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

interface NextServiceProps {
  service: Service;
}

export function NextService({ service }: NextServiceProps) {
  const currentIndex = services.findIndex(
    (item) => item.slug === service.slug,
  );

  const next = services[(currentIndex + 1) % services.length];

  if (!next) {
    return null;
  }

  return (
    <Section
      spacing="small"
      className="border-t border-[var(--color-border-subtle)]"
    >
      <Container>
        <Link
          href={`/services/${next.slug}`}
          data-service={next.slug}
          className="group flex items-center justify-between gap-6 py-8"
        >
          <div>
            <span className="font-mono text-xs text-[var(--foreground-muted)]">
              NEXT SERVICE
            </span>

            <h2 className="mt-3 font-[var(--font-display)] text-4xl md:text-5xl">
              {next.name}
            </h2>
          </div>

          <span
            aria-hidden="true"
            className="text-3xl transition-transform duration-[var(--duration-standard)] group-hover:translate-x-2"
          >
            →
          </span>
        </Link>
      </Container>
    </Section>
  );
}
