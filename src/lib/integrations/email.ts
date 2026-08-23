import type { LeadInquiry } from "@/types/lead";

export interface EmailProvider {
  sendNotification(lead: LeadInquiry): Promise<boolean>;
  sendConfirmation(lead: LeadInquiry): Promise<boolean>;
}

export class DevelopmentEmailProvider implements EmailProvider {
  async sendNotification(_lead: LeadInquiry): Promise<boolean> {
    return true;
  }

  async sendConfirmation(_lead: LeadInquiry): Promise<boolean> {
    return true;
  }
}

export const defaultEmailProvider: EmailProvider = new DevelopmentEmailProvider();
