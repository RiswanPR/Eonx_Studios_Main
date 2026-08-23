"use client";

import { useEffect, useRef } from "react";
import { trackProjectView } from "@/lib/analytics/events";

interface ProjectViewTrackerProps {
  slug: string;
}

export function ProjectViewTracker({ slug }: ProjectViewTrackerProps) {
  const trackedSlug = useRef<string | null>(null);

  useEffect(() => {
    if (trackedSlug.current === slug) {
      return;
    }
    trackedSlug.current = slug;
    trackProjectView(slug);
  }, [slug]);

  return null;
}
