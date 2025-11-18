"use client"

import HeroSlider from "./components/sections/HeroSlider"
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Brain, BookOpen, Award, Eye, Shield, Cpu, Zap, User, ExternalLink, GraduationCap } from "lucide-react";
import { researchAreas } from "./data/labData";
import { featuredPublications } from "./data/publications";
export default function Home() {
  return (
   
    <main>
      <HeroSlider />
      
      {/* Welcome Section */}
      <section className="py-20 bg-gradient-to-br from-white via-emerald-50/30 to-green-50/50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-200/20 dark:bg-emerald-500/10 rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-200/20 dark:bg-green-500/10 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-teal-200/20 dark:bg-teal-500/10 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-4000"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            {/* Decorative badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-100 to-green-100 dark:from-emerald-900/30 dark:to-green-900/30 rounded-full mb-6 border border-emerald-200 dark:border-emerald-700">
              <Zap className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
              <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">Innovating Since 2003</span>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.3] px-2">
              <span className="block sm:inline bg-gradient-to-r from-emerald-700 via-green-600 to-teal-700 bg-clip-text text-transparent">
                Welcome to Machine Learning Lab
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Established in 2003 under the visionary leadership of <span className="font-semibold text-emerald-700 dark:text-emerald-400">Prof. Dr. Yung-Cheol Byun</span>, our lab at
              Jeju National University pioneers breakthrough research in artificial intelligence, machine learning,
              and innovative technology solutions that transform industries and improve lives across the globe.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative group"
            >
              {/* Gradient border effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-green-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>

              <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                {/* Blinking indicator */}
                <div className="absolute -top-2 -right-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </span>
                </div>

                <div className="relative w-20 h-20 mb-6 mx-auto">
                  <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 via-green-500 to-teal-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Brain className="h-10 w-10 text-white" />
                  </div>
                  {/* Pulsing ring */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-emerald-400 opacity-0 group-hover:opacity-30 group-hover:scale-110 transition-all duration-300 animate-pulse"></div>
                </div>

                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent text-center">
                  AI-Powered
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-center flex-grow">
                  Cutting-edge artificial intelligence and machine learning innovations driving the future
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative group"
            >
              {/* Gradient border effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>

              <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                {/* Blinking indicator */}
                <div className="absolute -top-2 -right-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
                  </span>
                </div>

                <div className="relative w-20 h-20 mb-6 mx-auto">
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <BookOpen className="h-10 w-10 text-white" />
                  </div>
                  {/* Pulsing ring */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-cyan-400 opacity-0 group-hover:opacity-30 group-hover:scale-110 transition-all duration-300 animate-pulse"></div>
                </div>

                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent text-center">
                  Comprehensive
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-center flex-grow">
                  Complete research ecosystem with publications, team insights, and breakthrough discoveries
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="relative group"
            >
              {/* Gradient border effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>

              <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                {/* Blinking indicator */}
                <div className="absolute -top-2 -right-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
                  </span>
                </div>

                <div className="relative w-20 h-20 mb-6 mx-auto">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-400 via-violet-500 to-indigo-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Award className="h-10 w-10 text-white" />
                  </div>
                  {/* Pulsing ring */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-purple-400 opacity-0 group-hover:opacity-30 group-hover:scale-110 transition-all duration-300 animate-pulse"></div>
                </div>

                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent text-center">
                  Award-Winning
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-center flex-grow">
                  International recognition and excellence in research with cutting-edge innovations
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Research Preview */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden">
        {/* Decorative animated blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-300/20 dark:bg-emerald-500/10 rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-green-300/20 dark:bg-green-500/10 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-teal-300/20 dark:bg-teal-500/10 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-4000"></div>

        {/* Blinking accent dots */}
        <div className="absolute top-10 right-20">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-600"></span>
          </span>
        </div>
        <div className="absolute bottom-10 left-20">
          <span className="relative flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" style={{ animationDelay: '1s' }}></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-green-600"></span>
          </span>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-100 to-green-100 dark:from-emerald-900/30 dark:to-green-900/30 px-4 py-2 rounded-full mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-600 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
              </span>
              <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">Research Areas</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent">
              Research Excellence
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover our pioneering research in AI and machine learning that's shaping the future of technology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {researchAreas.slice(0, 4).map((area, index) => {
              // Map icons for each research area
              const getIcon = (areaId: string) => {
                switch(areaId) {
                  case 'machine-learning':
                    return <Brain className="h-10 w-10 text-white" />;
                  case 'computer-vision':
                    return <Eye className="h-10 w-10 text-white" />;
                  case 'llm-generative':
                    return <Brain className="h-10 w-10 text-white" />;
                  case 'iot-edge':
                    return <Cpu className="h-10 w-10 text-white" />;
                  default:
                    return <Zap className="h-10 w-10 text-white" />;
                }
              };

              return (
                <motion.div
                  key={area.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative group"
                >
                  {/* Gradient border effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>

                  <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer h-full">
                    {/* Blinking status indicator */}
                    <div className="absolute -top-2 -right-2">
                      <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                      </span>
                    </div>

                    <div className="flex items-start gap-6">
                      {/* Enhanced icon with animations */}
                      <div className="relative flex-shrink-0">
                        <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${area.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                          {getIcon(area.id)}
                        </div>
                        {/* Pulsing ring around icon */}
                        <div className="absolute inset-0 rounded-2xl border-2 border-emerald-400 opacity-0 group-hover:opacity-30 group-hover:scale-110 transition-all duration-300 animate-pulse"></div>
                      </div>

                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                          {area.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2 leading-relaxed">
                          {area.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {area.keywords.slice(0, 3).map((keyword, idx) => (
                            <span key={idx} className="text-xs px-3 py-1.5 bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-900/30 dark:to-green-900/30 text-emerald-700 dark:text-emerald-300 rounded-full font-medium group-hover:scale-105 transition-transform">
                              {keyword}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center">
            <Link
              href="/research"
              className="relative inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-green-600 text-white px-10 py-4 rounded-full font-bold hover:from-emerald-700 hover:to-green-700 transition-all shadow-lg hover:shadow-2xl hover:scale-105 group/btn"
            >
              {/* Button glow effect */}
              <div className="absolute -inset-1 bg-emerald-400/50 rounded-full blur opacity-0 group-hover/btn:opacity-75 transition duration-300"></div>
              <span className="relative flex items-center gap-2">
                View All Research
                <ArrowRight className="h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Publications */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-emerald-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
        {/* Decorative animated blobs */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-300/20 dark:bg-emerald-500/10 rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-green-300/20 dark:bg-green-500/10 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-teal-300/20 dark:bg-teal-500/10 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-4000"></div>

        {/* Blinking accent dots */}
        <div className="absolute top-10 left-20">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-600"></span>
          </span>
        </div>
        <div className="absolute bottom-10 right-20">
          <span className="relative flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" style={{ animationDelay: '1s' }}></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-green-600"></span>
          </span>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-100 to-green-100 dark:from-emerald-900/30 dark:to-green-900/30 px-4 py-2 rounded-full mb-6">
              <BookOpen className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
              <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">Latest Research</span>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-600 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-700 via-green-600 to-teal-700 bg-clip-text text-transparent">
              Featured Publications
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Our latest research contributions published in top-tier journals and conferences
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredPublications.slice(0, 3).map((publication, index) => (
              <motion.div
                key={publication.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative group"
              >
                {/* Gradient border effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>

                <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full flex flex-col">
                  {/* Blinking status indicator */}
                  <div className="absolute -top-2 -right-2">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                    </span>
                  </div>

                  {/* Header with badges */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <div className="relative flex h-2 w-2">
                        <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></div>
                        <div className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></div>
                      </div>
                      <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                        {publication.year}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="bg-gradient-to-r from-emerald-500 to-green-500 text-white text-xs px-3 py-1.5 rounded-full font-bold shadow-lg">
                        Featured
                      </span>
                    </div>
                  </div>

                  {/* Publication icon/visual */}
                  <div className="relative w-20 h-20 mb-6 mx-auto">
                    <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 via-green-500 to-teal-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <BookOpen className="h-10 w-10 text-white" />
                    </div>
                    {/* Pulsing ring */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-emerald-400 opacity-0 group-hover:opacity-30 group-hover:scale-110 transition-all duration-300 animate-pulse"></div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4 flex-grow">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight line-clamp-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {publication.title}
                    </h3>

                    {/* Authors */}
                    <div className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <User className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <span className="line-clamp-2">
                        {publication.authors.slice(0, 2).join(", ")}
                        {publication.authors.length > 2 && ` +${publication.authors.length - 2} more`}
                      </span>
                    </div>

                    {/* Journal */}
                    <div className="flex items-start gap-2">
                      <Award className="h-4 w-4 mt-0.5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                      <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400 line-clamp-2">
                        {publication.journal}
                      </span>
                    </div>

                    {/* Abstract preview */}
                    <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3 leading-relaxed">
                      {publication.abstract}
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="text-xs font-medium text-gray-500 dark:text-gray-400">Impact Factor</div>
                      <div className="bg-gradient-to-r from-emerald-500 to-green-500 text-white text-xs px-3 py-1.5 rounded-full font-bold shadow-md group-hover:scale-105 transition-transform">
                        {publication.impactFactor}
                      </div>
                    </div>
                    <button className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-all hover:scale-110">
                      <ExternalLink className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/publications"
              className="relative inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-green-600 text-white px-10 py-4 rounded-full font-bold hover:from-emerald-700 hover:to-green-700 transition-all shadow-lg hover:shadow-2xl hover:scale-105 group/btn"
            >
              {/* Button glow effect */}
              <div className="absolute -inset-1 bg-emerald-400/50 rounded-full blur opacity-0 group-hover/btn:opacity-75 transition duration-300"></div>
              <span className="relative flex items-center gap-2">
                View All Publications
                <ArrowRight className="h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-200 dark:bg-emerald-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-200 dark:bg-teal-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-green-200 dark:bg-green-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-full mb-4">
              <Award className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
              <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">Leadership</span>
            </div>
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-700 via-green-600 to-teal-700 bg-clip-text text-transparent">
              Lab Director
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Leading cutting-edge research in artificial intelligence and machine learning at Jeju National University
            </p>
          </motion.div>

          {/* Director Card */}
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative group"
            >
              {/* Gradient border effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 rounded-3xl blur-lg opacity-30 group-hover:opacity-60 transition duration-500"></div>

              <div className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden h-full flex flex-col">
                {/* Top gradient bar with blinking indicator */}
                <div className="h-2 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 relative">
                  <div className="absolute -top-1 right-4">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                    </span>
                  </div>
                </div>

                <div className="p-8 flex-1 flex flex-col">
                  {/* Image Section */}
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      {/* Blinking decorative dots around image */}
                      <div className="absolute -top-3 -left-3 w-3 h-3 bg-emerald-400 rounded-full animate-ping opacity-75"></div>
                      <div className="absolute -top-3 -left-3 w-3 h-3 bg-emerald-500 rounded-full"></div>

                      <div className="absolute top-6 -right-4 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>

                      <div className="absolute -bottom-3 left-8 w-4 h-4 bg-teal-400 rounded-full animate-ping opacity-75" style={{ animationDelay: '0.5s' }}></div>
                      <div className="absolute -bottom-3 left-8 w-4 h-4 bg-teal-500 rounded-full"></div>

                      <div className="absolute bottom-12 -right-3 w-2 h-2 bg-green-300 rounded-full animate-ping opacity-75" style={{ animationDelay: '1s' }}></div>
                      <div className="absolute bottom-12 -right-3 w-2 h-2 bg-green-400 rounded-full"></div>

                      {/* Rotating ring effect */}
                      <div className="absolute inset-0 rounded-full border-2 border-emerald-400 border-dashed animate-spin opacity-30" style={{ animationDuration: '20s' }}></div>

                      {/* Circular Image with animated gradient border */}
                      <div className="w-48 h-48 rounded-full overflow-hidden bg-gradient-to-br from-emerald-400 via-green-500 to-teal-500 p-1.5 shadow-2xl group-hover:shadow-emerald-500/50 transition-all duration-500 animate-pulse" style={{ animationDuration: '3s' }}>
                        <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-gray-800 p-1">
                          <img
                            src="/Prof.png"
                            alt="Prof. Dr. Yung-Cheol Byun"
                            className="w-full h-full rounded-full object-cover"
                          />
                        </div>
                      </div>

                      {/* Badge with blinking indicator */}
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-emerald-600 to-green-600 text-white px-5 py-2 rounded-full shadow-xl border-3 border-white dark:border-gray-800 group-hover:scale-105 transition-transform duration-300">
                        <div className="flex items-center gap-2">
                          <Award className="h-4 w-4" />
                          <span className="font-bold text-xs">Lab Director</span>
                          <span className="relative flex h-1.5 w-1.5 ml-1">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white"></span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Name and Title */}
                  <div className="text-center mb-6">
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      Prof. Dr. Yung-Cheol Byun
                    </h3>
                    <p className="text-lg text-emerald-600 dark:text-emerald-400 font-semibold">
                      Professor of Computer Engineering
                    </p>
                  </div>

                  {/* Education & Research */}
                  <div className="space-y-6 flex-1">
                    {/* Education */}
                    <div>
                      <h4 className="flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white mb-3 uppercase tracking-wide">
                        <GraduationCap className="h-4 w-4 text-emerald-600" />
                        Education
                      </h4>
                      <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-start gap-2 p-2.5 bg-emerald-50 dark:bg-gray-700/50 rounded-lg">
                          <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mt-1.5 flex-shrink-0"></div>
                          <div>
                            <p className="font-semibold text-gray-900 dark:text-white text-xs">Ph.D. - Yonsei University (1995)</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2 p-2.5 bg-emerald-50 dark:bg-gray-700/50 rounded-lg">
                          <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mt-1.5 flex-shrink-0"></div>
                          <div>
                            <p className="font-semibold text-gray-900 dark:text-white text-xs">M.S. - Yonsei University (2001)</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2 p-2.5 bg-emerald-50 dark:bg-gray-700/50 rounded-lg">
                          <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mt-1.5 flex-shrink-0"></div>
                          <div>
                            <p className="font-semibold text-gray-900 dark:text-white text-xs">B.S. - Jeju National University (1993)</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Research Interests */}
                    <div>
                      <h4 className="flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white mb-3 uppercase tracking-wide">
                        <Brain className="h-4 w-4 text-emerald-600" />
                        Research Interests
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          "AI & ML",
                          "Pattern Recognition",
                          "LLM Models",
                          "Deep Learning",
                          "Big Data",
                          "Time Series"
                        ].map((interest, idx) => (
                          <div key={idx} className="flex items-center gap-1.5 bg-gradient-to-r from-emerald-50 to-green-50 dark:from-gray-700 dark:to-gray-700/50 rounded-lg px-2.5 py-2 border border-emerald-100 dark:border-emerald-800 hover:from-emerald-100 hover:to-green-100 dark:hover:bg-gray-600 transition-all group/item">
                            <div className="w-1.5 h-1.5 bg-gradient-to-r from-emerald-600 to-green-600 rounded-full flex-shrink-0"></div>
                            <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">{interest}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Google Scholar Button */}
                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <a
                      href="https://scholar.google.com/citations?user=jfGGqJIAAAAJ&hl=ko"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-green-600 text-white px-6 py-3 rounded-full font-semibold hover:from-emerald-700 hover:to-green-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl group/btn"
                    >
                      <BookOpen className="h-4 w-4" />
                      <span className="text-sm">Google Scholar</span>
                      <ExternalLink className="h-4 w-4 group-hover/btn:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/team"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-green-600 text-white px-8 py-4 rounded-full font-semibold hover:from-emerald-700 hover:to-green-700 transition-all group transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View Our Complete Team
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 via-green-600 to-teal-700 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:30px_30px]"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              🚀 Ready to Collaborate?
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              Join us in pushing the boundaries of artificial intelligence and machine learning.
              Whether you're a researcher, student, or industry partner, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-emerald-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                💬 Get in Touch
              </Link>
              <Link
                href="/research"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-emerald-600 transition-all transform hover:scale-105"
              >
                🔬 Explore Research
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
  
}
