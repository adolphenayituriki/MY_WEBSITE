import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Hero from '../components/Hero.jsx'
import Services from '../components/Services.jsx'
import Projects from '../components/Projects.jsx'
import CVSection from '../components/CVSection.jsx'
import About from '../components/About.jsx'
import Skills from '../components/Skills.jsx'
import Certifications from '../components/Certifications.jsx'
import GetStartedSection from '../components/GetStartedSection.jsx'
import Contact from '../components/Contact.jsx'

gsap.registerPlugin(ScrollTrigger)

export default function HomePage() {
  const location = useLocation()
  const mainRef = useRef(null)

  useEffect(() => {
    if (location.hash === '#contact') {
      const el = document.getElementById('contact')
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }, [location])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = document.querySelectorAll('main > section')

      sections.forEach((section) => {
        const title = section.querySelector('.section-title')
        const subtitle = section.querySelector('.section-subtitle')
        const cards = section.querySelectorAll('.card, .service-card, .certificate-box, .skill-category, .cv-card, .contact-card')
        const cols = section.querySelectorAll('.row .col')

        if (title) {
          gsap.from(title, {
            opacity: 0,
            y: 30,
            duration: 0.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 95%',
              toggleActions: 'play none none none',
            },
          })
        }

        if (subtitle) {
          gsap.from(subtitle, {
            opacity: 0,
            y: 20,
            duration: 0.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 93%',
              toggleActions: 'play none none none',
            },
          })
        }

        if (cards.length) {
          gsap.from(cards, {
            opacity: 0,
            y: 30,
            duration: 0.5,
            stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 92%',
              toggleActions: 'play none none none',
            },
          })
        }

        if (cols.length && !cards.length) {
          gsap.from(cols, {
            opacity: 0,
            y: 30,
            duration: 0.5,
            stagger: 0.06,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 92%',
              toggleActions: 'play none none none',
            },
          })
        }
      })

      gsap.from('#about .about-img', {
        opacity: 0,
        x: -40,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '#about',
          start: 'top 92%',
          toggleActions: 'play none none none',
        },
      })

      gsap.from('.highlight-item', {
        opacity: 0,
        x: -20,
        duration: 0.4,
        stagger: 0.06,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '#about',
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
      })
    }, mainRef)

    return () => {
      ctx.revert()
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return (
    <main ref={mainRef}>
      <Hero />
      <Services />
      <Projects />
      <CVSection />
      <About />
      <Skills />
      <Certifications />
      <GetStartedSection />
      <Contact />
    </main>
  )
}
