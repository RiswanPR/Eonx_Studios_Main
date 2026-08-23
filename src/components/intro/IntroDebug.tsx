"use client";

import { resetIntroSeen } from "@/lib/intro/introStorage";

export function IntroDebug() {
  if (process.env.NODE_ENV !== "development") {
    return null;
  }

  const handleReset = () => {
    resetIntroSeen();
    window.location.reload();
  };

  return (
    <div className="fixed bottom-4 right-4 z-[var(--z-command)]">
      <button
        type="button"
        onClick={handleReset}
        className="rounded-full border border-[var(--color-border-strong)] bg-[rgba(10,12,18,0.85)] px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-[var(--color-periwinkle)] shadow-lg backdrop-blur-md transition-colors hover:border-[var(--color-periwinkle)] hover:text-white"
      >
        RESET INTRO
      </button>
    </div>
  );
}
