'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'

/**
 * Counts up from 0 to a target when scrolled into view.
 * Supports values like "50+", "200+", "95%", "Global" (non-numeric shown as-is).
 */
export default function AnimatedCounter({
  value,
  duration = 1800,
  className = '',
}: {
  value: string
  duration?: number
  className?: string
}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 })
  const [display, setDisplay] = useState('0')
  const started = useRef(false)

  const match = value.match(/^(\d+)(.*)$/)
  const target = match ? parseInt(match[1], 10) : null
  const suffix = match ? match[2] : ''

  useEffect(() => {
    if (!inView || started.current) return
    started.current = true

    if (target === null) {
      setDisplay(value)
      return
    }

    const start = performance.now()
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.floor(eased * target).toString() + suffix)
      if (progress < 1) requestAnimationFrame(tick)
      else setDisplay(target.toString() + suffix)
    }
    requestAnimationFrame(tick)
  }, [inView, target, suffix, value, duration])

  return (
    <span ref={ref} className={className}>
      {target === null ? value : display}
    </span>
  )
}
