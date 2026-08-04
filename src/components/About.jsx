import { getData } from '../admin/dataStore.js'

const iconMap = {
  'Full Stack Development': 'fa-code',
  'System Design': 'fa-network-wired',
  'ICT Training': 'fa-chalkboard-teacher',
  'Digital Innovation': 'fa-lightbulb',
  'Product Management': 'fa-chart-line',
  'Multimedia': 'fa-video',
}

export default function About() {
  const { about } = getData()

  return (
    <section id="about">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-md-5 text-center">
            <div className="about-img-wrap">
              <img
                src={about.image}
                alt="Nayituriki Adolphe"
                className="about-img"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
          <div className="col-md-7">
            <h2 className="section-title" style={{ marginBottom: '8px' }}>About Me</h2>
            <p className="about-name">{about.name}</p>
            {about.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            <div className="highlight-list">
              {about.highlights.map((h, i) => (
                <div className="highlight-item" key={i}>
                  <i className={`fas ${iconMap[h] || 'fa-star'}`}></i> {h}
                </div>
              ))}
            </div>
            <a href={`mailto:${about.email}`} className="btn-accent">
              <i className="fa-solid fa-paper-plane"></i> Let&rsquo;s Connect
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
