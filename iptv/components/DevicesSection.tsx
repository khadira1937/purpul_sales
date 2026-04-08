import Image from "next/image";
import Link from "next/link";

export default function DevicesSection() {
  return (
    <section className="devices-section" id="devices">
      <div className="section-container">
        <div className="devices-grid">
          <div className="devices-images">
            <Image
              src="/iptv-premium-uk-devices-compatibility.webp"
              alt="IPTV Premium UK devices compatibility"
              width={912}
              height={440}
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 50vw"
              className="devices-img-main"
            />
            <Image
              src="/iptv-premium-uk-supported-devices.webp"
              alt="IPTV Premium UK supported devices"
              width={1024}
              height={350}
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 50vw"
              className="devices-img-secondary desktop-only"
            />
          </div>
          <div className="devices-text">
            <h2 className="devices-title">Compatible With All Devices &mdash; IPTV Premium UK Works Everywhere (No Box Required)</h2>
            <h3 className="devices-subtitle">One Subscription. Every Screen You Own.</h3>
            <div className="spacer-20"></div>
            <Image
              src="/iptv-premium-uk-supported-devices.webp"
              alt="IPTV Premium UK supported devices"
              width={768}
              height={262}
              loading="lazy"
              sizes="100vw"
              className="devices-img-mobile mobile-only"
            />
            <p className="devices-desc">
              IPTV Premium UK subscription works on every device you already own: Samsung, LG, Sony, Firestick, Android TV, iPhone, iPad, Windows PC, Mac, and more. One IPTV Premium UK subscription. Every screen you own.
               <Link href="/setup" className="devices-link"> Set up in minutes &rarr;</Link>
            </p>
            <p className="devices-desc">
              Apps supported: IPTV Smarters Pro | TiviMate | GSE Smart IPTV |
              Perfect Player | VLC. One plan supports up to 5 screens at once.
            </p>
            <div className="spacer-30"></div>
            <a href="/setup" className="btn-primary btn-medium">
              View Device Setup Guides
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
