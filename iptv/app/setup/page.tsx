import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SiteInteractions from "@/components/SiteInteractions";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Setup Guides — Install IPTV on Any Device | Premium IPTV",
  description: "Step-by-step IPTV setup guides for Firestick, Android, iOS, Smart TV, MAG Box, Windows, Mac and more. Get started with Premium IPTV in minutes.",
};

export default function SetupPage() {
  return (
    <>
      <Header />
      <main id="main-content" role="main">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <div className="section-container">
            <ol>
              <li><a href="/">Home</a></li>
              <li aria-current="page">Setup Guides</li>
            </ol>
          </div>
        </nav>

        <section className="article-section">
          <div className="section-container">
            <div className="article-content seo-content">
              <h1>IPTV Setup Guides &mdash; Get Started in Minutes</h1>
              <p>Setting up your Premium IPTV subscription is quick and straightforward. Choose your device below for step-by-step instructions.</p>

              <h2>Amazon Firestick &amp; Fire TV</h2>
              <p>The most popular IPTV device in the UK. Download [APP NAME] from the Amazon Appstore or sideload it in three simple steps. Your Firestick will be streaming in under five minutes.</p>

              <h2>Android TV &amp; Android Boxes</h2>
              <p>Install [APP NAME] from the Google Play Store, enter your login credentials, and start watching. Compatible with all Android TV devices including Nvidia Shield, Xiaomi Mi Box, and generic Android boxes.</p>

              <h2>Samsung, LG &amp; Sony Smart TVs</h2>
              <p>Use the built-in app store on your Smart TV to download a compatible IPTV player. We recommend [APP NAME] for the best experience on Smart TVs.</p>

              <h2>iPhone, iPad &amp; Apple TV</h2>
              <p>Download [APP NAME] from the Apple App Store. Enter your subscription details and you are ready to watch on any Apple device.</p>

              <h2>Windows &amp; Mac</h2>
              <p>Use [APP NAME] or VLC Media Player on your computer. Simply load the M3U playlist URL from your welcome email and start streaming.</p>

              <h2>MAG Boxes &amp; Formuler</h2>
              <p>Enter the portal URL provided in your welcome email into your MAG or Formuler device settings. The EPG and channel list will load automatically.</p>

              <div className="spacer-30"></div>
              <h2>Need Help?</h2>
              <p>Our support team is available [HOURS/24/7] to help you set up your device. Contact us via [CHANNELS: live chat, email, WhatsApp] for personal assistance at no extra charge.</p>
              <div className="spacer-30"></div>
              <div style={{ textAlign: "center" }}>
                <a href="/pricing" className="btn-primary btn-large">Get Your Subscription &rarr;</a>
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
