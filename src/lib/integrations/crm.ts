import type { LeadInquiry } from "@/types/lead";

export interface LeadProvider {
  createLead(lead: LeadInquiry): Promise<{ id: string }>;
}

export class DevelopmentLeadProvider implements LeadProvider {
  async createLead(_lead: LeadInquiry): Promise<{ id: string }> {
    const id = crypto.randomUUID();
    return { id };
  }
}

export const defaultLeadProvider: LeadProvider = new DevelopmentLeadProvider();
