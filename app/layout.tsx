import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { siteUrl } from "./seo";
import { business } from "./site-content";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: `${business.name} | Locally Owned Tree Care in Yuba & Sutter County`,
  description:
    "Tree removal, trimming, stump grinding, and 24/7 storm response across Yuba City and the valley. Licensed, fully insured, free written estimates.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} h-full antialiased`}>
      <body className="font-display flex min-h-full flex-col">{children}</body>
    </html>
  );
}
