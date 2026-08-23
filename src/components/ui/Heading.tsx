import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4;
  size?: "display" | "xl" | "lg" | "md";
}

const sizeClasses = {
  display: "type-display-xl",
  xl: "type-heading-xl",
  lg: "type-heading-lg",
  md: "type-heading-md",
};

export function Heading({
  level = 2,
  size = "xl",
  className,
  children,
  ...props
}: HeadingProps) {
  const Tag = `h${level}` as "h1" | "h2" | "h3" | "h4";

  return (
    <Tag
      className={cn(sizeClasses[size], className)}
      {...props}
    >
      {children}
    </Tag>
  );
}