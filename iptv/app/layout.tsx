import LazySiteInteractions from "@/components/LazySiteInteractions";
import {
  SITE_URL,
  SITE_NAME,
  KEYWORDS,
  OG_IMAGE,
  OG_DEFAULTS,
} from "@/lib/metadata";
import type { Metadata } from "next";
import { DM_Sans, Poppins } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-dm-sans",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["800"],
  display: "swap",
  variable: "--font-poppins",
});

const siteTitle =
  "IPTV Premium UK – #1 Best IPTV Subscription UK 2026 | 37,000+ Channels 4K";

const siteDescription =
  "Get the best IPTV Premium UK subscription in 2026. 37,000+ live UK channels, 198,000+ movies & series, 4K streaming, no buffering. Instant activation & 30-day money-back guarantee. Try IPTV Premium UK today!";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: siteTitle,
    template: `%s | ${SITE_NAME}`,
  },
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  keywords: KEYWORDS,
  openGraph: {
    ...OG_DEFAULTS,
    type: "website",
    title: siteTitle,
    description: siteDescription,
    url: `${SITE_URL}/`,
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [OG_IMAGE],
  },
  icons: {
    icon: [
      { url: "/favicon_logos/favicon.ico", sizes: "any" },
      { url: "/favicon_logos/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon_logos/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/favicon_logos/apple-touch-icon.png", sizes: "180x180" }],
    other: [
      { rel: "icon", url: "/favicon_logos/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { rel: "icon", url: "/favicon_logos/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  manifest: "/favicon_logos/site.webmanifest",
  formatDetection: {
    telephone: false,
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${dmSans.variable} ${poppins.variable}`}>
      <body className={dmSans.className}>
        {children}
        <LazySiteInteractions />
      </body>
    </html>
  );
}
