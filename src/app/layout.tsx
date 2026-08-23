import type { Metadata } from "next";
import { Footer } from "@/components/footer/Footer";
import { CookieConsent } from "@/components/legal/CookieConsent";
import { Navbar } from "@/components/navigation/Navbar";
import { StructuredData } from "@/components/seo/StructuredData";
import { MotionProvider } from "@/components/shared/motion/MotionProvider";
import { PageTransition } from "@/components/shared/motion/PageTransition";
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
        <StructuredData data={getOrganizationSchema()} />
        <StructuredData data={getWebsiteSchema()} />
        <MotionProvider>
          <ExperienceProvider>
            <Navbar />
            <PageTransition>{children}</PageTransition>
            <Footer />
            <CookieConsent />
          </ExperienceProvider>
        </MotionProvider>
      </body>
    </html>
  );
}