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
            Join over 50,000 happy UK customers. Watch every channel you love in stunning 4K with the ultimate IPTV UK 4K service. No buffering. No contracts. No nonsense. Start your IPTV Premium UK subscription today and save up to 50%.
          </p>
          <div className="spacer-30"></div>
          <Link href="/pricing" className="btn-outline-white btn-medium">
            Get Started Now &mdash; 30-Day Money Back Guarantee
          </Link>
        </div>
      </section>

      <footer className="site-footer" id="footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-col footer-logo-col">
              <Link href="/" className="logo" style={{ marginBottom: 12, display: "inline-flex" }}>
                <Image
                  src="/iptv-premium-uk-logo.webp"
                  alt="IPTV Premium UK Logo"
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
              <p className="footer-text"><Link href="/">Home</Link></p>
              <p className="footer-text"><Link href="/pricing">Pricing</Link></p>
              <p className="footer-text"><Link href="/guide">Best IPTV UK Guide</Link></p>
              <p className="footer-text"><Link href="/channels">Channels</Link></p>
              <p className="footer-text"><Link href="/setup">Setup Guides</Link></p>
              <p className="footer-text"><Link href="/faq">FAQ</Link></p>
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

      <Link href="#hero" className="scroll-to-top" id="scroll-to-top" aria-label="Scroll to top of page">
        <Icon name="chevron-up" />
      </Link>
    </>
  );
}
