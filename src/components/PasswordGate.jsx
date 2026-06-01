import { useState, useEffect, useCallback } from 'react'

const PASSWORD = 'adolphe@078'

export default function PasswordGate({ children }) {
  const [inspectorMode, setInspectorMode] = useState(false)
  const [input, setInput] = useState('')
  const [error, setError] = useState(false)
  const [shaking, setShaking] = useState(false)
  const [showGate, setShowGate] = useState(false)

  const attemptInspect = useCallback(() => {
    if (!inspectorMode) {
      setShowGate(true)
    }
  }, [inspectorMode])

  useEffect(() => {
    if (inspectorMode) return

    const block = (e) => {
      if (e.key === 'F12') { e.preventDefault(); attemptInspect(); return false }
      if (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(e.key.toUpperCase())) { e.preventDefault(); attemptInspect(); return false }
      if (e.ctrlKey && e.key.toUpperCase() === 'U') { e.preventDefault(); attemptInspect(); return false }
    }
    const blockContext = (e) => { e.preventDefault(); attemptInspect() }

    document.addEventListener('keydown', block)
    document.addEventListener('contextmenu', blockContext)

    let devtoolsInterval = null
    const threshold = 160
    const emit = () => { attemptInspect() }

    devtoolsInterval = setInterval(() => {
      const width = window.outerWidth - window.innerWidth
      const height = window.outerHeight - window.innerHeight
      if (width > threshold || height > threshold) {
        emit()
      }
    }, 1000)

    return () => {
      document.removeEventListener('keydown', block)
      document.removeEventListener('contextmenu', blockContext)
      if (devtoolsInterval) clearInterval(devtoolsInterval)
    }
  }, [inspectorMode, attemptInspect])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input === PASSWORD) {
      setInspectorMode(true)
      setShowGate(false)
      setError(false)
    } else {
      setError(true)
      setShaking(true)
      setTimeout(() => setShaking(false), 500)
      setInput('')
    }
  }

  const handleClose = () => {
    setShowGate(false)
    setInput('')
    setError(false)
  }

  return (
    <>
      {children}
      {showGate && (
        <div className="password-gate-overlay" onClick={handleClose}>
          <div className={`password-gate-card ${shaking ? 'shake' : ''}`} onClick={(e) => e.stopPropagation()}>
            <button className="password-gate-close" onClick={handleClose}>&times;</button>
            <div className="password-gate-lock">
              <i className="fas fa-lock"></i>
            </div>
            <h2>Inspection Restricted</h2>
            <p>Enter password to enable inspection tools</p>
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
