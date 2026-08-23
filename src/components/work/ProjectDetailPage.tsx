import type { Project } from "@/types/project";
import { CaseStudySection } from "@/components/work/CaseStudySection";
import { NextProject } from "@/components/work/NextProject";
import { ProjectCTA } from "@/components/work/ProjectCTA";
import { ProjectGallery } from "@/components/work/ProjectGallery";
import { ProjectHero } from "@/components/work/ProjectHero";
import { ProjectOutcome } from "@/components/work/ProjectOutcome";
import { ProjectOverview } from "@/components/work/ProjectOverview";
import { ProjectTechnology } from "@/components/work/ProjectTechnology";
import { ProjectTestimonial } from "@/components/work/ProjectTestimonial";
import { RelatedProjects } from "@/components/work/RelatedProjects";
import { RelatedServices } from "@/components/work/RelatedServices";

interface ProjectDetailPageProps {
  project: Project;
}

export function ProjectDetailPage({ project }: ProjectDetailPageProps) {
  return (
    <main>
      <ProjectHero project={project} />
      <ProjectOverview project={project} />

      <CaseStudySection
        eyebrow={project.challenge.eyebrow}
        title={project.challenge.title}
        body={project.challenge.body}
        media={project.challenge.media}
      />

      <CaseStudySection
        eyebrow={project.strategy.eyebrow}
        title={project.strategy.title}
        body={project.strategy.body}
        media={project.strategy.media}
        reversed
        surface
      />

      <CaseStudySection
        eyebrow={project.creativeDirection.eyebrow}
        title={project.creativeDirection.title}
        body={project.creativeDirection.body}
        media={project.creativeDirection.media}
      />

      <CaseStudySection
        eyebrow={project.execution.eyebrow}
        title={project.execution.title}
        body={project.execution.body}
        media={project.execution.media}
        reversed
        surface
      />

      <ProjectTechnology project={project} />
      <ProjectOutcome project={project} />
      <ProjectGallery project={project} />
      <ProjectTestimonial testimonial={project.testimonial} />

      <RelatedServices project={project} />
      <RelatedProjects project={project} />
      <NextProject project={project} />
      <ProjectCTA />
    </main>
  );
}
