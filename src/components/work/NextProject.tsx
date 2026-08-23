import Link from "next/link";
import type { Project } from "@/types/project";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { projects } from "@/content/projects/projects";

interface NextProjectProps {
  project: Project;
}

export function NextProject({ project }: NextProjectProps) {
  if (projects.length <= 1) {
    return null;
  }

  const currentIndex = projects.findIndex(
    (item) => item.slug === project.slug,
  );

  const next = projects[(currentIndex + 1) % projects.length];

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
          href={`/work/${next.slug}`}
          data-project={next.slug}
          className="group flex items-center justify-between gap-6 py-8"
        >
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--foreground-muted)]">
              NEXT PROJECT
            </span>

            <h2 className="mt-3 font-[var(--font-display)] text-4xl md:text-5xl">
              {next.title}
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
