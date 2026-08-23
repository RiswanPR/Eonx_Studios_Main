interface IntroSkipProps {
  onSkip: () => void;
}

export function IntroSkip({ onSkip }: IntroSkipProps) {
  return (
    <button
      type="button"
      onClick={onSkip}
      className="absolute right-6 top-6 z-20 rounded-full border border-white/10 bg-[rgba(255,255,255,0.02)] px-4 py-2 font-mono text-[9px] uppercase tracking-[0.14em] text-white/50 transition-colors duration-200 hover:border-white/25 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-periwinkle)]"
    >
      Skip intro
    </button>
  );
}
