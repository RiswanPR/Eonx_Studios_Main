import { cn } from "@/lib/utils/cn";

interface LightPathProps {
  className?: string;
  color?: "blue" | "purple" | "magenta" | "periwinkle";
  animated?: boolean;
  intensity?: number;
}

const colorMap = {
  blue: "var(--color-ultrasonic-blue)",
  purple: "var(--color-velvet-purple)",
  magenta: "var(--color-hyper-magenta)",
  periwinkle: "var(--color-periwinkle)",
};

export function LightPath({
  className = "",
  color = "periwinkle",
  animated = false,
  intensity = 1,
}: LightPathProps) {
  const chosenColor = colorMap[color] || colorMap.periwinkle;

  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute h-px", className)}
      style={{
        background: `linear-gradient(90deg, transparent, ${chosenColor}, transparent)`,
        opacity: intensity * 0.45,
      }}
    >
      {animated && (
        <div
          className="size-full animate-[eonx-light-pass_6s_linear_infinite]"
          style={{
            background: "var(--eonx-light-gradient)",
          }}
        />
      )}
    </div>
  );
}
