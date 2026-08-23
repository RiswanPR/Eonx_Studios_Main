import { Button } from "@/components/ui/Button";

interface BookingErrorProps {
  message?: string;
  onRetry: () => void;
}

export function BookingError({
  message = "We couldn't send your project details. Please try again.",
  onRetry,
}: BookingErrorProps) {
  return (
    <div
      role="alert"
      className="rounded-[var(--radius-xl)] border border-[var(--color-hyper-magenta)] bg-[rgba(255,42,109,0.06)] p-8 text-center md:p-12"
    >
      <span className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-hyper-magenta)]">
        SOMETHING WENT WRONG
      </span>

      <h3 className="mt-4 font-[var(--font-display)] text-3xl leading-[1] tracking-[-0.03em] md:text-5xl">
        WE COULDN&apos;T SEND THAT.
      </h3>

      <p className="mx-auto mt-4 max-w-lg text-base leading-7 text-[var(--foreground-muted)]">
        {message}
      </p>

      <div className="mt-8 flex justify-center gap-4">
        <Button type="button" onClick={onRetry}>
          Try Again
        </Button>
      </div>

      <p className="mt-6 text-xs text-[var(--foreground-muted)]">
        Your entered form details have been preserved. Alternatively, email us
        directly at{" "}
        <a
          href="mailto:hello@eonx.in"
          className="text-[var(--color-periwinkle)] hover:underline"
        >
          hello@eonx.in
        </a>
      </p>
    </div>
  );
}
