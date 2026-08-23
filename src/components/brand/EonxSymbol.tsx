import type { SVGProps } from "react";

interface EonxSymbolProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  glow?: boolean;
}

export function EonxSymbol({
  size = 32,
  glow = false,
  className = "",
  ...props
}: EonxSymbolProps) {
  return (
    <svg
      viewBox="0 0 140 70"
      width={size}
      height={typeof size === "number" ? (size * 70) / 140 : undefined}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${glow ? "drop-shadow-[0_0_12px_rgba(163,184,255,0.45)]" : ""} ${className}`}
      {...props}
    >
      {/* Top Outer Arch */}
      <path
        d="M 22 34 C 36 13, 80 10, 110 24"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
      />

      {/* Bottom Outer Arch */}
      <path
        d="M 118 36 C 104 57, 60 60, 30 46"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
      />

      {/* Left Wing & Center Bar */}
      <path
        d="M 42 21 L 12 35 L 56 35"
        stroke="currentColor"
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="miter"
      />

      {/* Right Wing & Shelf */}
      <path
        d="M 98 49 L 128 35 L 84 35"
        stroke="currentColor"
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="miter"
      />

      {/* Center Circle */}
      <circle
        cx="70"
        cy="35"
        r="15.5"
        stroke="currentColor"
        strokeWidth="3.4"
      />

      {/* Diagonal "e" Slash */}
      <path
        d="M 56 35 L 83.5 26"
        stroke="currentColor"
        strokeWidth="3.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
