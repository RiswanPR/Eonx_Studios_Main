"use client";

import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { BookingError } from "@/components/forms/booking/BookingError";
import { BookingLoading } from "@/components/forms/booking/BookingLoading";
import { BookingProgress } from "@/components/forms/booking/BookingProgress";
import { BookingSuccess } from "@/components/forms/booking/BookingSuccess";
import { DetailsStep } from "@/components/forms/booking/DetailsStep";
import { GoalsStep } from "@/components/forms/booking/GoalsStep";
import { ProjectStep } from "@/components/forms/booking/ProjectStep";
import { ReviewStep } from "@/components/forms/booking/ReviewStep";
import { TimelineStep } from "@/components/forms/booking/TimelineStep";
import { getAttributionParams } from "@/lib/analytics/attribution";
import { leadSchema, type LeadFormData } from "@/lib/validation/lead";

type BookingStatus = "idle" | "submitting" | "success" | "error";

const defaultValues: LeadFormData = {
  name: "",
  email: "",
  phone: "",
  company: "",
  services: [],
  projectGoal: "",
  currentWebsite: "",
  timeline: "",
  budgetRange: "",
  preferredContact: "",
  additionalInformation: "",
  source: "",
  website: "",
};

export function BookingForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [status, setStatus] = useState<BookingStatus>("idle");
  const [createdLeadId, setCreatedLeadId] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const methods = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema),
    defaultValues,
    mode: "onTouched",
  });

  const { trigger, handleSubmit, setValue } = methods;

  useEffect(() => {
    const attribution = getAttributionParams();
    if (attribution.source) {
      setValue("source", attribution.source);
    }
  }, [setValue]);

  const handleNextStep = async () => {
    let isValid = false;

    if (currentStep === 1) {
      isValid = await trigger(["services"]);
    } else if (currentStep === 2) {
      isValid = await trigger(["projectGoal", "currentWebsite"]);
    } else if (currentStep === 3) {
      isValid = await trigger(["name", "email", "phone", "company"]);
    } else if (currentStep === 4) {
      isValid = await trigger(["timeline", "budgetRange", "preferredContact"]);
    }

    if (isValid) {
      setCurrentStep((prev) => Math.min(prev + 1, 5));
    }
  };

  const handleBackStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const onSubmit = async (data: LeadFormData) => {
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        setStatus("error");
        setErrorMessage(
          result.message ||
            "We couldn't process your request. Please try again.",
        );
        return;
      }

      setCreatedLeadId(result.id || crypto.randomUUID());
      setStatus("success");
    } catch (err) {
      console.error("Submission failed:", err);
      setStatus("error");
      setErrorMessage(
        "Network connection error. Please check your internet connection and try again.",
      );
    }
  };

  if (status === "submitting") {
    return <BookingLoading />;
  }

  if (status === "success") {
    return <BookingSuccess leadId={createdLeadId} />;
  }

  if (status === "error") {
    return (
      <BookingError
        message={errorMessage}
        onRetry={() => setStatus("idle")}
      />
    );
  }

  return (
    <FormProvider {...methods}>
      <form
        data-form="booking"
        onSubmit={handleSubmit(onSubmit)}
        className="w-full"
        noValidate
      >
        <BookingProgress currentStep={currentStep} totalSteps={5} />

        {currentStep === 1 && <ProjectStep onNext={handleNextStep} />}
        {currentStep === 2 && (
          <GoalsStep onNext={handleNextStep} onBack={handleBackStep} />
        )}
        {currentStep === 3 && (
          <DetailsStep onNext={handleNextStep} onBack={handleBackStep} />
        )}
        {currentStep === 4 && (
          <TimelineStep onNext={handleNextStep} onBack={handleBackStep} />
        )}
        {currentStep === 5 && (
          <ReviewStep
            onBack={handleBackStep}
            submitting={methods.formState.isSubmitting}
          />
        )}
      </form>
    </FormProvider>
  );
}
