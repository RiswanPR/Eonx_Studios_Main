import type { Metadata } from "next";
import { Footer } from "@/components/footer/Footer";
import { CookieConsent } from "@/components/legal/CookieConsent";
import { Navbar } from "@/components/navigation/Navbar";
import { MotionProvider } from "@/components/shared/motion/MotionProvider";
import { PageTransition } from "@/components/shared/motion/PageTransition";
import { ExperienceProvider } from "@/experience/ExperienceProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eonx — Creative Technology Studio",
  description:
    "Eonx is a creative technology studio building memorable digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
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