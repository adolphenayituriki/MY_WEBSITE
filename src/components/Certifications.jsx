import { useState } from 'react'
import { getData } from '../admin/dataStore.js'
import { useModal } from '../lib/useModal.js'

export default function Certifications() {
  const { certifications: certs } = getData()
  const [modalSrc, setModalSrc] = useState(null)
  const { dialogProps } = useModal(!!modalSrc, () => setModalSrc(null), 'Certificate preview')

  return (
    <section id="certifications" className="text-center">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        <p className="section-subtitle">Professional certifications I&rsquo;ve earned</p>
        <div className="row row-cols-1 row-cols-md-4 g-4 mt-3">
          {certs.map((c, i) => (
            <div className="col" key={c.id || i}>
              <div className="certificate-box">
                {c.img ? (
                  <a href="#" onClick={(e) => { e.preventDefault(); setModalSrc(c.viewUrl) }}>
                    <img src={c.img} alt={c.label} loading="lazy" decoding="async" />
                  </a>
                ) : (
                  <div className="cert-placeholder">
                    <i className="fas fa-image"></i>
                    <span>Image pending</span>
                  </div>
                )}
                <div className="cert-body">
                  <p>{c.label}</p>
                  <div className="cert-actions">
                    <a href={c.viewUrl} target="_blank" rel="noopener noreferrer" className="btn-sm-outline">View</a>
                    <a href={c.downloadUrl || c.viewUrl} download className="btn-sm-solid">Download</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {modalSrc && (
        <div className="cert-modal" onClick={() => setModalSrc(null)}>
          <div className="cert-modal-content" {...dialogProps} onClick={(e) => e.stopPropagation()}>
            <button className="cert-modal-close" onClick={() => setModalSrc(null)} aria-label="Close">&times;</button>
            <div className="cert-modal-body">
              <iframe src={modalSrc} title="Certificate" width="100%" height="600px" style={{ border: 'none' }} />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
