'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

/**
 * Button/link that is gently attracted to the cursor (magnetic effect).
 */
export default function MagneticButton({
  children,
  href,
  className = '',
  strength = 0.35,
}: {
  children: React.ReactNode
  href: string
  className?: string
  strength?: number
}) {
  const ref = useRef<HTMLAnchorElement>(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - (rect.left + rect.width / 2)) * strength
    const y = (e.clientY - (rect.top + rect.height / 2)) * strength
    setPos({ x, y })
  }
  const reset = () => setPos({ x: 0, y: 0 })

  return (
    <motion.span
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', stiffness: 250, damping: 18 }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className="inline-block"
    >
      <Link ref={ref} href={href} className={className}>
        {children}
      </Link>
    </motion.span>
  )
}
