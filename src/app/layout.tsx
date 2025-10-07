import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Djibyuda Portfolio",
  description:
    "Modern interactive CV built with Next.js, TypeScript, Tailwind CSS, and GSAP.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
