import type { Metadata } from "next";
import { Navbar } from "@/components/navigation/Navbar";
import { MotionProvider } from "@/components/shared/motion/MotionProvider";
import { PageTransition } from "@/components/shared/motion/PageTransition";
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
          <Navbar />
          <PageTransition>{children}</PageTransition>
        </MotionProvider>
      </body>
    </html>
  );
}