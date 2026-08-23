import { cn } from "@/lib/utils/cn";

interface BookingProgressProps {
  currentStep: number;
  totalSteps: number;
}

const STEP_LABELS = ["Project", "Goals", "Details", "Timeline", "Review"];

export function BookingProgress({
  currentStep,
  totalSteps,
}: BookingProgressProps) {
  return (
    <div
      className="mb-10 w-full"
      role="region"
      aria-label={`Step ${currentStep} of ${totalSteps}`}
    >
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--color-periwinkle)]">
          Step {String(currentStep).padStart(2, "0")} of{" "}
          {String(totalSteps).padStart(2, "0")} — {STEP_LABELS[currentStep - 1]}
        </span>

        <span className="text-xs text-[var(--foreground-muted)]">
          {Math.round((currentStep / totalSteps) * 100)}%
        </span>
      </div>

      <div
        className="mt-3 flex gap-1.5"
        role="progressbar"
        aria-valuenow={currentStep}
        aria-valuemin={1}
        aria-valuemax={totalSteps}
        aria-label="Booking form progress"
      >
        {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => {
          const isComplete = step < currentStep;
          const isCurrent = step === currentStep;

          return (
            <div
              key={step}
              className={cn(
                "h-1 flex-1 rounded-full transition-all duration-[var(--duration-standard)]",
                isComplete && "bg-[var(--color-periwinkle)]",
                isCurrent && "bg-white",
                !isComplete && !isCurrent && "bg-[var(--color-surface-02)]",
              )}
            />
          );
        })}
      </div>
    </div>
  );
}
