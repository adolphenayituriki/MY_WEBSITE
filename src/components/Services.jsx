import { useState } from 'react'

const services = [
  {
    id: 'web',
    title: 'Web Development & ICT Training',
    icon: 'fa-laptop-code',
    short: 'Build modern websites and web applications while providing comprehensive training in MS Office, Google Suites, Canva, Photoshop, and software programming fundamentals.',
    details: [
      'Modern, responsive websites tailored to your brand — from portfolios and business sites to full e-commerce platforms',
      'Technologies: HTML, CSS, JavaScript, Bootstrap, React, PHP, WordPress',
      'ICT Training: MS Office (Word, Excel, PowerPoint, Publisher, Access, Outlook), Google Suites (Docs, G-Mail, Forms, Sheets)',
      'Design tools: Canva (full training), Photoshop (Intermediate level)',
      'Programming fundamentals: HTML, CSS, JavaScript, PHP',
      'Fluent Touch typing training',
      'Recent projects: Kainafresh E-commerce, Rwanda ICT Chamber redesign, Umuganda Tracking System',
    ],
  },
  {
    id: 'system',
    title: 'System Design & Product Management',
    icon: 'fa-database',
    short: 'Design and develop systems for attendance tracking, community engagement, and reporting platforms with expertise in product lifecycle management.',
    details: [
      'Full-stack system design and development for business and community needs',
      'Attendance tracking and reporting platforms',
      'Community engagement and feedback systems',
      'Product lifecycle management from ideation to deployment',
      'Database design and API development',
      'Scalable architecture for growing organizations',
    ],
  },
  {
    id: 'digital',
    title: 'Digital Literacy & Innovation',
    icon: 'fa-headset',
    short: 'Teach digital skills including touch typing, video/photo editing, and online marketing while driving community-based digital projects and innovation.',
    details: [
      'Digital skills training for individuals and organizations',
      'Online Marketing: YouTube, TikTok, Facebook, Instagram — content strategy, audience growth, brand awareness',
      'Video Editing: CapCut, Wondershare Filmora',
      'Photo Editing: Photoshop (Intermediate), Canva',
      'Video shooting, editing, and production for brands or personal projects',
      'Community-based digital projects and innovation initiatives',
      'YouTube tutorial content creation',
    ],
  },
]

export default function Services() {
  const [modal, setModal] = useState(null)

  const openModal = (s) => setModal(s)
  const closeModal = () => setModal(null)

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
              <div className="service-card h-100" onClick={() => openModal(s)} style={{ cursor: 'pointer' }}>
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
        <div className="service-modal" onClick={closeModal}>
          <div className="service-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="service-modal-close" onClick={closeModal}>&times;</button>
            <div className="service-modal-header">
              <div className="service-modal-icon">
                <i className={`fas ${modal.icon}`}></i>
              </div>
              <h3>{modal.title}</h3>
            </div>
            <div className="service-modal-body">
              <ul>
                {modal.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
