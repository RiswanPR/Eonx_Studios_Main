interface SchedulerProps {
  leadId: string;
}

export function Scheduler({ leadId }: SchedulerProps) {
  return (
    <div className="mt-8 rounded-[var(--radius-lg)] border border-[var(--color-border-subtle)] bg-[var(--color-surface-02)] p-6 text-center">
      <span className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--color-periwinkle)]">
        NEXT STEP
      </span>
      <h4 className="mt-2 font-[var(--font-display)] text-xl md:text-2xl">
        Schedule a conversation.
      </h4>
      <p className="mt-2 text-xs text-[var(--foreground-muted)]">
        Inquiry ID: <code className="font-mono text-[var(--color-periwinkle)]">{leadId}</code>
      </p>
      <p className="mt-4 text-sm text-[var(--foreground-muted)]">
        Our team will review your project details and follow up directly via your preferred contact method to confirm timing.
      </p>
    </div>
  );
}
