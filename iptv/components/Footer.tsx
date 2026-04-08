import Icon from "@/components/Icon";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <section className="cta-section">
        <div className="cta-bg-overlay"></div>
        <div className="section-container">
          <h2 className="cta-title">
            Get Your IPTV Premium UK Subscription Today
          </h2>
          <p className="cta-subtitle">
            Join over 50,000 happy UK customers. Watch every channel you love in stunning 4K with IPTV Premium UK. No buffering. No contracts. No nonsense. Start your IPTV Premium UK subscription today and save up to 50%.
          </p>
          <div className="spacer-30"></div>
          <a href="/pricing" className="btn-outline-white btn-medium">
            Get Started Now &mdash; 30-Day Money Back Guarantee
          </a>
        </div>
      </section>

      <footer className="site-footer" id="footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-col footer-logo-col">
              <Link href="/" className="logo" style={{ marginBottom: 12, display: "inline-flex" }}>
                <Image
                  src="/iptv-premium-uk-logo.webp"
                  alt="IPTV Premium UK"
                  width={44}
                  height={44}
                  loading="lazy"
                  sizes="44px"
                />
                <span className="logo-name">
                  Premium <span>IPTV</span>
                </span>
              </Link>
              <p className="footer-text">
                IPTV Premium UK delivers a premium IPTV subscription built specifically for viewers in the United Kingdom &mdash; 37,000+ live channels, 198,000+ on-demand titles, full EPG, catch-up TV, and dedicated UK support.
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
        <Icon name="chevron-up" />
      </a>
    </>
  );
}
