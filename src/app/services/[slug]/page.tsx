import { notFound } from "next/navigation";
import { ServiceDetailPage } from "@/components/services/ServiceDetailPage";
import { getService, services } from "@/content/services/services";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return {};
  }

  return {
    title: service.seo.title,
    description: service.seo.description,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailPage service={service} />;
}
