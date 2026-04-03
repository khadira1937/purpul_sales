import type { Metadata } from "next";
import "./globals.css";

const siteTitle =
  "Premium IPTV UK - The Definitive 4K Streaming Experience | Prestige IPTV UK";

const siteDescription =
  "Prestige IPTV UK is not for everyone - it is for viewers who demand the absolute best from their screen. 37,000 live channels delivered through dedicated 4K server infrastructure, a 198,000-title cinema-grade VOD library, and white-glove support that treats you as an individual, not a ticket number. Welcome to premium IPTV as it was always meant to be.";

export const metadata: Metadata = {
  metadataBase: new URL("https://iptv-premium-uk.tv"),
  title: siteTitle,
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  keywords: [
    "premium iptv",
    "iptv uk",
    "best iptv uk",
    "iptv subscription",
    "iptv service",
    "iptv providers",
    "british iptv",
    "iptv reviews",
  ],
  openGraph: {
    locale: "en_GB",
    type: "website",
    title: siteTitle,
    description: siteDescription,
    url: "https://iptv-premium-uk.tv/",
    siteName: "Prestige IPTV UK",
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
    <html lang="en-GB">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400&family=Inter:wght@400;500;600;700;800;900&family=Poppins:wght@300;400;500;600;700;800;900&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
