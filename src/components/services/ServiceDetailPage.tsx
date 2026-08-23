import type { Service } from "@/types/service";
import { NextService } from "@/components/services/NextService";
import { RelatedProjects } from "@/components/services/RelatedProjects";
import { RelatedServices } from "@/components/services/RelatedServices";
import { ServiceCTA } from "@/components/services/ServiceCTA";
import { ServiceCapabilities } from "@/components/services/ServiceCapabilities";
import { ServiceDeliverables } from "@/components/services/ServiceDeliverables";
import { ServiceFAQ } from "@/components/services/ServiceFAQ";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { ServiceWhyEonx } from "@/components/services/ServiceWhyEonx";

interface ServiceDetailPageProps {
  service: Service;
}

export function ServiceDetailPage({ service }: ServiceDetailPageProps) {
  return (
    <main>
      <ServiceHero service={service} />
      <ServiceCapabilities service={service} />
      <ServiceDeliverables service={service} />
      <ServiceProcess service={service} />
      <RelatedProjects service={service} />
      <ServiceWhyEonx service={service} />
      <ServiceFAQ service={service} />
      <RelatedServices service={service} />
      <NextService service={service} />
      <ServiceCTA service={service} />
    </main>
  );
}
