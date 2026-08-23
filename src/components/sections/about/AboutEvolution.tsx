import { Container } from "@/components/ui/Container";
import { Label } from "@/components/ui/Label";
import { Section } from "@/components/ui/Section";
import { aboutContent } from "@/content/about/about";

export function AboutEvolution() {
  return (
    <Section
      id="evolution"
      spacing="large"
      className="bg-[var(--color-surface-01)]"
    >
      <Container>
        <div className="mb-12">
          <Label>08 / Evolution</Label>

          <h2 className="mt-6 max-w-[8ch] font-[var(--font-display)] text-[clamp(3.5rem,6vw,6rem)] leading-[0.9] tracking-[-0.05em]">
            WHERE WE ARE HEADED.
          </h2>
        </div>

        <div className="flex flex-col">
          {aboutContent.evolution.map((stage) => (
            <div
              key={stage.year}
              className="grid gap-6 border-t border-[var(--color-border-subtle)] py-10 lg:grid-cols-12 lg:items-baseline"
            >
              <div className="lg:col-span-2">
                <span className="font-mono text-sm uppercase tracking-[0.14em] text-[var(--color-periwinkle)]">
                  {stage.year}
                </span>
              </div>

              <div className="lg:col-span-4">
                <h3 className="font-[var(--font-display)] text-3xl tracking-[-0.02em] md:text-4xl">
                  {stage.title}
                </h3>
              </div>

              <div className="lg:col-span-6">
                <p className="text-base leading-7 text-[var(--foreground-muted)] md:text-lg">
                  {stage.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
