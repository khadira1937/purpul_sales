import Icon from "@/components/Icon";

export default function ChannelsSection() {
  return (
    <section className="channels-section" id="channels">
      <div className="section-container">
        <h2 className="section-title white">
          37,000+ Channels Included with IPTV Premium UK
        </h2>
        <p className="section-intro">
          Experience the ultimate iptv premium uk service featuring every major British channel and premium sports network.
        </p>
        
        <div className="spacer-30"></div>
        
        <div className="channels-grid">
          <div className="channel-category">
            <div className="channel-category-icon">
              <Icon name="star" />
            </div>
            <h3>British IPTV 4K Entertainment</h3>
            <p>BBC One, ITV1, Sky Atlantic, and more. Experience the best iptv uk subscription quality with crystal clear resolution.</p>
          </div>

          <div className="channel-category">
            <div className="channel-category-icon">
              <Icon name="shield-halved" />
            </div>
            <h3>Top IPTV Providers UK for Sports</h3>
            <p>Sky Sports, TNT Sports, and every Premier League match. Our fast iptv servers ensure you never miss a goal.</p>
          </div>

          <div className="channel-category">
            <div className="channel-category-icon">
              <Icon name="caret-square-right" />
            </div>
            <h3>Movies & IPTV UK 4K VOD</h3>
            <p>Access 198,000+ on demand films. When you buy iptv subscription from us, you get the full cinema experience at home.</p>
          </div>

          <div className="channel-category">
            <div className="channel-category-icon">
              <Icon name="headset" />
            </div>
            <h3>Fast IPTV News & Documentary</h3>
            <p>Stay updated with BBC News, Sky News, and National Geographic, all streaming via our fast iptv infrastructure.</p>
          </div>

          <div className="channel-category">
            <div className="channel-category-icon">
              <Icon name="laptop" />
            </div>
            <h3>Cheap IPTV for Family & Kids</h3>
            <p>CBeebies, Disney Channel, and Nickelodeon. High quality family fun that makes us the most cheap iptv premium choice.</p>
          </div>
        </div>

        <div className="spacer-30"></div>
        <div style={{ textAlign: "center" }}>
          <a href="/channels" className="btn-primary">
            View the Complete Channel List &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
