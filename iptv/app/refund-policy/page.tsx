import Footer from "@/components/Footer";
import Header from "@/components/Header";

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Refund Policy — Premium IPTV UK",
  description: "Read the Premium IPTV refund policy. We offer a [X]-day money-back guarantee on all subscriptions. No questions asked.",
};

export default function RefundPolicyPage() {
  return (
    <>
      <Header />
      <main id="main-content" role="main">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <div className="section-container">
            <ol>
              <li><Link href="/">Home</Link></li>
              <li aria-current="page">Refund Policy</li>
            </ol>
          </div>
        </nav>

        <section className="article-section">
          <div className="section-container">
            <div className="article-content seo-content">
              <h1>Refund Policy</h1>
              <p className="article-date">Last updated: April 2026</p>

              <h2>Our [X]-Day Money-Back Guarantee</h2>
              <p>We stand behind the quality of our IPTV service. If you are not completely satisfied with your Premium IPTV subscription for any reason, you may request a full refund within [X] days of your purchase date.</p>

              <h2>How to Request a Refund</h2>
              <p>To request a refund, contact our support team via:</p>
              <ul>
                <li>Email: <a href="mailto:concierge@iptv-premium-uk.tv">concierge@iptv-premium-uk.tv</a></li>
                <li>[ADDITIONAL CONTACT CHANNELS: live chat, WhatsApp, etc.]</li>
              </ul>
              <p>Please include your order number or the email address used during purchase. Refunds are typically processed within [X] business days.</p>

              <h2>Conditions</h2>
              <ul>
                <li>Refund requests must be made within [X] days of the original purchase date.</li>
                <li>Refunds are issued to the original payment method.</li>
                <li>This guarantee applies to first-time purchases only. [OR: This guarantee applies to every subscription purchase.]</li>
              </ul>

              <h2>After the Guarantee Period</h2>
              <p>[Explain what happens after the guarantee period. E.g., &ldquo;After the [X]-day guarantee period, subscriptions are non-refundable. However, you may contact support if you experience technical issues and we will do our best to resolve them.&rdquo;]</p>

              <div className="spacer-30"></div>
              <p>If you have any questions about our refund policy, please <a href="mailto:concierge@iptv-premium-uk.tv">contact our support team</a>.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
