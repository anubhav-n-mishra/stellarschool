import { useState, useEffect } from 'react'

function Modal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const subscribed = localStorage.getItem('school_subscribed_v2')
    if (!subscribed) {
      const timer = setTimeout(() => setIsOpen(true), 9000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleClose = () => setIsOpen(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const email = e.target.querySelector('input').value
    localStorage.setItem('school_subscribed_v2', '1')
    setIsOpen(false)
    alert('Thanks! Subscribed: ' + email)
  }

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose()
    }
  }

  if (!isOpen) return null

  return (
    <div 
      id="newsletter-modal" 
      className="modal" 
      aria-hidden={!isOpen}
      onClick={handleBackdropClick}
    >
      <div 
        className="modal-inner" 
        role="dialog" 
        aria-modal="true" 
        aria-label="Subscribe modal"
      >
        <button 
          className="modal-close" 
          aria-label="Close"
          onClick={handleClose}
        >
          ✕
        </button>
        <h3>Stay updated</h3>
        <p>Get admission dates and campus news directly in your inbox.</p>
        <form id="modal-subscribe" onSubmit={handleSubmit}>
          <input type="email" placeholder="Enter your email" required />
          <button className="btn btn-primary">Subscribe</button>
        </form>
      </div>
    </div>
  )
}

export default Modal
