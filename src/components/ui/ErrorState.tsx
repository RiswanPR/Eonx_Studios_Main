import { Button } from "@/components/ui/Button";

interface ErrorStateProps {
  title?: string;
  description?: string;
  onRetry?: () => void;
}

export function ErrorState({
  title = "Something went wrong.",
  description = "Please try again.",
  onRetry,
}: ErrorStateProps) {
  return (
    <div className="space-y-4">
      <h2 className="type-heading-md">
        {title}
      </h2>

      <p className="type-body text-[var(--foreground-muted)]">
        {description}
      </p>

      {onRetry ? (
        <Button
          type="button"
          variant="secondary"
          onClick={onRetry}
        >
          Try Again
        </Button>
      ) : null}
    </div>
  );
}
