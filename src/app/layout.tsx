import type { Metadata } from "next";
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
      <body>{children}</body>
    </html>
  );
}