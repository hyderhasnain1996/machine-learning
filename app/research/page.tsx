'use client'

import { motion } from 'framer-motion'
import { Brain, Eye, Shield, Cpu } from 'lucide-react'
import { researchAreas } from '../data/labData'

const iconMap = {
  Brain,
  Eye,
  Shield,
  Cpu
}

export default function Research() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[400px] overflow-hidden pt-32 pb-20">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(/mllab.jpeg)`,
          }}
        />

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-green-600 to-teal-700 opacity-85" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        {/* Decorative animated blobs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-400/20 rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-green-400/20 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-teal-400/20 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-4000"></div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-6xl font-bold mb-6 text-white drop-shadow-2xl">
              Research Areas
            </h1>
            <p className="text-xl text-emerald-50 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
              Exploring the frontiers of artificial intelligence and machine
              learning through innovative research and cutting-edge
              applications.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Research Areas Grid */}
      <section className="py-20 relative">
        {/* Background decorative elements */}
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-emerald-200/30 dark:bg-emerald-500/10 rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-teal-200/30 dark:bg-teal-500/10 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => {
              const IconComponent = iconMap[area.icon as keyof typeof iconMap];

              return (
                <motion.div
                  key={area.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative group flex"
                >
                  {/* Gradient border effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>

                  <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col w-full">
                    {/* Blinking indicator dots */}
                    <div className="absolute -top-2 -right-2 flex items-center gap-2">
                      <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
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
                        <div className="absolute inset-0 rounded-2xl border-2 border-emerald-400 opacity-0 group-hover:opacity-30 group-hover:scale-110 transition-all duration-300 animate-pulse"></div>
                      </div>

                      {/* Title */}
                      <h3 className="text-3xl font-bold text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors flex-1">
                        {area.title}
                      </h3>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {area.description}
                    </p>

                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                        Key Applications:
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                      </h4>
                      <ul className="space-y-2">
                        {area.applications.map((application, idx) => (
                          <li
                            key={idx}
                            className="flex items-center text-gray-600 dark:text-gray-300 group/item hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full mr-3 group-hover/item:scale-125 transition-transform"></div>
                            {application}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                        Active Projects:
                        <span className="text-xs px-2 py-0.5 bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300 rounded-full font-medium">
                          {area.projects.length}
                        </span>
                      </h4>
                      <div className="space-y-3">
                        {area.projects.map((project, idx) => (
                          <div
                            key={idx}
                            className="relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-xl p-4 hover:shadow-md transition-all duration-300 group/project"
                          >
                            {/* Blinking status indicator for active projects */}
                            {project.status === "Active" && (
                              <div className="absolute -top-1 -right-1">
                                <span className="relative flex h-3 w-3">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                </span>
                              </div>
                            )}
                            <div className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-2 group-hover/project:text-emerald-600 dark:group-hover/project:text-emerald-400 transition-colors">
                              {project.title}
                            </div>
                            <div className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                              {project.description}
                            </div>
                            <span
                              className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs rounded-full font-medium ${
                                project.status === "Active"
                                  ? "bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 dark:from-green-900 dark:to-emerald-900 dark:text-green-200"
                                  : "bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-800 dark:from-yellow-900 dark:to-orange-900 dark:text-yellow-200"
                              }`}
                            >
                              {project.status === "Active" && (
                                <span className="relative flex h-1.5 w-1.5">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-600 opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-600"></span>
                                </span>
                              )}
                              {project.status}
                            </span>
                          </div>
                        ))}
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
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-green-600 to-teal-600"></div>

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
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-200 opacity-75" style={{ animationDelay: '1s' }}></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-100"></span>
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
              Interested in Collaboration?
            </h2>
            <p className="text-xl text-emerald-50 mb-10 leading-relaxed drop-shadow-lg max-w-2xl mx-auto">
              We welcome partnerships with industry, academia, and research
              institutions to advance the frontiers of AI and machine learning.
            </p>
            <button className="relative group/btn bg-white text-emerald-600 px-10 py-4 rounded-full font-bold hover:bg-gray-50 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105">
              {/* Button glow effect */}
              <div className="absolute -inset-1 bg-white/50 rounded-full blur opacity-0 group-hover/btn:opacity-75 transition duration-300"></div>
              <span className="relative flex items-center gap-2">
                Contact Our Research Team
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-600 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
                </span>
              </span>
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}