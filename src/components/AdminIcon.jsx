import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const PASSWORD = 'adolphe@078'

export default function AdminIcon() {
  const [showGate, setShowGate] = useState(false)
  const [input, setInput] = useState('')
  const [error, setError] = useState(false)
  const [shaking, setShaking] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input === PASSWORD) {
      sessionStorage.setItem('admin_authed', 'true')
      navigate('/admin')
    } else {
      setError(true)
      setShaking(true)
      setTimeout(() => setShaking(false), 500)
      setInput('')
    }
  }

  return (
    <>
      <button className="admin-icon" onClick={() => setShowGate(true)} title="Dashboard" aria-label="Admin Dashboard">
        <i className="fa-solid fa-screwdriver-wrench"></i>
      </button>

      {showGate && (
        <div className="password-gate-overlay" onClick={() => { setShowGate(false); setInput(''); setError(false) }}>
          <div className={`password-gate-card ${shaking ? 'shake' : ''}`} onClick={(e) => e.stopPropagation()}>
            <button className="password-gate-close" onClick={() => { setShowGate(false); setInput(''); setError(false) }}>&times;</button>
            <div className="password-gate-lock">
              <i className="fas fa-lock"></i>
            </div>
            <h2>Admin Dashboard</h2>
            <p>Enter password to access the dashboard</p>
            <form onSubmit={handleSubmit}>
              <div className="password-gate-input-wrapper">
                <input
                  type="password"
                  className={`password-gate-input ${error ? 'error' : ''}`}
                  placeholder="Password"
                  value={input}
                  onChange={(e) => { setInput(e.target.value); setError(false) }}
                  autoFocus
                />
                <button type="submit" className="password-gate-btn">
                  <i className="fas fa-arrow-right"></i>
                </button>
              </div>
              {error && <p className="password-gate-error">Incorrect password</p>}
            </form>
          </div>
        </div>
      )}
    </>
  )
}
