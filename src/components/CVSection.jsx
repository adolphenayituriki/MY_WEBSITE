import { useState } from 'react'
import { getData } from '../admin/dataStore.js'

export default function CVSection() {
  const { cv } = getData()
  const [showModal, setShowModal] = useState(false)

  return (
    <section id="cv" className="cv-section text-center">
      <div className="container">
        <h2 className="section-title">Resume / CV</h2>
        <p className="section-subtitle">
          Discover my experience, skills, and achievements in detail
        </p>
        <div className="cv-card">
          <img src={cv.image} alt={cv.name} />
          <h3>{cv.name}</h3>
          <p className="cv-role">{cv.role}</p>
          <p className="cv-desc">
            <i className="fa-solid fa-envelope" style={{ marginRight: 6 }}></i> {cv.contact.email} &nbsp;&nbsp;
            <i className="fa-solid fa-phone" style={{ marginRight: 6 }}></i> {cv.contact.phone} &nbsp;&nbsp;
            <i className="fa-solid fa-location-dot" style={{ marginRight: 6 }}></i> {cv.contact.location}
            <br />
            <i className="fa-solid fa-globe" style={{ marginRight: 6 }}></i> {cv.contact.website} &nbsp;&nbsp;
            <i className="fab fa-github" style={{ marginRight: 6 }}></i> {cv.contact.github}
          </p>
          <div className="cv-actions">
            <button className="btn-gradient" onClick={() => setShowModal(true)} style={{ border: 'none', cursor: 'pointer' }}>
              <i className="fa-solid fa-file-lines"></i> Full CV
            </button>
            <a href={cv.pdfUrl} target="_blank" className="btn-outline-light-custom" style={{ color: '#2563eb', borderColor: '#2563eb' }}>
              <i className="fa-solid fa-eye"></i> View PDF
            </a>
            <a href={cv.pdfUrl} download className="btn-outline-light-custom" style={{ color: '#2563eb', borderColor: '#2563eb' }}>
              <i className="fa-solid fa-download"></i> Download
            </a>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="cv-modal-overlay" onClick={() => setShowModal(false)}>
          <div className="cv-modal" onClick={(e) => e.stopPropagation()}>
            <button className="cv-modal-close" onClick={() => setShowModal(false)}>&times;</button>
            <div className="cv-modal-header">
              <img src={cv.image} alt={cv.name} />
              <div>
                <h3>{cv.name}</h3>
                <p>{cv.role}</p>
                <p className="cv-modal-contact">
                  {cv.contact.email} &nbsp;|&nbsp; {cv.contact.phone} &nbsp;|&nbsp; {cv.contact.location}<br/>
                  {cv.contact.website} &nbsp;|&nbsp; {cv.contact.github}
                </p>
              </div>
            </div>
            <div className="cv-modal-body">
              <div className="cv-modal-section">
                <h4><i className="fa-solid fa-circle-info"></i> Personal Statement</h4>
                <p>A highly motivated student at the University of Rwanda, pursuing a Bachelor's in Business Information Technology (BIT Level 3). I'm passionate about using technology and innovation to solve real-world problems and create digital solutions that make life easier. Skilled in web development, Microsoft Offices, Google Tools, Graphic design and teamwork, I bring creativity, discipline, and a results-driven mindset to every project I take on. My goal is to grow into a leading professional who bridges technology with impact.</p>
              </div>
              <div className="cv-modal-section">
                <h4><i className="fa-solid fa-briefcase"></i> Experience</h4>
                <div className="cv-modal-item">
                  <div className="cv-modal-item-header"><strong>Backend Developer</strong><span>12/2025 – 06/2026 &middot; Kigali</span></div>
                  <p className="cv-modal-item-sub">Rwanda ICT Chamber — Backend Development Intern</p>
                  <ul>
                    <li>System Architecture &amp; Database Management (SQL, NoSQL design and optimization)</li>
                    <li>API Development &amp; Integration (RESTful APIs, GraphQL, third-party services, payment gateways)</li>
                    <li>Security protocols, authentication (OAuth, JWT), and authorization mechanisms</li>
                    <li>Unit tests and integration tests for code quality and system reliability</li>
                    <li>CI/CD pipeline setup and production environment maintenance</li>
                    <li>Technical documentation (API specs, database structures, design decisions)</li>
                    <li>Training and knowledge sharing with beneficiaries</li>
                    <li>Customer support and feedback management</li>
                  </ul>
                </div>
                <div className="cv-modal-item">
                  <div className="cv-modal-item-header"><strong>ICT Trainer</strong><span>10/2025 – 01/2026 &middot; Huye</span></div>
                  <p className="cv-modal-item-sub">Teaching MS Offices, Google Suites, Fluent Touch typing, Photoshop (Intermediate), Full Canva design, and Software Programming fundamentals</p>
                </div>
              </div>
              <div className="cv-modal-section">
                <h4><i className="fa-solid fa-graduation-cap"></i> Education</h4>
                <div className="cv-modal-item">
                  <div className="cv-modal-item-header"><strong>Bachelor in Business Information Technology</strong><span>Expected 10/2027</span></div>
                  <p className="cv-modal-item-sub">University of Rwanda</p>
                </div>
                <div className="cv-modal-item">
                  <div className="cv-modal-item-header"><strong>Advanced Diploma (A2)</strong><span>2019 – 2022</span></div>
                  <p className="cv-modal-item-sub">G.S N.D.B.C KINYABABA &mdash; GPA: 57/60 &mdash; Mathematics, Economics &amp; Geography</p>
                </div>
              </div>
              <div className="cv-modal-section">
                <h4><i className="fa-solid fa-code"></i> Skills</h4>
                <div className="cv-modal-skills">
                  <span><strong>Web:</strong> HTML, Bootstrap, CSS, JavaScript, React, Node.js, PHP, WordPress</span>
                  <span><strong>Product Management:</strong> Idea generation, market research, product design, launch, performance tracking</span>
                  <span><strong>Multimedia:</strong> CapCut, Wondershare Filmora, Photoshop, Canva</span>
                  <span><strong>Computer:</strong> MS Offices, Google Suites, Fluent Touch typer</span>
                  <span><strong>Online Marketing:</strong> YouTube, TikTok, Facebook, Instagram</span>
                  <span><strong>Teaching:</strong> All above computer skills, training and mentoring</span>
                </div>
              </div>
              <div className="cv-modal-section">
                <h4><i className="fa-solid fa-trophy"></i> Awards &amp; Certificates</h4>
                <div className="cv-modal-item">
                  <div className="cv-modal-item-header"><strong>DTP Hackathon 2025</strong><span>05/09/2025</span></div>
                  <p className="cv-modal-item-sub">Kigali-Marriott — Awarded for IT excellence with real-world software solutions</p>
                </div>
                <div className="cv-modal-item">
                  <div className="cv-modal-item-header"><strong>DTS Trainer</strong><span>04/10/2025</span></div>
                  <p className="cv-modal-item-sub">Huye Campus — Trained students in MS Offices, Google Suites, Canva, Photoshop</p>
                </div>
                <div className="cv-modal-item">
                  <div className="cv-modal-item-header"><strong>Product Management (Basic, Intermediate &amp; Advanced)</strong><span>14/05/2025</span></div>
                  <p className="cv-modal-item-sub">ICT Chamber &amp; His Towers Course — DTP Program</p>
                </div>
                <div className="cv-modal-item">
                  <div className="cv-modal-item-header"><strong>AI Career Essentials (AICE)</strong><span>22/05/2024</span></div>
                  <p className="cv-modal-item-sub">ALX Rwanda — AI Augmented Professional Development Skills</p>
                </div>
              </div>
              <div className="cv-modal-section">
                <h4><i className="fa-solid fa-diagram-project"></i> Projects</h4>
                <div className="cv-modal-item">
                  <div className="cv-modal-item-header"><strong>Kaina Fresh LTD Website</strong><span>02/2026 – 04/2026</span></div>
                  <p className="cv-modal-item-sub">E-commerce website for browsing products and placing orders — <a href="https://kainafresh.rw" target="_blank" rel="noopener noreferrer">kainafresh.rw</a></p>
                </div>
                <div className="cv-modal-item">
                  <div className="cv-modal-item-header"><strong>Rwandan Citizens Engagement System</strong></div>
                  <p className="cv-modal-item-sub">Complaint submission and feedback system with local authority response</p>
                </div>
                <div className="cv-modal-item">
                  <div className="cv-modal-item-header"><strong>Umuganda Tracking System</strong></div>
                  <p className="cv-modal-item-sub">Attendance &amp; fines tracking with notification system and payment integration — <a href="https://umuganda.netlify.app/" target="_blank" rel="noopener noreferrer">umuganda.netlify.app</a></p>
                </div>
              </div>
              <div className="cv-modal-section">
                <h4><i className="fa-solid fa-language"></i> Languages</h4>
                <p><strong>English</strong> — Fluent &nbsp;|&nbsp; <strong>French</strong> — Basic &nbsp;|&nbsp; <strong>Kinyarwanda</strong> — Native</p>
              </div>
              <div className="cv-modal-section">
                <h4><i className="fa-solid fa-heart"></i> Interests</h4>
                <p>Video &amp; Photo Editing, designing banners and flyers, YouTube tutoring, playing piano and guitar</p>
              </div>
              <div className="cv-modal-section">
                <h4><i className="fa-solid fa-address-book"></i> References</h4>
                <p><strong>Nyiransengimana Clementine</strong> — Teacher of ICT, G.S N.D.B.C KINYABABA — +250 724 728 747</p>
                <p><strong>Niyitegeka Valens</strong> — Employee, Equity Bank Kinyinya/Batsinda — +250 781 548 206</p>
                <p><strong>Niyonzima Jean Deudieu</strong> — Teacher of Entrepreneurship, G.S N.D.B.C KINYABABA — +250 783 877 449</p>
              </div>
              <p className="cv-modal-declaration">I hereby declare that the information provided in this CV is true and correct to the best of my knowledge and belief. I take full responsibility for the accuracy and authenticity of the details mentioned above.<br/><em>— Nayituriki Adolphe, Butare, 29 October 2025</em></p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
