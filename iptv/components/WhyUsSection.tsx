import Icon from "@/components/Icon";

export default function WhyUsSection() {
  return (
    <section className="why-us-section" id="why-us">
      <div className="section-container">
        <h2 className="section-title white">
          The Best IPTV Premium UK Service &mdash; Why We Are Different in 2026
        </h2>
        <p className="section-intro">
          Most IPTV providers fail with slow streams, frozen screens, and no real UK support. We built IPTV Premium UK to fix all of that with stable 4K streaming, real UK-based support, and full-feature plans with no hidden extras. Experience the true premium IPTV subscription UK that actually delivers what you pay for.
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
  );
}
