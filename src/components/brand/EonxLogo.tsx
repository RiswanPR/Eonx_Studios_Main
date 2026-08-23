import Link from "next/link";
import { EonxSymbol } from "./EonxSymbol";
import { cn } from "@/lib/utils/cn";

interface EonxLogoProps {
  className?: string;
  symbolOnly?: boolean;
  size?: "sm" | "md" | "lg";
  href?: string;
  glow?: boolean;
}

export function EonxLogo({
  className,
  symbolOnly = false,
  size = "md",
  href = "/",
  glow = false,
}: EonxLogoProps) {
  const symbolSizes = {
    sm: 28,
    md: 36,
    lg: 48,
  };

  const textSizes = {
    sm: "text-lg tracking-[0.14em]",
    md: "text-xl tracking-[0.16em]",
    lg: "text-2xl tracking-[0.18em]",
  };

  const content = (
    <span
      className={cn(
        "group inline-flex items-center gap-3 font-[var(--font-display)] font-semibold text-white transition-opacity hover:opacity-90",
        className,
      )}
    >
      <EonxSymbol
        size={symbolSizes[size]}
        glow={glow}
        className="text-white transition-transform duration-300 group-hover:scale-105 group-hover:text-[var(--color-periwinkle)]"
      />
      {!symbolOnly && (
        <span className={cn("font-bold text-white uppercase", textSizes[size])}>
          EONX
        </span>
      )}
    </span>
  );

  if (!href) {
    return content;
  }

  return (
    <Link
      href={href}
      aria-label="Eonx Studios home"
      className="inline-flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-periwinkle)] rounded-md"
    >
      {content}
    </Link>
  );
}
