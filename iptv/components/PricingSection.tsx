export default function PricingSection() {
  return (
    <section className="pricing-section" id="pricing">
      <div className="pricing-bg-overlay"></div>
      <div className="section-container">
        <h2 className="section-title white">
          Choose Your IPTV Premium UK Plan &mdash; Instant Activation
        </h2>
        <h3 className="pricing-subtitle">
          Every IPTV Premium UK plan includes 4K UHD streams, built-in VPN, anti-freeze technology, full UK channels, 24/7 support, and a 30-day money-back guarantee.
        </h3>

        <div className="plans-section">
          <div className="connection-toggle">
            <button id="toggle-1" className="toggle-btn active">
              1 Connection
            </button>
            <button id="toggle-2" className="toggle-btn">
              2 Connections
            </button>
          </div>

          <div className="plans-grid" id="plans-grid">
            <div className="plan-card" data-plan="3">
              <h4 className="plan-title" data-base-text="3 Months">
                3 Months
              </h4>
              <div className="plan-price">
                <div className="past-price">
                  <span className="past-amount" data-past1="39.99" data-past2="59.99">
                    39.99
                  </span>
                </div>
                <span className="currency">&pound;</span>
                <span className="amount" data-price1="25.99" data-price2="37.99">
                  25.99
                </span>
              </div>
              <a className="plan-btn" data-href1="#pricing" data-href2="#pricing" href="#pricing">
                Begin Your Premium Experience
              </a>
              <ul className="plan-features">
                <li>37,000+ live channels with full UK coverage</li>
                <li>198,000+ films, series, and documentaries on demand</li>
                <li>Full EPG with 7-day catch-up TV</li>
                <li>HD, Full HD &amp; 4K streaming quality</li>
                <li>Multi-device access &mdash; up to 5 simultaneous connections</li>
                <li>24/7 dedicated UK support</li>
                <li>30-day money-back guarantee</li>
                <li>Instant activation</li>
              </ul>
            </div>

            <div className="plan-card" data-plan="6">
              <h4 className="plan-title" data-base-text="6 Months">
                6 Months
              </h4>
              <div className="plan-price">
                <div className="past-price">
                  <span className="past-amount" data-past1="59.99" data-past2="79.99">
                    59.99
                  </span>
                </div>
                <span className="currency">&pound;</span>
                <span className="amount" data-price1="35.99" data-price2="57.99">
                  35.99
                </span>
              </div>
              <a className="plan-btn" data-href1="#pricing" data-href2="#pricing" href="#pricing">
                Subscribe for 6 Months
              </a>
              <ul className="plan-features">
                <li>37,000+ live channels with full UK coverage</li>
                <li>198,000+ films, series, and documentaries on demand</li>
                <li>Full EPG with 7-day catch-up TV</li>
                <li>HD, Full HD &amp; 4K streaming quality</li>
                <li>Multi-device access &mdash; up to 5 simultaneous connections</li>
                <li>24/7 dedicated UK support</li>
                <li>30-day money-back guarantee</li>
                <li>Instant activation</li>
              </ul>
            </div>

            <div className="plan-card premium" data-plan="12">
              <div className="popular-badge">Best Value</div>
              <h4 className="plan-title" data-base-text="12 Months">
                12 Months
              </h4>
              <div className="plan-price">
                <div className="past-price">
                  <span className="past-amount" data-past1="79.99" data-past2="129.99">
                    79.99
                  </span>
                </div>
                <span className="currency">&pound;</span>
                <span className="amount" data-price1="49.99" data-price2="89.99">
                  49.99
                </span>
              </div>
              <a className="plan-btn" data-href1="#pricing" data-href2="#pricing" href="#pricing">
                Subscribe for 12 Months
              </a>
              <ul className="plan-features">
                <li>37,000+ live channels with full UK coverage</li>
                <li>198,000+ films, series, and documentaries on demand</li>
                <li>Full EPG with 7-day catch-up TV</li>
                <li>HD, Full HD &amp; 4K streaming quality</li>
                <li>Multi-device access &mdash; up to 5 simultaneous connections</li>
                <li>24/7 dedicated UK support</li>
                <li>30-day money-back guarantee</li>
                <li>Instant activation</li>
              </ul>
            </div>

            <div className="plan-card" data-plan="24">
              <h4 className="plan-title" data-base-text="24 Months">
                24 Months
              </h4>
              <div className="plan-price">
                <div className="past-price">
                  <span className="past-amount" data-past1="129.99" data-past2="199.99">
                    129.99
                  </span>
                </div>
                <span className="currency">&pound;</span>
                <span className="amount" data-price1="79.99" data-price2="129.99">
                  79.99
                </span>
              </div>
              <a className="plan-btn" data-href1="#pricing" data-href2="#pricing" href="#pricing">
                Subscribe for 24 Months
              </a>
              <ul className="plan-features">
                <li>37,000+ live channels with full UK coverage</li>
                <li>198,000+ films, series, and documentaries on demand</li>
                <li>Full EPG with 7-day catch-up TV</li>
                <li>HD, Full HD &amp; 4K streaming quality</li>
                <li>Multi-device access &mdash; up to 5 simultaneous connections</li>
                <li>24/7 dedicated UK support</li>
                <li>30-day money-back guarantee</li>
                <li>Instant activation</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pricing-note">
          <p>All payments are processed securely. We accept major debit and credit cards. Your subscription activates instantly and is protected by our 30-day money-back guarantee.</p>
          <div className="spacer-20"></div>
          <a href="/pricing" className="btn-primary btn-medium">
            View All Plans &amp; Subscribe &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
