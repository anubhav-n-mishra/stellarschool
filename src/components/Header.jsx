import { useState } from 'react'

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleLinkClick = () => {
    if (window.innerWidth <= 980) {
      setMobileMenuOpen(false)
    }
  }

  return (
    <header className="site-header" role="banner">
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="contact-sm">
            Call us: <a href="tel:+918012345678">+91 80 1234 5678</a> • <a href="#admissions">Admissions help</a>
          </div>
          <div className="school-badges">
            <span className="badge">CBSE</span>
            <span className="badge">ISO 9001</span>
          </div>
        </div>
      </div>
      <div className="container header-inner">
        <a className="logo" href="#" aria-label="Stellar Public School home">
          Stellar<span className="accent">School</span>
        </a>
        <nav 
          className="nav" 
          id="main-nav" 
          role="navigation" 
          aria-label="Main navigation"
          style={{ display: mobileMenuOpen ? 'flex' : '' }}
        >
          <a href="#about" onClick={handleLinkClick}>About</a>
          <a href="#programs" onClick={handleLinkClick}>Programs</a>
          <a href="#testimonials" onClick={handleLinkClick}>Parents</a>
          <a href="#admissions" className="cta" onClick={handleLinkClick}>Admissions</a>
        </nav>
        <div className="header-actions">
          <a className="btn btn-outline small" href="#admissions">Book a visit</a>
          <a className="btn btn-primary" href="#apply">Apply</a>
        </div>
        <button 
          id="mobile-toggle" 
          className="mobile-toggle" 
          aria-label="Open menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
        >
          ☰
        </button>
      </div>
    </header>
  )
}

export default Header
