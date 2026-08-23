import { Loading } from "@/components/ui/Loading";

export function BookingLoading() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex min-h-[400px] flex-col items-center justify-center rounded-[var(--radius-xl)] border border-[var(--color-border-subtle)] bg-[var(--color-surface-01)] p-8 text-center"
    >
      <Loading label="Processing" />
      <span className="mt-6 font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-periwinkle)]">
        PROCESSING
      </span>
      <h3 className="mt-2 font-[var(--font-display)] text-2xl md:text-3xl">
        Sending your project details...
      </h3>
      <p className="mt-2 text-sm text-[var(--foreground-muted)]">
        Please wait while we register your inquiry.
      </p>
    </div>
  );
}
