import { useState } from 'react'
import { getData } from '../admin/dataStore.js'

const tagColors = [
  { background: 'rgba(var(--primary-rgb),0.08)', color: 'var(--primary)' },
  { background: 'rgba(var(--primary-rgb),0.08)', color: 'var(--primary)' },
  { background: 'rgba(var(--primary-rgb),0.08)', color: 'var(--primary)' },
  { background: 'rgba(var(--primary-rgb),0.08)', color: 'var(--primary)' },
  { background: 'rgba(var(--primary-rgb),0.08)', color: 'var(--primary)' },
  { background: 'rgba(var(--primary-rgb),0.08)', color: 'var(--primary)' },
]

export default function Projects() {
  const { projects } = getData()
  const [activeCategory, setActiveCategory] = useState('All')
  const [sortBy, setSortBy] = useState('default')

  let filtered = activeCategory === 'All'
    ? [...projects]
    : projects.filter((p) => (p.category || 'Web Apps') === activeCategory)

  if (sortBy === 'az') {
    filtered.sort((a, b) => a.title.localeCompare(b.title))
  } else if (sortBy === 'za') {
    filtered.sort((a, b) => b.title.localeCompare(a.title))
  }

  return (
    <section id="projects" className="text-center">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          Projects that showcase my skills in web development, system design, and creative solutions
        </p>
        <div className="projects-toolbar">
          <div className="projects-toolbar-item">
            <label htmlFor="project-category"><i className="fa-solid fa-layer-group"></i> Category</label>
            <select id="project-category" value={activeCategory} onChange={(e) => setActiveCategory(e.target.value)}>
              <option value="All">All Projects</option>
              <option value="Websites">Websites</option>
              <option value="Web Apps">Web Apps</option>
              <option value="Systems">Systems</option>
            </select>
          </div>
          <div className="projects-toolbar-item">
            <label htmlFor="project-sort"><i className="fa-solid fa-arrow-down-wide-short"></i> Sort</label>
            <select id="project-sort" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="default">Default</option>
              <option value="az">A – Z</option>
              <option value="za">Z – A</option>
            </select>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 mt-3">
          {filtered.map((p, i) => (
            <div className="col" key={p.id || i}>
              <div className="card h-100">
                <div className="card-img-wrapper">
                  <span className="project-index">{String(i + 1).padStart(2, '0')}</span>
                  <img src={p.img} className="card-img-top" alt={p.title} loading="lazy" decoding="async" />
                  <div className="card-img-overlay">
                    <span className="project-view-label">
                      <i className="fa-solid fa-eye"></i> View Project
                    </span>
                  </div>
                </div>
                <div className="card-body">
                  <h5 className="card-title">{p.title}</h5>
                  <p className="project-desc">{p.desc}</p>
                  <div className="project-tags">
                    {(p.tags || []).map((tag, j) => (
                      <span className="project-tag" key={j} style={tagColors[j % tagColors.length]}>{tag}</span>
                    ))}
                  </div>
                  <div className="project-actions">
                    {p.liveUrl && (
                      <a className="btn-project btn-project-primary" target="_blank" rel="noopener noreferrer" href={p.liveUrl}>
                        <i className="fa-solid fa-up-right-from-square"></i> Live
                      </a>
                    )}
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
