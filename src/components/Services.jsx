import { useState } from 'react'
import { getData } from '../admin/dataStore.js'

export default function Services() {
  const { services } = getData()
  const [modal, setModal] = useState(null)

  return (
    <section id="services" className="text-center">
      <div className="container">
        <h2 className="section-title">Services</h2>
        <p className="section-subtitle">
          Here&rsquo;s what I can do for you to help your business or community thrive digitally
        </p>
        <div className="row mt-4 g-4">
          {services.map((s) => (
            <div className="col-md-4" key={s.id}>
              <div className="service-card h-100" onClick={() => setModal(s)} style={{ cursor: 'pointer' }}>
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
          <div className="service-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="service-modal-close" onClick={() => setModal(null)}>&times;</button>
            <div className="service-modal-header">
              <div className="service-modal-icon">
                <i className={`fas ${modal.icon}`}></i>
              </div>
              <h3>{modal.title}</h3>
            </div>
            <div className="service-modal-body">
              <ul>
                {modal.details.map((d, i) => <li key={i}>{d}</li>)}
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
