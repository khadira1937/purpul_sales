import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Icon from "@/components/Icon";

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ — Frequently Asked Questions | Premium IPTV UK",
  description: "Find answers to common questions about Premium IPTV UK. Device compatibility, setup, payments, refunds, streaming quality and more.",
};

export default function FaqPage() {
  return (
    <>
      <Header />
      <main id="main-content" role="main">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <div className="section-container">
            <ol>
              <li><Link href="/">Home</Link></li>
              <li aria-current="page">FAQ</li>
            </ol>
          </div>
        </nav>

        <section className="seo-section" style={{ paddingTop: 40 }}>
          <div className="section-container">
            <div className="seo-content">
              <h1 style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)", marginBottom: 10 }}>
                Frequently Asked Questions about IPTV Premium UK
              </h1>
              <p>
                Everything you need to know about IPTV Premium UK subscription, pricing, devices, and support in 2026.
              </p>
              <div className="spacer-30"></div>

              <h2>General</h2>
              <div className="faq-accordion">
                <div className="faq-item">
                  <button className="faq-question" aria-expanded="false">
                    <span>What is IPTV Premium UK and how does it differ from traditional TV?</span>
                    <Icon name="chevron-down" />
                  </button>
                  <div className="faq-answer">
                    <p>
                      IPTV Premium UK (Internet Protocol Television) delivers television content over your internet connection rather than through a traditional aerial, satellite dish, or cable. This means you can watch 37,000+ live UK channels, 198,000+ on-demand titles, and catch-up TV on any internet-connected device.
                    </p>
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-question" aria-expanded="false">
                    <span>Which devices can I use with IPTV Premium UK?</span>
                    <Icon name="chevron-down" />
                  </button>
                  <div className="faq-answer">
                    <p>
                      IPTV Premium UK works on Amazon Firestick, Android TV boxes, Android phones and tablets, iPhones and iPads, Samsung/LG/Sony Smart TVs, Windows and Mac computers, MAG devices, and more. No extra box required.
                    </p>
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-question" aria-expanded="false">
                    <span>Is there a free trial available for IPTV Premium UK?</span>
                    <Icon name="chevron-down" />
                  </button>
                  <div className="faq-answer">
                    <p>
                      We offer a risk-free 30-day money-back guarantee instead of a free trial. Test the full IPTV Premium UK service with all channels and features — if you’re not 100% happy, we refund you in full.
                    </p>
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-question" aria-expanded="false">
                    <span>How quickly will I receive access after payment for IPTV Premium UK?</span>
                    <Icon name="chevron-down" />
                  </button>
                  <div className="faq-answer">
                    <p>
                      Access is activated within minutes. You will receive your IPTV Premium UK login credentials by email immediately after your payment is confirmed.
                    </p>
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-question" aria-expanded="false">
                    <span>Can I watch on more than one device at the same time with IPTV Premium UK?</span>
                    <Icon name="chevron-down" />
                  </button>
                  <div className="faq-answer">
                    <p>
                      Yes. Every IPTV Premium UK plan supports up to 5 simultaneous connections, so the whole family can watch different channels on different devices at the same time.
                    </p>
                  </div>
                </div>
              </div>

              <div className="spacer-30"></div>
              <h2>Billing &amp; Refunds</h2>
              <div className="faq-accordion">
                <div className="faq-item">
                  <button className="faq-question" aria-expanded="false">
                    <span>What happens if I am not satisfied with IPTV Premium UK?</span>
                    <Icon name="chevron-down" />
                  </button>
                  <div className="faq-answer">
                    <p>
                      You are covered by our 30-day money-back guarantee. If IPTV Premium UK does not meet your expectations for any reason, contact our support team and we will process a full refund. <a href="/refund-policy">View our refund policy &rarr;</a>
                    </p>
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-question" aria-expanded="false">
                    <span>What payment methods do you accept for IPTV Premium UK?</span>
                    <Icon name="chevron-down" />
                  </button>
                  <div className="faq-answer">
                    <p>
                      We accept all major debit and credit cards. All transactions are processed securely.
                    </p>
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-question" aria-expanded="false">
                    <span>Can I upgrade or change my IPTV Premium UK plan later?</span>
                    <Icon name="chevron-down" />
                  </button>
                  <div className="faq-answer">
                    <p>
                      Yes. You can switch to a longer plan at any time. Contact our support team and we will apply any price difference as credit toward your new IPTV Premium UK plan.
                    </p>
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-question" aria-expanded="false">
                    <span>What internet speed do I need for IPTV Premium UK?</span>
                    <Icon name="chevron-down" />
                  </button>
                  <div className="faq-answer">
                    <p>
                      For HD, 30 Mbps is enough. For 4K streaming with IPTV Premium UK, 25 Mbps or higher provides the best experience. Most UK fibre broadband connections easily meet this.
                    </p>
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-question" aria-expanded="false">
                    <span>Can I use IPTV Premium UK abroad?</span>
                    <Icon name="chevron-down" />
                  </button>
                  <div className="faq-answer">
                    <p>
                      Yes, IPTV Premium UK works anywhere in the world as long as you have a stable internet connection. Built-in VPN is included for extra privacy.
                    </p>
                  </div>
                </div>
              </div>

              <div className="spacer-50"></div>
              <div style={{ textAlign: "center" }}>
                <p>
                  Still have questions? Contact our support team at <a href="mailto:concierge@iptv-premium-uk.tv">concierge@iptv-premium-uk.tv</a>
                </p>
              </div>

              <div className="spacer-50"></div>
              <div style={{ textAlign: "center" }}>
                <Link href="/pricing" className="btn-primary btn-large">
                  Get Your IPTV Premium UK Subscription Today
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
