import { useState, useRef, useEffect } from 'react'

export default function Services() {
  const [selected, setSelected] = useState('')
  const [result, setResult] = useState('')
  const resultRef = useRef(null)

  const serviceInfo = {
    'Online marketing': `
      <strong>Online Marketing &amp; Tutoring</strong><br><br>
      I offer online marketing services across multiple platforms including YouTube, TikTok, Facebook, and Instagram.
      Whether you need brand awareness, audience growth, or content strategy, I help you reach the right audience
      with engaging digital content. I also provide tutoring on how to leverage these platforms effectively for
      personal branding or business growth.<br><br>
      <em>Platforms: YouTube, TikTok, Facebook, Instagram</em>
    `,
    'Web Design': `
      <strong>Web Design &amp; Development</strong><br><br>
      I build modern, responsive websites tailored to your brand's identity — from personal portfolios and
      business sites to full e-commerce platforms. Using technologies like HTML, CSS, JavaScript, Bootstrap,
      React, PHP, and WordPress, I create websites that are fast, user-friendly, and visually compelling.<br><br>
      <strong>Recent projects:</strong> Kainafresh E-commerce, Rwanda ICT Chamber redesign, Umuganda Tracking System
    `,
    'ICT Training and computer maintenance': `
      <strong>ICT Training &amp; Computer Maintenance</strong><br><br>
      I provide comprehensive training in:<br>
      • Microsoft Offices (Word, Excel, PowerPoint, Publisher, Access, Outlook)<br>
      • Google Suites (Docs, G-Mail, Forms, Sheets)<br>
      • Canva design (full training)<br>
      • Photoshop (Intermediate level)<br>
      • Fluent Touch typing<br>
      • Software programming fundamentals (HTML, CSS, JavaScript, PHP)<br><br>
      I also offer computer maintenance support and troubleshooting for individuals and organizations.
    `,
    'Photos and Video Editing (Shooting)': `
      <strong>Photos &amp; Video Editing</strong><br><br>
      I offer professional photo and video editing services using industry-standard tools:<br>
      • <strong>Video Editing:</strong> CapCut, Wondershare Filmora<br>
      • <strong>Photo Editing:</strong> Photoshop (Intermediate), Canva<br>
      • <strong>Design:</strong> Banners, flyers, social media graphics<br><br>
      I also create YouTube tutorial content and can help with video shooting, editing, and production
      for your brand or personal projects.
    `,
  }

  const handleSubmit = () => {
    if (selected) {
      setResult(serviceInfo[selected])
    } else {
      setResult('Please select a service first.')
    }
  }

  const closeResult = () => {
    setResult('')
    setSelected('')
  }

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (resultRef.current && !resultRef.current.contains(e.target)) {
        closeResult()
      }
    }
    if (result) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [result])

  return (
    <section id="services" className="text-center">
      <div className="container">
        <h2 className="section-title">Services</h2>
        <p className="section-subtitle">
          Here&rsquo;s what I can do for you to help your business or community thrive digitally
        </p>

        <div className="row mt-4 g-4">
          <div className="col-md-4">
            <div className="service-card h-100">
              <div className="icon-box">
                <i className="fas fa-laptop-code"></i>
              </div>
              <h5>Web Development & ICT Training</h5>
              <p>
                Build modern websites and web applications while providing comprehensive
                training in MS Office, Google Suites, Canva, Photoshop, and software
                programming fundamentals.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-card h-100">
              <div className="icon-box">
                <i className="fas fa-database"></i>
              </div>
              <h5>System Design & Product Management</h5>
              <p>
                Design and develop systems for attendance tracking, community engagement,
                and reporting platforms with expertise in product lifecycle management.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-card h-100">
              <div className="icon-box">
                <i className="fas fa-headset"></i>
              </div>
              <h5>Digital Literacy & Innovation</h5>
              <p>
                Teach digital skills including touch typing, video/photo editing, and
                online marketing while driving community-based digital projects and
                innovation.
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center mt-5">
          <div className="col-md-6">
            <div style={{
              background: 'var(--gray-50)',
              borderRadius: 'var(--radius-lg)',
              padding: '28px',
              border: '1px solid var(--gray-200)',
            }}>
              <p style={{ fontWeight: 600, marginBottom: '12px', color: 'var(--gray-700)' }}>
                <i className="fa-solid fa-magnifying-glass" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
                Search a service to learn more
              </p>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
                <select
                  value={selected}
                  onChange={(e) => setSelected(e.target.value)}
                  style={{
                    flex: '1',
                    minWidth: '200px',
                    padding: '12px 16px',
                    borderRadius: 'var(--radius-sm)',
                    border: '2px solid var(--gray-200)',
                    fontSize: '0.9rem',
                    color: 'var(--gray-700)',
                    background: 'white',
                    cursor: 'pointer',
                    outline: 'none',
                    fontFamily: 'inherit',
                  }}
                >
                  <option value="" disabled>Select a service...</option>
                  <option value="Online marketing">Online Marketing</option>
                  <option value="Web Design">Web Design</option>
                  <option value="ICT Training and computer maintenance">ICT Training &amp; Maintenance</option>
                  <option value="Photos and Video Editing (Shooting)">Photos &amp; Video Editing</option>
                </select>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="btn-gradient"
                  style={{ border: 'none', cursor: 'pointer', padding: '12px 24px' }}
                >
                  Submit
                </button>
              </div>
              {result && (
                <div
                  ref={resultRef}
                  style={{
                    marginTop: '16px',
                    padding: '16px',
                    background: 'white',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--gray-200)',
                    color: 'var(--gray-600)',
                    fontSize: '0.9rem',
                    lineHeight: '1.7',
                    textAlign: 'center',
                    position: 'relative',
                  }}
                >
                  <button
                    onClick={closeResult}
                    style={{
                      position: 'absolute',
                      top: '8px',
                      right: '10px',
                      border: 'none',
                      background: 'transparent',
                      fontSize: '1.1rem',
                      cursor: 'pointer',
                      color: 'var(--gray-400)',
                      lineHeight: 1,
                      padding: '2px 6px',
                    }}
                    aria-label="Close"
                  >
                    &times;
                  </button>
                  <div dangerouslySetInnerHTML={{ __html: result }} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
