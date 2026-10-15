'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * A futuristic glow + trailing ring that follows the cursor.
 * Disabled on touch / coarse-pointer devices.
 */
export default function CursorGlow() {
  const dot = useRef<HTMLDivElement>(null)
  const ring = useRef<HTMLDivElement>(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return
    setEnabled(true)

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const ringPos = { ...pos }
    let raf = 0

    const onMove = (e: MouseEvent) => {
      pos.x = e.clientX
      pos.y = e.clientY
      if (dot.current) {
        dot.current.style.transform = `translate(${pos.x}px, ${pos.y}px)`
      }
    }
    const onDown = () => ring.current?.classList.add('scale-75')
    const onUp = () => ring.current?.classList.remove('scale-75')

    const loop = () => {
      ringPos.x += (pos.x - ringPos.x) * 0.18
      ringPos.y += (pos.y - ringPos.y) * 0.18
      if (ring.current) {
        ring.current.style.transform = `translate(${ringPos.x}px, ${ringPos.y}px)`
      }
      raf = requestAnimationFrame(loop)
    }
    loop()

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
    }
  }, [])

  if (!enabled) return null

  return (
    <>
      {/* soft glow */}
      <div
        ref={dot}
        className="pointer-events-none fixed left-0 top-0 z-[90] -ml-[110px] -mt-[110px] h-[220px] w-[220px] rounded-full opacity-60 blur-3xl"
        style={{
          background:
            'radial-gradient(circle, rgba(6,182,212,0.45) 0%, rgba(37,99,235,0.18) 40%, transparent 70%)',
          mixBlendMode: 'screen',
        }}
      />
      {/* trailing ring */}
      <div
        ref={ring}
        className="pointer-events-none fixed left-0 top-0 z-[91] -ml-4 -mt-4 h-8 w-8 rounded-full border border-cyan-300/70 transition-transform duration-150 ease-out"
        style={{ boxShadow: '0 0 14px rgba(6,182,212,0.6)' }}
      />
    </>
  )
}
