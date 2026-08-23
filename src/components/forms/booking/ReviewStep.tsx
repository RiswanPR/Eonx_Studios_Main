"use client";

import Link from "next/link";
import { useFormContext } from "react-hook-form";
import { BookingStep } from "@/components/forms/booking/BookingStep";
import { Button } from "@/components/ui/Button";
import { FormField } from "@/components/ui/FormField";
import { Textarea } from "@/components/ui/Textarea";
import { bookingOptions } from "@/content/booking/booking";
import type { LeadFormData } from "@/lib/validation/lead";

interface ReviewStepProps {
  onBack: () => void;
  submitting: boolean;
}

export function ReviewStep({ onBack, submitting }: ReviewStepProps) {
  const { watch, register } = useFormContext<LeadFormData>();
  const formData = watch();

  const getServiceLabels = (slugs: string[] = []) => {
    return slugs
      .map((s) => bookingOptions.services.find((opt) => opt.value === s)?.label)
      .filter(Boolean)
      .join(", ");
  };

  const getTimelineLabel = (val?: string) =>
    bookingOptions.timelines.find((t) => t.value === val)?.label ?? val;

  const getBudgetLabel = (val?: string) =>
    bookingOptions.budgets.find((b) => b.value === val)?.label ?? val;

  const getContactLabel = (val?: string) =>
    bookingOptions.contactMethods.find((c) => c.value === val)?.label ?? val;

  return (
    <BookingStep
      stepNumber={5}
      title="Ready to send?"
      description="Review your project details before submitting. We'll take it from here."
    >
      <div className="space-y-6 rounded-[var(--radius-xl)] border border-[var(--color-border-subtle)] bg-[var(--color-surface-01)] p-6 md:p-8">
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--color-periwinkle)]">
              Services
            </span>
            <p className="mt-1 text-sm text-[var(--foreground)]">
              {getServiceLabels(formData.services) || "None selected"}
            </p>
          </div>

          <div>
            <span className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--color-periwinkle)]">
              Contact
            </span>
            <p className="mt-1 text-sm text-[var(--foreground)]">
              {formData.name} &bull; {formData.email}
              {formData.phone ? ` &bull; ${formData.phone}` : ""}
              {formData.company ? ` (${formData.company})` : ""}
            </p>
          </div>

          <div className="sm:col-span-2">
            <span className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--color-periwinkle)]">
              Project Scope & Goals
            </span>
            <p className="mt-1 text-sm leading-6 text-[var(--foreground-muted)] whitespace-pre-wrap">
              {formData.projectGoal}
            </p>
            {formData.currentWebsite && (
              <p className="mt-2 text-xs text-[var(--color-periwinkle)]">
                URL: {formData.currentWebsite}
              </p>
            )}
          </div>

          <div>
            <span className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--color-periwinkle)]">
              Timeline & Budget
            </span>
            <p className="mt-1 text-sm text-[var(--foreground)]">
              {getTimelineLabel(formData.timeline)} &bull;{" "}
              {getBudgetLabel(formData.budgetRange)}
            </p>
          </div>

          <div>
            <span className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--color-periwinkle)]">
              Preferred Contact
            </span>
            <p className="mt-1 text-sm text-[var(--foreground)]">
              {getContactLabel(formData.preferredContact)}
            </p>
          </div>
        </div>

        {/* Additional information */}
        <div className="border-t border-[var(--color-border-subtle)] pt-6">
          <FormField
            label="Anything else we should know? (Optional)"
            htmlFor="additionalInformation"
          >
            <Textarea
              id="additionalInformation"
              rows={3}
              placeholder="Key deadlines, links, existing brand materials or special requirements..."
              {...register("additionalInformation")}
            />
          </FormField>
        </div>
      </div>

      {/* Privacy Notice & Trust statement */}
      <div className="mt-6 space-y-2 text-xs text-[var(--foreground-muted)]">
        <p>
          By submitting this form, you agree that Eonx may use the information
          provided to respond to your project inquiry. See our{" "}
          <Link href="/privacy" className="text-[var(--color-periwinkle)] underline">
            Privacy Policy
          </Link>
          .
        </p>
        <p>
          No obligation. We&apos;ll review your project details before the conversation
          so the call can be focused and useful.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="mt-8 flex items-center justify-between">
        <Button
          type="button"
          variant="secondary"
          onClick={onBack}
          disabled={submitting}
        >
          ← Back
        </Button>

        <Button
          type="submit"
          disabled={submitting}
          className="min-w-48"
          data-analytics="booking-submit"
        >
          {submitting ? "Sending..." : "Send Project Request"}
        </Button>
      </div>

      {/* Direct Contact Alternative */}
      <div className="mt-10 border-t border-[var(--color-border-subtle)] pt-6 text-center text-xs text-[var(--foreground-muted)]">
        Prefer email? Reach us directly at{" "}
        <a
          href="mailto:hello@eonx.in"
          className="text-[var(--color-periwinkle)] hover:underline"
        >
          hello@eonx.in
        </a>
      </div>
    </BookingStep>
  );
}
