import type { Project } from "@/types/project";
import { Container } from "@/components/ui/Container";
import { Label } from "@/components/ui/Label";
import { Section } from "@/components/ui/Section";

interface ProjectOutcomeProps {
  project: Project;
}

export function ProjectOutcome({ project }: ProjectOutcomeProps) {
  return (
    <Section id="outcome" spacing="large">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <Label>06 / Outcome</Label>

            <h2 className="mt-6 max-w-[8ch] font-[var(--font-display)] text-[clamp(3.5rem,6vw,6rem)] leading-[0.9] tracking-[-0.05em]">
              {project.outcome.title}
            </h2>
          </div>

          <div className="lg:col-span-7">
            <p className="text-base leading-7 text-[var(--foreground-muted)] md:text-lg md:leading-8">
              {project.outcome.description}
            </p>

            {project.outcome.metrics && project.outcome.metrics.length > 0 && (
              <div className="mt-10 grid grid-cols-2 gap-6 border-t border-[var(--color-border-subtle)] pt-8 sm:grid-cols-3">
                {project.outcome.metrics.map((metric) => (
                  <div key={metric.label}>
                    <span className="font-[var(--font-display)] text-3xl text-[var(--color-periwinkle)] md:text-4xl">
                      {metric.value}
                    </span>
                    <p className="mt-1 text-xs uppercase tracking-[0.12em] text-[var(--foreground-muted)]">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}
