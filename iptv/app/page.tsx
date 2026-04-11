import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhyUsSection from "@/components/WhyUsSection";
import ProviderSection from "@/components/ProviderSection";
import ChannelsSection from "@/components/ChannelsSection";
import StepsSection from "@/components/StepsSection";
import PricingSection from "@/components/PricingSection";
import DevicesSection from "@/components/DevicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";

import {
  SITE_URL,
  SITE_NAME,
  KEYWORDS,
  OG_DEFAULTS,
  LOGO_ABSOLUTE,
} from "@/lib/metadata";
import type { Metadata } from "next";

const pageTitle =
  "IPTV Premium UK – #1 Best IPTV Subscription UK 2026 | 37,000+ Channels 4K UHD";
const pageDescription =
  "Buy IPTV Premium UK — 37,000+ live UK channels, 198,000+ films & series in 4K UHD. Fast IPTV activation, zero buffering, 30-day money-back guarantee. The best IPTV UK subscription for 2026.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: KEYWORDS,
  alternates: { canonical: "/" },
  openGraph: {
    ...OG_DEFAULTS,
    title: pageTitle,
    description: pageDescription,
    url: `${SITE_URL}/`,
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: LOGO_ABSOLUTE,
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        availableLanguage: "English",
        areaServed: "GB",
      },
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: SITE_URL,
      inLanguage: "en-GB",
      publisher: { "@id": `${SITE_URL}/#organization` },
      potentialAction: {
        "@type": "SearchAction",
        target: `${SITE_URL}/?s={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: pageTitle,
      inLanguage: "en-GB",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organization` },
      description: pageDescription,
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/#service`,
      name: "IPTV Premium UK Subscription",
      description:
        "Premium IPTV subscription service for UK viewers featuring 37,000+ live channels, 198,000+ films and series in 4K UHD, 7-day catch-up TV, anti-freeze technology, and 24/7 UK-based support.",
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: {
        "@type": "Country",
        name: "United Kingdom",
      },
      serviceType: "IPTV Subscription",
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "GBP",
        lowPrice: "25.99",
        highPrice: "79.99",
        offerCount: 4,
        availability: "https://schema.org/InStock",
        url: `${SITE_URL}/pricing`,
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${SITE_URL}/#breadcrumbs`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${SITE_URL}/`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is Premium IPTV UK easy to set up?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Setup takes less than two minutes. You receive your login details by email right after ordering, enter them in your IPTV app, and start watching immediately.",
          },
        },
        {
          "@type": "Question",
          name: "What devices work with your IPTV subscription?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It works on Smart TVs, Amazon Firestick, Android TV boxes, iPhone, iPad, Android phones, MAG boxes, Formuler devices, Windows PCs, and Mac computers.",
          },
        },
        {
          "@type": "Question",
          name: "How fast does my broadband need to be?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For HD streaming, 10 Mbps is enough. For 4K UHD streaming, we recommend 25 Mbps or faster for the best experience.",
          },
        },
        {
          "@type": "Question",
          name: "Is there a minimum contract?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. There are no contracts or hidden fees. Pick any plan, pay once, and renew only when you are ready.",
          },
        },
        {
          "@type": "Question",
          name: "What if I am not happy with the service?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Every plan includes a 30-day money-back guarantee. If you are not satisfied, contact support within 30 days for a full refund.",
          },
        },
        {
          "@type": "Question",
          name: "How many screens can I use at once?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "All plans include up to 5 simultaneous screens, so the whole household can watch different content at the same time.",
          },
        },
        {
          "@type": "Question",
          name: "Do you include UK sports channels?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Sky Sports, BT Sport, TNT Sports, and more are included, with live coverage of the Premier League, Formula 1, UFC, boxing, and other major events.",
          },
        },
        {
          "@type": "Question",
          name: "What is your IPTV service uptime?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our platform is built for reliability with 99.9% uptime, backed by anti-freeze technology and 24/7 monitoring.",
          },
        },
        {
          "@type": "Question",
          name: "What happens when my plan runs out?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Your service stops at the end of your subscription term. There are no automatic surprise renewals, and you can renew whenever you want.",
          },
        },
        {
          "@type": "Question",
          name: "Is support available if I need help?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Our UK-based support team is available 24/7 via live chat, email, and WhatsApp.",
          },
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <>
      <Header />

      <main id="main-content" role="main">
        <HeroSection />
        <WhyUsSection />
        <ProviderSection />
        <ChannelsSection />
        <StepsSection />
        <PricingSection />
        <DevicesSection />
        <TestimonialsSection />
        <FAQSection />

      </main>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

    </>
  );
}