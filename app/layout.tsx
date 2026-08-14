import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import Script from "next/script";
import { NumberPoolRefresh } from "./components/number-pool-refresh";
import "./globals.css";
import { openGraphBase, siteUrl } from "./seo";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const title = "Tree Removal in Yuba City, CA - Free Same Day Estimates";
const description =
  "Tree removal, trimming, stump grinding, and 24/7 storm response across Yuba City and the valley. Licensed, fully insured, free written estimates.";

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title,
  description,
  // `og:image` / `twitter:image` come from app/opengraph-image.png automatically;
  // these fill in the rest of the card so it isn't left to crawler guesswork.
  openGraph: {
    ...openGraphBase,
    title,
    description,
    ...(siteUrl ? { url: siteUrl } : {}),
  },
  twitter: { card: "summary_large_image", title, description },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} h-full antialiased`}>
      <body className="font-display flex min-h-full flex-col">
        {children}
        <NumberPoolRefresh />
      </body>
      {/* LeadConnector dynamic number insertion + session tracking. */}
      <Script src="https://backend.leadconnectorhq.com/appengine/loc/2CukhcB1qPD0gpCVcr1Q/pool/qDIVxGtJy5miOO5lZI5b/number_pool.js" />
      <Script src="https://backend.leadconnectorhq.com/appengine/js/user_session.js" />
    </html>
  );
}
