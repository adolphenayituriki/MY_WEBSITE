import { useState } from 'react'

const certs = [
  {
    img: '/images/40-alx-aice-ai-career-essentials-certificate-adolphe-nayituriki (1).png',
    viewUrl: '/files/40-alx-aice-ai-career-essentials-certificate-adolphe-nayituriki (1).pdf',
    downloadUrl: '/files/40-alx-aice-ai-career-essentials-certificate-adolphe-nayituriki (1).pdf',
    label: 'ALX Rwanda ACiE Certificate',
  },
  {
    img: '/images/DTP Product Management Begener certificate.png',
    viewUrl: '/files/DTP Product Management Begener certificate.pdf',
    downloadUrl: '/files/DTP Product Management Begener certificate.pdf',
    label: 'DTP Product Management Beginner',
  },
  {
    img: '/images/DTP Product Management Intermediate certificate.png',
    viewUrl: '/files/DTP Product Management Intermediate certificate.pdf',
    downloadUrl: '/files/DTP Product Management Intermediate certificate.pdf',
    label: 'DTP Product Management Intermediate',
  },
  {
    img: '/images/DTP Product Management Advanced certificate.png',
    viewUrl: '/files/DTP Product Management Advanced certificate.pdf',
    downloadUrl: '/files/DTP Product Management Advanced certificate.pdf',
    label: 'DTP Product Management Advanced',
  },
]

export default function Certifications() {
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
            <div className="col" key={i}>
              <div className="certificate-box">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    openModal(c.viewUrl)
                  }}
                >
                  <img src={c.img} alt={c.label} />
                </a>
                <div className="cert-body">
                  <p>{c.label}</p>
                  <div className="cert-actions">
                    <a
                      href={c.viewUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-sm-outline"
                    >
                      View
                    </a>
                    <a href={c.downloadUrl} download className="btn-sm-solid">
                      Download
                    </a>
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
              {modalSrc && (
                <iframe
                  src={modalSrc}
                  title="Certificate"
                  width="100%"
                  height="500px"
                  style={{ border: 'none' }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
