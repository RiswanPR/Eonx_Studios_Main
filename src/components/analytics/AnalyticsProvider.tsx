"use client";

import { useEffect, type ReactNode } from "react";
import { configureAnalytics } from "@/lib/analytics/client";
import { consoleAnalyticsProvider } from "@/lib/analytics/providers/console";

interface AnalyticsProviderProps {
  children: ReactNode;
}

export function AnalyticsProvider({ children }: AnalyticsProviderProps) {
  useEffect(() => {
    configureAnalytics(consoleAnalyticsProvider);
  }, []);

  return <>{children}</>;
}
