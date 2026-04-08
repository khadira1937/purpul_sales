import LazySiteInteractions from "@/components/LazySiteInteractions";
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
  "IPTV Premium UK – #1 Best IPTV Subscription UK 2026 | 37,000 Channels 4K";

const siteDescription =
  "Get the best IPTV Premium UK subscription in 2026. 37,000+ live UK channels, 198,000 movies & series, 4K streaming, no buffering. Instant activation & 30-day money-back guarantee. Try IPTV Premium UK today!";

export const metadata: Metadata = {
  metadataBase: new URL("https://iptv-premium-uk.tv"),
  title: siteTitle,
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  keywords: [
    "iptv uk",
    "iptv subscription",
    "premium iptv",
    "iptv service",
    "british iptv",
    "iptv providers",
    "best iptv uk",
    "iptv reviews",
  ],
  openGraph: {
    locale: "en_GB",
    type: "website",
    title: siteTitle,
    description: siteDescription,
    url: "https://iptv-premium-uk.tv/",
    siteName: "Premium IPTV",
    images: [
      {
        url: "/og-image.webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og-image.webp"],
  },
  icons: {
    icon: [{ url: "/logo-new.webp", sizes: "32x32" }],
    apple: [{ url: "/logo-new.webp" }],
  },
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
