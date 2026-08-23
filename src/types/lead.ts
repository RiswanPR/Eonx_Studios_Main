import type { AttributionData } from "@/lib/analytics/attribution";

export interface LeadInquiry {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  services: string[];
  projectGoal: string;
  currentWebsite?: string;
  timeline: string;
  budgetRange: string;
  preferredContact: string;
  additionalInformation?: string;
  source?: string;
  attribution?: AttributionData;
  submittedAt?: string;
}
