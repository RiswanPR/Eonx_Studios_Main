interface LoadingProps {
  label?: string;
}

export function Loading({
  label = "Loading",
}: LoadingProps) {
  return (
    <div
      className="inline-flex items-center gap-3"
      role="status"
      aria-live="polite"
    >
      <span
        aria-hidden="true"
        className="size-4 animate-pulse rounded-full bg-[var(--color-periwinkle)]"
      />

      <span className="type-body-sm text-[var(--foreground-muted)]">
        {label}
      </span>
    </div>
  );
}
