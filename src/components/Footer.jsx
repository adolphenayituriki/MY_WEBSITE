import { useState, useEffect } from 'react'
import { getData } from '../admin/dataStore.js'

const socialIcons = {
  github: 'fab fa-github',
  linkedin: 'fab fa-linkedin-in',
  twitter: 'fab fa-x-twitter',
  facebook: 'fab fa-facebook-f',
  instagram: 'fab fa-instagram',
  youtube: 'fab fa-youtube',
}

export default function Footer() {
  const [year, setYear] = useState('')
  const { contact } = getData()
  const socials = Object.entries(socialIcons)
    .filter(([key]) => contact[key])
    .map(([key, icon]) => ({ key, icon, href: `https://${contact[key]}` }))

  useEffect(() => {
    setYear(new Date().getFullYear().toString())
  }, [])

  return (
    <footer>
      <div className="footer-wave">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ width: '100%', height: '60px', display: 'block' }}>
          <defs>
            <clipPath id="waveClip">
              <path d="M0,30 C360,60 720,0 1080,30 C1260,45 1350,30 1440,30 L1440,60 L0,60 Z"></path>
            </clipPath>
          </defs>
          <image href="/images/hero-bg.jpg" clip-path="url(#waveClip)" width="1440" height="60" preserveAspectRatio="xMidYMid slice" />
          <path d="M0,30 C360,60 720,0 1080,30 C1260,45 1350,30 1440,30 L1440,60 L0,60 Z" fill="#ffffff" opacity="0.15"></path>
        </svg>
      </div>
      <div className="container">
        <div className="footer-cta">
          <h3>Let&apos;s build something <span>amazing</span></h3>
          <p>
            Have a project in mind, need a website or system, or want to collaborate? I&apos;m always
            open to new ideas and opportunities.
          </p>
          <div className="footer-cta-actions">
            <a href="#contact" className="footer-cta-btn footer-cta-btn-primary">
              <i className="fa-solid fa-paper-plane"></i> Get In Touch
            </a>
            <a href="#projects" className="footer-cta-btn footer-cta-btn-ghost">
              <i className="fa-solid fa-arrow-up-right-from-square"></i> View Projects
            </a>
          </div>
          <span className="footer-cta-accent"></span>
        </div>
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>NAYITURIKI <span>Adolphe</span></h3>
            <p>Full-Stack Developer & System Designer building innovative digital solutions that empower communities and drive technological advancement.</p>
            <div className="footer-social">
              {socials.map((s) => (
                <a key={s.key} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.key}>
                  <i className={s.icon}></i>
                </a>
              ))}
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
              <li><i className="fa-regular fa-envelope"></i><a href={`mailto:${contact.email}`}>{contact.email}</a></li>
              <li><i className="fa-solid fa-phone"></i><a href={`tel:${contact.phone.replace(/\s/g, '')}`}>{contact.phone}</a></li>
              <li><i className="fa-solid fa-location-dot"></i>{contact.location}</li>
              <li><i className="fa-solid fa-globe"></i><a href={`https://${contact.website}`} target="_blank" rel="noopener noreferrer">{contact.website}</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <p>&copy; {year} Nayituriki Adolphe &mdash; Kigali, Rwanda. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
