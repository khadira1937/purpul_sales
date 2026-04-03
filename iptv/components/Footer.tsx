import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <section className="cta-section">
        <div className="cta-bg-overlay"></div>
        <div className="section-container">
          <h2 className="cta-title">
            The Finest IPTV UK Experience &mdash; 37,000 Channels, Dedicated 4K Quality
          </h2>
          <p className="cta-subtitle">
            Premium quality. White-glove support. Up to 30-day money-back guarantee.
          </p>
          <div className="spacer-30"></div>
          <a href="#pricing" className="btn-outline-white btn-large">
            Begin Your Prestige Experience Now
          </a>
        </div>
      </section>

      <footer className="site-footer" id="footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-col footer-logo-col">
              <Link href="/" className="logo" style={{ marginBottom: 12, display: "inline-flex" }}>
                <img
                  src="/logo-new.webp"
                  alt="Prestige IPTV UK"
                  width={52}
                  height={52}
                  loading="lazy"
                />
                <span className="logo-name">
                  Prestige <span>IPTV UK</span>
                </span>
              </Link>
              <p className="footer-text">
                Prestige IPTV UK delivers the finest premium IPTV experience in the United
                Kingdom &mdash; dedicated 4K server infrastructure, 37,000+ live channels,
                198,000+ curated on-demand titles, AES-256 VPN encryption, and white-glove
                24/7 priority support for a single one-time payment.
              </p>
            </div>
            <div className="footer-col">
              <h4 className="footer-heading">Address</h4>
              <p className="footer-text">22 Bishopsgate, London, EC2N 4BQ</p>
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
            <Link href="/">Prestige IPTV UK</Link> &copy; {year}. All rights reserved.
          </p>
        </div>
      </footer>

      <a href="#" className="scroll-to-top" id="scroll-to-top" aria-label="Scroll to top">
        <i className="fas fa-chevron-up"></i>
      </a>
    </>
  );
}
