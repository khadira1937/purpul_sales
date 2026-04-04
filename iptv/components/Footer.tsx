import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <section className="cta-section">
        <div className="cta-bg-overlay"></div>
        <div className="section-container">
          <h2 className="cta-title">
            Start Watching Today
          </h2>
          <p className="cta-subtitle">
            Join [X,000+] UK subscribers who have already switched to Premium IPTV for their daily entertainment. With instant activation, a [X]-day guarantee, and plans starting from [£X.XX/month], there is no risk and no reason to wait.
          </p>
          <div className="spacer-30"></div>
          <a href="/pricing" className="btn-outline-white btn-large">
            Choose Your Plan &amp; Subscribe Now &rarr;
          </a>
        </div>
      </section>

      <footer className="site-footer" id="footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-col footer-logo-col">
              <Link href="/" className="logo" style={{ marginBottom: 12, display: "inline-flex" }}>
                <img
                  src="/premium_iptv_lion_logo_v1.webp"
                  alt="Premium IPTV UK"
                  width={44}
                  height={44}
                  loading="lazy"
                />
                <span className="logo-name">
                  Premium <span>IPTV</span>
                </span>
              </Link>
              <p className="footer-text">
                Premium IPTV delivers a premium IPTV subscription built specifically for viewers in the United Kingdom &mdash; 37,000+ live channels, 198,000+ on-demand titles, full EPG, catch-up TV, and dedicated UK support.
              </p>
            </div>
            <div className="footer-col">
              <h4 className="footer-heading">Quick Links</h4>
              <p className="footer-text"><a href="/">Home</a></p>
              <p className="footer-text"><a href="/pricing">Pricing</a></p>
              <p className="footer-text"><a href="/best-iptv-uk">Best IPTV UK Guide</a></p>
              <p className="footer-text"><a href="/channels">Channels</a></p>
              <p className="footer-text"><a href="/setup">Setup Guides</a></p>
              <p className="footer-text"><a href="/faq">FAQ</a></p>
            </div>
            <div className="footer-col">
              <h4 className="footer-heading">Contact</h4>
              <p className="footer-text">concierge@iptv-premium-uk.tv</p>
              <p className="footer-text">+44 20 7946 0721</p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            <Link href="/">Premium IPTV</Link> &copy; {year}. All rights reserved.
          </p>
        </div>
      </footer>

      <a href="#" className="scroll-to-top" id="scroll-to-top" aria-label="Scroll to top">
        <i className="fas fa-chevron-up"></i>
      </a>
    </>
  );
}
