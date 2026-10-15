'use client'

import { useEffect } from 'react'

/**
 * Spawns an expanding neon ripple at the cursor on every click.
 */
export default function ClickRipple() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const ripple = document.createElement('span')
      const size = 16
      ripple.style.position = 'fixed'
      ripple.style.left = `${e.clientX - size / 2}px`
      ripple.style.top = `${e.clientY - size / 2}px`
      ripple.style.width = `${size}px`
      ripple.style.height = `${size}px`
      ripple.style.borderRadius = '9999px'
      ripple.style.pointerEvents = 'none'
      ripple.style.zIndex = '95'
      ripple.style.border = '2px solid rgba(6,182,212,0.7)'
      ripple.style.boxShadow = '0 0 12px rgba(6,182,212,0.6)'
      ripple.style.animation = 'clickRipple 0.6s ease-out forwards'
      document.body.appendChild(ripple)
      setTimeout(() => ripple.remove(), 650)
    }
    window.addEventListener('click', onClick)
    return () => window.removeEventListener('click', onClick)
  }, [])

  return null
}
