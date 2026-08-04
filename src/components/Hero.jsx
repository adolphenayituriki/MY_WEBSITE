import { getData } from '../admin/dataStore.js'

const socialIcons = {
  github: 'fa-brands fa-github',
  linkedin: 'fa-brands fa-linkedin-in',
  twitter: 'fa-brands fa-x-twitter',
  facebook: 'fa-brands fa-facebook-f',
  instagram: 'fa-brands fa-instagram',
  youtube: 'fa-brands fa-youtube',
}

const reelImages = [
  '/garelly/DTP- Digital talent program National Hackthon 2025 at Maliott Hotel-Kigali.jpg',
  '/images/hero-reel-dts.jpg',
  '/images/hero-reel-hih.jpg',
  '/images/hero-bg.jpg',
]

export default function Hero() {
  const { hero, contact } = getData()
  const socials = Object.entries(socialIcons)
    .filter(([key]) => contact[key])
    .map(([key, icon]) => ({ key, icon, href: `https://${contact[key]}` }))

  const badgeIcons = ['fa-code', 'fa-diagram-project', 'fa-chalkboard-user', 'fa-lightbulb']

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
            <span className="hero-eyebrow"><i className="fa-solid fa-star"></i> Amazing</span>
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
          <div className="hero-visual">
            <div className="hero-reel" aria-hidden="true">
              {reelImages.map((src, i) => (
                <div key={i} className={`hero-reel-slide hero-reel-slide--${i + 1}`} style={{ backgroundImage: `url("${src}")` }}></div>
              ))}
              <div className="hero-reel-overlay"></div>
            </div>
            <div className="hero-reel-caption">
              <i className="fa-solid fa-chalkboard-user"></i>
              <span>Presentations &amp; Events</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
