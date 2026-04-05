import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Icon from "@/components/Icon";

import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "IPTV UK — Premium IPTV Subscription | Premium IPTV 2026",
  description:
    "Premium IPTV UK subscription with 37,000+ channels in HD & 4K. British TV, live sports, movies & VOD. Instant activation, [X]-day guarantee. Subscribe now.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "IPTV UK — Premium IPTV Subscription | Premium IPTV 2026",
    description:
      "Premium IPTV UK subscription with 37,000+ channels in HD & 4K. British TV, live sports, movies & VOD. Instant activation, [X]-day guarantee. Subscribe now.",
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
      name: "IPTV UK — Premium IPTV Subscription | Premium IPTV 2026",
      inLanguage: "en-GB",
      isPartOf: { "@id": "https://iptv-premium-uk.tv/#website" },
      about: { "@id": "https://iptv-premium-uk.tv/#organization" },
      description:
        "Premium IPTV UK subscription with 37,000+ channels in HD & 4K. British TV, live sports, movies & VOD.",
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
          name: "What is IPTV and how does it differ from traditional TV?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "IPTV (Internet Protocol Television) delivers television content over your internet connection rather than through a traditional aerial, satellite dish, or cable. This means you can watch live TV, on-demand films, and catch-up content on any internet-connected device — from Smart TVs and streaming sticks to phones and laptops. The experience is very similar to services like Sky Go or BBC iPlayer, but with a much wider channel selection at a lower price.",
          },
        },
        {
          "@type": "Question",
          name: "Which devices can I use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our service works on Amazon Firestick, Android TV boxes, Android phones and tablets, iPhones and iPads, Samsung/LG/Sony Smart TVs, Windows and Mac computers, MAG devices, and Enigma2 receivers. You can use any IPTV-compatible app including [APP NAMES].",
          },
        },
        {
          "@type": "Question",
          name: "Is there a free trial available?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "[YES/NO — include details if applicable]",
          },
        },
        {
          "@type": "Question",
          name: "What happens if I am not satisfied?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You are covered by our [X]-day money-back guarantee. If the service does not meet your expectations for any reason, contact our support team and we will process a full refund.",
          },
        },
        {
          "@type": "Question",
          name: "How quickly will I receive access after payment?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Access is activated within minutes. You will receive your login credentials by email immediately after your payment is confirmed.",
          },
        },
        {
          "@type": "Question",
          name: "Can I watch on more than one device at the same time?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Your subscription supports [X] simultaneous connections, so multiple people in your household can watch different channels on different devices at the same time.",
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
                Premium IPTV Subscription for the UK &mdash; Watch Everything, Pay Less
              </h1>
              <p className="hero-subtitle">
                Premium IPTV delivers a premium IPTV subscription built specifically for viewers in the United Kingdom. With 37,000+ live channels &mdash; including every major British broadcaster and premium sports network &mdash; plus 198,000+ films and series on demand, you get complete entertainment at a fraction of traditional TV costs.
              </p>
              <p className="hero-subtitle">
                Whether you want to watch the Premier League, catch up on BBC dramas, follow Sky Sports coverage, or enjoy the latest cinema releases from your sofa, your subscription covers it all. One account, every device, instant activation.
              </p>
              <div className="hero-cta">
                <a href="/pricing" className="btn-primary btn-large">
                  View Our Subscription Plans &rarr;
                </a>
              </div>
              <div className="hero-guarantees">
                <p>
                  <span className="check-icon">&#10003;</span> [X]-Day Money-Back Guarantee
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
              Why UK Viewers Choose Premium IPTV
            </h2>
            <p className="section-intro">
              Choosing an IPTV provider in the UK market can feel overwhelming. Dozens of services promise thousands of channels, but few deliver the reliability, quality, and support that British viewers expect. Here is what sets our IPTV subscription apart.
            </p>
            <div className="spacer-30"></div>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">
                  <Icon name="flag" />
                </div>
                <h3 className="feature-title">Genuine UK Focus</h3>
                <p className="feature-desc">
                  Unlike services that list &ldquo;worldwide channels&rdquo; as their primary selling point, we built our channel lineup around what UK households actually watch. That means comprehensive coverage of BBC, ITV, Channel 4, Channel 5, Sky, BT Sport, TNT Sports, and Virgin Media channels &mdash; not a global list where you have to hunt for British content.
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <Icon name="shield-halved" />
                </div>
                <h3 className="feature-title">[X]-Day Money-Back Guarantee</h3>
                <p className="feature-desc">
                  We stand behind our service with a no-questions-asked [X]-day money-back guarantee. If you are not completely satisfied with the streaming quality, channel selection, or anything else, you receive a full refund. No hoops, no delays. <a href="/refund-policy">Read our refund policy &rarr;</a>
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <Icon name="bolt" />
                </div>
                <h3 className="feature-title">Instant Activation</h3>
                <p className="feature-desc">
                  Your IPTV subscription is activated within minutes of purchase. There is no waiting for email confirmations, no manual setup by a support agent, and no delays. You place your order, receive your login credentials, and start watching immediately.
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <Icon name="headset" />
                </div>
                <h3 className="feature-title">Dedicated UK Support</h3>
                <p className="feature-desc">
                  Our support team understands the UK market and is available [HOURS/24/7] via [CHANNELS: live chat, email, WhatsApp]. Whether you need help with setup, have a billing question, or want advice on the best plan for your household, you get a real person who speaks your language and understands your needs.
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
                  What You Get with Your IPTV UK Subscription
                </h2>
                <div className="provider-copy">
                  <p className="provider-desc">
                    Every Premium IPTV subscription includes the following, regardless of which plan you choose:
                  </p>
                </div>
              </div>
              <div className="provider-features">
                <div className="features-box">
                  <ul className="feature-list">
                    <li>
                      <Icon name="caret-square-right" />{" "}
                      <span>
                        <strong>37,000+ Live TV Channels.</strong> Full access to UK entertainment, sports, news, documentaries, children&apos;s programming, and international channels. We carry every major British network alongside premium sports, cinema, and lifestyle channels. <a href="/channels">Browse our full channel list &rarr;</a>
                      </span>
                    </li>
                    <li>
                      <Icon name="caret-square-right" />{" "}
                      <span>
                        <strong>198,000+ Films and Series On Demand.</strong> Our VOD library is updated daily with the latest cinema releases, box sets, and classic films. Search by genre, year, or title and start watching instantly &mdash; no additional fees, no per-title charges.
                      </span>
                    </li>
                    <li>
                      <Icon name="caret-square-right" />{" "}
                      <span>
                        <strong>Electronic Programme Guide (EPG).</strong> A full, up-to-date EPG is included with every subscription. Browse what is on now, check tonight&apos;s schedule, or plan your viewing for the week ahead &mdash; exactly as you would with a traditional set-top box.
                      </span>
                    </li>
                    <li>
                      <Icon name="caret-square-right" />{" "}
                      <span>
                        <strong>[X]-Day Catch-Up TV.</strong> Missed last night&apos;s match or forgot to watch a programme? Our catch-up feature lets you go back up to [X] days and watch content you missed, so you never fall behind on the shows that matter to you.
                      </span>
                    </li>
                    <li>
                      <Icon name="caret-square-right" />{" "}
                      <span>
                        <strong>HD, Full HD &amp; 4K Quality.</strong> Every channel that broadcasts in high definition is delivered in the highest quality available. Premium channels stream in Full HD or 4K where supported, and our adaptive streaming technology adjusts to your internet connection to prevent buffering.
                      </span>
                    </li>
                    <li>
                      <Icon name="caret-square-right" />{" "}
                      <span>
                        <strong>Multi-Device Access.</strong> Watch on your Amazon Firestick, Android phone or tablet, iPhone, iPad, Smart TV (Samsung, LG, Sony), Windows or Mac computer, MAG box, or any device that supports IPTV apps. Your subscription works across [X] devices simultaneously, so different members of your household can watch different channels at the same time. <a href="/setup">See full device compatibility &rarr;</a>
                      </span>
                    </li>
                    <li>
                      <Icon name="caret-square-right" />{" "}
                      <span>
                        [ADDITIONAL USPs &mdash; e.g., built-in VPN, anti-freeze technology, etc.]
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
              UK Channels That Matter to You
            </h2>
            <p className="section-intro">
              We carry the channels British viewers actually search for. Here is a snapshot of what is included:
            </p>
            <div className="spacer-30"></div>
            <div className="channels-grid">
              <div className="channel-category">
                <div className="channel-category-icon">
                  <Icon name="tv" />
                </div>
                <h3>British Entertainment</h3>
                <p>BBC One, BBC Two, ITV1, ITV2, ITV3, ITV4, Channel 4, E4, Channel 5, 5Star, Dave, UKTV Gold, Sky One, Sky Atlantic, Comedy Central UK, and more.</p>
              </div>
              <div className="channel-category">
                <div className="channel-category-icon">
                  <Icon name="futbol" />
                </div>
                <h3>UK Sports</h3>
                <p>Sky Sports Main Event, Sky Sports Premier League, Sky Sports Football, Sky Sports F1, Sky Sports Cricket, Sky Sports Golf, TNT Sports 1-4, BT Sport, BBC Sport, Eurosport 1 &amp; 2, and all major sporting events including the Premier League, Champions League, Six Nations, The Ashes, Formula 1, and Wimbledon.</p>
              </div>
              <div className="channel-category">
                <div className="channel-category-icon">
                  <Icon name="film" />
                </div>
                <h3>Movies</h3>
                <p>Sky Cinema Premiere, Sky Cinema Action, Sky Cinema Comedy, Sky Cinema Sci-Fi, Sky Cinema Family, Film4, and access to our full on-demand film library.</p>
              </div>
              <div className="channel-category">
                <div className="channel-category-icon">
                  <Icon name="newspaper" />
                </div>
                <h3>News &amp; Documentary</h3>
                <p>BBC News, Sky News, ITV News, CNN, Al Jazeera, BBC Four, National Geographic, Discovery, History Channel.</p>
              </div>
              <div className="channel-category">
                <div className="channel-category-icon">
                  <Icon name="child" />
                </div>
                <h3>Kids</h3>
                <p>CBeebies, CBBC, Cartoon Network, Nickelodeon, Disney Channel, Baby TV.</p>
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
              How It Works &mdash; Three Simple Steps
            </h2>
            <p className="section-intro">
              Getting started with your IPTV subscription takes less than five minutes, and you do not need any technical knowledge.
            </p>
            <div className="spacer-30"></div>
            <div className="steps-grid">
              <div className="step-card">
                <div className="step-number">1</div>
                <h3>Choose Your Plan</h3>
                <p>Visit our <a href="/pricing">pricing page</a> and select the subscription length that suits you &mdash; monthly, quarterly, six-month, or annual. Every plan includes the same full channel lineup and features.</p>
              </div>
              <div className="step-card">
                <div className="step-number">2</div>
                <h3>Receive Your Login</h3>
                <p>After payment, you receive your IPTV login credentials by email within minutes. We also send a quick-start guide with setup instructions for your specific device.</p>
              </div>
              <div className="step-card">
                <div className="step-number">3</div>
                <h3>Start Watching</h3>
                <p>Download the recommended IPTV app for your device, enter your login details, and begin streaming. If you need any help during setup, our support team is standing by to walk you through it. <a href="/setup">View our step-by-step setup guides &rarr;</a></p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== PRICING SECTION (cards kept as-is) ===== */}
        <section className="pricing-section" id="pricing">
          <div className="pricing-bg-overlay"></div>
          <div className="section-container">
            <h2 className="section-title white">
              Flexible Plans for Every Budget
            </h2>
            <h3 className="pricing-subtitle">
              We offer subscription plans from [£X.XX/month] with no contracts and no hidden fees. Every plan includes the full channel list, VOD library, EPG, and catch-up TV. The only difference is the subscription length &mdash; and the longer you subscribe, the more you save.
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
                    <li>Full EPG with [X]-day catch-up TV</li>
                    <li>HD, Full HD &amp; 4K streaming quality</li>
                    <li>Multi-device access &mdash; [X] simultaneous connections</li>
                    <li>[HOURS/24/7] dedicated UK support</li>
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
                    <li>Full EPG with [X]-day catch-up TV</li>
                    <li>HD, Full HD &amp; 4K streaming quality</li>
                    <li>Multi-device access &mdash; [X] simultaneous connections</li>
                    <li>[HOURS/24/7] dedicated UK support</li>
                    <li>[X]-day money-back guarantee</li>
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
                    <li>Full EPG with [X]-day catch-up TV</li>
                    <li>HD, Full HD &amp; 4K streaming quality</li>
                    <li>Multi-device access &mdash; [X] simultaneous connections</li>
                    <li>[HOURS/24/7] dedicated UK support</li>
                    <li>[X]-day money-back guarantee</li>
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
                    <li>Full EPG with [X]-day catch-up TV</li>
                    <li>HD, Full HD &amp; 4K streaming quality</li>
                    <li>Multi-device access &mdash; [X] simultaneous connections</li>
                    <li>[HOURS/24/7] dedicated UK support</li>
                    <li>[X]-day money-back guarantee</li>
                    <li>Instant activation</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="pricing-note">
              <p>All payments are processed securely. We accept [PAYMENT METHODS]. Your subscription activates instantly and you are protected by our [X]-day money-back guarantee.</p>
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
                <h2 className="devices-title">Premium IPTV UK Quality</h2>
                <h3 className="devices-subtitle">On Every Screen in Your Home</h3>
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
                  Premium IPTV delivers flawless 4K playback on Amazon Fire Stick 4K,
                  Samsung and LG Smart TVs, Android TV, Nvidia Shield Pro, Apple devices,
                  MAG and Formuler boxes, Xbox, Windows, and web browsers. For the sharpest
                  possible picture, we recommend 4K-capable devices connected via HDMI 2.0
                  or above. Our IPTV player installs in minutes, with optional
                  remote setup assistance from our dedicated support team at no
                  extra charge. <a href="/setup">Set up in minutes &rarr;</a>
                </p>
                <p className="devices-desc">
                  Fire Stick | Samsung Smart TV | Android TV | iOS | MAG Box | Nvidia Shield
                  | Android | IPTV Smarters | Xbox | Web Player | LG Smart TV | Windows
                </p>
                <div className="spacer-30"></div>
                <a href="/setup" className="btn-primary btn-large">
                  View Setup Guides
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
              What Our Subscribers Say
            </h2>
            <p className="testimonials-subtitle">
              Real feedback from UK viewers who chose Premium IPTV.
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
                    &ldquo;I&apos;ve been using Premium IPTV for eight months and the quality is superb. Every Premier League game in crisp HD with zero buffering. Far better value than paying for Sky.&rdquo;
                  </p>
                  <div className="testimonial-author">
                    <h4>James T., Premium IPTV subscriber since August 2024</h4>
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
                    &ldquo;Switched from a cable package and I can&apos;t believe the difference in value. Thousands of channels and I can watch everything from BBC to Sky Atlantic. Setup took about five minutes.&rdquo;
                  </p>
                  <div className="testimonial-author">
                    <h4>Sarah M., Premium IPTV subscriber since January 2025</h4>
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
                    &ldquo;The catch-up feature is what sold me. Missed a drama on ITV? No problem. The EPG is spot on too &mdash; works exactly like a proper set-top box. Brilliant service all round.&rdquo;
                  </p>
                  <div className="testimonial-author">
                    <h4>David K., Premium IPTV subscriber since October 2024</h4>
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
              <h2>Frequently Asked Questions</h2>
              <div className="faq-accordion">
                <div className="faq-item">
                  <button className="faq-question" aria-expanded="false">
                    <span>What is IPTV and how does it differ from traditional TV?</span>
                    <Icon name="chevron-down" />
                  </button>
                  <div className="faq-answer">
                    <p>
                      IPTV (Internet Protocol Television) delivers television content over your internet connection rather than through a traditional aerial, satellite dish, or cable. This means you can watch live TV, on-demand films, and catch-up content on any internet-connected device &mdash; from Smart TVs and streaming sticks to phones and laptops. The experience is very similar to services like Sky Go or BBC iPlayer, but with a much wider channel selection at a lower price. <a href="/iptv-subscription-guide">Read our full guide to IPTV subscriptions &rarr;</a>
                    </p>
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-question" aria-expanded="false">
                    <span>Which devices can I use?</span>
                    <Icon name="chevron-down" />
                  </button>
                  <div className="faq-answer">
                    <p>
                      Our service works on Amazon Firestick, Android TV boxes, Android phones and tablets, iPhones and iPads, Samsung/LG/Sony Smart TVs, Windows and Mac computers, MAG devices, and Enigma2 receivers. You can use any IPTV-compatible app including [APP NAMES]. <a href="/setup">See our complete device setup guides &rarr;</a>
                    </p>
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-question" aria-expanded="false">
                    <span>Is there a free trial available?</span>
                    <Icon name="chevron-down" />
                  </button>
                  <div className="faq-answer">
                    <p>
                      [YES/NO &mdash; include details if applicable]
                    </p>
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-question" aria-expanded="false">
                    <span>What happens if I am not satisfied?</span>
                    <Icon name="chevron-down" />
                  </button>
                  <div className="faq-answer">
                    <p>
                      You are covered by our [X]-day money-back guarantee. If the service does not meet your expectations for any reason, contact our support team and we will process a full refund. <a href="/refund-policy">View our refund policy &rarr;</a>
                    </p>
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-question" aria-expanded="false">
                    <span>How quickly will I receive access after payment?</span>
                    <Icon name="chevron-down" />
                  </button>
                  <div className="faq-answer">
                    <p>
                      Access is activated within minutes. You will receive your login credentials by email immediately after your payment is confirmed.
                    </p>
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-question" aria-expanded="false">
                    <span>Can I watch on more than one device at the same time?</span>
                    <Icon name="chevron-down" />
                  </button>
                  <div className="faq-answer">
                    <p>
                      Yes. Your subscription supports [X] simultaneous connections, so multiple people in your household can watch different channels on different devices at the same time.
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
