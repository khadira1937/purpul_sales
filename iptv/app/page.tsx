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

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium IPTV UK | #1 IPTV Subscription Service 2026",
  description:
    "Buy Premium IPTV UK with 37,000+ live channels and 198,000+ films and series in 4K UHD. Zero buffering, instant activation, and a 30-day money-back guarantee.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Premium IPTV UK | #1 IPTV Subscription Service 2026",
    description:
      "Buy Premium IPTV UK with 37,000+ live channels and 198,000+ films and series in 4K UHD. Zero buffering, instant activation, and a 30-day money-back guarantee.",
    url: "https://iptv-premium-uk.tv/",
    type: "website",
    locale: "en_GB",
    siteName: "Premium IPTV",
    images: [{ url: "/og-image.webp" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://iptv-premium-uk.tv/#organization",
      name: "Premium IPTV",
      url: "https://iptv-premium-uk.tv",
      logo: {
        "@type": "ImageObject",
        url: "https://iptv-premium-uk.tv/logo.png",
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
      "@id": "https://iptv-premium-uk.tv/#website",
      name: "Premium IPTV",
      url: "https://iptv-premium-uk.tv",
      inLanguage: "en-GB",
      publisher: { "@id": "https://iptv-premium-uk.tv/#organization" },
      potentialAction: {
        "@type": "SearchAction",
        target: "https://iptv-premium-uk.tv/?s={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://iptv-premium-uk.tv/#webpage",
      url: "https://iptv-premium-uk.tv",
      name: "Premium IPTV UK | #1 IPTV Subscription Service 2026",
      inLanguage: "en-GB",
      isPartOf: { "@id": "https://iptv-premium-uk.tv/#website" },
      about: { "@id": "https://iptv-premium-uk.tv/#organization" },
      description:
        "Premium IPTV UK with 37,000+ live channels, 198,000+ films and series, 4K UHD quality, and instant activation.",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://iptv-premium-uk.tv/#breadcrumbs",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://iptv-premium-uk.tv/",
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