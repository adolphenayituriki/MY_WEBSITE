export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-md-5 text-center">
            <img
              src="/images/about me.jpg"
              alt="Nayituriki Adolphe"
              className="about-img"
            />
          </div>

          <div className="col-md-7">
            <h2 className="section-title" style={{ marginBottom: '24px' }}>About Me</h2>
            <p>
              A highly motivated student at the{' '}
              <strong>University of Rwanda</strong>, pursuing a{' '}
              <strong>Bachelor's in Business Information Technology (BIT Level 3)</strong>.
              I'm passionate about using technology and innovation to solve real-world
              problems and create digital solutions that make life easier.
            </p>
            <p>
              My name is <strong style={{ color: 'var(--accent)' }}>Nayituriki Adolphe</strong>, a{' '}
              <em>Full Stack Developer, System Designer, and ICT Trainer</em>.
              Skilled in web development, Microsoft Offices, Google Tools, graphic design
              and teamwork, I bring creativity, discipline, and a results-driven mindset
              to every project I take on. My goal is to grow into a leading professional
              who bridges technology with impact.
            </p>
            <p>
              My mission is simple: <strong>use technology to solve real-world challenges</strong>,
              whether through designing efficient platforms, empowering students with
              ICT knowledge, or driving community-based digital projects.
            </p>

            <div className="highlight-list">
              <div className="highlight-item">
                <i className="fas fa-code"></i> Full Stack Development
              </div>
              <div className="highlight-item">
                <i className="fas fa-network-wired"></i> System Design
              </div>
              <div className="highlight-item">
                <i className="fas fa-chalkboard-teacher"></i> ICT Training
              </div>
              <div className="highlight-item">
                <i className="fas fa-lightbulb"></i> Digital Innovation
              </div>
              <div className="highlight-item">
                <i className="fas fa-chart-line"></i> Product Management
              </div>
              <div className="highlight-item">
                <i className="fas fa-video"></i> Multimedia
              </div>
            </div>

            <a href="mailto:www.nayituriki.com@gmail.com" className="btn-accent">
              <i className="fa-solid fa-paper-plane"></i> Let&rsquo;s Connect
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
