import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Icon from "@/components/Icon";

import type { Metadata } from "next";
import Image from "next/image";

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
        {/* ===== HERO SECTION ===== */}
        <section className="hero-section" id="hero">
          <div className="hero-bg-overlay"></div>
          <div className="hero-container">
            <div className="hero-content">
              <h1 className="hero-title">
                Premium IPTV UK &mdash; The #1 IPTV Subscription in 2026
              </h1>
              <p className="hero-subtitle">
                Watch over 37,000 live channels in stunning 4K quality. No buffering. No contracts. Fast, stable IPTV built for UK viewers.
              </p>
              <p className="hero-subtitle">
                Get every major UK channel, all premium sports, and 198,000+ films and series on demand. Activate in minutes and stream on up to 5 screens at the same time.
              </p>
              <div className="hero-cta">
                <a href="/pricing" className="btn-primary btn-large">
                  Get Started Now &mdash; 30-Day Money Back Guarantee
                </a>
              </div>
              <div className="hero-guarantees">
                <p>
                  <span className="check-icon">&#10003;</span> 30-Day Money-Back Guarantee
                </p>
                <p>
                  <span className="check-icon">&#10003;</span> 24/7 UK Support
                </p>
                <p>
                  <span className="check-icon">&#10003;</span> Instant Activation
                </p>
              </div>
            </div>
            <div className="hero-image">
              <Image
                src="/hero-promo-tvlock.webp"
                alt="Premium IPTV experience on multiple devices"
                width={600}
                height={400}
                preload
                fetchPriority="high"
                sizes="(max-width: 768px) 90vw, 560px"
                quality={55}
              />
            </div>
          </div>
        </section>

        {/* ===== WHY UK VIEWERS CHOOSE US ===== */}
        <section className="why-us-section" id="why-us">
          <div className="section-container">
            <h2 className="section-title white">
              The Best IPTV UK Service &mdash; Why We Are Different
            </h2>
            <p className="section-intro">
              Most IPTV providers fail the same way: slow streams, frozen screens, and no support when you need it. We built Premium IPTV UK to fix all of that with stable streaming, real UK support, and full-feature plans with no hidden extras.
            </p>
            <div className="spacer-30"></div>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">
                  <Icon name="flag" />
                </div>
                <h3 className="feature-title">4K UHD on Every Screen</h3>
                <p className="feature-desc">
                  Stream every match, film, and series in crystal-clear 4K Ultra HD on Smart TVs, phones, tablets, and projectors. The picture stays sharp, vivid, and smooth on every device.
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <Icon name="shield-halved" />
                </div>
                <h3 className="feature-title">Zero Buffering with Anti-Freeze 9.0</h3>
                <p className="feature-desc">
                  Our anti-freeze technology keeps streams stable during live sports and peak evening hours. With 99.9% uptime and UK-optimized servers, your viewing stays rock solid.
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <Icon name="bolt" />
                </div>
                <h3 className="feature-title">Built-In VPN and Instant Activation</h3>
                <p className="feature-desc">
                  Your stream is private from the moment you log in thanks to built-in VPN protection. Order today, receive your account by email within minutes, and start watching right away.
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <Icon name="headset" />
                </div>
                <h3 className="feature-title">24/7 UK Support and 30-Day Guarantee</h3>
                <p className="feature-desc">
                  Our UK team is available 24/7 on live chat, email, and WhatsApp. Every plan is backed by a full 30-day money-back guarantee, so you can subscribe with confidence. <a href="/refund-policy">Read our refund policy &rarr;</a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== WHAT YOU GET ===== */}
        <section className="provider-section" id="features">
          <div className="section-container">
            <div className="provider-grid">
              <div className="provider-text">
                <h2 className="provider-title">
                  What You Get With Your IPTV Subscription
                </h2>
                <div className="provider-copy">
                  <p className="provider-desc">
                    Every plan includes the full service from day one, with no hidden fees and no locked features.
                  </p>
                </div>
              </div>
              <div className="provider-features">
                <div className="features-box">
                  <ul className="feature-list">
                    <li>
                      <Icon name="caret-square-right" />{" "}
                      <span>
                        <strong>37,000+ Live UK and International Channels.</strong> BBC, ITV, Channel 4, Channel 5, Sky Sports, BT Sport, TNT Sports, Sky Cinema, and more. We carry the channels UK households actually watch. <a href="/channels">Browse our full channel list &rarr;</a>
                      </span>
                    </li>
                    <li>
                      <Icon name="caret-square-right" />{" "}
                      <span>
                        <strong>198,000+ Films and Series On Demand.</strong> New cinema releases, full box sets, and timeless classics are all included. Watch what you want, when you want, with no extra charges.
                      </span>
                    </li>
                    <li>
                      <Icon name="caret-square-right" />{" "}
                      <span>
                        <strong>Every Sport Live in 4K.</strong> Premier League, Champions League, Formula 1, UFC, boxing, cricket, rugby, and more. Never miss a major event with smooth live coverage.
                      </span>
                    </li>
                    <li>
                      <Icon name="caret-square-right" />{" "}
                      <span>
                        <strong>7-Day Catch-Up TV and Full EPG.</strong> Check what is on now, plan your week, and replay recent programmes you missed. IPTV convenience that feels like premium cable.
                      </span>
                    </li>
                    <li>
                      <Icon name="caret-square-right" />{" "}
                      <span>
                        <strong>Built-In VPN and Anti-Freeze 9.0.</strong> Your stream stays private, secure, and stable with zero-freeze performance and 99.9% uptime across the platform.
                      </span>
                    </li>
                    <li>
                      <Icon name="caret-square-right" />{" "}
                      <span>
                        <strong>Works on Every Device You Own.</strong> Smart TV, Firestick, Android TV box, iPhone, iPad, Android phone, MAG, Formuler, PC, and Mac. One plan covers up to 5 simultaneous screens. <a href="/setup">See full device compatibility &rarr;</a>
                      </span>
                    </li>
                    <li>
                      <Icon name="caret-square-right" />{" "}
                      <span>
                        <strong>No Contracts and 30-Day Money-Back Guarantee.</strong> Cancel any time, no hidden fees, and get a full refund within 30 days if the service is not right for you. <a href="/pricing">View plans and save more on longer subscriptions &rarr;</a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== UK CHANNELS ===== */}
        <section className="channels-section" id="channels">
          <div className="section-container">
            <h2 className="section-title white">
              37,000+ UK and International Channels That Matter to You
            </h2>
            <p className="section-intro">
              Every major British channel is included, plus top international networks, premium sports, and a huge movie lineup.
            </p>
            <div className="spacer-30"></div>
            <div className="channels-grid">
              <div className="channel-category">
                <div className="channel-category-icon">
                  <Icon name="tv" />
                </div>
                <h3>British Entertainment</h3>
                <p>BBC One, BBC Two, ITV1, ITV2, ITV3, ITV4, Channel 4, E4, Channel 5, Sky Atlantic, Sky Max, Dave, UKTV Gold, and more.</p>
              </div>
              <div className="channel-category">
                <div className="channel-category-icon">
                  <Icon name="futbol" />
                </div>
                <h3>UK Sports</h3>
                <p>Sky Sports, TNT Sports, BT Sport, Eurosport, and major events including Premier League, Champions League, Formula 1, UFC, boxing, cricket, and rugby.</p>
              </div>
              <div className="channel-category">
                <div className="channel-category-icon">
                  <Icon name="film" />
                </div>
                <h3>Movies</h3>
                <p>Sky Cinema channels, Film4, blockbuster premieres, and instant access to our 198,000+ on-demand films and series library.</p>
              </div>
              <div className="channel-category">
                <div className="channel-category-icon">
                  <Icon name="newspaper" />
                </div>
                <h3>News &amp; Documentary</h3>
                <p>BBC News, Sky News, ITV News, CNN, BBC Four, National Geographic, Discovery, and History Channel.</p>
              </div>
              <div className="channel-category">
                <div className="channel-category-icon">
                  <Icon name="child" />
                </div>
                <h3>Kids</h3>
                <p>CBeebies, CBBC, Cartoon Network, Nickelodeon, Disney Channel, BabyTV, and family-friendly channels for all ages.</p>
              </div>
            </div>
            <div className="spacer-30"></div>
            <div style={{ textAlign: "center" }}>
              <a href="/channels" className="btn-primary">
                View the Complete Channel List &rarr;
              </a>
            </div>
          </div>
        </section>

        {/* ===== HOW IT WORKS ===== */}
        <section className="steps-section" id="how-it-works">
          <div className="section-container">
            <h2 className="section-title white">
              How to Get Your IPTV UK Subscription &mdash; 3 Simple Steps
            </h2>
            <p className="section-intro">
              Start streaming in minutes. No technical setup stress, no delays, and no contract lock-ins.
            </p>
            <div className="spacer-30"></div>
            <div className="steps-grid">
              <div className="step-card">
                <div className="step-number">1</div>
                <h3>Step 1 &mdash; Choose Your Plan</h3>
                <p>Pick the plan that suits you best on our <a href="/pricing">pricing page</a>. Every plan includes the full service from day one, and longer plans offer the best savings.</p>
              </div>
              <div className="step-card">
                <div className="step-number">2</div>
                <h3>Step 2 &mdash; Get Your Account in Minutes</h3>
                <p>As soon as payment is confirmed, your login details are sent by email. No waiting around and no complicated activation process.</p>
              </div>
              <div className="step-card">
                <div className="step-number">3</div>
                <h3>Step 3 &mdash; Start Watching Straight Away</h3>
                <p>Open your IPTV app, enter your details, and press play. Setup takes under two minutes, and our team is ready to help if needed. <a href="/setup">View our step-by-step setup guides &rarr;</a></p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== PRICING SECTION (cards kept as-is) ===== */}
        <section className="pricing-section" id="pricing">
          <div className="pricing-bg-overlay"></div>
          <div className="section-container">
            <h2 className="section-title white">
              Choose Your Premium IPTV UK Plan &mdash; Instant Activation
            </h2>
            <h3 className="pricing-subtitle">
              Every plan includes 4K UHD streams, built-in VPN, anti-freeze technology, full VOD access, all sports channels, 24/7 UK support, and a 30-day money-back guarantee. No hidden fees. No contracts. Cancel any time.
            </h3>

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
                      <span className="past-amount" data-past1="39.99" data-past2="59.99">
                        39.99
                      </span>
                    </div>
                    <span className="currency">&pound;</span>
                    <span className="amount" data-price1="25.99" data-price2="37.99">
                      25.99
                    </span>
                  </div>
                  <a className="plan-btn" data-href1="#pricing" data-href2="#pricing" href="#pricing">
                    Begin Your Premium Experience
                  </a>
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
                      <span className="past-amount" data-past1="59.99" data-past2="79.99">
                        59.99
                      </span>
                    </div>
                    <span className="currency">&pound;</span>
                    <span className="amount" data-price1="35.99" data-price2="57.99">
                      35.99
                    </span>
                  </div>
                  <a className="plan-btn" data-href1="#pricing" data-href2="#pricing" href="#pricing">
                    Subscribe for 6 Months
                  </a>
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
                      <span className="past-amount" data-past1="79.99" data-past2="129.99">
                        79.99
                      </span>
                    </div>
                    <span className="currency">&pound;</span>
                    <span className="amount" data-price1="49.99" data-price2="89.99">
                      49.99
                    </span>
                  </div>
                  <a className="plan-btn" data-href1="#pricing" data-href2="#pricing" href="#pricing">
                    Subscribe for 12 Months
                  </a>
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
                      <span className="past-amount" data-past1="129.99" data-past2="199.99">
                        129.99
                      </span>
                    </div>
                    <span className="currency">&pound;</span>
                    <span className="amount" data-price1="79.99" data-price2="129.99">
                      79.99
                    </span>
                  </div>
                  <a className="plan-btn" data-href1="#pricing" data-href2="#pricing" href="#pricing">
                    Subscribe for 24 Months
                  </a>
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
              <p>All payments are processed securely. We accept major debit and credit cards. Your subscription activates instantly and is protected by our 30-day money-back guarantee.</p>
              <div className="spacer-20"></div>
              <a href="/pricing" className="btn-primary btn-large">
                View All Plans &amp; Subscribe &rarr;
              </a>
            </div>
          </div>
        </section>

        {/* ===== DEVICES SECTION (kept as-is) ===== */}
        <section className="devices-section" id="devices">
          <div className="section-container">
            <div className="devices-grid">
              <div className="devices-images">
                <Image
                  src="/flixtele_removed.webp"
                  alt="Premium IPTV UK device compatibility"
                  width={912}
                  height={440}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="devices-img-main"
                />
                <Image
                  src="/devices-2048x699-1.webp"
                  alt="Devices supported by Premium IPTV UK"
                  width={1024}
                  height={350}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="devices-img-secondary desktop-only"
                />
              </div>
              <div className="devices-text">
                <h2 className="devices-title">Compatible With All Devices &mdash; No Box Required</h2>
                <h3 className="devices-subtitle">One Subscription. Every Screen You Own.</h3>
                <div className="spacer-20"></div>
                <Image
                  src="/devices-2048x699-1.webp"
                  alt="Premium IPTV UK supported devices"
                  width={768}
                  height={262}
                  loading="lazy"
                  sizes="100vw"
                  className="devices-img-mobile mobile-only"
                />
                <p className="devices-desc">
                  Premium IPTV UK works on everything you already own: Samsung,
                  LG, Sony, Hisense, and Panasonic Smart TVs, Amazon Firestick,
                  Fire TV, Chromecast, Roku, MAG boxes, Formuler devices, Android TV boxes,
                  iPhone, iPad, Android phones, Windows PCs, and Mac. <a href="/setup">Set up in minutes &rarr;</a>
                </p>
                <p className="devices-desc">
                  Apps supported: IPTV Smarters Pro | TiviMate | GSE Smart IPTV |
                  Perfect Player | VLC. One plan supports up to 5 screens at once.
                </p>
                <div className="spacer-30"></div>
                <a href="/setup" className="btn-primary btn-large">
                  View Device Setup Guides
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ===== TESTIMONIALS ===== */}
        <section className="testimonials-section" id="reviews">
          <div className="testimonials-bg-overlay"></div>
          <div className="section-container">
            <div className="stars-rating">
              <Image
                src="/5-stars-1-copy.webp"
                alt="Five-star Premium IPTV UK reviews"
                width={200}
                height={41}
                loading="lazy"
                sizes="200px"
              />
            </div>
            <h2 className="section-title white">
              What UK Customers Say About Our IPTV Service
            </h2>
            <p className="testimonials-subtitle">
              Trusted by 50,000+ happy UK customers across the country.
            </p>

            <div className="testimonials-slider" id="testimonials-slider">
              <div className="testimonials-track" id="testimonials-track">
                <div className="testimonial-card">
                  <div className="testimonial-stars">
                    <Icon name="star" />
                    <Icon name="star" />
                    <Icon name="star" />
                    <Icon name="star" />
                    <Icon name="star" />
                  </div>
                  <p className="testimonial-text">
                    &ldquo;Best IPTV I have ever used. The picture is crystal clear. Not a single freeze in 3 months. The Premier League coverage is incredible. I would never go back to Sky.&rdquo;
                  </p>
                  <div className="testimonial-author">
                    <h4>James T. &mdash; Manchester</h4>
                  </div>
                </div>
                <div className="testimonial-card">
                  <div className="testimonial-stars">
                    <Icon name="star" />
                    <Icon name="star" />
                    <Icon name="star" />
                    <Icon name="star" />
                    <Icon name="star" />
                  </div>
                  <p className="testimonial-text">
                    &ldquo;I switched from Sky last year and I am saving over &pound;80 a month. Every channel I need is here. The setup took 5 minutes. Support was brilliant when I had a question.&rdquo;
                  </p>
                  <div className="testimonial-author">
                    <h4>Sarah K. &mdash; London</h4>
                  </div>
                </div>
                <div className="testimonial-card">
                  <div className="testimonial-stars">
                    <Icon name="star" />
                    <Icon name="star" />
                    <Icon name="star" />
                    <Icon name="star" />
                    <Icon name="star" />
                  </div>
                  <p className="testimonial-text">
                    &ldquo;The 4K sports streams are brilliant. I expected buffering during big games. It never happened. The best IPTV service I have tried.&rdquo;
                  </p>
                  <div className="testimonial-author">
                    <h4>Dave R. &mdash; Birmingham</h4>
                  </div>
                </div>
                <div className="testimonial-card">
                  <div className="testimonial-stars">
                    <Icon name="star" />
                    <Icon name="star" />
                    <Icon name="star" />
                    <Icon name="star" />
                    <Icon name="star" />
                  </div>
                  <p className="testimonial-text">
                    &ldquo;I tried 3 different IPTV providers before finding this one. Nothing came close. The built-in VPN is a great touch. Great value for money.&rdquo;
                  </p>
                  <div className="testimonial-author">
                    <h4>Emma L. &mdash; Leeds</h4>
                  </div>
                </div>
                <div className="testimonial-card">
                  <div className="testimonial-stars">
                    <Icon name="star" />
                    <Icon name="star" />
                    <Icon name="star" />
                    <Icon name="star" />
                    <Icon name="star" />
                  </div>
                  <p className="testimonial-text">
                    &ldquo;I was not sure at first so I chose the 1 month plan. It won me over in the first hour. A cheap IPTV subscription that delivers premium quality.&rdquo;
                  </p>
                  <div className="testimonial-author">
                    <h4>Paul M. &mdash; Glasgow</h4>
                  </div>
                </div>
                <div className="testimonial-card">
                  <div className="testimonial-stars">
                    <Icon name="star" />
                    <Icon name="star" />
                    <Icon name="star" />
                    <Icon name="star" />
                    <Icon name="star" />
                  </div>
                  <p className="testimonial-text">
                    &ldquo;The VOD library is massive. My whole family uses it now. Kids watch cartoons, my husband watches sport, and I watch box sets. One plan covers everyone.&rdquo;
                  </p>
                  <div className="testimonial-author">
                    <h4>Rachel O. &mdash; Bristol</h4>
                  </div>
                </div>
              </div>
              <div className="slider-dots" id="slider-dots"></div>
            </div>
            <div className="spacer-20"></div>
            <div style={{ textAlign: "center" }}>
              <a href="/iptv-reviews">Read more reviews &rarr;</a>
            </div>
          </div>
        </section>

        {/* ===== FAQ SECTION ===== */}
        <section className="seo-section" id="faq">
          <div className="section-container">
            <div className="seo-content">
              <h2>Your Questions About IPTV UK &mdash; Answered</h2>
              <div className="faq-accordion">
                <div className="faq-item">
                  <button className="faq-question" aria-expanded="false">
                    <span>Is Premium IPTV UK easy to set up?</span>
                    <Icon name="chevron-down" />
                  </button>
                  <div className="faq-answer">
                    <p>
                      Yes. Setup takes less than 2 minutes. You receive your login details by email straight after ordering, open your IPTV app, enter the details, and start watching immediately. <a href="/setup">See full setup guides &rarr;</a>
                    </p>
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-question" aria-expanded="false">
                    <span>What devices work with your IPTV subscription?</span>
                    <Icon name="chevron-down" />
                  </button>
                  <div className="faq-answer">
                    <p>
                      It works on Smart TVs, Firestick, Android TV boxes, iPhones, iPads, Android phones, MAG devices, Formuler boxes, Windows PCs, and Mac computers. <a href="/setup">See our complete device setup guides &rarr;</a>
                    </p>
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-question" aria-expanded="false">
                    <span>How fast does my broadband need to be?</span>
                    <Icon name="chevron-down" />
                  </button>
                  <div className="faq-answer">
                    <p>
                      For HD streams, 10 Mbps is enough. For 4K UHD, we recommend 25 Mbps or faster for the best experience.
                    </p>
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-question" aria-expanded="false">
                    <span>Is there a minimum contract?</span>
                    <Icon name="chevron-down" />
                  </button>
                  <div className="faq-answer">
                    <p>
                      No. There are no contracts and no hidden fees. Pick any plan, pay once, and renew only when you are ready. <a href="/pricing">View all plans &rarr;</a>
                    </p>
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-question" aria-expanded="false">
                    <span>What if I am not happy with the service?</span>
                    <Icon name="chevron-down" />
                  </button>
                  <div className="faq-answer">
                    <p>
                      Every plan includes a 30-day money-back guarantee. If you are not satisfied for any reason, contact us within 30 days and we will issue a full refund. <a href="/refund-policy">View our refund policy &rarr;</a>
                    </p>
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-question" aria-expanded="false">
                    <span>How many screens can I use at once?</span>
                    <Icon name="chevron-down" />
                  </button>
                  <div className="faq-answer">
                    <p>
                      All plans include up to 5 simultaneous screens, which is perfect for families who want to watch different channels at the same time.
                    </p>
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-question" aria-expanded="false">
                    <span>Do you include UK sports channels?</span>
                    <Icon name="chevron-down" />
                  </button>
                  <div className="faq-answer">
                    <p>
                      Yes. Sky Sports, BT Sport, TNT Sports, and many more are included, with live coverage of Premier League football, Formula 1, UFC, boxing, and other major events. <a href="/channels">Explore the channel lineup &rarr;</a>
                    </p>
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-question" aria-expanded="false">
                    <span>What is your IPTV service uptime?</span>
                    <Icon name="chevron-down" />
                  </button>
                  <div className="faq-answer">
                    <p>
                      We run on a 99.9% uptime target with anti-freeze technology and 24/7 monitoring to keep streams stable throughout the day.
                    </p>
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-question" aria-expanded="false">
                    <span>What happens when my plan runs out?</span>
                    <Icon name="chevron-down" />
                  </button>
                  <div className="faq-answer">
                    <p>
                      Nothing changes in your account details. The service simply stops at the end of your term. There are no surprise renewals or hidden charges.
                    </p>
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-question" aria-expanded="false">
                    <span>Is there support if I need help?</span>
                    <Icon name="chevron-down" />
                  </button>
                  <div className="faq-answer">
                    <p>
                      Yes. Our UK-based support team is available 24 hours a day, 7 days a week via live chat, email, and WhatsApp.
                    </p>
                  </div>
                </div>
              </div>

              <div className="spacer-30"></div>
              <p>
                Have more questions? Visit our <a href="/faq">frequently asked questions</a> page or read <a href="/best-iptv-uk">our complete guide to IPTV in the UK</a>.
              </p>
            </div>
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
