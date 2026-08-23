import { NextResponse } from "next/server";
import { createLead } from "@/lib/leads/createLead";
import { confirmLead, notifyEonx } from "@/lib/leads/notifications";
import { leadSchema } from "@/lib/validation/lead";
import type { LeadInquiry } from "@/types/lead";

// Simple in-memory rate limiting window (60s)
const ipRequestCounts = new Map<string, { count: number; expiresAt: number }>();
const RATE_LIMIT_MAX = 10;
const RATE_LIMIT_WINDOW_MS = 60 * 1000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = ipRequestCounts.get(ip);

  if (!record || record.expiresAt < now) {
    ipRequestCounts.set(ip, { count: 1, expiresAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return true;
  }

  record.count += 1;
  return false;
}

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      "127.0.0.1";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          success: false,
          message: "Too many requests. Please try again in a moment.",
        },
        { status: 429 },
      );
    }

    const body = await request.json();

    // Honeypot check
    if (body.website && body.website.trim().length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Spam detected.",
        },
        { status: 400 },
      );
    }

    // Server-side Zod validation
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

    // 1. Create lead (Primary)
    const leadResult = await createLead(leadInquiry);

    // 2. Notifications (Secondary - failure does not abort lead success)
    await Promise.allSettled([
      notifyEonx(leadInquiry),
      confirmLead(leadInquiry),
    ]);

    return NextResponse.json({
      success: true,
      id: leadResult.id,
    });
  } catch (error) {
    console.error("Lead submission error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "We couldn't process your request. Please try again.",
      },
      { status: 500 },
    );
  }
}
