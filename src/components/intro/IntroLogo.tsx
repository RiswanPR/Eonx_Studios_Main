import Image from "next/image";
import { cn } from "@/lib/utils/cn";

interface IntroLogoProps {
  active: boolean;
}

export function IntroLogo({ active }: IntroLogoProps) {
  return (
    <div
      className={cn(
        "relative z-10 flex items-center justify-center",
        "transition-all duration-[var(--duration-cinematic)] ease-[var(--ease-cinematic)]",
        active ? "scale-100 opacity-100" : "scale-[0.82] opacity-0",
      )}
    >
      {/* Controlled periwinkle / blue aura during reveal */}
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-[-30%] rounded-full",
          "bg-[radial-gradient(circle,rgba(164,180,245,0.22)_0%,rgba(73,40,194,0.12)_45%,transparent_70%)]",
          "blur-2xl transition-opacity duration-[var(--duration-cinematic)]",
          active ? "opacity-100" : "opacity-0",
        )}
      />

      {/* Official Eonx Logo */}
      <Image
        src="/images/eonx-logo.png"
        alt="Eonx"
        width={260}
        height={92}
        priority
        className="relative h-auto w-[170px] md:w-[220px]"
      />
    </div>
  );
}
