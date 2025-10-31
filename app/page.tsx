"use client"

import HeroSlider from "./components/sections/HeroSlider"
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Brain, BookOpen, Users, Award, Eye, Shield, Cpu, Zap, User, ExternalLink } from "lucide-react";
import { researchAreas } from "./data/labData";
import { featuredPublications } from "./data/publications";
import { teamMembers } from "./data/team";
export default function Home() {
  return (
   
    <main>
      <HeroSlider />
      
      {/* Welcome Section */}
      <section className="py-20 bg-gradient-to-br from-white via-emerald-50/30 to-green-50/50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-emerald-700 via-green-600 to-teal-700 bg-clip-text text-transparent">
              Welcome to Machine Learning Lab
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Established in 2003 under the visionary leadership of Dr. Yung-Cheol Byun, our lab at 
              Jeju National University pioneers breakthrough research in artificial intelligence, machine learning, 
              and innovative technology solutions that transform industries and improve lives across the globe.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all group hover:shadow-emerald-500/20"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-green-200 dark:from-emerald-900 dark:to-green-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Brain className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">AI-Powered</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Cutting-edge artificial intelligence and machine learning innovations driving the future
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all group hover:shadow-cyan-500/20"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-100 to-blue-200 dark:from-cyan-900 dark:to-blue-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BookOpen className="h-8 w-8 text-cyan-600 dark:text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Comprehensive</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Complete research ecosystem with publications, team insights, and breakthrough discoveries
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all group hover:shadow-purple-500/20"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-indigo-200 dark:from-purple-900 dark:to-indigo-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Award className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Award-Winning</h3>
              <p className="text-gray-600 dark:text-gray-300">
                International recognition and excellence in research with cutting-edge innovations
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Research Preview */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent">
              Research Excellence
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover our pioneering research in AI and machine learning that's shaping the future of technology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {researchAreas.slice(0, 4).map((area, index) => {
              // Map icons for each research area
              const getIcon = (areaId: string) => {
                switch(areaId) {
                  case 'machine-learning':
                    return <Brain className="h-6 w-6 text-white" />;
                  case 'computer-vision':
                    return <Eye className="h-6 w-6 text-white" />;
                  case 'cybersecurity':
                    return <Shield className="h-6 w-6 text-white" />;
                  case 'iot-edge':
                    return <Cpu className="h-6 w-6 text-white" />;
                  default:
                    return <Zap className="h-6 w-6 text-white" />;
                }
              };

              return (
                <motion.div
                  key={area.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all group hover:shadow-emerald-500/20"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 via-green-600 to-teal-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {getIcon(area.id)}
                  </div>
                  <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                    {area.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {area.description.substring(0, 150)}...
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {area.keywords.slice(0, 3).map((keyword, idx) => (
                      <span key={idx} className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200 text-xs px-2 py-1 rounded-full">
                        {keyword}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center">
            <Link
              href="/research"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-green-600 text-white px-8 py-4 rounded-full font-semibold hover:from-emerald-700 hover:to-green-700 transition-all group transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View All Research
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Publications */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-emerald-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-emerald-700 via-green-600 to-teal-700 bg-clip-text text-transparent">
              Featured Publications
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
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
                className="group bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-emerald-100 dark:border-emerald-800 hover:border-emerald-300 dark:hover:border-emerald-600 transform hover:-translate-y-2"
              >
                {/* Header with badges */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full"></div>
                    <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
                      {publication.year}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="bg-gradient-to-r from-emerald-500 to-green-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                      Featured
                    </span>
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                </div>

                {/* Publication icon/visual */}
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-green-200 dark:from-emerald-900 dark:to-green-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight line-clamp-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {publication.title}
                  </h3>

                  {/* Authors */}
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <User className="h-4 w-4" />
                    <span className="truncate">
                      {publication.authors.slice(0, 2).join(", ")}
                      {publication.authors.length > 2 && ` +${publication.authors.length - 2} more`}
                    </span>
                  </div>

                  {/* Journal */}
                  <div className="flex items-center gap-2 text-sm font-medium text-emerald-600 dark:text-emerald-400">
                    <Award className="h-4 w-4" />
                    <span className="truncate">{publication.journal}</span>
                  </div>

                  {/* Abstract preview */}
                  <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
                    {publication.abstract}
                  </p>
                </div>

                {/* Footer */}
                <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="text-xs text-gray-500 dark:text-gray-400">Impact Factor</div>
                    <div className="bg-gradient-to-r from-emerald-500 to-green-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                      {publication.impactFactor}
                    </div>
                  </div>
                  <button className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors">
                    <ExternalLink className="h-4 w-4" />
                  </button>
                </div>

                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-green-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/publications"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-green-600 text-white px-8 py-4 rounded-full font-semibold hover:from-emerald-700 hover:to-green-700 transition-all group transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View All Publications
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-emerald-50/40 to-green-50/60 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-emerald-700 via-green-600 to-teal-700 bg-clip-text text-transparent">
              Meet Our Lab Director
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Leading cutting-edge research in artificial intelligence and machine learning at Jeju National University
            </p>
          </motion.div>

          {/* Director Spotlight */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-2xl hover:shadow-3xl transition-all duration-300 border border-emerald-100 dark:border-emerald-800">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Photo and Basic Info */}
                <div className="text-center lg:text-left">
                  <div className="relative inline-block mb-6 group">
                    <div className="w-64 h-64 rounded-full mx-auto lg:mx-0 overflow-hidden bg-gradient-to-br from-emerald-400 via-green-500 to-teal-500 p-2 shadow-2xl group-hover:shadow-emerald-500/50 transition-all duration-500">
                      <div className="w-full h-full rounded-full bg-white dark:bg-gray-700 overflow-hidden relative">
                        <img 
                          src="/Prof.png" 
                          alt="Dr. Yung-Cheol Byun"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        {/* Animated Ring */}
                        <div className="absolute inset-0 rounded-full border-2 border-emerald-400 opacity-0 group-hover:opacity-100 animate-pulse"></div>
                      </div>
                    </div>
                    
                    {/* Floating Badge with Animation */}
                    <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-gradient-to-br from-emerald-600 to-green-600 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300 border-4 border-white dark:border-gray-800">
                      <Users className="h-10 w-10 text-white group-hover:animate-bounce" />
                    </div>
                    
                    {/* Status Indicator */}
                    <div className="absolute top-4 right-4 w-6 h-6 bg-green-500 rounded-full border-3 border-white dark:border-gray-700 shadow-lg animate-pulse">
                      <div className="w-full h-full bg-green-400 rounded-full animate-ping"></div>
                    </div>
                    
                    {/* Decorative Elements */}
                    <div className="absolute -top-2 -left-2 w-8 h-8 bg-gradient-to-br from-emerald-300 to-green-400 rounded-full opacity-70 group-hover:scale-125 transition-transform duration-300"></div>
                    <div className="absolute top-8 -right-1 w-4 h-4 bg-gradient-to-br from-teal-300 to-emerald-400 rounded-full opacity-60 group-hover:scale-150 transition-transform duration-500"></div>
                    <div className="absolute -bottom-1 left-8 w-6 h-6 bg-gradient-to-br from-green-300 to-teal-400 rounded-full opacity-50 group-hover:scale-110 transition-transform duration-400"></div>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    Dr. Yung-Cheol Byun
                  </h3>
                  <p className="text-xl text-emerald-600 dark:text-emerald-400 font-semibold mb-4">
                    Professor & Lab Director
                  </p>
                  
                  {/* Education */}
                  <div className="bg-gradient-to-r from-emerald-50 to-green-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-4 mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Education</h4>
                    <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                      <div>🎓 <strong>Ph.D.</strong> Yonsei University (1995)</div>
                      <div>🎓 <strong>M.S.</strong> Yonsei University (2001)</div>
                      <div>🎓 <strong>B.S.</strong> Jeju National University (1993)</div>
                    </div>
                  </div>
                </div>

                {/* Detailed Information */}
                <div className="space-y-6">
                  {/* Bio */}
                  <div>
                    <h4 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent mb-4">
                      About
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      Dr. Yung-Cheol Byun worked as a special lecturer in SAMSUNG Electronics (2000-2001) and 
                      as a senior researcher at ETRI (2001-2003). He joined Jeju National University as an 
                      assistant professor in 2003 and is now an associate professor in the Computer Engineering Department.
                    </p>
                  </div>

                  {/* Research Interests */}
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                      🔬 Research Interests
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        "AI & Machine Learning",
                        "Pattern Recognition", 
                        "LLM & Generative Models",
                        "Deep Learning Applications",
                        "Big Data & Knowledge Discovery",
                        "Time Series Analysis",
                        "Medical Image Processing",
                        "Recommendation Systems"
                      ].map((interest, idx) => (
                        <div key={idx} className="flex items-center gap-2 bg-white dark:bg-gray-700 rounded-lg p-3 shadow-sm border border-emerald-100 dark:border-emerald-800">
                          <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full"></div>
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{interest}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Experience Highlights */}
                  <div className="bg-gradient-to-br from-emerald-600 to-green-600 rounded-2xl p-6 text-white">
                    <h4 className="text-lg font-bold mb-4">🏆 Career Highlights</h4>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold">20+</div>
                        <div className="text-sm opacity-90">Years Experience</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold">ETRI</div>
                        <div className="text-sm opacity-90">Senior Researcher</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold">JNU</div>
                        <div className="text-sm opacity-90">Professor Since 2003</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

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
