import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

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
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
