import type { ReactNode } from "react";

interface FormFieldProps {
  label: string;
  htmlFor: string;
  error?: string;
  hint?: string;
  required?: boolean;
  children: ReactNode;
}

export function FormField({
  label,
  htmlFor,
  error,
  hint,
  required = false,
  children,
}: FormFieldProps) {
  const hintId = `${htmlFor}-hint`;
  const errorId = `${htmlFor}-error`;

  return (
    <div className="space-y-2">
      <label
        htmlFor={htmlFor}
        className="type-body-sm font-medium text-[var(--foreground)]"
      >
        {label}
        {required ? (
          <span aria-hidden="true"> *</span>
        ) : null}
      </label>

      {children}

      {hint ? (
        <p
          id={hintId}
          className="type-body-sm text-[var(--foreground-muted)]"
        >
          {hint}
        </p>
      ) : null}

      {error ? (
        <p
          id={errorId}
          role="alert"
          className="type-body-sm text-[var(--color-hyper-magenta)]"
        >
          {error}
        </p>
      ) : null}
    </div>
  );
}
