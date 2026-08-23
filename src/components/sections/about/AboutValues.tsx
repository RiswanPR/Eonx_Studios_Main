import { Container } from "@/components/ui/Container";
import { Label } from "@/components/ui/Label";
import { Section } from "@/components/ui/Section";
import { aboutContent } from "@/content/about/about";

export function AboutValues() {
  return (
    <Section id="values" spacing="large">
      <Container>
        <div className="mb-12">
          <Label>03 / Values</Label>

          <h2 className="mt-6 max-w-[8ch] font-[var(--font-display)] text-[clamp(3.5rem,6vw,6rem)] leading-[0.9] tracking-[-0.05em]">
            PRINCIPLES THAT GUIDE US.
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {aboutContent.values.map((val) => (
            <div
              key={val.number}
              className="rounded-[var(--radius-xl)] border border-[var(--color-border-subtle)] bg-[var(--color-surface-01)] p-8 transition-colors duration-[var(--duration-standard)] hover:border-[var(--color-border-default)]"
            >
              <span className="font-mono text-xs text-[var(--color-periwinkle)]">
                {val.number}
              </span>

              <h3 className="mt-6 font-[var(--font-display)] text-3xl tracking-[-0.03em]">
                {val.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-[var(--foreground-muted)]">
                {val.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
