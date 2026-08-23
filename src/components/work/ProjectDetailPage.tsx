import type { Project } from "@/types/project";
import { ProjectHero } from "@/components/work/ProjectHero";
import { ProjectOverview } from "@/components/work/ProjectOverview";
import { CaseStudySection } from "@/components/work/CaseStudySection";
import { ProjectTechnology } from "@/components/work/ProjectTechnology";
import { ProjectOutcome } from "@/components/work/ProjectOutcome";
import { ProjectGallery } from "@/components/work/ProjectGallery";
import { ProjectTestimonial } from "@/components/work/ProjectTestimonial";
import { RelatedServices } from "@/components/work/RelatedServices";
import { RelatedProjects } from "@/components/work/RelatedProjects";
import { NextProject } from "@/components/work/NextProject";
import { ProjectCTA } from "@/components/work/ProjectCTA";
import { SimpleFooter } from "@/components/shared/SimpleFooter";

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
      <SimpleFooter />
    </main>
  );
}
