import { z } from "zod";

export const leadSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name.")
    .max(100, "Name is too long."),

  email: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .max(254, "Email address is too long."),

  phone: z
    .string()
    .trim()
    .max(30, "Phone number is too long.")
    .optional()
    .or(z.literal("")),

  company: z
    .string()
    .trim()
    .max(150, "Company name is too long.")
    .optional()
    .or(z.literal("")),

  services: z
    .array(z.string())
    .min(1, "Choose at least one service."),

  projectGoal: z
    .string()
    .trim()
    .min(10, "Tell us a little more about your project.")
    .max(3000, "Project description is too long."),

  currentWebsite: z
    .string()
    .trim()
    .url("Please enter a valid URL.")
    .optional()
    .or(z.literal("")),

  timeline: z
    .string()
    .min(1, "Choose your expected timeline."),

  budgetRange: z
    .string()
    .min(1, "Choose a budget range."),

  preferredContact: z
    .string()
    .min(1, "Choose your preferred contact method."),

  additionalInformation: z
    .string()
    .trim()
    .max(3000, "Additional information is too long.")
    .optional()
    .or(z.literal("")),

  source: z
    .string()
    .max(200)
    .optional(),

  website: z
    .string()
    .max(0, "Spam detected.")
    .optional()
    .or(z.literal("")),
});

export type LeadFormData = z.infer<typeof leadSchema>;
