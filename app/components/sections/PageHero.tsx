'use client'

import { motion } from 'framer-motion'

interface PageHeroProps {
  title: string
  subtitle?: string
  description?: string
  backgroundImage?: string
  className?: string
  children?: React.ReactNode
}

// Curated AI / machine-learning imagery (Unsplash)
const DEFAULT_AI_IMAGE =
  'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=2070&q=80'

export default function PageHero({
  title,
  subtitle,
  description,
  backgroundImage = DEFAULT_AI_IMAGE,
  className = '',
  children
}: PageHeroProps) {
  return (
    <div className={`relative w-full h-[68vh] min-h-[460px] overflow-hidden ${className}`}>
      {/* Background Image with subtle zoom */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: 'easeOut' }}
      />

      {/* Material Kit layered overlays: dark base + blue/cyan tint */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1f]/85 via-blue-900/70 to-cyan-900/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1f] via-transparent to-[#0a0f1f]/30" />

      {/* Mesh dot grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.18)_1px,transparent_1px)] bg-[length:42px_42px]"></div>
      </div>

      {/* Animated gradient blobs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute -bottom-24 -right-10 w-[28rem] h-[28rem] bg-cyan-500/25 rounded-full blur-3xl animate-blob animation-delay-2000"></div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-cyan-300/40"
            style={{
              width: 4 + (i % 3) * 2,
              height: 4 + (i % 3) * 2,
              left: `${(i * 9.7 + 5) % 100}%`,
              top: `${(i * 13.3 + 8) % 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.7, 0.2],
            }}
            transition={{
              duration: 4 + (i % 4),
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pb-12">
        {subtitle && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-semibold mb-6 border border-white/25 shadow-material-blue">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-300 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
              {subtitle}
            </span>
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-100 to-blue-200 drop-shadow-2xl"
        >
          {title}
        </motion.h1>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg md:text-xl text-blue-50/90 max-w-3xl mb-8 leading-relaxed"
          >
            {description}
          </motion.p>
        )}

        {children && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {children}
          </motion.div>
        )}
      </div>

      {/* Soft fade so page content floats over the hero (Material Kit signature) */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white dark:from-[#0a0f1f] to-transparent z-[5]"></div>
    </div>
  )
}
