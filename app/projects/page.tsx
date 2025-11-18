'use client'

import { motion } from 'framer-motion'
import { Rocket, MapPin, Sprout, Sun, Home, Car, Building, CheckCircle2, Sparkles, Target, Cpu, Zap, Users, ArrowRight, ExternalLink } from 'lucide-react'
import { currentProjects } from '../data/labData'

const iconMap = {
  MapPin,
  Sprout,
  Sun,
  Home,
  Car,
  Building,
  Rocket
}

export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-950">
      {/* Hero Section with Animated Background */}
      <section className="relative w-full h-[70vh] min-h-[500px] overflow-hidden pt-32 pb-20">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(/mllab.jpeg)`,
          }}
        />

        {/* Dynamic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-900 opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Blinking Accent Dots */}
        <div className="absolute top-20 left-20">
          <span className="relative flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-cyan-500"></span>
          </span>
        </div>
        <div className="absolute bottom-20 right-20">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" style={{ animationDelay: '1s' }}></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
          </span>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/20 backdrop-blur-md rounded-full mb-6 border border-white/30">
              <Rocket className="h-5 w-5 text-cyan-300" />
              <span className="text-sm font-semibold text-cyan-100">Current Projects</span>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-300 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-300"></span>
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-2xl">
              <span className="bg-gradient-to-r from-cyan-300 via-blue-200 to-purple-300 bg-clip-text text-transparent">
                Innovative AI Projects
              </span>
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl mb-8 text-blue-100 max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
              Transforming industries with cutting-edge AI solutions in tourism, agriculture, renewable energy, smart cities, and building management
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mt-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-cyan-300 mb-1">6</div>
                <div className="text-sm text-blue-200">Active Projects</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-purple-300 mb-1">5+</div>
                <div className="text-sm text-blue-200">Industry Partners</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-blue-300 mb-1">100%</div>
                <div className="text-sm text-blue-200">AI-Powered</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-1.5 bg-white rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Projects Grid Section */}
      <section className="py-20 relative">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-10 w-96 h-96 bg-blue-300/20 dark:bg-blue-500/10 rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-purple-300/20 dark:bg-purple-500/10 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-indigo-300/20 dark:bg-indigo-500/10 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-4000"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8">
            {currentProjects.map((project, index) => {
              const IconComponent = iconMap[project.icon as keyof typeof iconMap] || Rocket

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative group"
                >
                  {/* Glowing Border Effect */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} rounded-3xl blur-lg opacity-30 group-hover:opacity-60 transition duration-500`}></div>

                  <div className="relative bg-white dark:bg-slate-800 rounded-3xl shadow-2xl overflow-hidden h-full flex flex-col">
                    {/* Image Header */}
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-70`}></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                      {/* Floating Icon */}
                      <div className="absolute top-6 left-6">
                        <div className="relative">
                          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300`}>
                            <IconComponent className="h-8 w-8 text-white" />
                          </div>
                          {/* Pulsing Ring */}
                          <div className="absolute inset-0 rounded-2xl border-2 border-white opacity-0 group-hover:opacity-50 group-hover:scale-110 transition-all duration-300 animate-pulse"></div>
                        </div>
                      </div>

                      {/* Status Badge */}
                      <div className="absolute top-6 right-6">
                        <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
                          </span>
                          <span className="text-white text-sm font-semibold">{project.status}</span>
                        </div>
                      </div>

                      {/* Category Badge */}
                      <div className="absolute bottom-6 left-6">
                        <span className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-semibold border border-white/30">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 flex-1 flex flex-col">
                      {/* Title */}
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all leading-tight">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="mb-6">
                        <div className="flex items-center gap-2 mb-3">
                          <Cpu className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                          <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wide">
                            Technologies
                          </h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.slice(0, 4).map((tech, idx) => (
                            <span
                              key={idx}
                              className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 text-blue-700 dark:text-blue-300 text-xs px-3 py-1.5 rounded-full font-medium border border-blue-200 dark:border-blue-700"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 4 && (
                            <span className="text-xs text-gray-500 dark:text-gray-400 px-2 py-1.5">
                              +{project.technologies.length - 4} more
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Key Objectives Preview */}
                      <div className="mb-6 flex-1">
                        <div className="flex items-center gap-2 mb-3">
                          <Target className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                          <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wide">
                            Key Objectives
                          </h4>
                        </div>
                        <div className="space-y-2">
                          {project.objectives.slice(0, 2).map((objective, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-gray-600 dark:text-gray-300 line-clamp-1">
                                {objective}
                              </span>
                            </div>
                          ))}
                          {project.objectives.length > 2 && (
                            <span className="text-xs text-gray-500 dark:text-gray-400 pl-6">
                              +{project.objectives.length - 2} more objectives
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Partner Info */}
                      {project.partner && (
                        <div className="mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                            <span className="text-sm text-gray-600 dark:text-gray-400">Partner:</span>
                            <span className="text-sm font-semibold text-gray-900 dark:text-white">
                              {project.partner}
                            </span>
                          </div>
                        </div>
                      )}

                      {/* View Details Button */}
                      <button className={`w-full bg-gradient-to-r ${project.gradient} text-white px-6 py-3.5 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 group/btn flex items-center justify-center gap-2 mt-auto`}>
                        <Sparkles className="h-4 w-4" />
                        <span>View Project Details</span>
                        <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-900"></div>

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
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-200 opacity-75" style={{ animationDelay: '1s' }}></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-100"></span>
          </span>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6 border border-white/30">
              <Zap className="h-5 w-5 text-cyan-300" />
              <span className="text-sm font-semibold text-white">Join Our Mission</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-2xl">
              Collaborate on Cutting-Edge AI Projects
            </h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed drop-shadow-lg max-w-2xl mx-auto">
              We welcome partnerships with industry leaders, research institutions, and innovators
              to push the boundaries of AI technology together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="relative group/btn bg-white text-blue-600 px-10 py-4 rounded-full font-bold hover:bg-gray-50 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105">
                <div className="absolute -inset-1 bg-white/50 rounded-full blur opacity-0 group-hover/btn:opacity-75 transition duration-300"></div>
                <span className="relative flex items-center gap-2">
                  Contact Research Team
                  <ExternalLink className="h-5 w-5" />
                </span>
              </button>
              <button className="bg-white/20 backdrop-blur-sm text-white px-10 py-4 rounded-full font-bold hover:bg-white/30 transition-all duration-300 border border-white/30 hover:scale-105">
                Learn More About Our Lab
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
