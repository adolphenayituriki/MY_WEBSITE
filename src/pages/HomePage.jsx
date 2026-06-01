import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import Services from '../components/Services.jsx'
import Projects from '../components/Projects.jsx'
import CVSection from '../components/CVSection.jsx'
import About from '../components/About.jsx'
import Skills from '../components/Skills.jsx'
import Certifications from '../components/Certifications.jsx'
import Gallery from '../components/Gallery.jsx'
import GetStartedSection from '../components/GetStartedSection.jsx'
import Contact from '../components/Contact.jsx'

export default function HomePage() {
  const location = useLocation()
  const mainRef = useRef(null)

  useEffect(() => {
    if (location.hash === '#contact') {
      const el = document.getElementById('contact')
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }, [location])

  return (
    <main ref={mainRef}>
      <Hero />
      <Services />
      <Projects />
      <CVSection />
      <About />
      <Skills />
      <Certifications />
      <Gallery />
      <GetStartedSection />
      <Contact />
    </main>
  )
}
