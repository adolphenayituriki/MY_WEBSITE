import { useState, useRef } from 'react'
import { getData, saveData, exportData, importData, resetData, publishToGitHub, defaults } from './dataStore.js'

const ADMIN_PASSWORD = 'adolphe@078'

const sections = [
  { id: 'hero', label: 'Hero', icon: 'fa-house' },
  { id: 'about', label: 'About', icon: 'fa-user' },
  { id: 'services', label: 'Services', icon: 'fa-wrench' },
  { id: 'projects', label: 'Projects', icon: 'fa-folder-open' },
  { id: 'skills', label: 'Skills', icon: 'fa-code' },
  { id: 'certifications', label: 'Certifications', icon: 'fa-certificate' },
  { id: 'gallery', label: 'Gallery', icon: 'fa-images' },
  { id: 'contact', label: 'Contact', icon: 'fa-envelope' },
  { id: 'cv', label: 'CV', icon: 'fa-file' },
]

export default function AdminDashboard() {
  const [authed, setAuthed] = useState(() => !!sessionStorage.getItem('admin_authed'))
  const [password, setPassword] = useState('')
  const [activeSection, setActiveSection] = useState('hero')
  const [data, setData] = useState(() => getData())
  const [saved, setSaved] = useState(false)
  const [importText, setImportText] = useState('')
  const [showImport, setShowImport] = useState(false)
  const [showPublish, setShowPublish] = useState(false)
  const [pubToken, setPubToken] = useState(() => sessionStorage.getItem('gh_token') || '')
  const [pubMessage, setPubMessage] = useState('Update site data from admin dashboard')
  const [pubStatus, setPubStatus] = useState('')
  const [pubError, setPubError] = useState('')

  const login = () => {
    if (password === ADMIN_PASSWORD) setAuthed(true)
    else alert('Wrong password')
  }

  const update = (path, value) => {
    const newData = { ...data }
    const keys = path.split('.')
    let obj = newData
    for (let i = 0; i < keys.length - 1; i++) {
      obj = obj[keys[i]]
    }
    obj[keys[keys.length - 1]] = value
    setData(newData)
    setSaved(false)
  }

  const handleSave = () => {
    saveData(data)
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  const handleReset = () => {
    if (confirm('Reset all data to defaults?')) {
      setData(resetData())
    }
  }

  const handleImport = () => {
    if (importData(importText)) {
      setData(getData())
      setShowImport(false)
      setImportText('')
      alert('Data imported successfully')
    } else {
      alert('Invalid JSON')
    }
  }

  const handlePublish = async () => {
    if (!pubToken) { setPubError('Enter a GitHub token'); return }
    const owner = 'adolphenayituriki'
    const repo = 'MY_WEBSITE'
    setPubStatus('publishing')
    setPubError('')
    try {
      sessionStorage.setItem('gh_token', pubToken)
      handleSave()
      await publishToGitHub(data, pubToken, owner, repo, pubMessage)
      setPubStatus('success')
      setTimeout(() => { setShowPublish(false); setPubStatus('') }, 2000)
    } catch (err) {
      setPubError(err.message)
      setPubStatus('')
    }
  }

  if (!authed) {
    return (
      <div className="admin-login">
        <div className="admin-login-box">
          <h2><i className="fa-solid fa-shield-halved"></i> Admin Login</h2>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && login()} placeholder="Enter admin password" />
          <button onClick={login}><i className="fa-solid fa-lock-open"></i> Unlock</button>
        </div>
      </div>
    )
  }

  return (
    <div className="admin-dashboard">
      <aside className="admin-sidebar">
        <h3><i className="fa-solid fa-gauge-high"></i> Dashboard</h3>
        <nav>
          {sections.map((s) => (
            <button key={s.id} className={activeSection === s.id ? 'active' : ''} onClick={() => setActiveSection(s.id)}>
              <i className={`fa-solid ${s.icon}`}></i> {s.label}
            </button>
          ))}
        </nav>
        <div className="admin-sidebar-actions">
          <button className="admin-btn-sm" onClick={exportData}><i className="fa-solid fa-download"></i> Export</button>
          <button className="admin-btn-sm" onClick={() => setShowImport(!showImport)}><i className="fa-solid fa-upload"></i> Import</button>
          <button className="admin-btn-sm admin-btn-publish" onClick={() => setShowPublish(true)}><i className="fa-solid fa-rocket"></i> Publish</button>
          <a href="/" className="admin-btn-sm" target="_blank"><i className="fa-solid fa-eye"></i> View Site</a>
        </div>
      </aside>
      <main className="admin-main">
        <div className="admin-toolbar">
          <span className="admin-toolbar-title">{sections.find((s) => s.id === activeSection)?.label} Settings</span>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            {saved && <span className="admin-saved-badge"><i className="fa-solid fa-check"></i> Saved</span>}
            <button className="admin-btn" onClick={handleSave}><i className="fa-solid fa-floppy-disk"></i> Save Changes</button>
          </div>
        </div>

        <div className="admin-content">
          {showImport && (
            <div className="admin-import-box">
              <textarea rows={4} value={importText} onChange={(e) => setImportText(e.target.value)} placeholder="Paste JSON data here..." />
              <div style={{ display: 'flex', gap: 8 }}>
                <button className="admin-btn" onClick={handleImport}><i className="fa-solid fa-check"></i> Import</button>
                <button className="admin-btn admin-btn-secondary" onClick={() => setShowImport(false)}>Cancel</button>
              </div>
            </div>
          )}

          {activeSection === 'hero' && <HeroEditor data={data} update={update} />}
          {activeSection === 'about' && <AboutEditor data={data} update={update} />}
          {activeSection === 'services' && <ServicesEditor data={data} update={update} />}
          {activeSection === 'projects' && <ProjectsEditor data={data} update={update} />}
          {activeSection === 'skills' && <SkillsEditor data={data} update={update} />}
          {activeSection === 'certifications' && <CertsEditor data={data} update={update} />}
          {activeSection === 'gallery' && <GalleryEditor data={data} update={update} />}
          {activeSection === 'contact' && <ContactEditor data={data} update={update} />}
          {activeSection === 'cv' && <CVEditor data={data} update={update} />}

          <div className="admin-danger-zone">
            <button className="admin-btn admin-btn-danger" onClick={handleReset}><i className="fa-solid fa-rotate-left"></i> Reset to Defaults</button>
          </div>
        </div>

        {showPublish && (
          <div className="admin-publish-overlay" onClick={() => { if (pubStatus !== 'publishing') { setShowPublish(false); setPubError('') } }}>
            <div className="admin-publish-modal" onClick={(e) => e.stopPropagation()}>
              <button className="admin-publish-close" onClick={() => { setShowPublish(false); setPubError('') }} disabled={pubStatus === 'publishing'}>&times;</button>
              <h3><i className="fa-solid fa-rocket"></i> Publish to GitHub</h3>
              <p className="admin-publish-desc">Commits current data to <code>src/data.json</code> in your repo. Vercel will auto-deploy.</p>

              <div className="admin-field">
                <label>GitHub Personal Access Token</label>
                <input type="password" value={pubToken} onChange={(e) => setPubToken(e.target.value)} placeholder="ghp_..." disabled={pubStatus === 'publishing'} />
                <p className="admin-hint">Create at <a href="https://github.com/settings/tokens" target="_blank" rel="noopener noreferrer">github.com/settings/tokens</a> with <code>repo</code> scope.</p>
              </div>

              <div className="admin-field">
                <label>Commit Message</label>
                <input type="text" value={pubMessage} onChange={(e) => setPubMessage(e.target.value)} disabled={pubStatus === 'publishing'} />
              </div>

              <div className="admin-publish-info">
                <i className="fa-solid fa-code-branch"></i>
                <span>adolphenayituriki/MY_WEBSITE</span>
              </div>

              {pubError && <p className="admin-publish-error"><i className="fa-solid fa-circle-exclamation"></i> {pubError}</p>}

              {pubStatus === 'success' && (
                <p className="admin-publish-success"><i className="fa-solid fa-check-circle"></i> Published! Vercel will deploy shortly.</p>
              )}

              <div className="admin-publish-actions">
                <button className="admin-btn" onClick={handlePublish} disabled={pubStatus === 'publishing'}>
                  {pubStatus === 'publishing' ? <><i className="fa-solid fa-spinner fa-spin"></i> Publishing...</> : <><i className="fa-solid fa-cloud-arrow-up"></i> Publish Now</>}
                </button>
                <button className="admin-btn admin-btn-secondary" onClick={() => { setShowPublish(false); setPubError('') }} disabled={pubStatus === 'publishing'}>Cancel</button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

/* ─── Section Editors ─── */

function TextInput({ label, value, onChange, multiline }) {
  const Tag = multiline ? 'textarea' : 'input'
  return (
    <div className="admin-field">
      <label>{label}</label>
      <Tag value={value || ''} onChange={onChange} rows={multiline ? 3 : undefined} />
    </div>
  )
}

function ImageField({ label, value, onChange }) {
  const fileRef = useRef(null)

  const handleFile = (e) => {
    const file = e.target.files[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = (ev) => {
      onChange({ target: { value: ev.target.result } })
    }
    reader.readAsDataURL(file)
    e.target.value = ''
  }

  const handleClear = () => {
    onChange({ target: { value: '' } })
  }

  return (
    <div className="admin-field">
      <label>{label}</label>
      <div className="admin-image-picker">
        <div className="admin-image-input-row">
          <input type="text" value={value || ''} onChange={onChange} placeholder="/images/... or click Upload" />
          <button className="admin-btn-upload" onClick={() => fileRef.current.click()} title="Upload from PC">
            <i className="fa-solid fa-cloud-arrow-up"></i>
          </button>
          {value && !value.startsWith('data:') && (
            <button className="admin-btn-clear" onClick={handleClear} title="Clear">
              <i className="fa-solid fa-xmark"></i>
            </button>
          )}
        </div>
        <input type="file" ref={fileRef} accept="image/*" onChange={handleFile} style={{ display: 'none' }} />
        {value && (
          <div className="admin-image-preview">
            <img src={value} alt="" onError={(e) => { e.target.style.display = 'none' }} />
            {value.startsWith('data:') && (
              <button className="admin-btn-clear" onClick={handleClear} title="Remove image">
                <i className="fa-solid fa-trash-can"></i> Remove
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

function ArrayEditor({ items, onChange, labelKey, fields }) {
  const updateItem = (idx, key, val) => {
    const next = [...items]
    next[idx] = { ...next[idx], [key]: val }
    onChange(next)
  }
  const addItem = () => {
    const obj = {}
    fields.forEach((f) => { obj[f.key] = f.default || '' })
    obj.id = Date.now()
    onChange([...items, obj])
  }
  const removeItem = (idx) => {
    if (confirm('Remove this item?')) onChange(items.filter((_, i) => i !== idx))
  }
  const moveItem = (idx, dir) => {
    const next = [...items]
    const target = idx + dir
    if (target < 0 || target >= next.length) return
    ;[next[idx], next[target]] = [next[target], next[idx]]
    onChange(next)
  }

  return (
    <div className="admin-array-editor">
      {items.map((item, i) => (
        <div className="admin-array-item" key={item.id || i}>
          <div className="admin-array-item-header">
            <span>{item[labelKey] || `Item ${i + 1}`}</span>
            <div className="admin-array-item-actions">
              <button onClick={() => moveItem(i, -1)} disabled={i === 0} title="Move up"><i className="fa-solid fa-chevron-up"></i></button>
              <button onClick={() => moveItem(i, 1)} disabled={i === items.length - 1} title="Move down"><i className="fa-solid fa-chevron-down"></i></button>
              <button onClick={() => removeItem(i)} className="danger" title="Remove"><i className="fa-solid fa-trash"></i></button>
            </div>
          </div>
          {fields.map((f) => (
            f.type === 'textarea'
              ? <textarea key={f.key} value={item[f.key] || ''} onChange={(e) => updateItem(i, f.key, e.target.value)} placeholder={f.label} rows={f.rows || 2} />
              : f.type === 'image'
                ? <ImageField key={f.key} label={f.label} value={item[f.key] || ''} onChange={(e) => updateItem(i, f.key, e.target.value)} />
                : f.type === 'array'
                  ? <div key={f.key} className="admin-inline-array">
                      <label>{f.label}</label>
                      {(item[f.key] || []).map((tag, j) => (
                        <div className="admin-inline-tag" key={j}>
                          <input value={tag} onChange={(e) => {
                            const next = [...(item[f.key] || [])]
                            next[j] = e.target.value
                            updateItem(i, f.key, next)
                          }} />
                          <button onClick={() => updateItem(i, f.key, (item[f.key] || []).filter((_, k) => k !== j))}>&times;</button>
                        </div>
                      ))}
                      <button className="admin-btn-xs" onClick={() => updateItem(i, f.key, [...(item[f.key] || []), ''])}>+ Add</button>
                    </div>
                  : <input key={f.key} type="text" value={item[f.key] || ''} onChange={(e) => updateItem(i, f.key, e.target.value)} placeholder={f.label} />
          ))}
        </div>
      ))}
      <button className="admin-btn admin-btn-secondary" onClick={addItem}><i className="fa-solid fa-plus"></i> Add</button>
    </div>
  )
}

/* ─── Hero Editor ─── */
function HeroEditor({ data, update }) {
  const h = data.hero
  return (
    <div>
      <TextInput label="Tagline" value={h.tagline} onChange={(e) => update('hero.tagline', e.target.value)} />
      <ImageField label="Background Image" value={h.bgImage} onChange={(e) => update('hero.bgImage', e.target.value)} />
      <div className="admin-field">
        <label>Badges</label>
        <div className="admin-inline-array">
          {(h.badges || []).map((b, i) => (
            <div className="admin-inline-tag" key={i}>
              <input value={b} onChange={(e) => {
                const next = [...h.badges]
                next[i] = e.target.value
                update('hero.badges', next)
              }} />
              <button onClick={() => update('hero.badges', h.badges.filter((_, j) => j !== i))}>&times;</button>
            </div>
          ))}
          <button className="admin-btn-xs" onClick={() => update('hero.badges', [...(h.badges || []), 'New Badge'])}>+ Add</button>
        </div>
      </div>
    </div>
  )
}

/* ─── About Editor ─── */
function AboutEditor({ data, update }) {
  const a = data.about
  return (
    <div>
      <ImageField label="Profile Image" value={a.image} onChange={(e) => update('about.image', e.target.value)} />
      <div className="admin-field">
        <label>Paragraphs</label>
        {(a.paragraphs || []).map((p, i) => (
          <div key={i} className="admin-inline-tag" style={{ display: 'block', marginBottom: 8 }}>
            <textarea value={p} onChange={(e) => {
              const next = [...a.paragraphs]
              next[i] = e.target.value
              update('about.paragraphs', next)
            }} rows={3} style={{ width: '100%' }} />
            <button onClick={() => update('about.paragraphs', a.paragraphs.filter((_, j) => j !== i))}>&times;</button>
          </div>
        ))}
        <button className="admin-btn-xs" onClick={() => update('about.paragraphs', [...(a.paragraphs || []), ''])}>+ Add Paragraph</button>
      </div>
      <div className="admin-field">
        <label>Highlights</label>
        <div className="admin-inline-array">
          {(a.highlights || []).map((h, i) => (
            <div className="admin-inline-tag" key={i}>
              <input value={h} onChange={(e) => {
                const next = [...a.highlights]
                next[i] = e.target.value
                update('about.highlights', next)
              }} />
              <button onClick={() => update('about.highlights', a.highlights.filter((_, j) => j !== i))}>&times;</button>
            </div>
          ))}
          <button className="admin-btn-xs" onClick={() => update('about.highlights', [...(a.highlights || []), 'New'])}>+ Add</button>
        </div>
      </div>
    </div>
  )
}

/* ─── Services Editor ─── */
function ServicesEditor({ data, update }) {
  return (
    <div>
      <ArrayEditor
        items={data.services}
        onChange={(v) => update('services', v)}
        labelKey="title"
        fields={[
          { key: 'title', label: 'Title' },
          { key: 'icon', label: 'Icon (fa-...)', default: 'fa-wrench' },
          { key: 'short', label: 'Short Description', type: 'textarea' },
          { key: 'details', label: 'Details', type: 'array' },
        ]}
      />
    </div>
  )
}

/* ─── Projects Editor ─── */
function ProjectsEditor({ data, update }) {
  return (
    <div>
      <ArrayEditor
        items={data.projects}
        onChange={(v) => update('projects', v)}
        labelKey="title"
        fields={[
          { key: 'title', label: 'Title' },
          { key: 'desc', label: 'Description', type: 'textarea' },
          { key: 'tags', label: 'Tags', type: 'array' },
          { key: 'liveUrl', label: 'Live URL' },
          { key: 'githubUrl', label: 'GitHub URL' },
          { key: 'img', label: 'Image Path', type: 'image' },
        ]}
      />
    </div>
  )
}

/* ─── Skills Editor ─── */
function SkillsEditor({ data, update }) {
  const serialize = (skills) => skills.map((s) => `${s.name}:${s.level}`).join('\n')
  const deserialize = (text) => text.split('\n').filter(Boolean).map((line) => {
    const [name = '', level = '50'] = line.split(':')
    return { name: name.trim(), level: parseInt(level) || 50 }
  })
  const updateCategory = (idx, field, val) => {
    const next = [...data.skills]
    next[idx] = { ...next[idx], [field]: val }
    update('skills', next)
  }
  return (
    <div>
      {data.skills.map((cat, i) => (
        <div key={i} className="admin-array-item" style={{ marginBottom: 12 }}>
          <div className="admin-array-item-header">
            <span>{cat.title}</span>
            <button className="admin-btn-xs" onClick={() => {
              if (confirm('Remove this category and its skills?'))
                update('skills', data.skills.filter((_, j) => j !== i))
            }} style={{ color: '#ef4444' }}><i className="fa-solid fa-trash"></i></button>
          </div>
          <div className="admin-field" style={{ marginBottom: 8 }}>
            <label>Category Name</label>
            <input type="text" value={cat.title} onChange={(e) => updateCategory(i, 'title', e.target.value)} />
          </div>
          <div className="admin-field" style={{ marginBottom: 0 }}>
            <label>Skills (name:level per line)</label>
            <textarea rows={6} value={serialize(cat.skills)} onChange={(e) => updateCategory(i, 'skills', deserialize(e.target.value))} placeholder="React:85&#10;HTML:95" />
          </div>
        </div>
      ))}
      <button className="admin-btn admin-btn-secondary" onClick={() => update('skills', [...data.skills, { title: 'New Category', skills: [{ name: 'New Skill', level: 50 }] }])}>
        <i className="fa-solid fa-plus"></i> Add Category
      </button>
      <p className="admin-hint"><i className="fa-solid fa-info-circle"></i> Format: <code>SkillName:Level</code> (one per line)</p>
    </div>
  )
}

/* ─── Certifications Editor ─── */
function CertsEditor({ data, update }) {
  return (
    <div>
      <ArrayEditor
        items={data.certifications}
        onChange={(v) => update('certifications', v)}
        labelKey="label"
        fields={[
          { key: 'label', label: 'Certificate Name' },
          { key: 'img', label: 'Image Path', type: 'image' },
          { key: 'viewUrl', label: 'PDF URL' },
          { key: 'downloadUrl', label: 'Download URL' },
        ]}
      />
    </div>
  )
}

/* ─── Gallery Editor ─── */
function GalleryEditor({ data, update }) {
  const editCategory = (cat, items) => update(`gallery.${cat}`, items)
  const catConfig = (cat, label) => ({
    items: data.gallery[cat],
    onChange: (v) => editCategory(cat, v),
    labelKey: 'caption',
    fields: [
      { key: 'src', label: 'Image Path', type: 'image' },
      { key: 'caption', label: 'Caption' },
      { key: 'description', label: 'Description', type: 'textarea' },
    ],
  })
  return (
    <div>
      <h4 className="admin-subtitle">Presentations</h4>
      <ArrayEditor {...catConfig('presentations', 'Presentations')} />
      <h4 className="admin-subtitle" style={{ marginTop: 24 }}>Events</h4>
      <ArrayEditor {...catConfig('events', 'Events')} />
      <h4 className="admin-subtitle" style={{ marginTop: 24 }}>Work</h4>
      <ArrayEditor {...catConfig('work', 'Work')} />
    </div>
  )
}

/* ─── Contact Editor ─── */
function ContactEditor({ data, update }) {
  const c = data.contact
  return (
    <div>
      <TextInput label="Email" value={c.email} onChange={(e) => update('contact.email', e.target.value)} />
      <TextInput label="Phone" value={c.phone} onChange={(e) => update('contact.phone', e.target.value)} />
      <TextInput label="Location" value={c.location} onChange={(e) => update('contact.location', e.target.value)} />
      <TextInput label="Website" value={c.website} onChange={(e) => update('contact.website', e.target.value)} />
      <TextInput label="GitHub" value={c.github} onChange={(e) => update('contact.github', e.target.value)} />
    </div>
  )
}

/* ─── CV Editor ─── */
function CVEditor({ data, update }) {
  const cv = data.cv
  return (
    <div>
      <TextInput label="Name" value={cv.name} onChange={(e) => update('cv.name', e.target.value)} />
      <TextInput label="Role" value={cv.role} onChange={(e) => update('cv.role', e.target.value)} />
      <ImageField label="Profile Image" value={cv.image} onChange={(e) => update('cv.image', e.target.value)} />
      <TextInput label="PDF URL" value={cv.pdfUrl} onChange={(e) => update('cv.pdfUrl', e.target.value)} />
      <h4 className="admin-subtitle">Contact Info</h4>
      <TextInput label="Email" value={cv.contact?.email} onChange={(e) => update('cv.contact.email', e.target.value)} />
      <TextInput label="Phone" value={cv.contact?.phone} onChange={(e) => update('cv.contact.phone', e.target.value)} />
      <TextInput label="Location" value={cv.contact?.location} onChange={(e) => update('cv.contact.location', e.target.value)} />
      <TextInput label="Website" value={cv.contact?.website} onChange={(e) => update('cv.contact.website', e.target.value)} />
      <TextInput label="GitHub" value={cv.contact?.github} onChange={(e) => update('cv.contact.github', e.target.value)} />
    </div>
  )
}
