import type { Project } from "@/types/project";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

interface ProjectOverviewProps {
  project: Project;
}

export function ProjectOverview({ project }: ProjectOverviewProps) {
  const metadata = [
    { label: "Client", value: project.client ?? "—" },
    { label: "Industry", value: project.industry ?? "—" },
    { label: "Year", value: project.year ? String(project.year) : "—" },
    {
      label: "Services",
      value: project.services.length > 0 ? project.services.join(", ") : "—",
    },
  ];

  return (
    <Section
      spacing="default"
      className="border-y border-[var(--color-border-subtle)] bg-[var(--color-surface-01)]"
    >
      <Container>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {metadata.map((item) => (
            <div key={item.label}>
              <span className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--foreground-muted)]">
                {item.label}
              </span>
              <p className="mt-2 font-[var(--font-display)] text-xl tracking-[-0.02em] md:text-2xl">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
