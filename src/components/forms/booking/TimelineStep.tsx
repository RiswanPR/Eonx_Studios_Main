"use client";

import { useFormContext } from "react-hook-form";
import { BookingStep } from "@/components/forms/booking/BookingStep";
import { Button } from "@/components/ui/Button";
import { bookingOptions } from "@/content/booking/booking";
import { cn } from "@/lib/utils/cn";
import type { LeadFormData } from "@/lib/validation/lead";

interface TimelineStepProps {
  onNext: () => void;
  onBack: () => void;
}

export function TimelineStep({ onNext, onBack }: TimelineStepProps) {
  const {
    watch,
    setValue,
    formState: { errors },
  } = useFormContext<LeadFormData>();

  const selectedTimeline = watch("timeline");
  const selectedBudget = watch("budgetRange");
  const selectedContact = watch("preferredContact");

  return (
    <BookingStep
      stepNumber={4}
      title="Let's understand the timing."
      description="Help us align on scheduling, scope expectations and communication preferences."
    >
      <div className="space-y-8">
        {/* Timeline */}
        <div>
          <label className="type-body-sm font-medium text-[var(--foreground)]">
            Expected Timeline *
          </label>
          <div className="mt-3 flex flex-wrap gap-2.5">
            {bookingOptions.timelines.map((item) => {
              const isSelected = selectedTimeline === item.value;
              return (
                <button
                  key={item.value}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() =>
                    setValue("timeline", item.value, { shouldValidate: true })
                  }
                  className={cn(
                    "rounded-full px-4 py-2 text-xs font-mono uppercase tracking-[0.1em] transition-all duration-[var(--duration-standard)]",
                    "border focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-periwinkle)]",
                    isSelected
                      ? "border-[var(--color-periwinkle)] bg-[var(--color-periwinkle)] text-white shadow-[0_0_15px_rgba(73,40,194,0.4)]"
                      : "border-[var(--color-border-subtle)] bg-[var(--color-surface-01)] text-[var(--foreground-muted)] hover:border-[var(--color-border-default)] hover:text-white",
                  )}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
          {errors.timeline && (
            <p role="alert" className="mt-2 text-sm text-[var(--color-hyper-magenta)]">
              {errors.timeline.message}
            </p>
          )}
        </div>

        {/* Budget */}
        <div>
          <label className="type-body-sm font-medium text-[var(--foreground)]">
            Budget Range *
          </label>
          <div className="mt-3 flex flex-wrap gap-2.5">
            {bookingOptions.budgets.map((item) => {
              const isSelected = selectedBudget === item.value;
              return (
                <button
                  key={item.value}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() =>
                    setValue("budgetRange", item.value, { shouldValidate: true })
                  }
                  className={cn(
                    "rounded-full px-4 py-2 text-xs font-mono uppercase tracking-[0.1em] transition-all duration-[var(--duration-standard)]",
                    "border focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-periwinkle)]",
                    isSelected
                      ? "border-[var(--color-periwinkle)] bg-[var(--color-periwinkle)] text-white shadow-[0_0_15px_rgba(73,40,194,0.4)]"
                      : "border-[var(--color-border-subtle)] bg-[var(--color-surface-01)] text-[var(--foreground-muted)] hover:border-[var(--color-border-default)] hover:text-white",
                  )}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
          {errors.budgetRange && (
            <p role="alert" className="mt-2 text-sm text-[var(--color-hyper-magenta)]">
              {errors.budgetRange.message}
            </p>
          )}
        </div>

        {/* Preferred Contact */}
        <div>
          <label className="type-body-sm font-medium text-[var(--foreground)]">
            Preferred Contact Method *
          </label>
          <div className="mt-3 flex flex-wrap gap-2.5">
            {bookingOptions.contactMethods.map((item) => {
              const isSelected = selectedContact === item.value;
              return (
                <button
                  key={item.value}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() =>
                    setValue("preferredContact", item.value, {
                      shouldValidate: true,
                    })
                  }
                  className={cn(
                    "rounded-full px-4 py-2 text-xs font-mono uppercase tracking-[0.1em] transition-all duration-[var(--duration-standard)]",
                    "border focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-periwinkle)]",
                    isSelected
                      ? "border-[var(--color-periwinkle)] bg-[var(--color-periwinkle)] text-white shadow-[0_0_15px_rgba(73,40,194,0.4)]"
                      : "border-[var(--color-border-subtle)] bg-[var(--color-surface-01)] text-[var(--foreground-muted)] hover:border-[var(--color-border-default)] hover:text-white",
                  )}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
          {errors.preferredContact && (
            <p role="alert" className="mt-2 text-sm text-[var(--color-hyper-magenta)]">
              {errors.preferredContact.message}
            </p>
          )}
        </div>
      </div>

      <div className="mt-10 flex items-center justify-between">
        <Button type="button" variant="secondary" onClick={onBack}>
          ← Back
        </Button>

        <Button
          type="button"
          onClick={onNext}
          className="min-w-36"
          disabled={!selectedTimeline || !selectedBudget || !selectedContact}
        >
          Continue →
        </Button>
      </div>
    </BookingStep>
  );
}
