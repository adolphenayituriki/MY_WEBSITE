import { useState, useRef, useEffect } from 'react'
import { getData } from '../admin/dataStore.js'
import { useModal } from '../lib/useModal.js'

const categories = ['All', 'Presentations', 'Events', 'Work']

function flattenGallery(gallery) {
  const result = []
  Object.entries(gallery).forEach(([cat, items]) => {
    items.forEach((item) => {
      const category = cat.charAt(0).toUpperCase() + cat.slice(1)
      result.push({ ...item, category })
    })
  })
  return result
}

export default function Gallery() {
  const { gallery: galleryData } = getData()
  const images = flattenGallery(galleryData)
  const [activeCategory, setActiveCategory] = useState('All')
  const [modal, setModal] = useState(null)
  const [paused, setPaused] = useState(false)
  const [activeDot, setActiveDot] = useState(0)
  const [indicator, setIndicator] = useState({ left: 0, width: 0 })
  const scrollRef = useRef(null)
  const intervalRef = useRef(null)
  const tabRefs = useRef([])
  const { dialogProps } = useModal(!!modal, () => setModal(null), modal?.caption)

  const filtered = activeCategory === 'All' ? images : images.filter((img) => img.category === activeCategory)

  const updateIndicator = () => {
    const idx = categories.indexOf(activeCategory)
    const el = tabRefs.current[idx]
    if (el) setIndicator({ left: el.offsetLeft, width: el.offsetWidth })
  }

  useEffect(() => {
    updateIndicator()
    window.addEventListener('resize', updateIndicator)
    return () => window.removeEventListener('resize', updateIndicator)
  }, [activeCategory])

  const handleItemKey = (e, img) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setModal(img)
    }
  }

  const handleCarouselKey = (e) => {
    if (e.key === 'ArrowLeft') scroll(-1)
    else if (e.key === 'ArrowRight') scroll(1)
  }

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

  useEffect(() => {
    const el = scrollRef.current
    if (!el || filtered.length === 0) return
    const advance = () => {
      const maxScroll = el.scrollWidth - el.clientWidth
      const item = el.querySelector('.gallery-carousel-item')
      const step = item ? item.offsetWidth + 16 : 296
      if (el.scrollLeft >= maxScroll - 10) el.scrollTo({ left: 0, behavior: 'smooth' })
      else el.scrollBy({ left: step, behavior: 'smooth' })
    }
    intervalRef.current = setInterval(advance, 3000)
    return () => clearInterval(intervalRef.current)
  }, [filtered.length, paused])

  useEffect(() => {
    if (paused && intervalRef.current) { clearInterval(intervalRef.current); intervalRef.current = null }
    else if (!paused && !intervalRef.current && filtered.length > 0) {
      const el = scrollRef.current
      const advance = () => {
        if (!el) return
        const maxScroll = el.scrollWidth - el.clientWidth
        const item = el.querySelector('.gallery-carousel-item')
        const step = item ? item.offsetWidth + 16 : 296
        if (el.scrollLeft >= maxScroll - 10) el.scrollTo({ left: 0, behavior: 'smooth' })
        else el.scrollBy({ left: step, behavior: 'smooth' })
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
      setActiveDot(Math.min(Math.round(el.scrollLeft / step), filtered.length - 1))
    }
    el.addEventListener('scroll', onScroll)
    return () => el.removeEventListener('scroll', onScroll)
  }, [filtered.length])

  return (
    <section id="gallery" className="text-center">
      <div className="container">
        <h2 className="section-title">Gallery</h2>
        <p className="section-subtitle">Moments from presentations, events, and work</p>
        <div className="gallery-tabs" role="tablist" aria-label="Gallery filter">
          <span className="gallery-tab-indicator" style={{ transform: `translateX(${indicator.left}px)`, width: `${indicator.width}px` }} />
          {categories.map((cat, i) => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeCategory === cat}
              ref={(el) => { tabRefs.current[i] = el }}
              className={`gallery-tab ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        {filtered.length > 0 ? (
          <>
            <div className="gallery-carousel-wrapper" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
              <button className="gallery-carousel-arrow left" onClick={() => scroll(-1)} aria-label="Previous"><i className="fas fa-chevron-left"></i></button>
              <div className="gallery-carousel" ref={scrollRef} tabIndex="0" aria-label="Gallery carousel" onKeyDown={handleCarouselKey}>
                {filtered.map((img, i) => (
                  <div className="gallery-carousel-item" key={i} role="button" tabIndex="0" aria-label={`View ${img.caption}`} onClick={() => setModal(img)} onKeyDown={(e) => handleItemKey(e, img)}>
                    <img src={img.src} alt={img.caption} loading="lazy" decoding="async" />
                    <div className="gallery-carousel-overlay"><span>{img.caption}</span></div>
                  </div>
                ))}
              </div>
              <button className="gallery-carousel-arrow right" onClick={() => scroll(1)} aria-label="Next"><i className="fas fa-chevron-right"></i></button>
            </div>
            {filtered.length > 1 && (
              <div className="gallery-dots">
                {filtered.map((_, i) => (
                  <button key={i} className={`gallery-dot ${activeDot === i ? 'active' : ''}`} onClick={() => scrollToDot(i)} aria-label={`Go to image ${i + 1}`} />
                ))}
              </div>
            )}
          </>
        ) : (
          <div className="gallery-empty">
            <i className="fas fa-images"></i>
            <p>No images yet. Add your photos to <code>public/garelly/</code>.</p>
          </div>
        )}
      </div>
      {modal && (
        <div className="gallery-modal" onClick={() => setModal(null)}>
          <div className="gallery-modal-content" {...dialogProps} onClick={(e) => e.stopPropagation()}>
            <button className="gallery-modal-close" onClick={() => setModal(null)} aria-label="Close">&times;</button>
            <div className="gallery-modal-body">
              <div className="gallery-modal-img"><img src={modal.src} alt={modal.caption} /></div>
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
