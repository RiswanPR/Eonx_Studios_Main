import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Label } from "@/components/ui/Label";
import { Section } from "@/components/ui/Section";
import { aboutContent } from "@/content/about/about";

const capabilityMap: Record<string, { slug: string; description: string }> = {
  Brand: {
    slug: "branding",
    description: "Strategy, identity and visual systems.",
  },
  Design: {
    slug: "web-design",
    description: "Digital experiences and interface design.",
  },
  Development: {
    slug: "web-development",
    description: "Modern frontend and technical systems.",
  },
  Content: {
    slug: "content-creation",
    description: "Creative visual and written content.",
  },
  Marketing: {
    slug: "digital-marketing",
    description: "Growth, campaigns and measurement.",
  },
  Technology: {
    slug: "web-development",
    description: "Architecture, performance and interaction.",
  },
};

export function AboutCapabilities() {
  return (
    <Section id="capabilities" spacing="large">
      <Container>
        <div className="mb-12">
          <Label>07 / Capabilities</Label>

          <h2 className="mt-6 max-w-[8ch] font-[var(--font-display)] text-[clamp(3.5rem,6vw,6rem)] leading-[0.9] tracking-[-0.05em]">
            WHAT WE DELIVER.
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {aboutContent.capabilities.map((cap, index) => {
            const mapped = capabilityMap[cap] ?? {
              slug: "branding",
              description: "",
            };

            return (
              <Link
                key={cap}
                href={`/services/${mapped.slug}`}
                data-service={mapped.slug}
                className="group flex flex-col justify-between rounded-[var(--radius-xl)] border border-[var(--color-border-subtle)] bg-[var(--color-surface-01)] p-8 transition-colors duration-[var(--duration-standard)] hover:border-[var(--color-border-default)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-periwinkle)]"
              >
                <div>
                  <span className="font-mono text-xs text-[var(--color-periwinkle)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="mt-6 font-[var(--font-display)] text-3xl tracking-[-0.02em] transition-colors group-hover:text-[var(--color-periwinkle)]">
                    {cap}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[var(--foreground-muted)]">
                    {mapped.description}
                  </p>
                </div>

                <span
                  aria-hidden="true"
                  className="mt-8 text-sm font-medium text-[var(--color-periwinkle)] transition-transform duration-[var(--duration-fast)] group-hover:translate-x-1"
                >
                  Explore service →
                </span>
              </Link>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
