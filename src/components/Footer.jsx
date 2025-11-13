import { useState } from 'react'

function Footer() {
  const [year] = useState(new Date().getFullYear())

  const handleSubscribe = (e) => {
    e.preventDefault()
    const email = e.target.querySelector('input').value
    localStorage.setItem('school_subscribed_v2', '1')
    alert('Subscribed: ' + email)
    e.target.reset()
  }

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container footer-grid">
        <div>
          <strong>Stellar Public School</strong>
          <address>123 Knowledge Avenue, Near City Park, Bengaluru — 560001</address>
          <p>Phone: <a href="tel:+918012345678">+91 80 1234 5678</a></p>
        </div>
        <div>
          <h4>Quick links</h4>
          <nav className="footer-nav" aria-label="Footer navigation">
            <a href="#about">About</a>
            <a href="#programs">Programs</a>
            <a href="#admissions">Admissions</a>
          </nav>
        </div>
        <div>
          <h4>Connect</h4>
          <p className="small muted">Subscribe for updates and school events.</p>
          <form id="footer-subscribe" className="subscribe-form" onSubmit={handleSubscribe}>
            <input type="email" placeholder="Email address" required />
            <button className="btn btn-primary">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="container copyright">© {year} Stellar Public School. All rights reserved.</div>
    </footer>
  )
}

export default Footer
