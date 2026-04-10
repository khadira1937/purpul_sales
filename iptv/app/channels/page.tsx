import Footer from "@/components/Footer";
import Header from "@/components/Header";

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Full Channel List — Premium IPTV UK",
  description: "Browse the complete Premium IPTV channel list. [X,000+] live UK channels including BBC, ITV, Sky Sports, Sky Cinema, BT Sport, TNT Sports and more.",
};

export default function ChannelsPage() {
  return (
    <>
      <Header />
      <main id="main-content" role="main">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <div className="section-container">
            <ol>
              <li><Link href="/">Home</Link></li>
              <li aria-current="page">Channels</li>
            </ol>
          </div>
        </nav>

        <section className="article-section">
          <div className="section-container">
            <div className="article-content seo-content">
              <h1>Full Channel List</h1>
              <p>Our complete channel lineup is currently being updated. Below is a summary of what is included with every Premium IPTV subscription.</p>

              <h2>UK Entertainment</h2>
              <p>BBC One, BBC Two, ITV1, ITV2, ITV3, ITV4, Channel 4, E4, Channel 5, 5Star, Dave, UKTV Gold, Sky One, Sky Atlantic, Sky Max, Comedy Central UK, and many more.</p>

              <h2>UK Sports</h2>
              <p>Sky Sports Main Event, Sky Sports Premier League, Sky Sports Football, Sky Sports F1, Sky Sports Cricket, Sky Sports Golf, TNT Sports 1-4, BT Sport, BBC Sport, Eurosport 1 &amp; 2. All major sporting events including the Premier League, Champions League, Six Nations, The Ashes, Formula 1, and Wimbledon.</p>

              <h2>Movies &amp; Cinema</h2>
              <p>Sky Cinema Premiere, Sky Cinema Action, Sky Cinema Comedy, Sky Cinema Sci-Fi, Sky Cinema Family, Film4, plus access to our full on-demand film library with [X,000+] titles.</p>

              <h2>News &amp; Documentary</h2>
              <p>BBC News, Sky News, ITV News, CNN, Al Jazeera, BBC Four, National Geographic, Discovery, History Channel.</p>

              <h2>Kids</h2>
              <p>CBeebies, CBBC, Cartoon Network, Nickelodeon, Disney Channel, Baby TV.</p>

              <h2>International</h2>
              <p>[X,000+] international channels covering Europe, Asia, Middle East, Africa, and the Americas.</p>

              <div className="spacer-30"></div>
              <p><strong>Total channels: [X,000+]</strong></p>
              <p>For the most up-to-date channel list or to request specific channels, please contact our support team.</p>
              <div className="spacer-30"></div>
              <div style={{ textAlign: "center" }}>
                <Link href="/pricing" className="btn-primary btn-large">
                  Subscribe Now &rarr;
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
