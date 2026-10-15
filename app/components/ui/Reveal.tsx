'use client'

import { motion } from 'framer-motion'

type Direction = 'up' | 'down' | 'left' | 'right' | 'zoom'

const offset: Record<Direction, { x?: number; y?: number; scale?: number }> = {
  up: { y: 60 },
  down: { y: -60 },
  left: { x: 60 },
  right: { x: -60 },
  zoom: { scale: 0.85 },
}

/**
 * Scroll-triggered reveal. Animates the first time it enters the viewport.
 */
export default function Reveal({
  children,
  direction = 'up',
  delay = 0,
  className = '',
}: {
  children: React.ReactNode
  direction?: Direction
  delay?: number
  className?: string
}) {
  const from = offset[direction]
  return (
    <motion.div
      initial={{ opacity: 0, ...from }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
