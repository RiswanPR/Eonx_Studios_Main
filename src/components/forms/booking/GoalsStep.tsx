"use client";

import { useFormContext } from "react-hook-form";
import { BookingStep } from "@/components/forms/booking/BookingStep";
import { Button } from "@/components/ui/Button";
import { FormField } from "@/components/ui/FormField";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import type { LeadFormData } from "@/lib/validation/lead";

interface GoalsStepProps {
  onNext: () => void;
  onBack: () => void;
}

export function GoalsStep({ onNext, onBack }: GoalsStepProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext<LeadFormData>();

  return (
    <BookingStep
      stepNumber={2}
      title="Tell us about the project."
      description="Help us understand the ambition, context and outcomes you're aiming for."
    >
      <div className="space-y-6">
        <FormField
          label="What are you trying to achieve?"
          htmlFor="projectGoal"
          required
          error={errors.projectGoal?.message}
          hint="Tell us about what you are building, launching, or evolving."
        >
          <Textarea
            id="projectGoal"
            rows={5}
            placeholder="We are launching a new brand and need a high-performance web experience with 3D interactions..."
            {...register("projectGoal")}
          />
        </FormField>

        <FormField
          label="Current Website (Optional)"
          htmlFor="currentWebsite"
          error={errors.currentWebsite?.message}
          hint="If you have an existing digital presence, share the URL."
        >
          <Input
            id="currentWebsite"
            type="url"
            placeholder="https://example.com"
            {...register("currentWebsite")}
          />
        </FormField>
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
