import { useRef } from 'react'
import { getData } from '../admin/dataStore.js'

export default function Hero() {
  const heroRef = useRef(null)
  const { hero } = getData()

  const badgeIcons = ['fa-code', 'fa-diagram-project', 'fa-chalkboard-user', 'fa-lightbulb']

  return (
    <header id="home" className="hero position-relative" ref={heroRef}>
      <div className="hero-bg">
        <img src={hero.bgImage} alt="" />
        <div className="hero-bg-overlay"></div>
      </div>
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
        <p className="hero-tagline">{hero.tagline}</p>
        <div className="hero-grid-badges">
          {hero.badges.map((badge, i) => (
            <div className="hero-grid-item" key={i}>
              <div className="hero-grid-icon"><i className={`fa-solid ${badgeIcons[i] || 'fa-star'}`}></i></div>
              <span>{badge}</span>
            </div>
          ))}
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
