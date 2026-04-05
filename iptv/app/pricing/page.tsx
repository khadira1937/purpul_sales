import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Icon from "@/components/Icon";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IPTV UK Plans & Pricing — Subscribe from £[X]/mo | [BRAND]",
  description:
    "Buy your IPTV subscription today. Plans from £[X.XX]/month with [X,000+] channels, 4K quality, instant activation & [X]-day guarantee. No contract, cancel anytime.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "IPTV UK Plans & Pricing — Subscribe from £[X]/mo | [BRAND]",
    description:
      "Buy your IPTV subscription today. Plans from £[X.XX]/month with [X,000+] channels, 4K quality, instant activation & [X]-day guarantee. No contract, cancel anytime.",
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
      name: "IPTV UK Plans & Pricing — Subscribe from £[X]/mo | [BRAND]",
      inLanguage: "en-GB",
      isPartOf: { "@id": "https://iptv-premium-uk.tv/#website" },
      description:
        "Buy your IPTV subscription today. Plans from £[X.XX]/month with [X,000+] channels, 4K quality, instant activation & [X]-day guarantee.",
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
      name: "Premium IPTV — 1-Month IPTV Subscription",
      description: "Premium IPTV subscription with [X,000+] live channels, VOD library, EPG, and catch-up TV for 1 month.",
      brand: { "@type": "Brand", name: "Premium IPTV" },
      offers: {
        "@type": "Offer",
        url: "https://iptv-premium-uk.tv/pricing",
        priceCurrency: "GBP",
        price: "[XX.XX]",
        availability: "https://schema.org/InStock",
        priceValidUntil: "2026-12-31",
      },
    },
    {
      "@type": "Product",
      name: "Premium IPTV — 3-Month IPTV Subscription",
      description: "Premium IPTV subscription with [X,000+] live channels, VOD library, EPG, and catch-up TV for 3 months.",
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
      description: "Premium IPTV subscription with [X,000+] live channels, VOD library, EPG, and catch-up TV for 6 months.",
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
      description: "Premium IPTV subscription with [X,000+] live channels, VOD library, EPG, and catch-up TV for 12 months.",
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
      description: "Premium IPTV subscription with [X,000+] live channels, VOD library, EPG, and catch-up TV for 24 months.",
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
            text: "We accept [LIST ALL PAYMENT METHODS]. All transactions are processed securely with [ENCRYPTION/SECURITY DETAILS].",
          },
        },
        {
          "@type": "Question",
          name: "Is there an auto-renewal?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "[YES/NO — be transparent. If yes, explain how to cancel before renewal. If no, explain how to renew.]",
          },
        },
        {
          "@type": "Question",
          name: "What if I want to cancel?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "[Explain cancellation process clearly. If within guarantee period, explain refund process. If after guarantee period, explain what happens to remaining subscription time.]",
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
              <li><a href="/">Home</a></li>
              <li aria-current="page">Pricing</li>
            </ol>
          </div>
        </nav>

        {/* ===== PRICING HERO ===== */}
        <section className="pricing-section pricing-page-hero" id="pricing">
          <div className="pricing-bg-overlay"></div>
          <div className="section-container">
            <h1 className="section-title white">
              IPTV UK Subscription Plans &mdash; Choose What Suits You
            </h1>
            <p className="pricing-page-intro">
              Every Premium IPTV plan gives you the same complete experience: [X,000+] live channels, [X,000+] films and series on demand, a full electronic programme guide, [X]-day catch-up, and streaming in up to 4K quality. The only difference between plans is the subscription length &mdash; and the longer you commit, the less you pay per month.
            </p>
            <p className="pricing-page-intro">
              No contracts. No hidden fees. Cancel at any time. All plans include instant activation and our [X]-day money-back guarantee.
            </p>

            <div className="spacer-30"></div>

            <h2 className="section-title white" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}>
              Our Subscription Plans
            </h2>

            <div className="spacer-20"></div>

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
                  <a className="plan-btn" data-href1="#pricing" data-href2="#pricing" href="#pricing">Subscribe</a>
                  <ul className="plan-features">
                    <li>[X,000+] live channels with full UK coverage</li>
                    <li>[X,000+] films, series, and documentaries on demand</li>
                    <li>Full EPG with [X]-day catch-up TV</li>
                    <li>HD, Full HD &amp; 4K streaming quality</li>
                    <li>[X] simultaneous devices</li>
                    <li>[24/7] support</li>
                    <li>[X]-day money-back guarantee</li>
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
                  <a className="plan-btn" data-href1="#pricing" data-href2="#pricing" href="#pricing">Subscribe</a>
                  <ul className="plan-features">
                    <li>[X,000+] live channels with full UK coverage</li>
                    <li>[X,000+] films, series, and documentaries on demand</li>
                    <li>Full EPG with [X]-day catch-up TV</li>
                    <li>HD, Full HD &amp; 4K streaming quality</li>
                    <li>[X] simultaneous devices</li>
                    <li>[24/7] support</li>
                    <li>Save [X]%</li>
                    <li>[X]-day money-back guarantee</li>
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
                  <a className="plan-btn" data-href1="#pricing" data-href2="#pricing" href="#pricing">Subscribe</a>
                  <ul className="plan-features">
                    <li>[X,000+] live channels with full UK coverage</li>
                    <li>[X,000+] films, series, and documentaries on demand</li>
                    <li>Full EPG with [X]-day catch-up TV</li>
                    <li>HD, Full HD &amp; 4K streaming quality</li>
                    <li>[X] simultaneous devices</li>
                    <li>[24/7] support</li>
                    <li>Save [X]%</li>
                    <li>[X]-day money-back guarantee</li>
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
                  <a className="plan-btn" data-href1="#pricing" data-href2="#pricing" href="#pricing">Subscribe</a>
                  <ul className="plan-features">
                    <li>[X,000+] live channels with full UK coverage</li>
                    <li>[X,000+] films, series, and documentaries on demand</li>
                    <li>Full EPG with [X]-day catch-up TV</li>
                    <li>HD, Full HD &amp; 4K streaming quality</li>
                    <li>[X] simultaneous devices</li>
                    <li>[24/7] support</li>
                    <li>Save [X]%</li>
                    <li>[X]-day money-back guarantee</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== WHAT IS INCLUDED ===== */}
        <section className="why-us-section" id="included">
          <div className="section-container">
            <h2 className="section-title white">What Is Included in Every Plan</h2>
            <p className="section-intro">
              Every subscription &mdash; whether monthly or annual &mdash; includes the complete Premium IPTV experience with no feature restrictions:
            </p>
            <div className="spacer-30"></div>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon"><Icon name="tv" /></div>
                <h3 className="feature-title">Full Channel Access</h3>
                <p className="feature-desc">
                  You receive every channel in our lineup from day one. UK entertainment, premium sports, cinema, news, documentaries, kids&apos; channels, and international content. Nothing is locked behind a higher tier. <a href="/channels">Browse the full channel list &rarr;</a>
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon"><Icon name="film" /></div>
                <h3 className="feature-title">On-Demand Library</h3>
                <p className="feature-desc">
                  [X,000+] films and series updated daily. Search, browse by category, and watch instantly &mdash; included at no extra cost.
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon"><Icon name="calendar-alt" /></div>
                <h3 className="feature-title">EPG &amp; Catch-Up</h3>
                <p className="feature-desc">
                  A proper electronic programme guide lets you see what is on now and coming up. The [X]-day catch-up feature means you never miss a programme.
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon"><Icon name="laptop" /></div>
                <h3 className="feature-title">Multi-Device Streaming</h3>
                <p className="feature-desc">
                  Use your subscription on [X] devices at the same time. Works on Firestick, Android, iOS, Smart TVs, MAG boxes, computers, and more.
                </p>
              </div>
            </div>
            <div className="spacer-30"></div>
            <div style={{ textAlign: "center" }}>
              <p className="section-intro">
                <strong>[X]-Day Money-Back Guarantee.</strong> Try the full service risk-free. If it does not meet your expectations, contact us within [X] days for a complete refund. <a href="/refund-policy">Read our refund policy &rarr;</a>
              </p>
            </div>
          </div>
        </section>

        {/* ===== HOW TO SUBSCRIBE ===== */}
        <section className="steps-section" id="how-to-subscribe">
          <div className="section-container">
            <h2 className="section-title white">How to Subscribe and Start Watching</h2>
            <p className="section-intro">Subscribing takes less than two minutes:</p>
            <div className="spacer-30"></div>
            <div className="steps-grid steps-grid-5">
              <div className="step-card">
                <div className="step-number">1</div>
                <p>Select your plan from the options above.</p>
              </div>
              <div className="step-card">
                <div className="step-number">2</div>
                <p>Complete your payment securely using [PAYMENT METHODS &mdash; e.g., credit/debit card, PayPal, cryptocurrency].</p>
              </div>
              <div className="step-card">
                <div className="step-number">3</div>
                <p>Check your email for your login credentials (delivered within minutes of payment).</p>
              </div>
              <div className="step-card">
                <div className="step-number">4</div>
                <p>Download an IPTV app on your device and enter your login details.</p>
              </div>
              <div className="step-card">
                <div className="step-number">5</div>
                <p>Start watching.</p>
              </div>
            </div>
            <div className="spacer-20"></div>
            <div style={{ textAlign: "center" }}>
              <p className="section-intro">
                Need help with setup? Our <a href="/setup">step-by-step guides</a> cover every supported device, or contact our support team for personal assistance.
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
                    <span>Do I need to pay for anything beyond the subscription price?</span>
                    <Icon name="chevron-down" />
                  </button>
                  <div className="faq-answer">
                    <p>No. The price shown is the total cost. There are no activation fees, no per-channel charges, and no hidden costs. Your subscription includes everything listed on this page.</p>
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-question" aria-expanded="false">
                    <span>Can I upgrade or change my plan later?</span>
                    <Icon name="chevron-down" />
                  </button>
                  <div className="faq-answer">
                    <p>Yes. You can switch to a longer plan at any time. Contact our support team and we will apply any price difference as credit toward your new plan.</p>
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-question" aria-expanded="false">
                    <span>What payment methods do you accept?</span>
                    <Icon name="chevron-down" />
                  </button>
                  <div className="faq-answer">
                    <p>We accept [LIST ALL PAYMENT METHODS]. All transactions are processed securely with [ENCRYPTION/SECURITY DETAILS].</p>
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-question" aria-expanded="false">
                    <span>Is there an auto-renewal?</span>
                    <Icon name="chevron-down" />
                  </button>
                  <div className="faq-answer">
                    <p>[YES/NO &mdash; be transparent. If yes, explain how to cancel before renewal. If no, explain how to renew.]</p>
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-question" aria-expanded="false">
                    <span>What if I want to cancel?</span>
                    <Icon name="chevron-down" />
                  </button>
                  <div className="faq-answer">
                    <p>[Explain cancellation process clearly. If within guarantee period, explain refund process. If after guarantee period, explain what happens to remaining subscription time.]</p>
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
              If you are new to IPTV and want to test the service before committing, the 1-month plan is ideal. It gives you full access to everything so you can evaluate the channel quality, streaming reliability, and VOD library with zero long-term commitment.
            </p>
            <p className="cta-subtitle">
              If you already know you want IPTV and are looking for the best value, the 12-month plan saves you [X]% compared to paying monthly &mdash; that is [£X] saved over the year.
            </p>
            <div className="spacer-20"></div>
            <a href="#pricing" className="btn-primary btn-large">Subscribe Now &rarr;</a>
            <div className="spacer-20"></div>
            <p className="cta-subtitle">
              Have questions before you decide? <a href="/faq" style={{ color: "var(--purple-3)", fontWeight: 700 }}>Check our FAQ</a> or <a href="mailto:concierge@iptv-premium-uk.tv" style={{ color: "var(--purple-3)", fontWeight: 700 }}>contact our support team</a>.
            </p>
            <div className="spacer-20"></div>
            <p className="cta-subtitle">
              <a href="/best-iptv-uk" style={{ color: "var(--purple-3)", fontWeight: 700 }}>Find out why we are rated the best IPTV in the UK &rarr;</a>
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
