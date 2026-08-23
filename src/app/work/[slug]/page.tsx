import { notFound } from "next/navigation";
import { ProjectDetailPage } from "@/components/work/ProjectDetailPage";
import { getProject, projects } from "@/content/projects/projects";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {};
  }

  return {
    title: project.seo.title,
    description: project.seo.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailPage project={project} />;
}