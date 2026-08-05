import { getData } from '../admin/dataStore.js'

const levelLabel = (level) => {
  if (level >= 90) return 'Expert'
  if (level >= 75) return 'Advanced'
  if (level >= 60) return 'Intermediate'
  return 'Basic'
}

export default function Skills() {
  const { skills: skillCategories } = getData()

  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title text-center" style={{ display: 'block', textAlign: 'center' }}>Technical Skills</h2>
        <p className="section-subtitle text-center">Technologies and tools I work with daily</p>
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="row g-3">
              {skillCategories.map((cat, i) => (
                <div className="col-md-4" key={i}>
                  <div className="skill-category">
                    <h3>{cat.title}</h3>
                    <ul className="skill-list">
                      {(cat.skills || []).map((skill, j) => (
                        <li className="skill-list-item" key={j}>
                          <span>{skill.name}</span>
                          <span className="skill-level-label">{levelLabel(skill.level)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
