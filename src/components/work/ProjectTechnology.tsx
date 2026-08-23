import type { Project } from "@/types/project";
import { Container } from "@/components/ui/Container";
import { Label } from "@/components/ui/Label";
import { Section } from "@/components/ui/Section";

interface ProjectTechnologyProps {
  project: Project;
}

export function ProjectTechnology({ project }: ProjectTechnologyProps) {
  return (
    <Section
      id="technology"
      spacing="large"
      className="bg-[var(--color-surface-01)]"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Label>05 / Capabilities & Stack</Label>

            <h2 className="mt-6 max-w-[8ch] font-[var(--font-display)] text-[clamp(3.5rem,6vw,6rem)] leading-[0.9] tracking-[-0.05em]">
              HOW IT WAS BUILT.
            </h2>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-8 sm:grid-cols-2">
              <div className="rounded-[var(--radius-xl)] border border-[var(--color-border-subtle)] bg-[var(--color-eonx-black)] p-8">
                <span className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--color-periwinkle)]">
                  Services
                </span>
                <ul className="mt-6 flex flex-col gap-3">
                  {project.services.map((service) => (
                    <li
                      key={service}
                      className="font-[var(--font-display)] text-2xl tracking-[-0.02em]"
                    >
                      {service}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[var(--radius-xl)] border border-[var(--color-border-subtle)] bg-[var(--color-eonx-black)] p-8">
                <span className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--color-periwinkle)]">
                  Technologies
                </span>
                <ul className="mt-6 flex flex-col gap-3">
                  {project.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="font-[var(--font-display)] text-2xl tracking-[-0.02em]"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
