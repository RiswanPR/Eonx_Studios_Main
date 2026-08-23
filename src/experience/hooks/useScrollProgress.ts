"use client";

import { useEffect, useRef } from "react";

export function useScrollProgress() {
  const progress = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const update = () => {
      const max =
        document.documentElement.scrollHeight - window.innerHeight;

      progress.current = max <= 0 ? 0 : window.scrollY / max;
      ticking.current = false;
    };

    const handleScroll = () => {
      if (ticking.current) {
        return;
      }
      ticking.current = true;
      requestAnimationFrame(update);
    };

    update();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return progress;
}
