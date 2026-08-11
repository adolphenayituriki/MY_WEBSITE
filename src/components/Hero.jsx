import { useState, useEffect } from 'react'
import { getData } from '../admin/dataStore.js'

const socialIcons = {
  github: 'fa-brands fa-github',
  linkedin: 'fa-brands fa-linkedin-in',
  twitter: 'fa-brands fa-x-twitter',
  facebook: 'fa-brands fa-facebook-f',
  instagram: 'fa-brands fa-instagram',
  youtube: 'fa-brands fa-youtube',
}

const SLIDE_INTERVAL = 4500

const reelSlides = [
  {
    src: '/images/Frontiers Gen-AI Hackathon Rwanda 28 July 2026 banner.jpg',
    alt: 'Adolphe at the Frontiers Gen-AI Hackathon Rwanda, 28 July 2026',
    badge: 'Presentations & Events',
    icon: 'fa-chalkboard-user',
  },
  {
    src: '/images/Frontiers Gen-AI Hackathon Rwanda 28 July 2026 Pictured image 1.JPG',
    alt: 'A pictured moment from the Frontiers Gen-AI Hackathon Rwanda, 28 July 2026',
    badge: 'Presentations & Events',
    icon: 'fa-chalkboard-user',
  },
  {
    src: '/images/Frontiers Gen-AI Hackathon Rwanda 28 July 2026 banner Pictured Image 2.jpg',
    alt: 'A pictured moment from the Frontiers Gen-AI Hackathon Rwanda, 28 July 2026',
    badge: 'Presentations & Events',
    icon: 'fa-chalkboard-user',
  },
  {
    src: '/garelly/Rwanda ICT Chamber May 2026 MindSpace mental health project presentation at KLab for compreting 6 Month of professional internship as backend Developer.jpg',
    alt: 'Adolphe presenting the MindSpace mental health project at KLab, May 2026',
    badge: 'Presentations & Events',
    icon: 'fa-chalkboard-user',
  },
  {
    src: '/garelly/Rwanda ICT Chamber May 2026 MindSpace mental health project presentation at KLab for compreting 6 Month of professional internship as backend Developer (2).jpg',
    alt: 'Group photo after the MindSpace mental health project presentation at KLab',
    badge: 'Presentations & Events',
    icon: 'fa-chalkboard-user',
  },
  {
    src: '/garelly/Rwanda ICT Chamber May 2026 MindSpace mental health project presentation at KLab for compreting 6 Month of professional internship as backend Developer.webp',
    alt: 'Adolphe presenting the MindSpace mental health project at KLab, May 2026',
    badge: 'Presentations & Events',
    icon: 'fa-chalkboard-user',
  },
  {
    src: '/images/hero-reel-dts.jpg',
    alt: 'Adolphe facilitating Digital Technology Skills training at University of Rwanda Huye Campus',
    badge: 'ICT Training',
    icon: 'fa-chalkboard-teacher',
  },
  {
    src: '/garelly/DTS-Digital Technology Skills Pitching on Graduation Janualy 2026 as a facilitetor at University of Rwanda Huye Campus.jpg',
    alt: 'Adolphe facilitating the DTS pitching graduation at University of Rwanda Huye Campus',
    badge: 'ICT Training',
    icon: 'fa-chalkboard-teacher',
  },
  {
    src: '/images/hero-reel-hih.jpg',
    alt: 'Adolphe presenting KureCare health tech at HIH Huye Innovation Hub',
    badge: 'Digital Innovation',
    icon: 'fa-lightbulb',
  },
  {
    src: '/garelly/HIH-Huye Innovation Hub _ Compreting the 1 week of braimstorming about health Tech solutions (Kura care presentation).jpg',
    alt: 'Adolphe at the HIH Huye Innovation Hub health tech brainstorming week',
    badge: 'Digital Innovation',
    icon: 'fa-lightbulb',
  },
  {
    src: '/garelly/DTP- Digital talent program National Hackthon 2025 at Maliott Hotel-Kigali.jpg',
    alt: 'Adolphe at the DTP National Hackathon 2025 in Kigali',
    badge: 'Project Showcase',
    icon: 'fa-diagram-project',
  },
  {
    src: '/garelly/DTP- Digital talent program National Hackthon 2025 at Maliott Hotel-Kigali (2).jpg',
    alt: 'Adolphe collaborating with his team at the DTP National Hackathon 2025',
    badge: 'Project Showcase',
    icon: 'fa-diagram-project',
  },
]

const cardStarts = [0, 1, 2, 3]

function HeroCard({ start, slides, paused, onPause, onResume }) {
  const [idx, setIdx] = useState(start)
  const prevIdx = (idx - 1 + slides.length) % slides.length
  const active = slides[idx]

  useEffect(() => {
    if (paused) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => setIdx((i) => (i + 1) % slides.length), SLIDE_INTERVAL)
    return () => clearInterval(id)
  }, [paused])

  const cycle = (dir) => {
    setIdx((i) => (i + dir + slides.length) % slides.length)
  }

  const handleKey = (e) => {
    if (e.key === 'ArrowLeft') { e.preventDefault(); cycle(-1) }
    else if (e.key === 'ArrowRight') { e.preventDefault(); cycle(1) }
  }

  return (
    <div
      className={`hero-card ${paused ? 'is-paused' : ''}`}
      role="region"
      aria-roledescription="slide"
      aria-label={`${active.badge} photo`}
      tabIndex="0"
      onKeyDown={handleKey}
      onFocus={onPause}
      onBlur={onResume}
    >
      {[
        { key: idx, slide: active, active: true },
        { key: prevIdx, slide: slides[prevIdx], active: false },
      ].map(({ key, slide, active: isActive }) => (
        <div key={key} className={`hero-card-slide ${isActive ? 'is-active' : ''}`} aria-hidden={!isActive}>
          <img src={slide.src} alt={isActive ? slide.alt : ''} loading="lazy" decoding="async" />
        </div>
      ))}
      <div className="hero-card-label">
        <i className={`fa-solid ${active.icon}`}></i>
        <span>{active.badge}</span>
      </div>
      <div className="hero-card-progress">
        <span key={`${start}-${idx}`} className="hero-card-progress-fill"></span>
      </div>
      <span className="visually-hidden" aria-live="polite">Slide {idx + 1} of {slides.length}: {active.badge}</span>
    </div>
  )
}

export default function Hero() {
  const { hero, contact } = getData()
  const socials = Object.entries(socialIcons)
    .filter(([key]) => contact[key])
    .map(([key, icon]) => ({ key, icon, href: `https://${contact[key]}` }))

  const badgeIcons = ['fa-code', 'fa-diagram-project', 'fa-chalkboard-user', 'fa-lightbulb']

  const [paused, setPaused] = useState(false)
  const pause = () => setPaused(true)
  const resume = () => setPaused(false)

  return (
    <header id="home" className="hero position-relative">
      <div className="hero-bg">
        <img src={hero.bgImage} alt="" fetchPriority="high" />
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
        <div className="hero-split">
          <div className="hero-text">
            <span className="hero-eyebrow"><i className="fa-solid fa-location-dot"></i> Kigali, Rwanda</span>
            <h1>Nayituriki <span className="highlight">Adolphe</span></h1>
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
            <div className="hero-socials">
              {socials.map((s) => (
                <a key={s.key} href={s.href} target="_blank" rel="noopener noreferrer" className="hero-social" aria-label={s.key}>
                  <i className={s.icon}></i>
                </a>
              ))}
            </div>
          </div>
          <div className="hero-visual" onMouseEnter={pause} onMouseLeave={resume}>
            {cardStarts.map((start, i) => (
              <HeroCard key={i} start={start} slides={reelSlides} paused={paused} onPause={pause} onResume={resume} />
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
