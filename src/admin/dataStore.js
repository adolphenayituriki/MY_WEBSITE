const STORAGE_KEY = 'site_data'

const defaults = {
  hero: {
    tagline: 'Turning Ideas Into Digital Reality',
    badges: ['Full-Stack Developer', 'System Designer', 'ICT Trainer', 'Digital Innovator'],
    bgImage: '/garelly/Rwanda ICT Chamber May 2026 MindSpace mental health project presentation at KLab for compreting 6 Month of professional internship as backend Developer (2).jpg',
    bgAnimation: 'heroZoom 10s ease-in-out infinite alternate',
  },
  about: {
    heading: 'About Me',
    paragraphs: [
      "A highly motivated student at the University of Rwanda, pursuing a Bachelor's in Business Information Technology (BIT Level 3). I'm passionate about using technology and innovation to solve real-world problems and create digital solutions that make life easier.",
      'My name is Nayituriki Adolphe, a Full Stack Developer, System Designer, and ICT Trainer. Skilled in web development, Microsoft Offices, Google Tools, graphic design and teamwork, I bring creativity, discipline, and a results-driven mindset to every project I take on. My goal is to grow into a leading professional who bridges technology with impact.',
      "My mission is simple: use technology to solve real-world challenges, whether through designing efficient platforms, empowering students with ICT knowledge, or driving community-based digital projects.",
    ],
    highlights: ['Full Stack Development', 'System Design', 'ICT Training', 'Digital Innovation', 'Product Management', 'Multimedia'],
    image: '/images/about me.jpg',
    email: 'www.nayituriki.com@gmail.com',
  },
  services: [
    { id: 'web', title: 'Web Development & ICT Training', icon: 'fa-laptop-code', short: 'Build modern websites and web applications while providing comprehensive training in MS Office, Google Suites, Canva, Photoshop, and software programming fundamentals.', details: ['Modern, responsive websites tailored to your brand', 'Technologies: HTML, CSS, JavaScript, Bootstrap, React, PHP, WordPress', 'ICT Training: MS Office, Google Suites, Canva, Photoshop', 'Programming fundamentals: HTML, CSS, JavaScript, PHP', 'Fluent Touch typing training', 'Recent projects: Kainafresh E-commerce, Rwanda ICT Chamber redesign'] },
    { id: 'system', title: 'System Design & Product Management', icon: 'fa-database', short: 'Design and develop systems for attendance tracking, community engagement, and reporting platforms with expertise in product lifecycle management.', details: ['Full-stack system design and development', 'Attendance tracking and reporting platforms', 'Community engagement and feedback systems', 'Product lifecycle management', 'Database design and API development', 'Scalable architecture for growing organizations'] },
    { id: 'digital', title: 'Digital Literacy & Innovation', icon: 'fa-headset', short: 'Teach digital skills including touch typing, video/photo editing, and online marketing while driving community-based digital projects.', details: ['Digital skills training for individuals and organizations', 'Online Marketing: YouTube, TikTok, Facebook, Instagram', 'Video Editing: CapCut, Wondershare Filmora', 'Photo Editing: Photoshop, Canva', 'Community-based digital projects', 'YouTube tutorial content creation'] },
  ],
  projects: [
    { id: 1, title: 'Kainafresh Ltd E-commerce website', desc: 'An E-commerce website for Kainafresh Ltd.', tags: ['WordPress', 'E-commerce'], liveUrl: 'https://kainafresh.rw', img: '/images/Kainafresh E-commerce website.png' },
    { id: 2, title: 'Digital Tracking for Health Transparency', desc: 'Report public service issues and track resolution status effectively.', tags: ['React', 'Node.js'], liveUrl: 'https://aidtransparency.netlify.app/', githubUrl: 'https://github.com/adolphenayituriki/Digital-Tracking-Solution-for-Health-Service-Transparency-System2-main', img: '/images/Digital tracking for health transparency .png' },
    { id: 3, title: 'Rwanda ICT Chamber Website Redesign', desc: 'Rwanda ICT Chamber Website redesign project.', tags: ['WordPress', 'UI/UX'], liveUrl: 'https://ict.redp.rw/', img: '/images/Rwanda ICT Chamber Website redesign.png' },
    { id: 4, title: 'Umuganda Attendance Platform', desc: "Track citizens' community work attendance and fines automatically.", tags: ['PHP', 'MySQL', 'Bootstrap'], liveUrl: 'https://umuganda.netlify.app/html/citizendashbod%20copy', githubUrl: 'https://github.com/adolphenayituriki/umuganda_system', img: '/images/umuganda.png' },
    { id: 5, title: 'ICT Support Platform', desc: 'Help students learn computer skills, troubleshooting, and basic ICT concepts.', tags: ['HTML', 'CSS', 'JavaScript'], liveUrl: 'https://umuganda.netlify.app/html/citizendashbod%20copy', img: '/images/computer support.png' },
    { id: 6, title: 'Citizen Engagement System', desc: 'A web system for citizens to report public service issues and track complaint status.', tags: ['PHP', 'MySQL'], liveUrl: 'https://adolphenayituriki.netlify.app/', img: '/images/umuganda.png' },
  ],
  skills: [
    { title: 'Programming Languages', skills: [{ name: 'HTML5/CSS3', level: 95 }, { name: 'JavaScript', level: 85 }, { name: 'PHP & MySQL', level: 80 }, { name: 'Java', level: 65 }, { name: 'React', level: 55 }, { name: 'Node.js', level: 55 }, { name: 'Bootstrap', level: 90 }] },
    { title: 'Tools & Platforms', skills: [{ name: 'WordPress', level: 95 }, { name: 'Photoshop', level: 70 }, { name: 'Canva', level: 95 }, { name: 'Google Suites', level: 90 }, { name: 'MS Office', level: 95 }, { name: 'CapCut / Filmora', level: 75 }] },
    { title: 'Professional Skills', skills: [{ name: 'Product Management', level: 80 }, { name: 'Online Marketing', level: 75 }, { name: 'Teaching & Training', level: 90 }, { name: 'System Design', level: 75 }, { name: 'UI/UX Design', level: 65 }] },
  ],
  certifications: [
    { id: 1, img: '/images/40-alx-aice-ai-career-essentials-certificate-adolphe-nayituriki (1).png', viewUrl: '/files/40-alx-aice-ai-career-essentials-certificate-adolphe-nayituriki (1).pdf', label: 'ALX Rwanda ACiE Certificate' },
    { id: 2, img: '/images/DTP Product Management Begener certificate.png', viewUrl: '/files/DTP Product Management Begener certificate.pdf', label: 'DTP Product Management Beginner' },
    { id: 3, img: '/images/DTP Product Management Intermediate certificate.png', viewUrl: '/files/DTP Product Management Intermediate certificate.pdf', label: 'DTP Product Management Intermediate' },
    { id: 4, img: '/images/DTP Product Management Advanced certificate.png', viewUrl: '/files/DTP Product Management Advanced certificate.pdf', label: 'DTP Product Management Advanced' },
    { id: 5, img: null, viewUrl: '#', label: 'DTS-Appreciation certificate as DTS Trainer at Huye campus' },
  ],
  gallery: {
    presentations: [
      { id: 1, src: '/garelly/Rwanda ICT Chamber May 2026 MindSpace mental health project presentation at KLab for compreting 6 Month of professional internship as backend Developer.jpg', caption: 'MindSpace mental health project presentation at KLab', description: 'Presenting the MindSpace mental health project at KLab.' },
      { id: 2, src: '/garelly/Rwanda ICT Chamber May 2026 MindSpace mental health project presentation at KLab for compreting 6 Month of professional internship as backend Developer (2).jpg', caption: 'MindSpace presentation — group photo', description: 'Group photo after the MindSpace mental health project presentation.' },
      { id: 3, src: '/garelly/Rwanda ICT Chamber May 2026 MindSpace mental health project presentation at KLab for compreting 6 Month of professional internship as backend Developer.webp', caption: 'MindSpace mental health project presentation at KLab', description: 'Presenting the MindSpace mental health project at KLab.' },
      { id: 4, src: '/garelly/DTS-Digital Technology Skills Pitching on Graduation Janualy 2026 as a facilitetor at University of Rwanda Huye Campus.jpg', caption: 'DTS Digital Technology Skills pitching graduation', description: 'Serving as a facilitator at the DTS pitching graduation ceremony.' },
    ],
    events: [
      { id: 5, src: '/garelly/DTP- Digital talent program National Hackthon 2025 at Maliott Hotel-Kigali.jpg', caption: 'DTP National Hackathon 2025', description: 'Participating in the Digital Talent Program National Hackathon 2025.' },
      { id: 6, src: '/garelly/DTP- Digital talent program National Hackthon 2025 at Maliott Hotel-Kigali (2).jpg', caption: 'DTP National Hackathon — team collaboration', description: 'Collaborating with fellow participants during the DTP National Hackathon 2025.' },
      { id: 7, src: '/garelly/HIH-Huye Innovation Hub _ Compreting the 1 week of braimstorming about health Tech solutions (Kura care presentation).jpg', caption: 'HIH Huye Innovation Hub — health tech brainstorming', description: 'Participating in a week of brainstorming about health tech solutions.' },
    ],
    work: [
      { id: 8, src: '/garelly/work/Rwanda ICT Chamber Website redesign.png', caption: 'Rwanda ICT Chamber website redesign', description: 'Redesigning the Rwanda ICT Chamber website.' },
      { id: 9, src: '/garelly/work/Kainafresh E-commerce website.png', caption: 'Kainafresh e-commerce website', description: 'Building an e-commerce platform for Kainafresh.' },
    ],
  },
  contact: {
    email: 'www.nayituriki.com@gmail.com',
    phone: '+250 780 505 948',
    location: 'Kigali, Rwanda',
    website: 'adolpheict.vercel.app',
    github: 'github.com/adolphenayituriki',
  },
  cv: {
    name: 'Nayituriki Adolphe',
    role: 'Full Stack Developer • System Designer • ICT Trainer',
    image: '/images/Portrait of a Young Man.jpg',
    pdfUrl: '/files/NAYITURIKI_ADOLPHE_FlowCV_Resume_2026-05-18.pdf',
    contact: {
      email: 'www.nayituriki.com@gmail.com',
      phone: '+250 780 505 948',
      location: 'Kigali, Rwanda',
      website: 'adolpheict.vercel.app',
      github: 'github.com/adolphenayituriki',
    },
  },
}

export function getData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) {
      const saved = JSON.parse(raw)
      return deepMerge(structuredClone(defaults), saved)
    }
  } catch {}
  return structuredClone(defaults)
}

export function saveData(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  return data
}

export function resetData() {
  localStorage.removeItem(STORAGE_KEY)
  return structuredClone(defaults)
}

export function exportData() {
  const data = getData()
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `site-backup-${new Date().toISOString().slice(0, 10)}.json`
  a.click()
  URL.revokeObjectURL(url)
}

export function importData(json) {
  try {
    const parsed = JSON.parse(json)
    saveData(parsed)
    return true
  } catch {
    return false
  }
}

export function getDefault(key) {
  return structuredClone(defaults[key])
}

function deepMerge(target, source) {
  const result = { ...target }
  for (const key of Object.keys(source)) {
    if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
      result[key] = deepMerge(result[key] || {}, source[key])
    } else {
      result[key] = source[key]
    }
  }
  return result
}

export { defaults }
