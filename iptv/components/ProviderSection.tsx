import Icon from "@/components/Icon";

export default function ProviderSection() {
  return (
    <section className="provider-section" id="features">
      <div className="section-container">
        <div className="provider-grid">
          <div className="provider-text">
            <h2 className="provider-title">
              What You Get With Your IPTV Premium UK Subscription
            </h2>
            <div className="provider-copy">
              <p className="provider-desc">
                Every IPTV Premium UK plan gives you the full service from day one — no hidden fees and no locked features.
              </p>
            </div>
          </div>
          <div className="provider-features">
            <div className="features-box">
              <ul className="feature-list">
                <li>
                  <Icon name="caret-square-right" />{" "}
                  <span>
                    <strong>37,000+ Live UK and International Channels.</strong> BBC, ITV, Channel 4, Channel 5, Sky Sports, BT Sport, TNT Sports, Sky Cinema, and more. We carry the channels UK households actually watch. <a href="/channels">Browse our full channel list &rarr;</a>
                  </span>
                </li>
                <li>
                  <Icon name="caret-square-right" />{" "}
                  <span>
                    <strong>198,000+ Films and Series On Demand.</strong> New cinema releases, full box sets, and timeless classics are all included. Watch what you want, when you want, with no extra charges.
                  </span>
                </li>
                <li>
                  <Icon name="caret-square-right" />{" "}
                  <span>
                    <strong>Every Sport Live in 4K.</strong> Premier League, Champions League, Formula 1, UFC, boxing, cricket, rugby, and more. Never miss a major event with smooth live coverage.
                  </span>
                </li>
                <li>
                  <Icon name="caret-square-right" />{" "}
                  <span>
                    <strong>7-Day Catch-Up TV and Full EPG.</strong> Check what is on now, plan your week, and replay recent programmes you missed. IPTV convenience that feels like premium cable.
                  </span>
                </li>
                <li>
                  <Icon name="caret-square-right" />{" "}
                  <span>
                    <strong>Built-In VPN and Anti-Freeze 9.0.</strong> Your stream stays private, secure, and stable with zero-freeze performance and 99.9% uptime across the platform.
                  </span>
                </li>
                <li>
                  <Icon name="caret-square-right" />{" "}
                  <span>
                    <strong>Works on Every Device You Own.</strong> Smart TV, Firestick, Android TV box, iPhone, iPad, Android phone, MAG, Formuler, PC, and Mac. One plan covers up to 5 simultaneous screens. <a href="/setup">See full device compatibility &rarr;</a>
                  </span>
                </li>
                <li>
                  <Icon name="caret-square-right" />{" "}
                  <span>
                    <strong>No Contracts and 30-Day Money-Back Guarantee.</strong> Cancel any time, no hidden fees, and get a full refund within 30 days if the service is not right for you. <a href="/pricing">View plans and save more on longer subscriptions &rarr;</a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
