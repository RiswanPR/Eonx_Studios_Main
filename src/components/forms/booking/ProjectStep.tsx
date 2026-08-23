"use client";

import { useFormContext } from "react-hook-form";
import { BookingStep } from "@/components/forms/booking/BookingStep";
import { Button } from "@/components/ui/Button";
import { bookingOptions } from "@/content/booking/booking";
import { cn } from "@/lib/utils/cn";
import type { LeadFormData } from "@/lib/validation/lead";

interface ProjectStepProps {
  onNext: () => void;
}

export function ProjectStep({ onNext }: ProjectStepProps) {
  const {
    watch,
    setValue,
    formState: { errors },
  } = useFormContext<LeadFormData>();

  const selectedServices = watch("services") || [];

  const toggleService = (value: string) => {
    if (selectedServices.includes(value)) {
      setValue(
        "services",
        selectedServices.filter((s) => s !== value),
        { shouldValidate: true },
      );
    } else {
      setValue("services", [...selectedServices, value], {
        shouldValidate: true,
      });
    }
  };

  return (
    <BookingStep
      stepNumber={1}
      title="What are you looking for?"
      description="Select all capabilities that apply to your project."
    >
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4">
        {bookingOptions.services.map((service) => {
          const isSelected = selectedServices.includes(service.value);

          return (
            <button
              key={service.value}
              type="button"
              aria-pressed={isSelected}
              onClick={() => toggleService(service.value)}
              className={cn(
                "flex min-h-16 items-center justify-between rounded-[var(--radius-lg)] p-4 text-left font-mono text-xs uppercase tracking-[0.1em] transition-all duration-[var(--duration-standard)]",
                "border focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-periwinkle)]",
                isSelected
                  ? "border-[var(--color-periwinkle)] bg-[rgba(73,40,194,0.18)] text-white shadow-[0_0_20px_rgba(73,40,194,0.3)]"
                  : "border-[var(--color-border-subtle)] bg-[var(--color-surface-01)] text-[var(--foreground-muted)] hover:border-[var(--color-border-default)] hover:text-white",
              )}
            >
              <span>{service.label}</span>
              {isSelected && (
                <span
                  aria-hidden="true"
                  className="text-xs text-[var(--color-periwinkle)]"
                >
                  ✓
                </span>
              )}
            </button>
          );
        })}
      </div>

      {errors.services && (
        <p role="alert" className="mt-4 text-sm text-[var(--color-hyper-magenta)]">
          {errors.services.message}
        </p>
      )}

      <div className="mt-10 flex justify-end">
        <Button
          type="button"
          onClick={onNext}
          className="min-w-36"
          disabled={selectedServices.length === 0}
        >
          Continue →
        </Button>
      </div>
    </BookingStep>
  );
}
