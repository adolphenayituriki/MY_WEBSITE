export default function Projects() {
  const projects = [
    {
      img: '/images/Kainafresh E-commerce website.png',
      title: 'Kainafresh Ltd E-commerce website',
      desc: 'An E-commerce website for Kainafresh Ltd.',
      tags: ['WordPress', 'E-commerce'],
      liveUrl: 'https://kainafresh.rw',
    },
    {
      img: '/images/Digital tracking for health transparency .png',
      title: 'Digital Tracking for Health Transparency',
      desc: 'Report public service issues and track resolution status effectively.',
      tags: ['React', 'Node.js'],
      liveUrl: 'https://aidtransparency.netlify.app/',
      githubUrl: 'https://github.com/adolphenayituriki/Digital-Tracking-Solution-for-Health-Service-Transparency-System2-main',
    },
    {
      img: '/images/Rwanda ICT Chamber Website redesign.png',
      title: 'Rwanda ICT Chamber Website Redesign',
      desc: 'Rwanda ICT Chamber Website redesign project.',
      tags: ['WordPress', 'UI/UX'],
      liveUrl: 'https://ict.redp.rw/',
    },
    {
      img: '/images/umuganda.png',
      title: 'Umuganda Attendance Platform',
      desc: "Track citizens' community work attendance and fines automatically.",
      tags: ['PHP', 'MySQL', 'Bootstrap'],
      liveUrl: 'https://umuganda.netlify.app/html/citizendashbod%20copy',
      githubUrl: 'https://github.com/adolphenayituriki/umuganda_system',
    },
    {
      img: '/images/computer support.png',
      title: 'ICT Support Platform',
      desc: 'Help students learn computer skills, troubleshooting, and basic ICT concepts.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      liveUrl: 'https://umuganda.netlify.app/html/citizendashbod%20copy',
    },
    {
      img: '/images/umuganda.png',
      title: 'Citizen Engagement System',
      desc: 'A web system for citizens to report public service issues and track complaint status.',
      tags: ['PHP', 'MySQL'],
      liveUrl: 'https://adolphenayituriki.netlify.app/',
    },
  ]

  return (
    <section id="projects" className="text-center">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          Projects that showcase my skills in web development, system design, and creative solutions
        </p>
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
          {projects.map((p, i) => (
            <div className="col" key={i}>
              <div className="card h-100">
                <img src={p.img} className="card-img-top" alt={p.title} />
                <div className="card-body">
                  <h5 className="card-title">{p.title}</h5>
                  <p>{p.desc}</p>
                  <div className="project-tags">
                    {p.tags.map((tag, j) => (
                      <span className="project-tag" key={j}>{tag}</span>
                    ))}
                  </div>
                  <div className="project-actions">
                    <a
                      className="btn-project btn-project-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={p.liveUrl}
                    >
                      <i className="fa-solid fa-up-right-from-square"></i> Live
                    </a>
                    {p.githubUrl && (
                      <a
                        className="btn-project btn-project-outline"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={p.githubUrl}
                      >
                        <i className="fab fa-github"></i> Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
