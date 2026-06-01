import { useState } from 'react'
import { getData } from '../admin/dataStore.js'

export default function Certifications() {
  const { certifications: certs } = getData()
  const [modalSrc, setModalSrc] = useState(null)

  const openModal = (src) => {
    setModalSrc(src)
    const modal = new window.bootstrap.Modal(document.getElementById('certModal'))
    modal.show()
  }

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
                  <a href="#" onClick={(e) => { e.preventDefault(); openModal(c.viewUrl) }}>
                    <img src={c.img} alt={c.label} />
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

      <div className="modal fade" id="certModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Certificate</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body text-center">
              {modalSrc && <iframe src={modalSrc} title="Certificate" width="100%" height="500px" style={{ border: 'none' }} />}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
