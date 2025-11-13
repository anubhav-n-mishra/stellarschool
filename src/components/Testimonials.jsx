import { useState, useEffect, useRef, useCallback } from 'react'

const testimonials = [
  { text: "The teachers are attentive and my child's confidence has grown tremendously.", author: "Mrs. Sharma" },
  { text: "Great balance between academics and sports — excellent discipline and warmth.", author: "Mr. Reddy" },
  { text: "The campus and safety standards are outstanding; we feel secure as parents.", author: "Ms. Patel" }
]

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemWidth, setItemWidth] = useState(0)
  const viewportRef = useRef(null)
  const trackRef = useRef(null)
  const autoRotateRef = useRef(null)

  const updateSizes = useCallback(() => {
    if (viewportRef.current) {
      const width = viewportRef.current.clientWidth
      setItemWidth(width)
    }
  }, [])

  useEffect(() => {
    updateSizes()
    window.addEventListener('resize', updateSizes)
    return () => window.removeEventListener('resize', updateSizes)
  }, [updateSizes])

  const goToSlide = useCallback((index) => {
    setCurrentIndex((index + testimonials.length) % testimonials.length)
  }, [])

  const handlePrev = () => goToSlide(currentIndex - 1)
  const handleNext = () => goToSlide(currentIndex + 1)

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault()
      handlePrev()
    } else if (e.key === 'ArrowRight') {
      e.preventDefault()
      handleNext()
    } else if (e.key === 'Home') {
      e.preventDefault()
      goToSlide(0)
    } else if (e.key === 'End') {
      e.preventDefault()
      goToSlide(testimonials.length - 1)
    }
  }

  useEffect(() => {
    autoRotateRef.current = setInterval(() => {
      goToSlide(currentIndex + 1)
    }, 6000)

    return () => clearInterval(autoRotateRef.current)
  }, [currentIndex, goToSlide])

  const handleMouseEnter = () => clearInterval(autoRotateRef.current)
  const handleMouseLeave = () => {
    autoRotateRef.current = setInterval(() => {
      goToSlide(currentIndex + 1)
    }, 6000)
  }

  const announceText = `Testimonial ${currentIndex + 1} of ${testimonials.length}: ${testimonials[currentIndex].text}`

  return (
    <section id="testimonials" className="container testimonials" aria-label="Parent testimonials">
      <h2>What parents say</h2>
      <div 
        className="testimonial-carousel" 
        role="region" 
        aria-roledescription="carousel" 
        aria-label="Parent testimonials"
        onKeyDown={handleKeyDown}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button 
          className="carousel-prev" 
          aria-label="Previous testimonial" 
          type="button" 
          aria-controls="carousel-track"
          onClick={handlePrev}
        >
          ‹
        </button>
        <div className="carousel-viewport" ref={viewportRef}>
          <ul 
            className="carousel-track" 
            id="carousel-track" 
            ref={trackRef}
            style={{
              width: `${testimonials.length * itemWidth}px`,
              transform: `translateX(-${currentIndex * itemWidth}px)`
            }}
          >
            {testimonials.map((testimonial, idx) => (
              <li 
                key={idx} 
                className="card"
                style={{ flex: `0 0 ${itemWidth}px`, width: `${itemWidth}px` }}
                aria-hidden={idx !== currentIndex}
                tabIndex={idx === currentIndex ? 0 : -1}
              >
                <p>{testimonial.text}</p>
                <cite>— {testimonial.author}</cite>
              </li>
            ))}
          </ul>
        </div>
        <button 
          className="carousel-next" 
          aria-label="Next testimonial" 
          type="button" 
          aria-controls="carousel-track"
          onClick={handleNext}
        >
          ›
        </button>
        <div id="carousel-announcer" className="visually-hidden" aria-live="polite">
          {announceText}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
