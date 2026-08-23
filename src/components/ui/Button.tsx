import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { cn } from "@/lib/utils/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  className?: string;
  loading?: boolean;
}

type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement>;

type LinkButtonProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

const variants: Record<ButtonVariant, string> = {
  primary: [
    "bg-[var(--color-periwinkle)]",
    "text-[var(--color-eonx-black)]",
    "border border-transparent",
    "hover:bg-[var(--color-white)]",
  ].join(" "),

  secondary: [
    "border border-[var(--color-border-default)]",
    "text-[var(--foreground)]",
    "bg-transparent",
    "hover:border-[var(--color-border-strong)]",
    "hover:bg-[var(--color-surface-01)]",
  ].join(" "),

  ghost: [
    "text-[var(--foreground)]",
    "bg-transparent",
    "hover:text-[var(--color-periwinkle)]",
  ].join(" "),
};

const sizes: Record<ButtonSize, string> = {
  sm: "min-h-9 px-4 text-sm",
  md: "min-h-11 px-5 text-sm",
  lg: "min-h-13 px-7 text-base",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-[var(--radius-full)] font-medium transition-colors duration-[var(--duration-standard)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-periwinkle)] disabled:pointer-events-none disabled:opacity-50";

function getClasses(
  variant: ButtonVariant,
  size: ButtonSize,
  className?: string,
) {
  return cn(
    base,
    variants[variant],
    sizes[size],
    className,
  );
}

export function Button({
  variant = "primary",
  size = "md",
  children,
  className,
  loading = false,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={getClasses(variant, size, className)}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...props}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  children,
  className,
  loading = false,
  href,
  ...props
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={getClasses(variant, size, className)}
      aria-busy={loading || undefined}
      aria-disabled={loading || undefined}
      {...props}
    >
      {loading ? "Loading..." : children}
    </Link>
  );
}
