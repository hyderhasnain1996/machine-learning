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
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl font-bold mb-6 text-white">
              Research Areas
            </h1>
            <p className="text-xl text-emerald-50 max-w-3xl mx-auto">
              Exploring the frontiers of artificial intelligence and machine
              learning through innovative research and cutting-edge
              applications.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Research Areas Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => {
              const IconComponent = iconMap[area.icon as keyof typeof iconMap];

              return (
                <motion.div
                  key={area.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:shadow-emerald-500/20"
                >
                  <div
                    className={`w-20 h-20 rounded-2xl ${area.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {IconComponent && (
                      <IconComponent className="h-10 w-10 text-white" />
                    )}
                  </div>

                  <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                    {area.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {area.description}
                  </p>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Key Applications:
                    </h4>
                    <ul className="space-y-2">
                      {area.applications.map((application, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-gray-600 dark:text-gray-300"
                        >
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                          {application}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Active Projects:
                    </h4>
                    <div className="space-y-2">
                      {area.projects.map((project, idx) => (
                        <div
                          key={idx}
                          className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3"
                        >
                          <div className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-1">
                            {project.title}
                          </div>
                          <div className="text-xs text-gray-600 dark:text-gray-400">
                            {project.description}
                          </div>
                          <span
                            className={`inline-block mt-2 px-2 py-1 text-xs rounded-full ${
                              project.status === "Active"
                                ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                                : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                            }`}
                          >
                            {project.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Interested in Collaboration?
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              We welcome partnerships with industry, academia, and research
              institutions.
            </p>
            <button className="bg-white text-emerald-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
              Contact Our Research Team
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}