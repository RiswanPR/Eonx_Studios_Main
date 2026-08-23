"use client";

import { useEffect } from "react";
import { captureAttribution } from "@/lib/analytics/attribution";

export function AttributionProvider() {
  useEffect(() => {
    captureAttribution();
  }, []);

  return null;
}
