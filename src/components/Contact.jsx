export default function Contact() {
  return (
    <section id="contact" className="text-center">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <p className="section-subtitle">
          Have a project in mind? Let&rsquo;s work together. I usually respond within 24 hours.
        </p>

        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="contact-card">
              <form
                action="https://formsubmit.co/www.nayituriki.com@gmail.com"
                method="POST"
                className="row g-4 text-start"
              >
                <div className="col-md-6">
                  <label htmlFor="names" className="form-label">Full Name</label>
                  <input type="text" className="form-control" id="names" name="names" placeholder="Your name" required />
                </div>
                <div className="col-md-6">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input type="email" className="form-control" id="email" name="email" placeholder="your@email.com" required />
                </div>
                <div className="col-12">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input type="text" className="form-control" id="subject" name="subject" placeholder="What is this about?" />
                </div>
                <div className="col-12">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea className="form-control" id="message" name="text" rows="5" placeholder="Tell me about your project..." required></textarea>
                </div>
                <div className="col-12 text-center">
                  <button type="submit" className="btn-submit">
                    <i className="fa-solid fa-paper-plane"></i> Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-5 pt-4">
          <h5 className="mb-4" style={{ color: 'var(--gray-500)', fontWeight: 500 }}>Or find me on</h5>
          <div className="social-links">
            <a href="#" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="https://github.com/adolphenayituriki" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-github"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://www.instagram.com/adolphenayituriki/" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="http://www.youtube.com/@Kiliziya-vibes" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
