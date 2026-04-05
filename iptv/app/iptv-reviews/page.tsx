import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Icon from "@/components/Icon";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customer Reviews — What UK Viewers Say | Premium IPTV",
  description: "Read genuine reviews from Premium IPTV UK subscribers. Real feedback on channel quality, streaming reliability, customer support and value for money.",
};

export default function ReviewsPage() {
  return (
    <>
      <Header />
      <main id="main-content" role="main">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <div className="section-container">
            <ol>
              <li><a href="/">Home</a></li>
              <li aria-current="page">Reviews</li>
            </ol>
          </div>
        </nav>

        <section className="testimonials-section" style={{ paddingTop: 40 }}>
          <div className="section-container">
            <h1 className="section-title white">What Our UK Subscribers Say</h1>
            <p className="testimonials-subtitle">Premium IPTV is trusted by [X,000+] subscribers across the United Kingdom.</p>
            <div className="spacer-30"></div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 22 }}>
              <div className="testimonial-card" style={{ flex: "none", width: "100%" }}>
                <div className="testimonial-stars">
                  <Icon name="star" /><Icon name="star" /><Icon name="star" /><Icon name="star" /><Icon name="star" />
                </div>
                <p className="testimonial-text">&ldquo;[Genuine testimonial text from a real customer]&rdquo;</p>
                <div className="testimonial-author"><h4>[First name, Initial.], subscriber since [Month Year]</h4></div>
              </div>
              <div className="testimonial-card" style={{ flex: "none", width: "100%" }}>
                <div className="testimonial-stars">
                  <Icon name="star" /><Icon name="star" /><Icon name="star" /><Icon name="star" /><Icon name="star" />
                </div>
                <p className="testimonial-text">&ldquo;[Genuine testimonial text from a real customer]&rdquo;</p>
                <div className="testimonial-author"><h4>[First name, Initial.], subscriber since [Month Year]</h4></div>
              </div>
              <div className="testimonial-card" style={{ flex: "none", width: "100%" }}>
                <div className="testimonial-stars">
                  <Icon name="star" /><Icon name="star" /><Icon name="star" /><Icon name="star" /><Icon name="star" />
                </div>
                <p className="testimonial-text">&ldquo;[Genuine testimonial text from a real customer]&rdquo;</p>
                <div className="testimonial-author"><h4>[First name, Initial.], subscriber since [Month Year]</h4></div>
              </div>
            </div>

            <div className="spacer-50"></div>
            <div style={{ textAlign: "center" }}>
              <p style={{ color: "var(--muted)", fontSize: 16 }}>More reviews coming soon. Want to share your experience? Contact us at <a href="mailto:concierge@iptv-premium-uk.tv" style={{ color: "var(--purple-3)" }}>concierge@iptv-premium-uk.tv</a></p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
