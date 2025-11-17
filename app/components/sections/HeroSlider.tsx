'use client'

import { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Play } from 'lucide-react'
import Link from 'next/link'
import { heroSlides } from '@/app/data/labData'

interface HeroSliderProps {
  autoplay?: boolean
  interval?: number
  showDots?: boolean
  showArrows?: boolean
  className?: string
}

export default function HeroSlider({
  autoplay = true,
  interval = 5000,
  showDots = true,
  showArrows = true,
  className = ""
}: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(autoplay)
  const [progress, setProgress] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    setProgress(0)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
    setProgress(0)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setProgress(0)
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
    setProgress(0)
  }

  useEffect(() => {
    if (!isPlaying) return

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide()
          return 0
        }
        return prev + (100 / (interval / 100))
      })
    }, 100)

    return () => clearInterval(progressInterval)
  }, [isPlaying, currentSlide, interval])

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    })
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  // Deterministic seeded RNG to avoid hydration mismatches between server and client.
  // We base the seed on the currentSlide so each slide has a consistent set of particles.
  function mulberry32(seed: number) {
    return function () {
      let t = (seed += 0x6d2b79f5)
      t = Math.imul(t ^ (t >>> 15), t | 1)
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296
    }
  }

  const particles = useMemo(() => {
    const rand = mulberry32(123456 + currentSlide)
    return Array.from({ length: 12 }).map(() => ({
      width: rand() * 6 + 4,
      height: rand() * 6 + 4,
      left: `${Math.round(rand() * 10000) / 100}%`,
      top: `${Math.round(rand() * 10000) / 100}%`,
      x: rand() * 100 - 50,
      y: rand() * 100 - 50,
      scale: rand() * 2 + 0.5,
      duration: rand() * 4 + 3,
    }))
  }, [currentSlide])

  const shapes = useMemo(() => {
    const rand = mulberry32(654321 + currentSlide)
    return Array.from({ length: 6 }).map((_, i) => ({
      width: rand() * 20 + 10,
      height: rand() * 20 + 10,
      left: `${Math.round(rand() * 10000) / 100}%`,
      top: `${Math.round(rand() * 10000) / 100}%`,
      borderRadius: i % 2 === 0 ? '50%' : '0%',
      x: rand() * 50 - 25,
      y: rand() * 50 - 25,
      duration: rand() * 8 + 5,
    }))
  }, [currentSlide])

  return (
    <div
      className={`relative w-full h-screen overflow-hidden py-20 bg-gradient-to-br from-emerald-600 via-green-600 to-teal-700 ${className}`}
    >
      <AnimatePresence initial={false} custom={currentSlide}>
        <motion.div
          key={currentSlide}
          custom={currentSlide}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.6 },
            scale: { duration: 0.6 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              nextSlide();
            } else if (swipe > swipeConfidenceThreshold) {
              prevSlide();
            }
          }}
          className="absolute inset-0 w-full h-full"
        >
          <div className="w-full h-full relative flex items-center justify-center">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${heroSlides[currentSlide].image})`,
              }}
            />

            {/* Multi-layer Gradient Overlays */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${heroSlides[currentSlide].gradient} opacity-85`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />

            {/* Enhanced Background Pattern */}
            <div className="absolute inset-0 opacity-15">
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:30px_30px]"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:50px_50px]"></div>
            </div>

            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
              {particles.map((p, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full bg-white/10"
                  style={{
                    width: p.width,
                    height: p.height,
                    left: p.left,
                    top: p.top,
                    opacity: 0.2,
                  }}
                  animate={{
                    x: [0, p.x],
                    y: [0, p.y],
                    scale: [1, p.scale, 1],
                    opacity: [0.2, 0.8, 0.2],
                  }}
                  transition={{
                    duration: p.duration,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}

              {/* Floating Geometric Shapes */}
              {shapes.map((s, i) => (
                <motion.div
                  key={`shape-${i}`}
                  className="absolute border border-white/20"
                  style={{
                    width: s.width,
                    height: s.height,
                    left: s.left,
                    top: s.top,
                    borderRadius: s.borderRadius,
                  }}
                  animate={{
                    rotate: [0, 360],
                    x: [0, s.x],
                    y: [0, s.y],
                  }}
                  transition={{
                    duration: s.duration,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              ))}
            </div>

            {/* Content */}
            <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="mb-6"
              >
                <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4 border border-white/30">
                  {heroSlides[currentSlide].subtitle}
                </span>
                <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-6 leading-tight bg-gradient-to-r from-white via-white to-white/80 bg-clip-text">
                  {heroSlides[currentSlide].title}
                </h1>
                <p className="text-xl sm:text-2xl lg:text-3xl mb-8 text-white/90 max-w-4xl mx-auto leading-relaxed">
                  {heroSlides[currentSlide].description}
                </p>

                {/* Stats Section */}
                {heroSlides[currentSlide].stats && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="flex flex-wrap justify-center gap-6 mb-8"
                  >
                    {Object.entries(heroSlides[currentSlide].stats).map(
                      ([key, value], index) => (
                        <div key={key} className="text-center">
                          <div className="text-2xl sm:text-3xl font-bold text-white">
                            {value}
                          </div>
                          <div className="text-sm text-white/80 capitalize">
                            {key}
                          </div>
                        </div>
                      )
                    )}
                  </motion.div>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <Link
                  href={heroSlides[currentSlide].link}
                  className="group bg-white text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-2xl hover:shadow-white/20"
                >
                  {heroSlides[currentSlide].cta}
                  <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button
                  onClick={togglePlayPause}
                  className="group bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/30 transition-all duration-300 flex items-center gap-2 border border-white/30"
                >
                  <Play
                    className={`h-5 w-5 ${isPlaying ? "animate-pulse" : ""}`}
                  />
                  {isPlaying ? "Pause" : "Play"} Tour
                </button>
              </motion.div>
            </div>

            {/* Progress Bar */}
            {isPlaying && (
              <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
                <motion.div
                  className="h-full bg-white"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      {showArrows && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 group"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6 group-hover:-translate-x-1 transition-transform" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 group"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </>
      )}

      {/* Dots Navigation */}
      {showDots && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-white scale-125"
                  : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Slide Counter */}
      <div className="absolute top-8 right-8 z-20 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
        {currentSlide + 1} / {heroSlides.length}
      </div>
    </div>
  );
}