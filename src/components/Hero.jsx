function Hero() {
  return (
    <section className="hero" aria-label="Stellar School overview">
      <div className="container hero-grid">
        <div className="hero-content">
          <h1>Where curiosity meets excellence</h1>
          <p className="lead">
            Stellar Public School blends strong fundamentals with innovation — digital classrooms, 
            experienced faculty and a caring campus culture. Admissions open for 2026.
          </p>
          <div className="hero-ctas">
            <a href="#admissions" className="btn btn-primary">Request a Campus Visit</a>
            <a href="#programs" className="btn btn-outline">Explore Programs</a>
          </div>
          <ul className="trust-list" aria-hidden="false">
            <li><strong>20+</strong> years of teaching excellence</li>
            <li><strong>1:18</strong> teacher-student ratio</li>
            <li><strong>98%</strong> board pass rate</li>
          </ul>
          <div className="hero-meta">
            <a className="virtual-tour" href="#" id="virtual-tour">▶ Virtual tour</a>
            <span className="muted">• Scholarships available • Transport across city</span>
          </div>
        </div>
        <div className="hero-media">
          <div 
            className="hero-img" 
            role="img" 
            aria-label="Students studying in class" 
            style={{backgroundImage: "url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder')"}}
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
