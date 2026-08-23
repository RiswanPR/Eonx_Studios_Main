import { NextResponse } from "next/server";
import { createLead } from "@/lib/leads/createLead";
import { confirmLead, notifyEonx } from "@/lib/leads/notifications";
import { logError } from "@/lib/monitoring/logger";
import { checkRateLimit } from "@/lib/security/rateLimit";
import { leadSchema } from "@/lib/validation/lead";
import type { LeadInquiry } from "@/types/lead";

const MAX_REQUEST_SIZE_BYTES = 32 * 1024; // 32KB

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      "127.0.0.1";

    // 1. Rate Limiting Check
    const rateLimit = await checkRateLimit(ip);
    if (!rateLimit.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Too many requests. Please try again later.",
        },
        { status: 429 },
      );
    }

    // 2. Request Size Protection
    const rawBody = await request.text();
    if (rawBody.length > MAX_REQUEST_SIZE_BYTES) {
      return NextResponse.json(
        {
          success: false,
          message: "Request payload too large.",
        },
        { status: 413 },
      );
    }

    let body: Record<string, unknown>;
    try {
      body = JSON.parse(rawBody);
    } catch {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid JSON format.",
        },
        { status: 400 },
      );
    }

    // 3. Honeypot check
    if (typeof body.website === "string" && body.website.trim().length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Spam detected.",
        },
        { status: 400 },
      );
    }

    // 4. Server-side Zod validation
    const result = leadSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Please check the submitted information.",
          errors: result.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    const data = result.data;

    const leadInquiry: LeadInquiry = {
      name: data.name,
      email: data.email,
      phone: data.phone || undefined,
      company: data.company || undefined,
      services: data.services,
      projectGoal: data.projectGoal,
      currentWebsite: data.currentWebsite || undefined,
      timeline: data.timeline,
      budgetRange: data.budgetRange,
      preferredContact: data.preferredContact,
      additionalInformation: data.additionalInformation || undefined,
      source: data.source || undefined,
      attribution: data.attribution,
      submittedAt: new Date().toISOString(),
    };

    // 5. Create lead (Primary)
    const leadResult = await createLead(leadInquiry);

    // 6. Notifications (Secondary - failure does not abort lead success)
    await Promise.allSettled([
      notifyEonx(leadInquiry),
      confirmLead(leadInquiry),
    ]);

    return NextResponse.json({
      success: true,
      id: leadResult.id,
    });
  } catch (error) {
    logError(error, { route: "/api/leads" });
    return NextResponse.json(
      {
        success: false,
        message: "Unable to process the request.",
      },
      { status: 500 },
    );
  }
}
