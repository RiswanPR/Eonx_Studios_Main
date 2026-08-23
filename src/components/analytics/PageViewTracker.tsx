"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { trackPage } from "@/lib/analytics/client";

export function PageViewTracker() {
  const pathname = usePathname();
  const lastTrackedPath = useRef<string | null>(null);

  useEffect(() => {
    if (!pathname) {
      return;
    }

    if (lastTrackedPath.current === pathname) {
      return;
    }

    lastTrackedPath.current = pathname;
    trackPage(pathname);
  }, [pathname]);

  return null;
}
