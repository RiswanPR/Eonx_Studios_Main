import type { Metadata } from "next";
import { AnalyticsConsentProvider } from "@/components/analytics/AnalyticsConsentProvider";
import { AnalyticsDebug } from "@/components/analytics/AnalyticsDebug";
import { AnalyticsProvider } from "@/components/analytics/AnalyticsProvider";
import { AttributionProvider } from "@/components/analytics/AttributionProvider";
import { PageViewTracker } from "@/components/analytics/PageViewTracker";
import { Footer } from "@/components/footer/Footer";
import { CookieConsent } from "@/components/legal/CookieConsent";
import { Navbar } from "@/components/navigation/Navbar";
import { PerformanceDebug } from "@/components/performance/PerformanceDebug";
import { PerformanceProvider } from "@/components/performance/PerformanceProvider";
import { StructuredData } from "@/components/seo/StructuredData";
import { MotionProvider } from "@/components/shared/motion/MotionProvider";
import { PageTransition } from "@/components/shared/motion/PageTransition";
import { EonxGrid } from "@/components/shared/visual/EonxGrid";
import { ExperienceProvider } from "@/experience/ExperienceProvider";
import { buildMetadata } from "@/lib/seo/metadata";
import { getOrganizationSchema, getWebsiteSchema } from "@/lib/seo/schema";
import "./globals.css";

export const metadata: Metadata = buildMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <EonxGrid />
        <div className="relative z-[var(--z-content)]">
          <StructuredData data={getOrganizationSchema()} />
          <StructuredData data={getWebsiteSchema()} />
          <PerformanceProvider>
            <MotionProvider>
              <ExperienceProvider>
                <AnalyticsProvider>
                  <PageViewTracker />
                  <AttributionProvider />
                  <AnalyticsConsentProvider />
                  <Navbar />
                  <PageTransition>{children}</PageTransition>
                  <Footer />
                  <CookieConsent />
                  <AnalyticsDebug />
                  <PerformanceDebug />
                </AnalyticsProvider>
              </ExperienceProvider>
            </MotionProvider>
          </PerformanceProvider>
        </div>
      </body>
    </html>
  );
}