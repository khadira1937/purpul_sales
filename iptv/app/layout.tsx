import type { Metadata } from "next";
import "./globals.css";

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
