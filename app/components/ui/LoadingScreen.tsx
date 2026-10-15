'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Brain } from 'lucide-react'

/**
 * Futuristic boot / loading screen shown once per browser session.
 */
export default function LoadingScreen() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (sessionStorage.getItem('ml-lab-booted')) return
    setShow(true)
    sessionStorage.setItem('ml-lab-booted', '1')
    const t = setTimeout(() => setShow(false), 2200)
    return () => clearTimeout(t)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6 } }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#070b16]"
        >
          {/* grid backdrop */}
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.18)_1px,transparent_1px)] bg-[length:34px_34px]" />

          {/* assembling logo */}
          <motion.div
            initial={{ scale: 0.6, opacity: 0, rotate: -20 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 0.7, ease: 'backOut' }}
            className="relative mb-8"
          >
            <div className="absolute inset-0 rounded-3xl bg-cyan-400/40 blur-2xl animate-pulse" />
            <div className="relative w-24 h-24 rounded-3xl bg-gradient-to-br from-blue-500 via-cyan-500 to-sky-500 flex items-center justify-center shadow-[0_0_40px_rgba(6,182,212,0.6)]">
              <Brain className="h-12 w-12 text-white" />
            </div>
            {/* orbiting ring */}
            <div className="absolute -inset-4 rounded-full border border-cyan-400/40 border-dashed animate-spin" style={{ animationDuration: '4s' }} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-cyan-200 font-bold tracking-[0.3em] text-sm uppercase neon-text"
          >
            Machine Learning Lab
          </motion.div>

          {/* progress bar */}
          <div className="mt-6 h-1 w-56 overflow-hidden rounded-full bg-white/10">
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '0%' }}
              transition={{ duration: 1.8, ease: 'easeInOut' }}
              className="h-full w-full bg-gradient-to-r from-blue-500 via-cyan-400 to-sky-400"
            />
          </div>
          <p className="mt-3 text-xs text-blue-300/70 tracking-widest">INITIALIZING NEURAL CORE…</p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
