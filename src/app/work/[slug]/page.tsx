import { notFound } from "next/navigation";
import { StructuredData } from "@/components/seo/StructuredData";
import { ProjectDetailPage } from "@/components/work/ProjectDetailPage";
import { getProject, projects } from "@/content/projects/projects";
import { buildMetadata } from "@/lib/seo/metadata";
import { getBreadcrumbSchema, getProjectSchema } from "@/lib/seo/schema";

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

  return buildMetadata({
    title: project.seo.title,
    description: project.seo.description,
    path: `/work/${project.slug}`,
  });
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const breadcrumbs = [
    {
      name: "Work",
      href: "/work",
    },
    {
      name: project.title,
      href: `/work/${project.slug}`,
    },
  ];

  return (
    <>
      <StructuredData data={getProjectSchema(project)} />
      <StructuredData data={getBreadcrumbSchema(breadcrumbs)} />
      <ProjectDetailPage project={project} />
    </>
  );
}