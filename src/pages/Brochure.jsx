function Brochure() {
  const handlePrint = () => window.print()

  return (
    <div style={{ padding: '2rem', fontFamily: 'Inter, Arial, sans-serif', color: '#07204a' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <div>
          <strong>Stellar Public School</strong>
          <div style={{ fontSize: '0.95rem', color: '#6b7280' }}>Holistic learning • CBSE • Nursery — Grade 12 • Bengaluru</div>
        </div>
        <div>
          <button 
            onClick={handlePrint}
            style={{
              background: '#0b5cff',
              color: '#fff',
              border: 0,
              padding: '0.6rem 1rem',
              borderRadius: '8px',
              fontWeight: 700,
              cursor: 'pointer'
            }}
            aria-label="Save or print brochure"
          >
            Save / Print as PDF
          </button>
        </div>
      </div>

      <section style={{ pageBreakAfter: 'always' }}>
        <div style={{ background: '#f0f6ff', padding: '1rem', borderRadius: '12px' }}>
          <h1 style={{ margin: '0 0 0.5rem' }}>Stellar Public School</h1>
          <p style={{ fontSize: '0.95rem', color: '#6b7280' }}>A nurturing environment combining academic rigour and holistic development.</p>
        </div>
        <h2>Overview</h2>
        <p>Stellar Public School provides a balanced education that focuses on strong fundamentals, creativity and character. Our campus offers modern classrooms, labs, performing arts spaces and sports facilities. We emphasise personalised attention, character formation and digital fluency.</p>
      </section>

      <section style={{ pageBreakAfter: 'always' }}>
        <h2>Programs</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
          <div>
            <h3>Early Years</h3>
            <p style={{ fontSize: '0.95rem', color: '#6b7280' }}>Play-based learning, social-emotional development and school readiness.</p>
            <h3>Primary</h3>
            <p style={{ fontSize: '0.95rem', color: '#6b7280' }}>Foundational literacy and numeracy with STEAM-integrated projects.</p>
          </div>
          <div>
            <h3>Secondary</h3>
            <p style={{ fontSize: '0.95rem', color: '#6b7280' }}>Project-led learning, assessments, co-curricular options and sports.</p>
            <h3>Senior Secondary</h3>
            <p style={{ fontSize: '0.95rem', color: '#6b7280' }}>Stream guidance, career counselling and competitive exam preparation.</p>
          </div>
        </div>
      </section>

      <section style={{ pageBreakAfter: 'always' }}>
        <h2>Admissions</h2>
        <p style={{ fontSize: '0.95rem', color: '#6b7280' }}>Apply for a campus visit, request a callback or submit the online application. We offer merit and need-based scholarships.</p>
        <h3>Contact</h3>
        <p style={{ fontSize: '0.95rem', color: '#6b7280' }}>
          123 Knowledge Avenue, Near City Park, Bengaluru — 560001<br />
          Phone: +91 80 1234 5678<br />
          Email: admissions@example.com
        </p>
      </section>

      <footer style={{ fontSize: '0.95rem', color: '#6b7280' }}>
        © Stellar Public School — For inquiries contact admissions@example.com
      </footer>

      <style>{`
        @media print {
          button { display: none; }
        }
      `}</style>
    </div>
  )
}

export default Brochure
