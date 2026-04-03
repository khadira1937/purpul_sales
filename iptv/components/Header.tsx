import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="site-header" id="site-header">
        <div className="header-container">
          <Link href="/" className="logo" aria-label="Prestige IPTV UK Home">
            <img
              src="/logo-new.webp"
              alt="Prestige IPTV UK"
              width={48}
              height={48}
              loading="eager"
            />
            <span className="logo-name">
              Prestige <span>IPTV UK</span>
            </span>
          </Link>

          <nav className="main-nav" aria-label="Main Navigation">
            <ul className="nav-menu" id="nav-menu">
              <li>
                <a href="#" className="nav-link active">
                  Home
                </a>
              </li>
              <li>
                <a href="#why-us" className="nav-link">
                  Why Choose
                </a>
              </li>
              <li>
                <a href="#pricing" className="nav-link">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#faq" className="nav-link">
                  Guide
                </a>
              </li>
            </ul>
          </nav>

          <a href="#pricing" className="btn-login">
            Begin Your Prestige Experience Now
          </a>

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
            <img src="/logo-new.webp" alt="Prestige IPTV UK" width={40} height={40} />
            <span className="logo-name" style={{ fontSize: 17 }}>
              Prestige <span>IPTV UK</span>
            </span>
          </Link>
          <button className="mobile-close" id="mobile-close" aria-label="Close Menu">
            &times;
          </button>
        </div>
        <nav className="mobile-nav">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#why-us">Why Choose</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a href="#faq">Guide</a>
            </li>
          </ul>
        </nav>
        <a href="#pricing" className="btn-mobile-cta">
          Begin Your Prestige Experience Now
        </a>
      </div>
    </>
  );
}
