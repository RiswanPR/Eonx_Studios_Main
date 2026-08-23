interface EmptyStateProps {
  title: string;
  description?: string;
}

export function EmptyState({
  title,
  description,
}: EmptyStateProps) {
  return (
    <div className="space-y-3">
      <h2 className="type-heading-md">
        {title}
      </h2>

      {description ? (
        <p className="type-body text-[var(--foreground-muted)]">
          {description}
        </p>
      ) : null}
    </div>
  );
}
