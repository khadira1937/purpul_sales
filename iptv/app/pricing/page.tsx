import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Icon from "@/components/Icon";

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing Plans | Premium IPTV UK",
  description:
    "Choose your Premium IPTV UK plan with 37,000+ live channels, 198,000+ films and series, 7-day catch-up TV, and a 30-day money-back guarantee.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Pricing Plans | Premium IPTV UK",
    description:
      "Choose your Premium IPTV UK plan with 37,000+ live channels, 198,000+ films and series, 7-day catch-up TV, and a 30-day money-back guarantee.",
    url: "https://iptv-premium-uk.tv/pricing",
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
      "@type": "WebPage",
      "@id": "https://iptv-premium-uk.tv/pricing#webpage",
      url: "https://iptv-premium-uk.tv/pricing",
      name: "Pricing Plans | Premium IPTV UK",
      inLanguage: "en-GB",
      isPartOf: { "@id": "https://iptv-premium-uk.tv/#website" },
      description:
        "Choose your Premium IPTV UK plan with 37,000+ live channels, 198,000+ films and series, 7-day catch-up TV, and a 30-day money-back guarantee.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://iptv-premium-uk.tv/" },
        { "@type": "ListItem", position: 2, name: "Pricing", item: "https://iptv-premium-uk.tv/pricing" },
      ],
    },
    {
      "@type": "Product",
      name: "Premium IPTV — 3-Month IPTV Subscription",
      description: "Premium IPTV subscription with 37,000+ live channels, 198,000+ films and series, full EPG, and 7-day catch-up TV for 3 months.",
      brand: { "@type": "Brand", name: "Premium IPTV" },
      offers: {
        "@type": "Offer",
        url: "https://iptv-premium-uk.tv/pricing",
        priceCurrency: "GBP",
        price: "25.99",
        availability: "https://schema.org/InStock",
        priceValidUntil: "2026-12-31",
      },
    },
    {
      "@type": "Product",
      name: "Premium IPTV — 6-Month IPTV Subscription",
      description: "Premium IPTV subscription with 37,000+ live channels, 198,000+ films and series, full EPG, and 7-day catch-up TV for 6 months.",
      brand: { "@type": "Brand", name: "Premium IPTV" },
      offers: {
        "@type": "Offer",
        url: "https://iptv-premium-uk.tv/pricing",
        priceCurrency: "GBP",
        price: "35.99",
        availability: "https://schema.org/InStock",
        priceValidUntil: "2026-12-31",
      },
    },
    {
      "@type": "Product",
      name: "Premium IPTV — 12-Month IPTV Subscription",
      description: "Premium IPTV subscription with 37,000+ live channels, 198,000+ films and series, full EPG, and 7-day catch-up TV for 12 months.",
      brand: { "@type": "Brand", name: "Premium IPTV" },
      offers: {
        "@type": "Offer",
        url: "https://iptv-premium-uk.tv/pricing",
        priceCurrency: "GBP",
        price: "49.99",
        availability: "https://schema.org/InStock",
        priceValidUntil: "2026-12-31",
      },
    },
    {
      "@type": "Product",
      name: "Premium IPTV — 24-Month IPTV Subscription",
      description: "Premium IPTV subscription with 37,000+ live channels, 198,000+ films and series, full EPG, and 7-day catch-up TV for 24 months.",
      brand: { "@type": "Brand", name: "Premium IPTV" },
      offers: {
        "@type": "Offer",
        url: "https://iptv-premium-uk.tv/pricing",
        priceCurrency: "GBP",
        price: "79.99",
        availability: "https://schema.org/InStock",
        priceValidUntil: "2026-12-31",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Do I need to pay for anything beyond the subscription price?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. The price shown is the total cost. There are no activation fees, no per-channel charges, and no hidden costs. Your subscription includes everything listed on this page.",
          },
        },
        {
          "@type": "Question",
          name: "Can I upgrade or change my plan later?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. You can switch to a longer plan at any time. Contact our support team and we will apply any price difference as credit toward your new plan.",
          },
        },
        {
          "@type": "Question",
          name: "What payment methods do you accept?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We accept major debit and credit cards. All transactions are processed securely.",
          },
        },
        {
          "@type": "Question",
          name: "Is there an auto-renewal?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. There is no automatic renewal. You can renew manually when your current plan ends.",
          },
        },
        {
          "@type": "Question",
          name: "What if I want to cancel?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can cancel at any time. If you are within the 30-day money-back guarantee period and not satisfied, contact support for a full refund.",
          },
        },
      ],
    },
  ],
};

export default function PricingPage() {
  return (
    <>
      <Header />

      <main id="main-content" role="main">
        {/* ===== BREADCRUMBS ===== */}
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <div className="section-container">
            <ol>
              <li><Link href="/">Home</Link></li>
              <li aria-current="page">Pricing</li>
            </ol>
          </div>
        </nav>

        {/* ===== PRICING HERO ===== */}
        <section className="pricing-section pricing-page-hero" id="pricing">
          <div className="pricing-bg-overlay"></div>
          <div className="section-container">
            <h1 className="section-title white">
              IPTV Premium UK Plans 2026 &mdash; Best IPTV Subscription UK Prices | Instant Activation
            </h1>
            <h2 className="pricing-subtitle">
              Every IPTV Premium UK plan includes 4K UHD streams, built-in VPN, anti-freeze technology, full UK channels, 24/7 support, and a 30-day money-back guarantee.
            </h2>

            <div className="spacer-30"></div>

            <div className="plans-section">
              <div className="connection-toggle">
                <button id="toggle-1" className="toggle-btn active">
                  1 Connection
                </button>
                <button id="toggle-2" className="toggle-btn">
                  2 Connections
                </button>
              </div>

              <div className="plans-grid" id="plans-grid">

                <div className="plan-card" data-plan="3">
                  <h4 className="plan-title" data-base-text="3 Months">
                    3 Months
                  </h4>
                  <div className="plan-price">
                    <div className="past-price">
                      <span className="past-amount" data-past1="39.99" data-past2="59.99">39.99</span>
                    </div>
                    <span className="currency">&pound;</span>
                    <span className="amount" data-price1="25.99" data-price2="37.99">25.99</span>
                  </div>
                  <a className="plan-btn" data-href1="#pricing" data-href2="#pricing" href="#pricing">Begin Your Premium Experience</a>
                  <ul className="plan-features">
                    <li>37,000+ live channels with full UK coverage</li>
                    <li>198,000+ films, series, and documentaries on demand</li>
                    <li>Full EPG with 7-day catch-up TV</li>
                    <li>HD, Full HD &amp; 4K streaming quality</li>
                    <li>Multi-device access &mdash; up to 5 simultaneous connections</li>
                    <li>24/7 dedicated UK support</li>
                    <li>30-day money-back guarantee</li>
                    <li>Instant activation</li>
                  </ul>
                </div>

                <div className="plan-card" data-plan="6">
                  <h4 className="plan-title" data-base-text="6 Months">
                    6 Months
                  </h4>
                  <div className="plan-price">
                    <div className="past-price">
                      <span className="past-amount" data-past1="59.99" data-past2="79.99">59.99</span>
                    </div>
                    <span className="currency">&pound;</span>
                    <span className="amount" data-price1="35.99" data-price2="57.99">35.99</span>
                  </div>
                  <a className="plan-btn" data-href1="#pricing" data-href2="#pricing" href="#pricing">Subscribe for 6 Months</a>
                  <ul className="plan-features">
                    <li>37,000+ live channels with full UK coverage</li>
                    <li>198,000+ films, series, and documentaries on demand</li>
                    <li>Full EPG with 7-day catch-up TV</li>
                    <li>HD, Full HD &amp; 4K streaming quality</li>
                    <li>Multi-device access &mdash; up to 5 simultaneous connections</li>
                    <li>24/7 dedicated UK support</li>
                    <li>30-day money-back guarantee</li>
                    <li>Instant activation</li>
                  </ul>
                </div>

                <div className="plan-card premium" data-plan="12">
                  <div className="popular-badge">Best Value</div>
                  <h4 className="plan-title" data-base-text="12 Months">
                    12 Months
                  </h4>
                  <div className="plan-price">
                    <div className="past-price">
                      <span className="past-amount" data-past1="79.99" data-past2="129.99">79.99</span>
                    </div>
                    <span className="currency">&pound;</span>
                    <span className="amount" data-price1="49.99" data-price2="89.99">49.99</span>
                  </div>
                  <a className="plan-btn" data-href1="#pricing" data-href2="#pricing" href="#pricing">Subscribe for 12 Months</a>
                  <ul className="plan-features">
                    <li>37,000+ live channels with full UK coverage</li>
                    <li>198,000+ films, series, and documentaries on demand</li>
                    <li>Full EPG with 7-day catch-up TV</li>
                    <li>HD, Full HD &amp; 4K streaming quality</li>
                    <li>Multi-device access &mdash; up to 5 simultaneous connections</li>
                    <li>24/7 dedicated UK support</li>
                    <li>30-day money-back guarantee</li>
                    <li>Instant activation</li>
                  </ul>
                </div>

                <div className="plan-card" data-plan="24">
                  <h4 className="plan-title" data-base-text="24 Months">
                    24 Months
                  </h4>
                  <div className="plan-price">
                    <div className="past-price">
                      <span className="past-amount" data-past1="129.99" data-past2="199.99">129.99</span>
                    </div>
                    <span className="currency">&pound;</span>
                    <span className="amount" data-price1="79.99" data-price2="129.99">79.99</span>
                  </div>
                  <a className="plan-btn" data-href1="#pricing" data-href2="#pricing" href="#pricing">Subscribe for 24 Months</a>
                  <ul className="plan-features">
                    <li>37,000+ live channels with full UK coverage</li>
                    <li>198,000+ films, series, and documentaries on demand</li>
                    <li>Full EPG with 7-day catch-up TV</li>
                    <li>HD, Full HD &amp; 4K streaming quality</li>
                    <li>Multi-device access &mdash; up to 5 simultaneous connections</li>
                    <li>24/7 dedicated UK support</li>
                    <li>30-day money-back guarantee</li>
                    <li>Instant activation</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="pricing-note">
              <p>All payments are processed securely. We accept major debit and credit cards. Your IPTV Premium UK subscription activates instantly and is protected by our 30-day money-back guarantee.</p>
            </div>
          </div>
        </section>

        {/* ===== WHAT IS INCLUDED ===== */}
        <section className="why-us-section" id="included">
          <div className="section-container">
            <h2 className="section-title white">What Is Included in Every IPTV Premium UK Plan</h2>
            <p className="section-intro">
              Every IPTV Premium UK subscription &mdash; whether monthly or annual &mdash; includes the complete Premium IPTV experience with no feature restrictions, delivering a true British IPTV 4K service to your living room.
            </p>
            <div className="spacer-30"></div>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon"><Icon name="tv" /></div>
                <h3 className="feature-title">British IPTV 4K Entertainment</h3>
                <p className="feature-desc">
                  You receive every channel in our lineup from day one, including 37,000+ live channels with complete UK coverage. Nothing is locked behind a higher tier. <a href="/channels">Browse the full channel list &rarr;</a>
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon"><Icon name="film" /></div>
                <h3 className="feature-title">Movies & IPTV UK 4K VOD</h3>
                <p className="feature-desc">
                  198,000+ films and series updated daily. Search, browse by category, and watch instantly &mdash; included at no extra cost.
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon"><Icon name="calendar-alt" /></div>
                <h3 className="feature-title">Fast IPTV News &amp; Documentary</h3>
                <p className="feature-desc">
                  A proper electronic programme guide lets you see what is on now and coming up. The 7-day catch-up feature means you never miss a programme.
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon"><Icon name="laptop" /></div>
                <h3 className="feature-title">Cheap IPTV for Family & Kids</h3>
                <p className="feature-desc">
                  Use your subscription on up to 5 devices at the same time. Works on Firestick, Android, iOS, Smart TVs, MAG boxes, computers, and more.
                </p>
              </div>
            </div>
            <div className="spacer-30"></div>
            <div style={{ textAlign: "center" }}>
              <p className="section-intro">
                <strong>30-Day Money-Back Guarantee.</strong> Try the full service risk-free. If it does not meet your expectations, contact us within 30 days for a complete refund. <a href="/refund-policy">Read our refund policy &rarr;</a>
              </p>
            </div>
          </div>
        </section>

        {/* ===== HOW TO SUBSCRIBE ===== */}
        <section className="steps-section" id="how-to-subscribe">
          <div className="section-container">
            <h2 className="section-title white">How to Get Your IPTV Premium UK Subscription &mdash; 3 Simple Steps</h2>
            <p className="section-intro">Start streaming in minutes. If you want to buy IPTV subscription with no technical setup stress, no delays, and no contract lock-ins, just follow these steps:</p>
            <div className="spacer-30"></div>
            <div className="steps-grid">
              <div className="step-card">
                <div className="step-number">1</div>
                <h3>Step 1 &mdash; Pick Your Best IPTV UK Subscription</h3>
                <p>Pick the plan that suits you best. Every plan includes the full service from day one, and longer plans offer the best savings.</p>
              </div>
              <div className="step-card">
                <div className="step-number">2</div>
                <h3>Step 2 &mdash; Get Fast IPTV Activation in Minutes</h3>
                <p>As soon as payment is confirmed, your login details are sent by email. No waiting around and no complicated activation process.</p>
              </div>
              <div className="step-card">
                <div className="step-number">3</div>
                <h3>Step 3 &mdash; Start Watching British IPTV 4K</h3>
                <p>Open your IPTV app, enter your details, and press play. Setup takes under two minutes, and our team is ready to help if needed.</p>
              </div>
            </div>
            <div className="spacer-20"></div>
            <div style={{ textAlign: "center" }}>
              <p className="section-intro">
                Need help with setup? Our <Link href="/setup">step-by-step guides</Link> cover every supported device.
              </p>
            </div>
          </div>
        </section>

        {/* ===== PRICING FAQ ===== */}
        <section className="seo-section" id="pricing-faq">
          <div className="section-container">
            <div className="seo-content">
              <h2>Pricing Questions Answered</h2>
              <div className="faq-accordion">
                <div className="faq-item">
                  <button className="faq-question" aria-expanded="false">
                    <span>Do I need to pay for anything beyond the IPTV Premium UK subscription price?</span>
                    <Icon name="chevron-down" />
                  </button>
                  <div className="faq-answer">
                    <p>No. The price shown is the total cost. Unlike some other IPTV providers UK, there are no activation fees, no per-channel charges, and no hidden costs. Your subscription includes everything listed on this page.</p>
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-question" aria-expanded="false">
                    <span>Can I upgrade or change my IPTV Premium UK plan later?</span>
                    <Icon name="chevron-down" />
                  </button>
                  <div className="faq-answer">
                    <p>Yes. You can switch to a longer plan at any time. Contact our support team and we will apply any price difference as credit toward your new plan.</p>
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-question" aria-expanded="false">
                    <span>What payment methods do you accept for IPTV Premium UK?</span>
                    <Icon name="chevron-down" />
                  </button>
                  <div className="faq-answer">
                    <p>We accept major debit and credit cards. All transactions are processed securely.</p>
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-question" aria-expanded="false">
                    <span>Is there an auto-renewal on IPTV Premium UK?</span>
                    <Icon name="chevron-down" />
                  </button>
                  <div className="faq-answer">
                    <p>No. There is no automatic renewal. You can renew manually when your current plan ends.</p>
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-question" aria-expanded="false">
                    <span>What if I want to cancel my IPTV Premium UK subscription?</span>
                    <Icon name="chevron-down" />
                  </button>
                  <div className="faq-answer">
                    <p>You can cancel at any time. If you are within the 30-day money-back guarantee period and not satisfied, contact support for a full refund.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== NOT SURE WHICH PLAN ===== */}
        <section className="cta-section" id="not-sure">
          <div className="cta-bg-overlay"></div>
          <div className="section-container">
            <h2 className="cta-title">Not Sure Which Plan to Choose?</h2>
            <p className="cta-subtitle">
              If you are new to IPTV and want to test the service before committing, the 3-month plan is ideal. It gives you full access to everything so you can evaluate channel quality, streaming reliability, and the VOD library with minimal commitment.
            </p>
            <p className="cta-subtitle">
              If you already know you want IPTV and are looking for a high-quality yet cheap IPTV alternative to expensive cable bills, the 12-month and 24-month plans offer the strongest savings compared with shorter plans.  
            </p>
            <div className="spacer-20"></div>
            <Link href="#pricing" className="btn-primary btn-medium">Subscribe Now &rarr;</Link>
            <div className="spacer-20"></div>
            <p className="cta-subtitle">
              Have questions before you decide? <Link href="/faq" style={{ color: "var(--purple-3)", fontWeight: 700 }}>Check our FAQ</Link> or <Link href="mailto:concierge@iptv-premium-uk.tv" style={{ color: "var(--purple-3)", fontWeight: 700 }}>contact our support team</Link>.
            </p>
            <div className="spacer-20"></div>
            <p className="cta-subtitle">
              <Link href="/best-iptv-uk" style={{ color: "var(--purple-3)", fontWeight: 700 }}>Find out why we are rated the best IPTV in the UK &rarr;</Link>
            </p>
          </div>
        </section>
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
