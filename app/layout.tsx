import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://bayupratama.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Bayu Pratama — Software Engineer",
    template: "%s — Bayu Pratama",
  },
  description:
    "Portfolio of Bayu Pratama Agus Kurniawan — Software Engineer building mobile, backend, web, and applied AI products.",
  keywords: [
    "Bayu Pratama",
    "Software Engineer",
    "Laravel Developer",
    "Kotlin Developer",
    "Flutter Developer",
    "Android Developer",
    "Indonesia",
  ],
  authors: [{ name: "Bayu Pratama Agus Kurniawan" }],
  creator: "Bayu Pratama Agus Kurniawan",
  openGraph: {
    title: "Bayu Pratama — Software Engineer",
    description: "Mobile, backend, web, and applied AI products built around real-world workflows.",
    type: "website",
    locale: "en_US",
    siteName: "Bayu Pratama Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bayu Pratama — Software Engineer",
    description: "Mobile, backend, web, and applied AI products built around real-world workflows.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
