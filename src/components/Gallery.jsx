import { useState, useRef, useEffect } from 'react'

const categories = ['All', 'Presentations', 'Events', 'Work']

const images = [
  {
    src: '/garelly/Rwanda ICT Chamber May 2026 MindSpace mental health project presentation at KLab for compreting 6 Month of professional internship as backend Developer.jpg',
    category: 'Presentations',
    caption: 'MindSpace mental health project presentation at KLab',
    description: 'Presenting the MindSpace mental health project at KLab, completing 6 months of professional internship as a backend developer with Rwanda ICT Chamber.',
  },
  {
    src: '/garelly/Rwanda ICT Chamber May 2026 MindSpace mental health project presentation at KLab for compreting 6 Month of professional internship as backend Developer (2).jpg',
    category: 'Presentations',
    caption: 'MindSpace presentation — group photo',
    description: 'Group photo after the MindSpace mental health project presentation at KLab, marking the completion of the internship program.',
  },
  {
    src: '/garelly/DTP- Digital talent program National Hackthon 2025 at Maliott Hotel-Kigali.jpg',
    category: 'Events',
    caption: 'DTP National Hackathon 2025',
    description: 'Participating in the Digital Talent Program National Hackathon 2025 at Marriott Hotel, Kigali — building innovative solutions.',
  },
  {
    src: '/garelly/DTP- Digital talent program National Hackthon 2025 at Maliott Hotel-Kigali (2).jpg',
    category: 'Events',
    caption: 'DTP National Hackathon — team collaboration',
    description: 'Collaborating with fellow participants during the DTP National Hackathon 2025 at Marriott Hotel, Kigali.',
  },
  {
    src: '/garelly/Rwanda ICT Chamber May 2026 MindSpace mental health project presentation at KLab for compreting 6 Month of professional internship as backend Developer.webp',
    category: 'Presentations',
    caption: 'MindSpace mental health project presentation at KLab',
    description: 'Presenting the MindSpace mental health project at KLab, completing 6 months of professional internship as a backend developer with Rwanda ICT Chamber.',
  },
  {
    src: '/garelly/HIH-Huye Innovation Hub _ Compreting the 1 week of braimstorming about health Tech solutions (Kura care presentation).jpg',
    category: 'Events',
    caption: 'HIH Huye Innovation Hub — health tech brainstorming',
    description: 'Participating in a week of brainstorming about health tech solutions at Huye Innovation Hub, featuring the Kura Care presentation.',
  },
  {
    src: '/garelly/DTS-Digital Technology Skills Pitching on Graduation Janualy 2026 as a facilitetor at University of Rwanda Huye Campus.jpg',
    category: 'Presentations',
    caption: 'DTS Digital Technology Skills pitching graduation',
    description: 'Serving as a facilitator at the DTS Digital Technology Skills pitching graduation ceremony at University of Rwanda, Huye Campus — January 2026.',
  },
  {
    src: '/garelly/work/Rwanda ICT Chamber Website redesign.png',
    category: 'Work',
    caption: 'Rwanda ICT Chamber website redesign',
    description: 'Redesigning the Rwanda ICT Chamber website to enhance user experience, modernize the interface, and better showcase the tech ecosystem.',
  },
  {
    src: '/garelly/work/Kainafresh E-commerce website.png',
    category: 'Work',
    caption: 'Kainafresh e-commerce website',
    description: 'Building an e-commerce platform for Kainafresh to enable seamless online ordering and delivery of fresh produce.',
  },
]

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [modal, setModal] = useState(null)
  const [paused, setPaused] = useState(false)
  const [activeDot, setActiveDot] = useState(0)
  const scrollRef = useRef(null)
  const intervalRef = useRef(null)

  const filtered = activeCategory === 'All'
    ? images
    : images.filter((img) => img.category === activeCategory)

  const scroll = (dir) => {
    if (scrollRef.current) {
      const item = scrollRef.current.querySelector('.gallery-carousel-item')
      const amount = item ? item.offsetWidth + 16 : scrollRef.current.clientWidth * 0.6
      scrollRef.current.scrollBy({ left: dir * amount, behavior: 'smooth' })
    }
  }

  const scrollToDot = (index) => {
    if (scrollRef.current) {
      const item = scrollRef.current.querySelector('.gallery-carousel-item')
      if (item) {
        const step = item.offsetWidth + 16
        scrollRef.current.scrollTo({ left: step * index, behavior: 'smooth' })
      }
    }
  }

  const openModal = (img) => setModal(img)
  const closeModal = () => setModal(null)

  useEffect(() => {
    const el = scrollRef.current
    if (!el || filtered.length === 0) return

    const advance = () => {
      const maxScroll = el.scrollWidth - el.clientWidth
      const item = el.querySelector('.gallery-carousel-item')
      const step = item ? item.offsetWidth + 16 : 296

      if (el.scrollLeft >= maxScroll - 10) {
        el.scrollTo({ left: 0, behavior: 'smooth' })
      } else {
        el.scrollBy({ left: step, behavior: 'smooth' })
      }
    }

    intervalRef.current = setInterval(advance, 3000)

    return () => clearInterval(intervalRef.current)
  }, [filtered.length, paused])

  useEffect(() => {
    if (paused && intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    } else if (!paused && !intervalRef.current && filtered.length > 0) {
      const el = scrollRef.current
      const advance = () => {
        if (!el) return
        const maxScroll = el.scrollWidth - el.clientWidth
        const item = el.querySelector('.gallery-carousel-item')
        const step = item ? item.offsetWidth + 16 : 296

        if (el.scrollLeft >= maxScroll - 10) {
          el.scrollTo({ left: 0, behavior: 'smooth' })
        } else {
          el.scrollBy({ left: step, behavior: 'smooth' })
        }
      }
      intervalRef.current = setInterval(advance, 3000)
    }
  }, [paused, filtered.length])

  useEffect(() => {
    const el = scrollRef.current
    if (!el || filtered.length === 0) return

    const onScroll = () => {
      const item = el.querySelector('.gallery-carousel-item')
      if (!item) return
      const step = item.offsetWidth + 16
      const index = Math.round(el.scrollLeft / step)
      setActiveDot(Math.min(index, filtered.length - 1))
    }

    el.addEventListener('scroll', onScroll)
    return () => el.removeEventListener('scroll', onScroll)
  }, [filtered.length])

  return (
    <section id="gallery" className="text-center">
      <div className="container">
        <h2 className="section-title">Gallery</h2>
        <p className="section-subtitle">
          Moments from presentations, events, and work
        </p>

        <div className="gallery-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`gallery-tab ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {filtered.length > 0 ? (
          <>
            <div
              className="gallery-carousel-wrapper"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              <button className="gallery-carousel-arrow left" onClick={() => scroll(-1)} aria-label="Previous">
                <i className="fas fa-chevron-left"></i>
              </button>
              <div className="gallery-carousel" ref={scrollRef}>
                {filtered.map((img, i) => (
                  <div className="gallery-carousel-item" key={i} onClick={() => openModal(img)}>
                    <img src={img.src} alt={img.caption} loading="lazy" />
                    <div className="gallery-carousel-overlay">
                      <span>{img.caption}</span>
                    </div>
                  </div>
                ))}
              </div>
              <button className="gallery-carousel-arrow right" onClick={() => scroll(1)} aria-label="Next">
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
            {filtered.length > 1 && (
              <div className="gallery-dots">
                {filtered.map((_, i) => (
                  <button
                    key={i}
                    className={`gallery-dot ${activeDot === i ? 'active' : ''}`}
                    onClick={() => scrollToDot(i)}
                    aria-label={`Go to image ${i + 1}`}
                  />
                ))}
              </div>
            )}
          </>
        ) : (
          <div className="gallery-empty">
            <i className="fas fa-images"></i>
            <p>No images yet. Add your photos to <code>public/garelly/</code> and update <code>src/components/Gallery.jsx</code>.</p>
          </div>
        )}
      </div>

      {modal && (
        <div className="gallery-modal" onClick={closeModal}>
          <div className="gallery-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="gallery-modal-close" onClick={closeModal}>&times;</button>
            <div className="gallery-modal-body">
              <div className="gallery-modal-img">
                <img src={modal.src} alt={modal.caption} />
              </div>
              <div className="gallery-modal-info">
                <span className="gallery-modal-badge">{modal.category}</span>
                <h3>{modal.caption}</h3>
                <p>{modal.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
