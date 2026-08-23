interface ToastProps {
  title: string;
  description?: string;
}

export function Toast({
  title,
  description,
}: ToastProps) {
  return (
    <div
      role="status"
      className="rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-[var(--color-surface-02)] p-4 shadow-[var(--shadow-md)]"
    >
      <p className="type-body-sm font-semibold">
        {title}
      </p>

      {description ? (
        <p className="type-body-sm mt-1 text-[var(--foreground-muted)]">
          {description}
        </p>
      ) : null}
    </div>
  );
}
