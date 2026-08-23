import Link from "next/link";
import type { Service } from "@/types/service";
import { cn } from "@/lib/utils/cn";

interface ServiceCardProps {
  service: Service;
  index: number;
  active?: boolean;
  onHover?: () => void;
}

export function ServiceCard({
  service,
  index,
  active = false,
  onHover,
}: ServiceCardProps) {
  return (
    <Link
      href={`/services/${service.slug}`}
      data-service={service.slug}
      onMouseEnter={onHover}
      onFocus={onHover}
      className={cn(
        "group flex items-center justify-between gap-4 border-t border-[var(--color-border-subtle)] py-6",
        "transition-colors duration-[var(--duration-standard)]",
        active && "text-[var(--color-periwinkle)]",
        "focus-visible:outline-2",
        "focus-visible:outline-offset-4",
        "focus-visible:outline-[var(--color-periwinkle)]",
      )}
    >
      <div className="flex items-center gap-4 md:gap-6">
        <span className="font-mono text-xs text-[var(--foreground-muted)]">
          {String(index + 1).padStart(2, "0")}
        </span>

        <div>
          <h3 className="font-[var(--font-display)] text-2xl md:text-3xl lg:text-4xl">
            {service.name}
          </h3>

          <p className="mt-1 text-xs text-[var(--foreground-muted)] md:hidden">
            {service.shortDescription}
          </p>
        </div>
      </div>

      <span
        aria-hidden="true"
        className="opacity-40 transition-transform duration-[var(--duration-standard)] group-hover:translate-x-1 group-hover:opacity-100"
      >
        →
      </span>
    </Link>
  );
}
