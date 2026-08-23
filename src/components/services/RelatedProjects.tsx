import type { Service } from "@/types/service";
import { Container } from "@/components/ui/Container";
import { Label } from "@/components/ui/Label";
import { Section } from "@/components/ui/Section";
import { TextLink } from "@/components/ui/TextLink";
import { ProjectCard } from "@/components/work/ProjectCard";
import { projects } from "@/content/projects/projects";

interface RelatedProjectsProps {
  service: Service;
}

export function RelatedProjects({ service }: RelatedProjectsProps) {
  const relatedProjects = projects.filter((project) =>
    project.services.some(
      (projectService) =>
        service.name.toLowerCase() === projectService.toLowerCase() ||
        service.slug.toLowerCase() === projectService.toLowerCase(),
    ),
  );

  if (relatedProjects.length === 0) {
    return null;
  }

  return (
    <Section id="work" spacing="large">
      <Container>
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Label>04 / Selected Work</Label>

            <h2 className="mt-6 max-w-[8ch] font-[var(--font-display)] text-[clamp(3.5rem,6vw,6rem)] leading-[0.9] tracking-[-0.05em]">
              RECENT WORK.
            </h2>
          </div>

          <TextLink href="/work">View all work</TextLink>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {relatedProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
