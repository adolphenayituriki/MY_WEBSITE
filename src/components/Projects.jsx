import { getData } from '../admin/dataStore.js'

export default function Projects() {
  const { projects } = getData()

  return (
    <section id="projects" className="text-center">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          Projects that showcase my skills in web development, system design, and creative solutions
        </p>
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
          {projects.map((p, i) => (
            <div className="col" key={p.id || i}>
              <div className="card h-100">
                <img src={p.img} className="card-img-top" alt={p.title} />
                <div className="card-body">
                  <h5 className="card-title">{p.title}</h5>
                  <p>{p.desc}</p>
                  <div className="project-tags">
                    {(p.tags || []).map((tag, j) => (
                      <span className="project-tag" key={j}>{tag}</span>
                    ))}
                  </div>
                  <div className="project-actions">
                    <a className="btn-project btn-project-primary" target="_blank" rel="noopener noreferrer" href={p.liveUrl}>
                      <i className="fa-solid fa-up-right-from-square"></i> Live
                    </a>
                    {p.githubUrl && (
                      <a className="btn-project btn-project-outline" target="_blank" rel="noopener noreferrer" href={p.githubUrl}>
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
