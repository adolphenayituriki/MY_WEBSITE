export default function GetStartedSection() {
  return (
    <section id="get-started" className="text-center" style={{ background: 'white', padding: '100px 0' }}>
      <div className="container">
        <h2 className="section-title">Get Started</h2>
        <p className="section-subtitle">Explore my platforms and tools</p>

        <div className="row justify-content-center g-4">
          <div className="col-md-6 col-lg-3">
            <div
              onClick={() => window.location.href = '/project/DTP_Hackaton_Project/index.html'}
              style={{
                background: 'var(--gray-50)',
                borderRadius: 'var(--radius-lg)',
                padding: '28px 20px',
                border: '1px solid var(--gray-200)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                height: '100%',
              }}
              className="starter-card"
            >
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'rgba(37,99,235,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px',
                fontSize: '1.5rem',
                color: 'var(--primary)',
              }}>
                <i className="fa-solid fa-users"></i>
              </div>
              <h5 style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '8px' }}>Umuganda Attendance</h5>
              <p style={{ fontSize: '0.85rem', color: 'var(--gray-500)', marginBottom: '16px' }}>
                Track community work attendance and fines
              </p>
              <span className="btn-gradient" style={{ fontSize: '0.8rem', padding: '8px 16px', border: 'none', cursor: 'pointer' }}>
                Open Platform
              </span>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div
              onClick={() => window.location.href = '/project/DTP_Hackaton_Project/html/CitizenDashbod copy.html'}
              style={{
                background: 'var(--gray-50)',
                borderRadius: 'var(--radius-lg)',
                padding: '28px 20px',
                border: '1px solid var(--gray-200)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                height: '100%',
              }}
              className="starter-card"
            >
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'rgba(16,185,129,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px',
                fontSize: '1.5rem',
                color: 'var(--accent)',
              }}>
                <i className="fa-solid fa-laptop"></i>
              </div>
              <h5 style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '8px' }}>ICT Support Platform</h5>
              <p style={{ fontSize: '0.85rem', color: 'var(--gray-500)', marginBottom: '16px' }}>
                Learn computer maintenance and skills
              </p>
              <span className="btn-gradient" style={{ fontSize: '0.8rem', padding: '8px 16px', border: 'none', cursor: 'pointer', background: 'var(--gradient-accent)' }}>
                Open Platform
              </span>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div
              onClick={() => window.open('https://kainafresh.rw', '_blank')}
              style={{
                background: 'var(--gray-50)',
                borderRadius: 'var(--radius-lg)',
                padding: '28px 20px',
                border: '1px solid var(--gray-200)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                height: '100%',
              }}
              className="starter-card"
            >
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'rgba(124,58,237,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px',
                fontSize: '1.5rem',
                color: '#7c3aed',
              }}>
                <i className="fa-solid fa-cart-shopping"></i>
              </div>
              <h5 style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '8px' }}>Kainafresh E-commerce</h5>
              <p style={{ fontSize: '0.85rem', color: 'var(--gray-500)', marginBottom: '16px' }}>
                Fresh produce online store
              </p>
              <span className="btn-gradient" style={{ fontSize: '0.8rem', padding: '8px 16px', border: 'none', cursor: 'pointer', background: 'linear-gradient(135deg, #7c3aed, #a855f7)' }}>
                Visit Store
              </span>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div
              onClick={() => window.open('https://ict.redp.rw/', '_blank')}
              style={{
                background: 'var(--gray-50)',
                borderRadius: 'var(--radius-lg)',
                padding: '28px 20px',
                border: '1px solid var(--gray-200)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                height: '100%',
              }}
              className="starter-card"
            >
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'rgba(245,158,11,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px',
                fontSize: '1.5rem',
                color: '#f59e0b',
              }}>
                <i className="fa-solid fa-building"></i>
              </div>
              <h5 style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '8px' }}>ICT Chamber Redesign</h5>
              <p style={{ fontSize: '0.85rem', color: 'var(--gray-500)', marginBottom: '16px' }}>
                Rwanda ICT Chamber website
              </p>
              <span className="btn-gradient" style={{ fontSize: '0.8rem', padding: '8px 16px', border: 'none', cursor: 'pointer', background: 'linear-gradient(135deg, #f59e0b, #d97706)' }}>
                View Site
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
