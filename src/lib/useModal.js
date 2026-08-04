import { useEffect, useRef } from 'react'

const FOCUSABLE = 'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'

export function useModal(open, onClose, label) {
  const dialogRef = useRef(null)
  const prevFocusRef = useRef(null)
  const onCloseRef = useRef(onClose)

  useEffect(() => {
    onCloseRef.current = onClose
  })

  useEffect(() => {
    if (!open) return
    prevFocusRef.current = document.activeElement
    const dialog = dialogRef.current

    const focusable = () =>
      dialog ? Array.from(dialog.querySelectorAll(FOCUSABLE)).filter((el) => el.offsetParent !== null) : []

    const trap = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        onCloseRef.current()
        return
      }
      if (e.key !== 'Tab') return
      const items = focusable()
      if (items.length === 0) {
        e.preventDefault()
        dialog.focus()
        return
      }
      const first = items[0]
      const last = items[items.length - 1]
      const active = document.activeElement
      if (e.shiftKey && (active === first || active === dialog)) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && active === last) {
        e.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', trap, true)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const focusTimer = setTimeout(() => {
      const target = dialog?.querySelector('input, textarea, button, [tabindex]')
      ;(target || dialog)?.focus()
    }, 0)

    return () => {
      document.removeEventListener('keydown', trap, true)
      document.body.style.overflow = prevOverflow
      clearTimeout(focusTimer)
      prevFocusRef.current?.focus?.()
    }
  }, [open])

  const dialogProps = {
    ref: dialogRef,
    role: 'dialog',
    'aria-modal': 'true',
    'aria-label': label,
  }

  return { dialogProps }
}
