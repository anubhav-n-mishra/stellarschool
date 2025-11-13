import { useState, useEffect, useRef } from 'react'

function Admissions() {
  const [counters, setCounters] = useState({ students: 0, teachers: 0, passRate: 0 })
  const [hasAnimated, setHasAnimated] = useState(false)
  const statsRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          animateCounters()
          setHasAnimated(true)
        }
      },
      { threshold: 0.6 }
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => observer.disconnect()
  }, [hasAnimated])

  const animateCounters = () => {
    const targets = { students: 2400, teachers: 150, passRate: 98 }
    const duration = 1200
    const startTime = performance.now()

    const animate = (now) => {
      const progress = Math.min((now - startTime) / duration, 1)
      setCounters({
        students: Math.floor(progress * targets.students),
        teachers: Math.floor(progress * targets.teachers),
        passRate: Math.floor(progress * targets.passRate)
      })
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    if (!form.checkValidity()) {
      form.reportValidity()
      return
    }

    const phone = form.phone.value.trim()
    const phoneRe = /^(?:\+91[\-\s]?|0)?[6-9]\d{9}$/
    if (!phoneRe.test(phone)) {
      alert('Please enter a valid Indian mobile number starting with 6-9 (or prefix +91).')
      return
    }

    const submitBtn = form.querySelector('button[type="submit"]')
    submitBtn.disabled = true
    submitBtn.textContent = 'Sending...'

    await new Promise(r => setTimeout(r, 800))
    
    submitBtn.disabled = false
    submitBtn.textContent = 'Request Callback'
    alert('Thank you! Our admissions team will contact you shortly.')
    form.reset()
  }

  const handleBrochureClick = (e) => {
    e.preventDefault()
    window.open('/brochure', '_blank')
  }

  return (
    <section id="admissions" className="admissions container">
      <h2>Admissions 2026 — Apply now</h2>
      <p className="muted">Limited seats. Apply for campus visit or request a callback.</p>
      <div className="admissions-grid">
        <form id="apply-form" className="apply-form" noValidate aria-labelledby="admissions" onSubmit={handleSubmit}>
          <input type="hidden" name="source" value="landing-2026" />
          <label id="apply">
            <span>Child's Name</span>
            <input type="text" name="childName" required aria-required="true" />
          </label>
          <label>
            <span>Grade</span>
            <select name="grade" required aria-required="true">
              <option value="">Select grade</option>
              {['Nursery', 'KG', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'].map(g => 
                <option key={g}>{g}</option>
              )}
            </select>
          </label>
          <label>
            <span>Parent / Guardian</span>
            <input type="text" name="parentName" required />
          </label>
          <label>
            <span>Contact number</span>
            <input type="tel" name="phone" id="phone" placeholder="e.g. +91 98765 43210" required />
          </label>
          <label>
            <span>Email (optional)</span>
            <input type="email" name="email" />
          </label>
          <div className="form-actions">
            <button className="btn btn-primary" type="submit">Request Callback</button>
            <a className="btn btn-outline" onClick={handleBrochureClick}>Download Brochure</a>
          </div>
          <p className="muted small">We will contact you soon. We respect your privacy.</p>
        </form>

        <aside className="admissions-info" aria-hidden="false">
          <h3>Quick facts</h3>
          <ul>
            <li>Transparent fee structure</li>
            <li>Safe transport & surveillance</li>
            <li>Need & merit scholarships</li>
          </ul>
          <div className="stats" role="list" ref={statsRef}>
            <div role="listitem">
              <span className="counter">{counters.students}</span>
              <small>Students</small>
            </div>
            <div role="listitem">
              <span className="counter">{counters.teachers}</span>
              <small>Teachers</small>
            </div>
            <div role="listitem">
              <span className="counter">{counters.passRate}</span>
              <small>% Pass Rate</small>
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default Admissions
