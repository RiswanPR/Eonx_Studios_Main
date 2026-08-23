"use client";

import { EonxIntro } from "./EonxIntro";
import { IntroDebug } from "./IntroDebug";

interface IntroGateProps {
  children: React.ReactNode;
}

export function IntroGate({ children }: IntroGateProps) {
  return (
    <>
      <EonxIntro />
      {children}
      <IntroDebug />
    </>
  );
}
