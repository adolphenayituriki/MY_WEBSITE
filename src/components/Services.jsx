import { useState } from 'react'
import { getData } from '../admin/dataStore.js'
import { useModal } from '../lib/useModal.js'

export default function Services() {
  const { services, about } = getData()
  const [modal, setModal] = useState(null)
  const { dialogProps } = useModal(!!modal, () => setModal(null), modal?.title)

  return (
    <section id="services" className="text-center">
      <div className="container">
        <h2 className="section-title">Services</h2>
        <p className="section-subtitle">
          Here&rsquo;s what I can do for you to help your business or community thrive digitally
        </p>
        <div className="row mt-4 g-4">
          {services.map((s, i) => (
            <div className="col-md-4" key={s.id}>
              <div
                className="service-card h-100"
                onClick={() => setModal({ ...s, num: i + 1 })}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setModal({ ...s, num: i + 1 })
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label={`Learn more about ${s.title}`}
                style={{ cursor: 'pointer' }}
              >
                <span className="service-num">{String(i + 1).padStart(2, '0')}</span>
                <div className="icon-box">
                  <i className={`fas ${s.icon}`}></i>
                </div>
                <h5>{s.title}</h5>
                <p>{s.short}</p>
                <div className="service-card-footer">
                  <span className="service-learn-more">
                    Learn more <i className="fas fa-arrow-right"></i>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {modal && (
        <div className="service-modal" onClick={() => setModal(null)}>
          <div className="service-modal-content" {...dialogProps} onClick={(e) => e.stopPropagation()}>
            <button className="service-modal-close" onClick={() => setModal(null)} aria-label="Close">&times;</button>
            <div className="service-modal-header">
              <span className="service-modal-eyebrow">Service {String(modal.num).padStart(2, '0')}</span>
              <div className="service-modal-title">
                <i className={`fas ${modal.icon}`}></i>
                <h3>{modal.title}</h3>
              </div>
            </div>
            <div className="service-modal-body">
              <ul>
                {modal.details.map((d, i) => <li key={i}>{d}</li>)}
              </ul>
            </div>
            <div className="service-modal-footer">
              <a className="btn-accent" href={`mailto:${about.email}`}>
                <i className="fa-solid fa-paper-plane"></i> Let&rsquo;s Work Together
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
