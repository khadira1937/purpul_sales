import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-bg-overlay"></div>
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            IPTV Premium UK &mdash; The #1 IPTV Subscription in 2026
          </h1>
          <p className="hero-subtitle">
            Get the best IPTV Premium UK subscription with over 37,000 live UK and international channels in stunning 4K. No contracts, no buffering, instant activation.
          </p>
          <p className="hero-subtitle">
            Watch every major UK channel, Premier League, Sky Sports, and 198,000+ films & series on demand. Stream on up to 5 screens at the same time with IPTV Premium UK.
          </p>
          <div className="hero-cta">
            <a href="/pricing" className="btn-primary btn-medium">
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
            src="/iptv-premium-uk.webp"
            alt="iptv premium uk"
            width={600}
            height={400}
            preload
            fetchPriority="high"
            quality={100}
          />
        </div>
      </div>
    </section>
  );
}
