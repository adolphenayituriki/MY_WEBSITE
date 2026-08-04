const starters = [
  {
    icon: 'fa-laptop',
    title: 'ICT Support Platform',
    desc: 'Learn computer maintenance and skills',
    cta: 'Open Platform',
    href: '/project/DTP_Hackaton_Project/html/CitizenDashbod copy.html',
    external: false,
  },
  {
    icon: 'fa-cart-shopping',
    title: 'Kainafresh E-commerce',
    desc: 'Fresh produce online store',
    cta: 'Visit Store',
    href: 'https://kainafresh.rw',
    external: true,
  },
  {
    icon: 'fa-building',
    title: 'ICT Chamber Redesign',
    desc: 'Rwanda ICT Chamber website',
    cta: 'View Site',
    href: 'https://ict.redp.rw/',
    external: true,
  },
  {
    icon: 'fa-brain',
    title: 'MindSpace',
    desc: 'Mental health support for every Rwandan',
    cta: 'Visit Platform',
    href: 'https://mindspace-mentalhealth-system.vercel.app/',
    external: true,
  },
]

export default function GetStartedSection() {
  return (
    <section id="get-started" className="text-center">
      <div className="container">
        <h2 className="section-title">Get Started</h2>
        <p className="section-subtitle">Explore my platforms and tools</p>

        <div className="row justify-content-center g-3">
          {starters.map((s) => (
            <div className="col-md-6 col-lg-3" key={s.title}>
              <a
                href={s.href}
                target={s.external ? '_blank' : undefined}
                rel={s.external ? 'noopener noreferrer' : undefined}
                className="starter-card"
              >
                <div className="starter-icon">
                  <i className={`fa-solid ${s.icon}`}></i>
                </div>
                <h5>{s.title}</h5>
                <p>{s.desc}</p>
                <span className="btn-gradient starter-btn">
                  {s.cta} <i className="fas fa-arrow-right"></i>
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
