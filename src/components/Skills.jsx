import { useEffect, useRef, useState } from 'react'

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'HTML5/CSS3', level: 95 },
      { name: 'JavaScript', level: 85 },
      { name: 'PHP & MySQL', level: 80 },
      { name: 'Java', level: 65 },
      { name: 'React', level: 55 },
      { name: 'Node.js', level: 55 },
      { name: 'Bootstrap', level: 90 },
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'WordPress', level: 95 },
      { name: 'Photoshop', level: 70 },
      { name: 'Canva', level: 95 },
      { name: 'Google Suites', level: 90 },
      { name: 'MS Office', level: 95 },
      { name: 'CapCut / Filmora', level: 75 },
    ],
  },
]

export default function Skills() {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={ref}>
      <div className="container">
        <h2 className="section-title text-center" style={{ display: 'block', textAlign: 'center' }}>
          Technical Skills
        </h2>
        <p className="section-subtitle text-center">
          Technologies and tools I work with daily
        </p>
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="row g-4">
              {skillCategories.map((cat, i) => (
                <div className="col-md-6" key={i}>
                  <div className="skill-category">
                    <h3>{cat.title}</h3>
                    <div className="skill-bar-group">
                      {cat.skills.map((skill, j) => (
                        <div className="skill-bar-item" key={j}>
                          <div className="skill-bar-header">
                            <span>{skill.name}</span>
                            <span>{skill.level}%</span>
                          </div>
                          <div className="skill-bar-track">
                            <div
                              className={`skill-bar-fill${visible ? ' animated' : ''}`}
                              style={{
                                width: visible ? `${skill.level}%` : '0%',
                                background: i === 0
                                  ? 'linear-gradient(135deg, #2563eb, #7c3aed)'
                                  : 'linear-gradient(135deg, #10b981, #059669)',
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
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
