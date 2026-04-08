import Icon from "@/components/Icon";

export default function ChannelsSection() {
  return (
    <section className="channels-section" id="channels">
      <div className="section-container">
        <h2 className="section-title white">
          37,000+ UK and International Channels with IPTV Premium UK
        </h2>
        <p className="section-intro">
          Every major British channel is included with IPTV Premium UK, plus top international networks, premium sports, and a huge movie lineup.
        </p>
        <div className="spacer-30"></div>
        <div className="channels-grid">
          <div className="channel-category">
            <div className="channel-category-icon">
              <Icon name="tv" />
            </div>
            <h3>British Entertainment</h3>
            <p>BBC One, BBC Two, ITV1, ITV2, ITV3, ITV4, Channel 4, E4, Channel 5, Sky Atlantic, Sky Max, Dave, UKTV Gold, and more.</p>
          </div>
          <div className="channel-category">
            <div className="channel-category-icon">
              <Icon name="futbol" />
            </div>
            <h3>UK Sports</h3>
            <p>Sky Sports, TNT Sports, BT Sport, Eurosport, and major events including Premier League, Champions League, Formula 1, UFC, boxing, cricket, and rugby.</p>
          </div>
          <div className="channel-category">
            <div className="channel-category-icon">
              <Icon name="film" />
            </div>
            <h3>Movies</h3>
            <p>Sky Cinema channels, Film4, blockbuster premieres, and instant access to our 198,000+ on-demand films and series library.</p>
          </div>
          <div className="channel-category">
            <div className="channel-category-icon">
              <Icon name="newspaper" />
            </div>
            <h3>News &amp; Documentary</h3>
            <p>BBC News, Sky News, ITV News, CNN, BBC Four, National Geographic, Discovery, and History Channel.</p>
          </div>
          <div className="channel-category">
            <div className="channel-category-icon">
              <Icon name="child" />
            </div>
            <h3>Kids</h3>
            <p>CBeebies, CBBC, Cartoon Network, Nickelodeon, Disney Channel, BabyTV, and family-friendly channels for all ages.</p>
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
