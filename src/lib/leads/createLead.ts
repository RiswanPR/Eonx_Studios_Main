import type { LeadInquiry } from "@/types/lead";
import { defaultLeadProvider } from "@/lib/integrations/crm";

export async function createLead(lead: LeadInquiry) {
  /*
   * Provider-neutral lead persistence.
   * Uses development adapter until production CRM / DB credentials are configured.
   */
  return defaultLeadProvider.createLead(lead);
}
