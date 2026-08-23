import { notFound } from "next/navigation";
import { StructuredData } from "@/components/seo/StructuredData";
import { ServiceDetailPage } from "@/components/services/ServiceDetailPage";
import { getService, services } from "@/content/services/services";
import { buildMetadata } from "@/lib/seo/metadata";
import { getBreadcrumbSchema, getServiceSchema } from "@/lib/seo/schema";

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

  return buildMetadata({
    title: service.seo.title,
    description: service.seo.description,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  const breadcrumbs = [
    {
      name: "Services",
      href: "/services",
    },
    {
      name: service.name,
      href: `/services/${service.slug}`,
    },
  ];

  return (
    <>
      <StructuredData data={getServiceSchema(service)} />
      <StructuredData data={getBreadcrumbSchema(breadcrumbs)} />
      <ServiceDetailPage service={service} />
    </>
  );
}
