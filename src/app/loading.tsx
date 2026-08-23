export default function Loading() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex min-h-[60vh] flex-col items-center justify-center text-center"
    >
      <span
        aria-hidden="true"
        className="size-6 animate-pulse rounded-full bg-[var(--color-periwinkle)]"
      />

      <span className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-periwinkle)]">
        EONX
      </span>

      <p className="mt-2 text-sm text-[var(--foreground-muted)]">
        Loading experience...
      </p>
    </div>
  );
}
