export default function CVSection() {
  return (
    <section id="cv" className="cv-section text-center">
      <div className="container">
        <h2 className="section-title">Resume / CV</h2>
        <p className="section-subtitle">
          Discover my experience, skills, and achievements in detail
        </p>

        <div className="cv-card">
          <img
            src="/images/Portrait of a Young Man.jpg"
            alt="Nayituriki Adolphe"
          />
          <h3>Nayituriki Adolphe</h3>
          <p className="cv-role">Full Stack Developer &bull; System Designer &bull; ICT Trainer</p>
          <p className="cv-desc">
            <i className="fa-solid fa-envelope" style={{ marginRight: 6 }}></i> www.nayituriki.com@gmail.com &nbsp;&nbsp;
            <i className="fa-solid fa-phone" style={{ marginRight: 6 }}></i> +250 780 505 948 &nbsp;&nbsp;
            <i className="fa-solid fa-location-dot" style={{ marginRight: 6 }}></i> Kigali, Rwanda
            <br />
            <i className="fa-solid fa-globe" style={{ marginRight: 6 }}></i> adolpheict.vercel.app &nbsp;&nbsp;
            <i className="fab fa-github" style={{ marginRight: 6 }}></i> github.com/adolphenayituriki
          </p>
          <div className="cv-actions">
            <a
              href="/files/NAYITURIKI_ADOLPHE_FlowCV_Resume_2026-05-18.pdf"
              target="_blank"
              className="btn-gradient"
            >
              <i className="fa-solid fa-eye"></i> View CV
            </a>
            <a
              href="/files/NAYITURIKI_ADOLPHE_FlowCV_Resume_2026-05-18.pdf"
              download
              className="btn-outline-light-custom"
              style={{ color: '#2563eb', borderColor: '#2563eb' }}
            >
              <i className="fa-solid fa-download"></i> Download PDF
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
