'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import DecryptText from '@/app/components/ui/DecryptText'
import Aurora from '@/app/components/ui/Aurora'
import { Brain, Eye, Shield, Cpu, Sun, TrendingUp } from 'lucide-react'
import { researchAreas } from '../data/labData'
import { useLanguage } from '../i18n/LanguageContext'
import { translations } from '../i18n/translations'

const iconMap = {
  Brain,
  Eye,
  Shield,
  Cpu,
  Sun,
  TrendingUp
}

export default function Research() {
  const { lang } = useLanguage()
  const t = translations[lang]

  // When opened from a homepage card (/research#area-id), land on that area
  // below the fixed menu, after the cards' entrance animation has settled.
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1))
    if (!id) return
    const timer = setTimeout(() => {
      const el = document.getElementById(id)
      if (!el) return
      const top = el.getBoundingClientRect().top + window.scrollY - 110
      window.scrollTo({ top, behavior: 'smooth' })
    }, 900)
    return () => clearTimeout(timer)
  }, [])
  const tr = t.research
  const localizedAreas = t.researchAreas

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[400px] overflow-hidden pt-32 pb-20">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2070&q=80)`,
          }}
        />

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1f]/85 via-blue-900/70 to-cyan-900/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1f] via-transparent to-transparent" />
            <Aurora />

        {/* Decorative animated blobs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/20 rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-sky-400/20 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-cyan-400/20 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-4000"></div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-6xl font-bold mb-6 text-white neon-text drop-shadow-2xl">
              <DecryptText text={tr.heroTitle} />
            </h1>
            <p className="text-xl text-blue-50 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
              {tr.heroDesc}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Research Areas Grid */}
      <section className="py-20 relative">
        {/* Background decorative elements */}
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-blue-200/30 dark:bg-blue-500/10 rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-cyan-200/30 dark:bg-cyan-500/10 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => {
              const IconComponent = iconMap[area.icon as keyof typeof iconMap];
              const localArea = localizedAreas[index];

              return (
                <motion.div
                  key={area.id}
                  id={area.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative group flex scroll-mt-28"
                >
                  {/* Gradient border effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>

                  <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col w-full">
                    {/* Blinking indicator dots */}
                    <div className="absolute -top-2 -right-2 flex items-center gap-2">
                      <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                      </span>
                    </div>

                    {/* Icon and Title Section */}
                    <div className="flex items-center gap-4 mb-6">
                      {/* Icon with enhanced animations */}
                      <div className="relative flex-shrink-0">
                        <div
                          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${area.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                        >
                          {IconComponent && (
                            <IconComponent className="h-8 w-8 text-white" />
                          )}
                        </div>
                        {/* Pulsing ring around icon */}
                        <div className="absolute inset-0 rounded-2xl border-2 border-blue-400 opacity-0 group-hover:opacity-30 group-hover:scale-110 transition-all duration-300 animate-pulse"></div>
                      </div>

                      {/* Title */}
                      <h3 className="text-3xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex-1">
                        {localArea?.title ?? area.title}
                      </h3>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {localArea?.description ?? area.description}
                    </p>

                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                        {tr.applications}:
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                      </h4>
                      <ul className="space-y-2">
                        {(localArea?.applications ?? area.applications).map((application, idx) => (
                          <li
                            key={idx}
                            className="flex items-center text-gray-600 dark:text-gray-300 group/item hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-blue-500 rounded-full mr-3 group-hover/item:scale-125 transition-transform"></div>
                            {application}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                        {tr.activeProjects}:
                        <span className="text-xs px-2 py-0.5 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 rounded-full font-medium">
                          {area.projects.length}
                        </span>
                      </h4>
                      <div className="space-y-3">
                        {area.projects.map((project, idx) => {
                          const localProject = localArea?.projects[idx]
                          const statusLabel = project.status === 'Active' ? tr.active : project.status === 'Completed' ? tr.completed : tr.planning
                          return (
                          <div
                            key={idx}
                            className="relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-xl p-4 hover:shadow-md transition-all duration-300 group/project"
                          >
                            {project.status === "Active" && (
                              <div className="absolute -top-1 -right-1">
                                <span className="relative flex h-3 w-3">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                                </span>
                              </div>
                            )}
                            <div className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-2 group-hover/project:text-blue-600 dark:group-hover/project:text-blue-400 transition-colors">
                              {localProject?.title ?? project.title}
                            </div>
                            <div className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                              {localProject?.description ?? project.description}
                            </div>
                            <span
                              className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs rounded-full font-medium ${
                                project.status === "Active"
                                  ? "bg-gradient-to-r from-sky-100 to-blue-100 text-sky-800 dark:from-sky-900 dark:to-blue-900 dark:text-sky-200"
                                  : "bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-800 dark:from-yellow-900 dark:to-orange-900 dark:text-yellow-200"
                              }`}
                            >
                              {project.status === "Active" && (
                                <span className="relative flex h-1.5 w-1.5">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-600 opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-sky-600"></span>
                                </span>
                              )}
                              {statusLabel}
                            </span>
                          </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-sky-600 to-cyan-600"></div>

        {/* Decorative animated elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-4000"></div>

        {/* Blinking accent dots */}
        <div className="absolute top-10 left-20">
          <span className="relative flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-white"></span>
          </span>
        </div>
        <div className="absolute bottom-10 right-20">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-200 opacity-75" style={{ animationDelay: '1s' }}></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-100"></span>
          </span>
        </div>
        <div className="absolute top-1/2 left-10">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" style={{ animationDelay: '0.5s' }}></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
          </span>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold text-white mb-6 drop-shadow-2xl">
              {lang === 'ko' ? '협력에 관심이 있으신가요?' : 'Interested in Collaboration?'}
            </h2>
            <p className="text-xl text-blue-50 mb-10 leading-relaxed drop-shadow-lg max-w-2xl mx-auto">
              {lang === 'ko'
                ? '산업계, 학계, 연구 기관과의 파트너십을 통해 AI 및 머신러닝의 최전선을 발전시키는 것을 환영합니다.'
                : 'We welcome partnerships with industry, academia, and research institutions to advance the frontiers of AI and machine learning.'}
            </p>
            <button className="relative group/btn bg-white text-blue-600 px-10 py-4 rounded-full font-bold hover:bg-gray-50 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105">
              <div className="absolute -inset-1 bg-white/50 rounded-full blur opacity-0 group-hover/btn:opacity-75 transition duration-300"></div>
              <span className="relative flex items-center gap-2">
                {lang === 'ko' ? '연구팀에 문의하기' : 'Contact Our Research Team'}
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-600 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                </span>
              </span>
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}