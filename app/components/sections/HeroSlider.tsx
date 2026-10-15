'use client'

import { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Play } from 'lucide-react'
import Link from 'next/link'
import { heroSlides } from '@/app/data/labData'
import { useLanguage } from '@/app/i18n/LanguageContext'
import { translations } from '@/app/i18n/translations'
import ParticleNetwork from '@/app/components/ui/ParticleNetwork'
import AnimatedCounter from '@/app/components/ui/AnimatedCounter'
import DecryptText from '@/app/components/ui/DecryptText'
import WordRotator from '@/app/components/ui/WordRotator'

// Korean labels/values for the slide stats (keys and non-numeric values come from labData)
const koStatLabels: Record<string, string> = {
  projects: '프로젝트', publications: '논문', collaborations: '협력',
  impact: '영향력', citations: '인용', journals: '저널',
  members: '구성원', experience: '경력', awards: '수상',
  devices: '디바이스', networks: '네트워크', efficiency: '효율',
  researchAreas: '연구 분야', established: '설립',
}
// English labels for keys that don't read well as-is
const enStatLabels: Record<string, string> = {
  researchAreas: 'Research Areas', established: 'Established',
}
const koStatValues: Record<string, string> = {
  Global: '글로벌', High: '높음', 'Top-tier': '최상위', '20+ Years': '20년+', Multiple: '다수',
}
const rotatingWords = {
  en: ['Solar Energy AI', 'Energy Forecasting', 'Computer Vision', 'Edge AI', 'Trustworthy LLMs'],
  ko: ['태양광 에너지 AI', '에너지 예측', '컴퓨터 비전', '엣지 AI', '신뢰할 수 있는 LLM'],
}

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
  const [parallax, setParallax] = useState({ x: 0, y: 0 })
  const { lang } = useLanguage()
  const localSlides = translations[lang].heroSlides

  const handleParallax = (e: React.MouseEvent) => {
    setParallax({
      x: e.clientX / window.innerWidth - 0.5,
      y: e.clientY / window.innerHeight - 0.5,
    })
  }

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
      onMouseMove={handleParallax}
      className={`relative w-full h-screen overflow-hidden py-20 bg-gradient-to-br from-blue-600 via-sky-600 to-cyan-700 ${className}`}
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
              className={`absolute inset-0 bg-gradient-to-br ${heroSlides[currentSlide].gradient} opacity-55`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1f]/90 via-[#0a0f1f]/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />

            {/* Enhanced Background Pattern */}
            <div className="absolute inset-0 opacity-15">
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:30px_30px]"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:50px_50px]"></div>
            </div>

            {/* Interactive neural-network particles (react to cursor) */}
            <div
              className="absolute inset-0"
              style={{ transform: `translate(${parallax.x * 28}px, ${parallax.y * 28}px)` }}
            >
              <ParticleNetwork color="103, 232, 249" density={90} />
            </div>

            {/* Synthwave perspective grid floor */}
            <div className="absolute bottom-0 left-0 right-0 h-1/3 overflow-hidden pointer-events-none">
              <div
                className="grid-floor absolute inset-0"
                style={{ transform: `perspective(420px) rotateX(70deg) translateX(${parallax.x * -40}px)` }}
              ></div>
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
            <div
              className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
              style={{ transform: `translate(${parallax.x * -14}px, ${parallax.y * -14}px)` }}
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="mb-6"
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-md rounded-full text-sm font-medium mb-4 border border-cyan-300/40">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-300 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
                  </span>
                  {localSlides[currentSlide]?.subtitle ?? heroSlides[currentSlide].subtitle}
                </span>
                <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black mb-4 leading-tight text-white neon-text drop-shadow-2xl">
                  <DecryptText key={currentSlide} text={localSlides[currentSlide]?.title ?? heroSlides[currentSlide].title} />
                </h1>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black mb-6 h-[1.4em] flex items-center justify-center gap-3">
                  {lang !== 'ko' && <span className="text-white/70 font-light text-xl sm:text-2xl">Advancing</span>}
                  <WordRotator key={lang} words={rotatingWords[lang]} />
                  {lang === 'ko' && <span className="text-white/70 font-light text-xl sm:text-2xl">연구를 선도합니다</span>}
                </div>
                <p className="text-xl sm:text-2xl lg:text-3xl mb-8 text-white/90 max-w-4xl mx-auto leading-relaxed">
                  {localSlides[currentSlide]?.description ?? heroSlides[currentSlide].description}
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
                      ([key, value]) => (
                        <div
                          key={key}
                          className="text-center px-5 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:border-cyan-300/60 hover:bg-white/15 transition-all duration-300"
                        >
                          <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                            {key === 'established' ? value : <AnimatedCounter value={lang === 'ko' ? (koStatValues[value] ?? value) : value} />}
                          </div>
                          <div className="text-sm text-white/80 capitalize tracking-wide">
                            {lang === 'ko' ? (koStatLabels[key] ?? key) : (enStatLabels[key] ?? key)}
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
                  {localSlides[currentSlide]?.cta ?? heroSlides[currentSlide].cta}
                  <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button
                  onClick={togglePlayPause}
                  className="group bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/30 transition-all duration-300 flex items-center gap-2 border border-white/30"
                >
                  <Play
                    className={`h-5 w-5 ${isPlaying ? "animate-pulse" : ""}`}
                  />
                  {isPlaying ? (lang === 'ko' ? '일시정지' : 'Pause') : (lang === 'ko' ? '재생' : 'Play')} {lang === 'ko' ? '투어' : 'Tour'}
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