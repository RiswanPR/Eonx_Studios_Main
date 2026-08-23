import type { Service } from "@/types/service";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceCapabilities } from "@/components/services/ServiceCapabilities";
import { ServiceDeliverables } from "@/components/services/ServiceDeliverables";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { RelatedProjects } from "@/components/services/RelatedProjects";
import { ServiceWhyEonx } from "@/components/services/ServiceWhyEonx";
import { ServiceFAQ } from "@/components/services/ServiceFAQ";
import { RelatedServices } from "@/components/services/RelatedServices";
import { NextService } from "@/components/services/NextService";
import { ServiceCTA } from "@/components/services/ServiceCTA";
import { SimpleFooter } from "@/components/shared/SimpleFooter";

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
      <SimpleFooter />
    </main>
  );
}
