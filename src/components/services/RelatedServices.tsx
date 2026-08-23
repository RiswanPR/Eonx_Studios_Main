import Link from "next/link";
import { getService } from "@/content/services/services";
import type { Service } from "@/types/service";
import { Container } from "@/components/ui/Container";
import { Label } from "@/components/ui/Label";
import { Section } from "@/components/ui/Section";

interface RelatedServicesProps {
  service: Service;
}

export function RelatedServices({ service }: RelatedServicesProps) {
  const related = service.relatedServices
    .map((slug) => getService(slug))
    .filter((item): item is Service => Boolean(item));

  if (related.length === 0) {
    return null;
  }

  return (
    <Section
      id="related-services"
      spacing="large"
      className="bg-[var(--color-surface-01)]"
    >
      <Container>
        <div className="mb-12">
          <Label>07 / Related Services</Label>

          <h2 className="mt-6 max-w-[8ch] font-[var(--font-display)] text-[clamp(3.5rem,6vw,6rem)] leading-[0.9] tracking-[-0.05em]">
            CONNECTED DISCIPLINES.
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((rel) => (
            <Link
              key={rel.slug}
              href={`/services/${rel.slug}`}
              data-service={rel.slug}
              className="group flex flex-col justify-between rounded-[var(--radius-xl)] border border-[var(--color-border-subtle)] bg-[var(--color-eonx-black)] p-8 transition-colors duration-[var(--duration-standard)] hover:border-[var(--color-border-default)]"
            >
              <div>
                <span className="font-mono text-xs text-[var(--color-periwinkle)]">
                  {rel.number}
                </span>

                <h3 className="mt-6 font-[var(--font-display)] text-3xl tracking-[-0.02em] transition-colors group-hover:text-[var(--color-periwinkle)]">
                  {rel.name}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[var(--foreground-muted)]">
                  {rel.shortDescription}
                </p>
              </div>

              <span
                aria-hidden="true"
                className="mt-8 text-sm font-medium text-[var(--color-periwinkle)] transition-transform duration-[var(--duration-fast)] group-hover:translate-x-1"
              >
                Explore service →
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
