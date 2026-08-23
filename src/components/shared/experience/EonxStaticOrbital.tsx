export function EonxStaticOrbital() {
  return (
    <div
      aria-hidden="true"
      className="relative aspect-square w-full max-w-[520px]"
    >
      <div className="absolute inset-[18%] rounded-full border border-[rgba(73,40,194,0.45)]" />

      <div className="absolute inset-[8%] rotate-[-18deg] rounded-[50%] border border-[rgba(191,64,250,0.3)]" />

      <div className="absolute inset-[28%] rotate-[24deg] rounded-[50%] border border-[rgba(227,217,252,0.35)]" />

      <div className="absolute left-1/2 top-1/2 size-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-periwinkle)] shadow-[var(--shadow-glow-blue)]" />
    </div>
  );
}
