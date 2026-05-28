import { useRef } from 'react'

export default function Hero() {
  const heroRef = useRef(null)

  return (
    <header id="home" className="hero position-relative" ref={heroRef}>
      <div className="hero-grid"></div>
      <div className="hero-floats">
        <div className="hero-float hero-float--1"></div>
        <div className="hero-float hero-float--2"></div>
        <div className="hero-float hero-float--3"></div>
        <div className="hero-float hero-float--4"></div>
        <div className="hero-float hero-float--5"></div>
      </div>
      <div className="hero-content container">
        <div className="hero-img-wrapper">
          <div className="hero-img-ring"></div>
          <img
            src="/images/Portrait of a Young Man.jpg"
            alt="Nayituriki Adolphe"
            className="hero-img"
          />
        </div>
        <p className="hero-tagline">Turning Ideas Into Digital Reality</p>
        <div className="hero-grid-badges">
          <div className="hero-grid-item">
            <div className="hero-grid-icon"><i className="fa-solid fa-code"></i></div>
            <span>Full-Stack Developer</span>
          </div>
          <div className="hero-grid-item">
            <div className="hero-grid-icon"><i className="fa-solid fa-diagram-project"></i></div>
            <span>System Designer</span>
          </div>
          <div className="hero-grid-item">
            <div className="hero-grid-icon"><i className="fa-solid fa-chalkboard-user"></i></div>
            <span>ICT Trainer</span>
          </div>
          <div className="hero-grid-item">
            <div className="hero-grid-icon"><i className="fa-solid fa-lightbulb"></i></div>
            <span>Digital Innovator</span>
          </div>
        </div>
        <div className="hero-actions">
          <a href="#projects" className="btn-hero btn-hero-primary">
            <i className="fa-solid fa-rocket"></i> Explore My Work
          </a>
          <a href="#cv" className="btn-hero btn-hero-secondary">
            <i className="fa-solid fa-download"></i> Resume / CV
          </a>
          <a href="#contact" className="btn-hero btn-hero-accent">
            <i className="fa-solid fa-envelope"></i> Get In Touch
          </a>
        </div>
      </div>
    </header>
  )
}
