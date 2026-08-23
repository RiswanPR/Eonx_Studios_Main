"use client";

import { useEffect } from "react";
import { Scheduler } from "@/components/forms/booking/Scheduler";
import { ButtonLink } from "@/components/ui/Button";
import { trackSchedulerOpen } from "@/lib/analytics/events";

interface BookingSuccessProps {
  leadId: string;
}

export function BookingSuccess({ leadId }: BookingSuccessProps) {
  useEffect(() => {
    trackSchedulerOpen();
  }, []);

  return (
    <div
      role="status"
      className="rounded-[var(--radius-xl)] border border-[var(--color-border-subtle)] bg-[var(--color-surface-01)] p-8 text-center md:p-12"
    >
      <span className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-periwinkle)]">
        REQUEST RECEIVED
      </span>

      <h3 className="mt-4 font-[var(--font-display)] text-3xl leading-[1] tracking-[-0.03em] md:text-5xl">
        WE&apos;VE GOT IT.
      </h3>

      <p className="mx-auto mt-4 max-w-lg text-base leading-7 text-[var(--foreground-muted)]">
        We&apos;ll review the project details and follow up using the contact
        information you provided.
      </p>

      <Scheduler leadId={leadId} />

      <div className="mt-10 flex justify-center">
        <ButtonLink href="/" variant="secondary">
          Return Home
        </ButtonLink>
      </div>
    </div>
  );
}
