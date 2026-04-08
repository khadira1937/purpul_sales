import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="site-header" id="site-header">
        <div className="header-container">
          <Link href="/" className="logo" aria-label="Premium IPTV Home">
            <Image
              src="/iptv-premium-uk-logo.webp"
              alt="IPTV Premium UK logo"
              width={54}
              height={54}
              sizes="54px"
              quality={100}
            />
            <span className="logo-name">
              Premium <span>IPTV</span>
            </span>
          </Link>

          <nav className="main-nav" aria-label="Main Navigation">
            <ul className="nav-menu" id="nav-menu">
              <li>
                <Link href="/" className="nav-link active">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#why-us" className="nav-link">
                  Why Choose
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="nav-link">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/best-iptv-uk" className="nav-link">
                  Guide
                </Link>
              </li>
            </ul>
          </nav>

          <Link href="/pricing" className="btn-login">
            Get Started Now
          </Link>

          <button
            className="menu-toggle"
            id="menu-toggle"
            aria-label="Toggle Menu"
            aria-expanded="false"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </header>

      <div className="mobile-menu-overlay" id="mobile-overlay"></div>
      <div className="mobile-menu" id="mobile-menu">
        <div className="mobile-menu-header">
          <Link href="/" className="logo" style={{ textDecoration: "none" }}>
            <Image src="/iptv-premium-uk-logo.webp" alt="IPTV Premium UK" width={40} height={40} sizes="40px" loading="lazy" />
            <span className="logo-name" style={{ fontSize: 17 }}>
              Premium <span>IPTV</span>
            </span>
          </Link>
          <button className="mobile-close" id="mobile-close" aria-label="Close Menu">
            &times;
          </button>
        </div>
        <nav className="mobile-nav">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/#why-us">Why Choose</a>
            </li>
            <li>
              <a href="/pricing">Pricing</a>
            </li>
            <li>
              <a href="/best-iptv-uk">Guide</a>
            </li>
          </ul>
        </nav>
        <a href="/pricing" className="btn-mobile-cta">
          Get Started Now
        </a>
      </div>
    </>
  );
}
