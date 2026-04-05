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
  "IPTV UK — Premium IPTV Subscription | Premium IPTV 2026";

const siteDescription =
  "Premium IPTV UK subscription with [X,000+] channels in HD & 4K. British TV, live sports, movies & VOD. Instant activation, [X]-day guarantee. Subscribe now.";

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
