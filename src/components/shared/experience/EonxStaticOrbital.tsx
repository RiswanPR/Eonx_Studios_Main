import { EonxSymbol } from "@/components/brand/EonxSymbol";

export function EonxStaticOrbital() {
  return (
    <div
      aria-hidden="true"
      className="relative aspect-square w-full max-w-[520px]"
    >
      <div className="absolute inset-[18%] rounded-full border border-[rgba(73,40,194,0.45)]" />

      <div className="absolute inset-[8%] rotate-[-18deg] rounded-[50%] border border-[rgba(191,64,250,0.3)]" />

      <div className="absolute inset-[28%] rotate-[24deg] rounded-[50%] border border-[rgba(227,217,252,0.35)]" />

      <div className="absolute left-1/2 top-1/2 flex size-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[radial-gradient(circle,rgba(73,40,194,0.6),rgba(9,10,16,0.9))] shadow-[var(--shadow-glow-blue)] border border-[rgba(163,184,255,0.4)]">
        <EonxSymbol size={56} className="text-white drop-shadow-[0_0_12px_rgba(163,184,255,0.8)]" />
      </div>
    </div>
  );
}
