import Link from "next/link";
import Icon from "@/components/Icon";

export default function FAQSection() {
  return (
    <section className="seo-section" id="faq">
      <div className="section-container">
        <div className="seo-content">
          <h2>Your Questions About IPTV Premium UK &mdash; Answered</h2>
          <div className="faq-accordion">
            <div className="faq-item">
              <button className="faq-question" aria-expanded="false" aria-label="Toggle: Is IPTV Premium UK easy to set up?">
                <span>Is IPTV Premium UK easy to set up?</span>
                <Icon name="chevron-down" />
              </button>
              <div className="faq-answer">
                <p>
                  Yes. Setup takes less than 2 minutes. You receive your login details by email straight after ordering, open your IPTV app, enter the details, and start watching immediately. <a href="/setup">See full setup guides &rarr;</a>
                </p>
              </div>
            </div>
            <div className="faq-item">
              <button className="faq-question" aria-expanded="false" aria-label="Toggle: What devices work with IPTV Premium UK subscription?">
                <span>What devices work with IPTV Premium UK subscription?</span>
                <Icon name="chevron-down" />
              </button>
              <div className="faq-answer">
                <p>
                  It works on Smart TVs, Firestick, Android TV boxes, iPhones, iPads, Android phones, MAG devices, Formuler boxes, Windows PCs, and Mac computers. <a href="/setup">See our complete device setup guides &rarr;</a>
                </p>
              </div>
            </div>
            <div className="faq-item">
              <button className="faq-question" aria-expanded="false" aria-label="Toggle: How fast does my broadband need to be for IPTV Premium UK?">
                <span>How fast does my broadband need to be for IPTV Premium UK?</span>
                <Icon name="chevron-down" />
              </button>
              <div className="faq-answer">
                <p>
                  For HD streams, 10 Mbps is enough. For 4K UHD, we recommend 25 Mbps or faster for the best experience.
                </p>
              </div>
            </div>
            <div className="faq-item">
              <button className="faq-question" aria-expanded="false" aria-label="Toggle: Is there a minimum contract with IPTV Premium UK?">
                <span>Is there a minimum contract with IPTV Premium UK?</span>
                <Icon name="chevron-down" />
              </button>
              <div className="faq-answer">
                <p>
                  No. There are no contracts and no hidden fees. Pick any plan, pay once, and renew only when you are ready. <a href="/pricing">View all plans &rarr;</a>
                </p>
              </div>
            </div>
            <div className="faq-item">
              <button className="faq-question" aria-expanded="false" aria-label="Toggle: What if I&apos;m not happy with the IPTV Premium UK service?">
                <span>What if I&apos;m not happy with the IPTV Premium UK service?</span>
                <Icon name="chevron-down" />
              </button>
              <div className="faq-answer">
                <p>
                  Every plan includes a 30-day money-back guarantee. If you are not satisfied for any reason, contact us within 30 days and we will issue a full refund. <a href="/refund-policy">View our refund policy &rarr;</a>
                </p>
              </div>
            </div>
            <div className="faq-item">
              <button className="faq-question" aria-expanded="false" aria-label="Toggle: How many screens can I use at once with IPTV Premium UK?">
                <span>How many screens can I use at once with IPTV Premium UK?</span>
                <Icon name="chevron-down" />
              </button>
              <div className="faq-answer">
                <p>
                  All plans include up to 5 simultaneous screens, which is perfect for families who want to watch different channels at the same time.
                </p>
              </div>
            </div>
            <div className="faq-item">
              <button className="faq-question" aria-expanded="false" aria-label="Toggle: Do you include UK sports channels with IPTV Premium UK?">
                <span>Do you include UK sports channels with IPTV Premium UK?</span>
                <Icon name="chevron-down" />
              </button>
              <div className="faq-answer">
                <p>
                  Yes. Sky Sports, BT Sport, TNT Sports, and many more are included, with live coverage of Premier League football, Formula 1, UFC, boxing, and other major events. <a href="/channels">Explore the channel lineup &rarr;</a>
                </p>
              </div>
            </div>
            <div className="faq-item">
              <button className="faq-question" aria-expanded="false" aria-label="Toggle: What is your IPTV Premium UK service uptime?">
                <span>What is your IPTV Premium UK service uptime?</span>
                <Icon name="chevron-down" />
              </button>
              <div className="faq-answer">
                <p>
                  We run on a 99.9% uptime target with anti-freeze technology and 24/7 monitoring to keep streams stable throughout the day.
                </p>
              </div>
            </div>
            <div className="faq-item">
              <button className="faq-question" aria-expanded="false" aria-label="Toggle: What happens when my IPTV Premium UK plan runs out?">
                <span>What happens when my IPTV Premium UK plan runs out?</span>
                <Icon name="chevron-down" />
              </button>
              <div className="faq-answer">
                <p>
                  Nothing changes in your account details. The service simply stops at the end of your term. There are no surprise renewals or hidden charges.
                </p>
              </div>
            </div>
            <div className="faq-item">
              <button className="faq-question" aria-expanded="false" aria-label="Toggle: Is there support if I need help with IPTV Premium UK?">
                <span>Is there support if I need help with IPTV Premium UK?</span>
                <Icon name="chevron-down" />
              </button>
              <div className="faq-answer">
                <p>
                  Yes. Our UK-based support team is available 24 hours a day, 7 days a week via live chat, email, and WhatsApp.
                </p>
              </div>
            </div>
          </div>

          <div className="spacer-30"></div>
          <p>
            Have more questions? Visit our <Link href="/faq">frequently asked questions</Link> page or read <Link href="/best-iptv-uk">our complete guide to IPTV in the UK</Link>.
          </p>
        </div>
      </div>
    </section>
  );
}
