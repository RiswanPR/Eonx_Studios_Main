import type { LeadInquiry } from "@/types/lead";
import { defaultEmailProvider } from "@/lib/integrations/email";

export async function notifyEonx(lead: LeadInquiry) {
  /*
   * Provider-neutral internal notification.
   */
  try {
    return await defaultEmailProvider.sendNotification(lead);
  } catch (error) {
    console.error("Internal notification failed:", error);
    return false;
  }
}

export async function confirmLead(lead: LeadInquiry) {
  /*
   * Provider-neutral client confirmation.
   */
  try {
    return await defaultEmailProvider.sendConfirmation(lead);
  } catch (error) {
    console.error("Client confirmation failed:", error);
    return false;
  }
}
