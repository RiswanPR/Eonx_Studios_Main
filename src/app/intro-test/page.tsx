import type { Metadata } from "next";
import { EonxIntro } from "@/components/intro/EonxIntro";
import { IntroDebug } from "@/components/intro/IntroDebug";

export const metadata: Metadata = {
  title: "Intro Test — Eonx Studios",
  description: "D4 Cinematic Intro testbed and verification harness",
  robots: {
    index: false,
    follow: false,
  },
};

export default function IntroTestPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center bg-[var(--color-eonx-black)] p-8">
      <EonxIntro />

      <div className="text-center">
        <span className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-periwinkle)]">
          D4 / INTRO TESTBED
        </span>
        <h1 className="mt-4 font-[var(--font-display)] text-4xl text-white md:text-6xl">
          Eonx Experience Active
        </h1>
        <p className="mx-auto mt-4 max-w-md text-xs text-[var(--color-text-secondary)]">
          This test route verifies the intro sequence, timing stages, skip functionality, Escape listener, session persistence, and reduced-motion bypass.
        </p>
      </div>

      <IntroDebug />
    </main>
  );
}
