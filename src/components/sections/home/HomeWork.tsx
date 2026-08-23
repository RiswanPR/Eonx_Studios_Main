import { Container } from "@/components/ui/Container";
import { Label } from "@/components/ui/Label";
import { Section } from "@/components/ui/Section";
import { TextLink } from "@/components/ui/TextLink";
import { ProjectCard } from "@/components/work/ProjectCard";
import { projects } from "@/content/projects/projects";

export function HomeWork() {
  const featured = projects.slice(0, 3);

  return (
    <Section id="work" spacing="large">
      <Container>
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Label>03 / Selected Work</Label>

            <h2 className="mt-6 max-w-[8ch] font-[var(--font-display)] text-[clamp(3.5rem,6vw,6rem)] leading-[0.9] tracking-[-0.05em]">
              WORK THAT SPEAKS.
            </h2>
          </div>

          <TextLink href="/work">View all work</TextLink>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
