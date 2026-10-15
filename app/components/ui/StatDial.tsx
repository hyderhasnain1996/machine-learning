'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'

/**
 * Circular animated progress dial with a count-up number in the center.
 */
export default function StatDial({
  value,
  label,
  percent = 80,
  size = 168,
  delay = 0,
}: {
  value: string
  label: string
  percent?: number
  size?: number
  delay?: number
}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 })
  const [progress, setProgress] = useState(0)
  const [num, setNum] = useState('0')
  const started = useRef(false)

  const stroke = 10
  const r = (size - stroke) / 2
  const circumference = 2 * Math.PI * r

  const match = value.match(/^(\d+)(.*)$/)
  const target = match ? parseInt(match[1], 10) : null
  const suffix = match ? match[2] : ''

  useEffect(() => {
    if (!inView || started.current) return
    started.current = true
    const duration = 1700
    const start = performance.now() + delay

    const tick = (now: number) => {
      if (now < start) {
        requestAnimationFrame(tick)
        return
      }
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setProgress(eased * percent)
      if (target !== null) setNum(Math.floor(eased * target) + suffix)
      if (p < 1) requestAnimationFrame(tick)
      else {
        setProgress(percent)
        if (target !== null) setNum(target + suffix)
      }
    }
    requestAnimationFrame(tick)
  }, [inView, percent, target, suffix, delay])

  return (
    <div ref={ref} className="flex flex-col items-center">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90">
          <defs>
            <linearGradient id={`dial-${label}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="50%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#2563eb" />
            </linearGradient>
          </defs>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            fill="none"
            stroke="rgba(255,255,255,0.12)"
            strokeWidth={stroke}
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            fill="none"
            stroke={`url(#dial-${label})`}
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={circumference - (progress / 100) * circumference}
            style={{ filter: 'drop-shadow(0 0 8px rgba(6,182,212,0.7))' }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-3xl md:text-4xl font-black bg-gradient-to-br from-white to-cyan-200 bg-clip-text text-transparent">
            {target === null ? value : num}
          </span>
        </div>
      </div>
      <div className="mt-4 text-sm font-semibold uppercase tracking-wider text-blue-100">
        {label}
      </div>
    </div>
  )
}
