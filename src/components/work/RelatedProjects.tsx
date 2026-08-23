import type { Project } from "@/types/project";
import { ProjectCard } from "@/components/work/ProjectCard";
import { Container } from "@/components/ui/Container";
import { Label } from "@/components/ui/Label";
import { Section } from "@/components/ui/Section";
import { getProject, projects } from "@/content/projects/projects";

interface RelatedProjectsProps {
  project: Project;
}

export function RelatedProjects({ project }: RelatedProjectsProps) {
  let related: Project[] = [];

  if (project.relatedProjects && project.relatedProjects.length > 0) {
    related = project.relatedProjects
      .map((slug) => getProject(slug))
      .filter(
        (item): item is Project => item !== undefined && item.slug !== project.slug,
      );
  }

  if (related.length === 0) {
    related = projects.filter((p) => p.slug !== project.slug);
  }

  if (related.length === 0) {
    return null;
  }

  return (
    <Section id="related-projects" spacing="large">
      <Container>
        <div className="mb-12">
          <Label>10 / Related Work</Label>

          <h2 className="mt-6 max-w-[8ch] font-[var(--font-display)] text-[clamp(3.5rem,6vw,6rem)] leading-[0.9] tracking-[-0.05em]">
            EXPLORE MORE.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {related.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
