"use client";

import { useEffect, useRef } from "react";
import { trackServiceView } from "@/lib/analytics/events";

interface ServiceViewTrackerProps {
  slug: string;
}

export function ServiceViewTracker({ slug }: ServiceViewTrackerProps) {
  const trackedSlug = useRef<string | null>(null);

  useEffect(() => {
    if (trackedSlug.current === slug) {
      return;
    }
    trackedSlug.current = slug;
    trackServiceView(slug);
  }, [slug]);

  return null;
}
