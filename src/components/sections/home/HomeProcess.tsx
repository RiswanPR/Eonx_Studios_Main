import { Container } from "@/components/ui/Container";
import { Label } from "@/components/ui/Label";
import { Section } from "@/components/ui/Section";
import { homeContent } from "@/content/site/home";

export function HomeProcess() {
  return (
    <Section id="process" spacing="large">
      <Container>
        <div className="mb-12">
          <Label>05 / Process</Label>

          <h2 className="mt-6 max-w-[8ch] font-[var(--font-display)] text-[clamp(3.5rem,6vw,6rem)] leading-[0.9] tracking-[-0.05em]">
            HOW WE WORK.
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {homeContent.process.map((step) => (
            <div
              key={step.number}
              className="rounded-[var(--radius-xl)] border border-[var(--color-border-subtle)] bg-[var(--color-surface-01)] p-8 transition-colors duration-[var(--duration-standard)] hover:border-[var(--color-border-default)]"
            >
              <span className="font-mono text-xs text-[var(--color-periwinkle)]">
                {step.number}
              </span>

              <h3 className="mt-6 font-[var(--font-display)] text-3xl tracking-[-0.03em]">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-[var(--foreground-muted)]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
