"use client";

import { useFormContext } from "react-hook-form";
import { BookingStep } from "@/components/forms/booking/BookingStep";
import { Button } from "@/components/ui/Button";
import { FormField } from "@/components/ui/FormField";
import { Input } from "@/components/ui/Input";
import type { LeadFormData } from "@/lib/validation/lead";

interface DetailsStepProps {
  onNext: () => void;
  onBack: () => void;
}

export function DetailsStep({ onNext, onBack }: DetailsStepProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext<LeadFormData>();

  return (
    <BookingStep
      stepNumber={3}
      title="How can we reach you?"
      description="We'll use these details to contact you and prepare for our conversation."
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <FormField
          label="Your Name"
          htmlFor="name"
          required
          error={errors.name?.message}
        >
          <Input
            id="name"
            autoComplete="name"
            placeholder="John Doe"
            {...register("name")}
          />
        </FormField>

        <FormField
          label="Work Email"
          htmlFor="email"
          required
          error={errors.email?.message}
        >
          <Input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="john@company.com"
            {...register("email")}
          />
        </FormField>

        <FormField
          label="Phone / WhatsApp (Optional)"
          htmlFor="phone"
          error={errors.phone?.message}
        >
          <Input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+91 98765 43210"
            {...register("phone")}
          />
        </FormField>

        <FormField
          label="Company / Brand (Optional)"
          htmlFor="company"
          error={errors.company?.message}
        >
          <Input
            id="company"
            autoComplete="organization"
            placeholder="Acme Studio"
            {...register("company")}
          />
        </FormField>
      </div>

      {/* Honeypot field for spam detection */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          opacity: 0,
          pointerEvents: "none",
          zIndex: -1,
          width: 0,
          height: 0,
          overflow: "hidden",
        }}
      >
        <label htmlFor="website">Do not fill this</label>
        <input
          id="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("website")}
        />
      </div>

      <div className="mt-10 flex items-center justify-between">
        <Button type="button" variant="secondary" onClick={onBack}>
          ← Back
        </Button>

        <Button type="button" onClick={onNext} className="min-w-36">
          Continue →
        </Button>
      </div>
    </BookingStep>
  );
}
