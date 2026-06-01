import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [collapsed, setCollapsed] = useState(true)
  const [active, setActive] = useState('home')
  const [dark, setDark] = useState(() => localStorage.getItem('theme') === 'dark')
  const [aboutOpen, setAboutOpen] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const sections = ['home', 'services', 'projects', 'cv', 'about', 'gallery', 'skills', 'certifications', 'get-started', 'contact']
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.getBoundingClientRect().top <= 120) {
          if (sections[i] === 'gallery') setActive('about')
          else setActive(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    setCollapsed(true)
    setAboutOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const links = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'cv', label: 'CV' },
  ]

  return (
    <nav className={`navbar navbar-expand-lg navbar-light custom-nav fixed-top${scrolled ? ' scrolled' : ''}`}>
      <div className="container">
        <a className="navbar-brand" href="#home" onClick={(e) => { e.preventDefault(); scrollTo('home') }}>
          <span className="brand-flag"><span></span><span></span><span></span></span>
          <span className="brand-text">
            <span className="brand-main">ADOLPHE <span>N<span className="brand-dot"><span></span><span></span><span></span></span></span></span>
            <span className="brand-sub">nayituriki</span>
          </span>
        </a>
        <div className="d-flex align-items-center gap-2">
          <button
            className="theme-toggle"
            onClick={() => setDark(!dark)}
            aria-label="Toggle theme"
            title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <i className={`fa-solid ${dark ? 'fa-sun' : 'fa-moon'}`}></i>
          </button>
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setCollapsed(!collapsed)}
            aria-controls="navbarNav"
            aria-expanded={!collapsed}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <span className="toggler-bar"></span>
            </span>
          </button>
        </div>
        <div className={`collapse navbar-collapse${!collapsed ? ' show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {links.map((link) => (
              <li className="nav-item" key={link.id}>
                <a
                  className={`nav-link${active === link.id ? ' active' : ''}`}
                  href={`#${link.id}`}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.id) }}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className={`nav-item dropdown${aboutOpen ? ' show' : ''}`}
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <a
                className={`nav-link dropdown-toggle${active === 'about' ? ' active' : ''}`}
                href="#about"
                onClick={(e) => { e.preventDefault(); setAboutOpen(!aboutOpen) }}
                id="aboutDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded={aboutOpen}
              >
                About
              </a>
              <ul className={`dropdown-menu${aboutOpen ? ' show' : ''}`} aria-labelledby="aboutDropdown">
                <li><a className="dropdown-item" href="#about" onClick={(e) => { e.preventDefault(); scrollTo('about') }}>About Me</a></li>
                <li><a className="dropdown-item" href="#gallery" onClick={(e) => { e.preventDefault(); scrollTo('gallery') }}>Gallery</a></li>
              </ul>
            </li>
            <li className="nav-item" key="skills">
              <a
                className={`nav-link${active === 'skills' ? ' active' : ''}`}
                href="#skills"
                onClick={(e) => { e.preventDefault(); scrollTo('skills') }}
              >
                Skills
              </a>
            </li>
            <li className="nav-item" key="certifications">
              <a
                className={`nav-link${active === 'certifications' ? ' active' : ''}`}
                href="#certifications"
                onClick={(e) => { e.preventDefault(); scrollTo('certifications') }}
              >
                Certifications
              </a>
            </li>
            <li className="nav-item" key="contact">
              <a
                className={`nav-link${active === 'contact' ? ' active' : ''}`}
                href="#contact"
                onClick={(e) => { e.preventDefault(); scrollTo('contact') }}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
