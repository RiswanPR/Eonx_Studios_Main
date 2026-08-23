"use client";

import { useEffect, useRef } from "react";

export function useOrbitalInteraction() {
  const pointer = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Only enable fine-pointer interactions if mouse is available and not reduced motion
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!hasFinePointer || reducedMotion) {
      return;
    }

    const handlePointerMove = (event: PointerEvent) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      pointer.current.x = x;
      pointer.current.y = y;
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return pointer;
}
