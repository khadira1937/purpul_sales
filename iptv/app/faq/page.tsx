import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SiteInteractions from "@/components/SiteInteractions";
import type { Metadata } from "next";

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
              <li><a href="/">Home</a></li>
              <li aria-current="page">FAQ</li>
            </ol>
          </div>
        </nav>

        <section className="seo-section" style={{ paddingTop: 40 }}>
          <div className="section-container">
            <div className="seo-content">
              <h1 style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)", marginBottom: 10 }}>Frequently Asked Questions</h1>
              <p>Everything you need to know about Premium IPTV UK.</p>
              <div className="spacer-30"></div>

              <h2>General</h2>
              <div className="faq-accordion">
                <div className="faq-item">
                  <button className="faq-question" aria-expanded="false">
                    <span>What is IPTV and how does it differ from traditional TV?</span>
                    <i className="fas fa-chevron-down"></i>
                  </button>
                  <div className="faq-answer">
                    <p>IPTV (Internet Protocol Television) delivers television content over your internet connection rather than through a traditional aerial, satellite dish, or cable. This means you can watch live TV, on-demand films, and catch-up content on any internet-connected device &mdash; from Smart TVs and streaming sticks to phones and laptops.</p>
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-question" aria-expanded="false">
                    <span>Which devices can I use?</span>
                    <i className="fas fa-chevron-down"></i>
                  </button>
                  <div className="faq-answer">
                    <p>Our service works on Amazon Firestick, Android TV boxes, Android phones and tablets, iPhones and iPads, Samsung/LG/Sony Smart TVs, Windows and Mac computers, MAG devices, and Enigma2 receivers. You can use any IPTV-compatible app including [APP NAMES].</p>
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-question" aria-expanded="false">
                    <span>Is there a free trial available?</span>
                    <i className="fas fa-chevron-down"></i>
                  </button>
                  <div className="faq-answer">
                    <p>[YES/NO &mdash; include details if applicable]</p>
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-question" aria-expanded="false">
                    <span>How quickly will I receive access after payment?</span>
                    <i className="fas fa-chevron-down"></i>
                  </button>
                  <div className="faq-answer">
                    <p>Access is activated within minutes. You will receive your login credentials by email immediately after your payment is confirmed.</p>
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-question" aria-expanded="false">
                    <span>Can I watch on more than one device at the same time?</span>
                    <i className="fas fa-chevron-down"></i>
                  </button>
                  <div className="faq-answer">
                    <p>Yes. Your subscription supports [X] simultaneous connections, so multiple people in your household can watch different channels on different devices at the same time.</p>
                  </div>
                </div>
              </div>

              <div className="spacer-30"></div>
              <h2>Billing &amp; Refunds</h2>
              <div className="faq-accordion">
                <div className="faq-item">
                  <button className="faq-question" aria-expanded="false">
                    <span>What happens if I am not satisfied?</span>
                    <i className="fas fa-chevron-down"></i>
                  </button>
                  <div className="faq-answer">
                    <p>You are covered by our [X]-day money-back guarantee. If the service does not meet your expectations for any reason, contact our support team and we will process a full refund. <a href="/refund-policy">View our refund policy &rarr;</a></p>
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-question" aria-expanded="false">
                    <span>What payment methods do you accept?</span>
                    <i className="fas fa-chevron-down"></i>
                  </button>
                  <div className="faq-answer">
                    <p>We accept [LIST ALL PAYMENT METHODS]. All transactions are processed securely.</p>
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-question" aria-expanded="false">
                    <span>Can I upgrade or change my plan later?</span>
                    <i className="fas fa-chevron-down"></i>
                  </button>
                  <div className="faq-answer">
                    <p>Yes. You can switch to a longer plan at any time. Contact our support team and we will apply any price difference as credit toward your new plan.</p>
                  </div>
                </div>
              </div>

              <div className="spacer-30"></div>
              <h2>Technical</h2>
              <div className="faq-accordion">
                <div className="faq-item">
                  <button className="faq-question" aria-expanded="false">
                    <span>What internet speed do I need for IPTV?</span>
                    <i className="fas fa-chevron-down"></i>
                  </button>
                  <div className="faq-answer">
                    <p>For standard definition, 5 Mbps is sufficient. For HD, we recommend 10 Mbps. For 4K content, 25 Mbps or higher provides the best experience.</p>
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-question" aria-expanded="false">
                    <span>Can I use IPTV abroad?</span>
                    <i className="fas fa-chevron-down"></i>
                  </button>
                  <div className="faq-answer">
                    <p>[ANSWER BASED ON YOUR SERVICE CAPABILITIES]</p>
                  </div>
                </div>
              </div>

              <div className="spacer-50"></div>
              <div style={{ textAlign: "center" }}>
                <p>Still have questions? Contact our support team at <a href="mailto:concierge@iptv-premium-uk.tv">concierge@iptv-premium-uk.tv</a></p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <SiteInteractions />
    </>
  );
}
