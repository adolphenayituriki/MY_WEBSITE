import { getData } from '../admin/dataStore.js'

const socialIcons = {
  github: 'fa-brands fa-github',
  linkedin: 'fa-brands fa-linkedin-in',
  twitter: 'fa-brands fa-x-twitter',
  facebook: 'fa-brands fa-facebook-f',
  instagram: 'fa-brands fa-instagram',
  youtube: 'fa-brands fa-youtube',
}

export default function Contact() {
  const { contact } = getData()
  const socials = Object.entries(socialIcons)
    .filter(([key]) => contact[key])
    .map(([key, icon]) => ({ key, icon, href: `https://${contact[key]}` }))

  return (
    <section id="contact" className="text-center">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <p className="section-subtitle">
          Have a project in mind? Let&rsquo;s work together. I usually respond within 24 hours.
        </p>
        <div className="contact-grid">
          <div className="contact-info">
            <h4>Get In Touch</h4>
            <p className="contact-info-text">
              Whether you have a project, a question, or just want to say hi — I&rsquo;d love to hear from you.
            </p>
            <ul className="contact-info-list">
              <li>
                <span className="contact-info-icon"><i className="fa-solid fa-envelope"></i></span>
                <div>
                  <strong>Email</strong>
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </div>
              </li>
              <li>
                <span className="contact-info-icon"><i className="fa-solid fa-phone"></i></span>
                <div>
                  <strong>Phone</strong>
                  <a href={`tel:${contact.phone.replace(/[^\d+]/g, '')}`}>{contact.phone}</a>
                </div>
              </li>
              <li>
                <span className="contact-info-icon"><i className="fa-solid fa-location-dot"></i></span>
                <div>
                  <strong>Location</strong>
                  <span>{contact.location}</span>
                </div>
              </li>
              <li>
                <span className="contact-info-icon"><i className="fa-solid fa-clock"></i></span>
                <div>
                  <strong>Response Time</strong>
                  <span>Within 24 hours</span>
                </div>
              </li>
            </ul>
            <div className="social-links">
              {socials.map((s) => (
                <a key={s.key} href={s.href} target="_blank" rel="noopener noreferrer" className="social-link" aria-label={s.key}>
                  <i className={s.icon}></i>
                </a>
              ))}
            </div>
          </div>
          <div className="contact-card">
            <form action={`https://formsubmit.co/${contact.email}`} method="POST" className="row g-3 text-start">
              <div className="col-md-6">
                <label htmlFor="names" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="names" name="names" placeholder="Your name" autoComplete="name" required />
              </div>
              <div className="col-md-6">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input type="email" className="form-control" id="email" name="email" placeholder="your@email.com" autoComplete="email" required />
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
                <button type="submit" className="btn-submit"><i className="fa-solid fa-paper-plane"></i> Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
