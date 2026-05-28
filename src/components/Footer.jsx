import { useState, useEffect } from 'react'

export default function Footer() {
  const [year, setYear] = useState('')
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    setYear(new Date().getFullYear().toString())
    const onScroll = () => setShowTop(window.scrollY > 600)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer>
      <div className="footer-wave">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,30 C360,60 720,0 1080,30 C1260,45 1350,30 1440,30 L1440,60 L0,60 Z" fill="var(--dark)"></path>
        </svg>
      </div>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>NAYITURIKI <span>Adolphe</span></h3>
            <p>
              Full-Stack Developer & System Designer building innovative digital
              solutions that empower communities and drive technological advancement.
            </p>
            <div className="footer-social">
              <a href="https://github.com/adolphenayituriki" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://www.instagram.com/adolphenayituriki/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="http://www.youtube.com/@Kiliziya-vibes" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#cv">Resume / CV</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact</h4>
            <ul>
              <li>
                <i className="fa-regular fa-envelope"></i>
                <a href="mailto:www.nayituriki.com@gmail.com">www.nayituriki.com@gmail.com</a>
              </li>
              <li>
                <i className="fa-solid fa-phone"></i>
                <a href="tel:+250780505948">+250 780 505 948</a>
              </li>
              <li>
                <i className="fa-solid fa-location-dot"></i>
                Kigali, Rwanda
              </li>
              <li>
                <i className="fa-solid fa-globe"></i>
                <a href="https://adolpheict.vercel.app" target="_blank" rel="noopener noreferrer">adolpheict.vercel.app</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <p>&copy; {year} Nayituriki Adolphe &mdash; Kigali, Rwanda. All rights reserved.</p>
        </div>
      </div>

      <button
        className={`back-to-top${showTop ? ' show' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <i className="fa-solid fa-arrow-up"></i>
      </button>
    </footer>
  )
}
