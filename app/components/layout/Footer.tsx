'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Brain, Mail, Phone, MapPin, Clock, ExternalLink, ArrowUp, Github, Linkedin, Twitter } from 'lucide-react'
import { labInfo, navigationItems } from '@/app/data/labData'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-950 text-white relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(16,185,129,0.1)_50%,transparent_75%)] bg-[length:60px_60px]"></div>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-3xl"></div>

      {/* Animated Background Elements with Blinking Effect */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Larger blinking dots */}
        <div className="absolute top-20 left-20">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
        </div>
        <div className="absolute top-40 right-32">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" style={{ animationDelay: '0.5s' }}></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
        </div>
        <div className="absolute bottom-32 left-1/3">
          <span className="relative flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" style={{ animationDelay: '1s' }}></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-teal-500"></span>
          </span>
        </div>
        <div className="absolute top-1/2 right-20">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" style={{ animationDelay: '1.5s' }}></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
        </div>
        <div className="absolute bottom-20 right-1/4">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" style={{ animationDelay: '2s' }}></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
        </div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Lab Info */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <div className="flex items-center space-x-4 mb-6 group">
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400 via-green-500 to-teal-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                    <Brain className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-emerald-400/30 rounded-2xl blur-xl animate-pulse"></div>
                  {/* Blinking indicator */}
                  <div className="absolute -top-1 -right-1">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent">
                    {labInfo.name}
                  </h3>
                  <p className="text-emerald-300 text-lg font-medium">{labInfo.university}</p>
                </div>
              </div>
              <p className="text-gray-300 mb-8 leading-relaxed max-w-lg text-lg">
                Pioneering research in artificial intelligence, machine
                learning, and emerging technologies. Our lab focuses on
                developing innovative solutions for healthcare, energy, and
                smart systems that make a positive impact on society.
              </p>

              {/* Contact Info Grid with Enhanced Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3 p-4 bg-gradient-to-br from-gray-800/50 to-gray-800/30 rounded-2xl border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-300 group/card backdrop-blur-sm">
                  <div className="relative">
                    <Phone className="h-5 w-5 text-emerald-400 mt-1 shrink-0 group-hover/card:scale-110 transition-transform" />
                    <div className="absolute inset-0 bg-emerald-400/20 rounded-full blur-md opacity-0 group-hover/card:opacity-100 transition-opacity"></div>
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">Phone</p>
                    <a
                      href={`tel:${labInfo.phone}`}
                      className="text-gray-300 hover:text-emerald-300 transition-colors text-sm"
                    >
                      {labInfo.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-gradient-to-br from-gray-800/50 to-gray-800/30 rounded-2xl border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-300 group/card backdrop-blur-sm">
                  <div className="relative">
                    <Mail className="h-5 w-5 text-emerald-400 mt-1 shrink-0 group-hover/card:scale-110 transition-transform" />
                    <div className="absolute inset-0 bg-emerald-400/20 rounded-full blur-md opacity-0 group-hover/card:opacity-100 transition-opacity"></div>
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">Email</p>
                    <a
                      href={`mailto:${labInfo.email}`}
                      className="text-gray-300 hover:text-emerald-300 transition-colors text-sm break-all"
                    >
                      {labInfo.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-gradient-to-br from-gray-800/50 to-gray-800/30 rounded-2xl border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-300 group/card backdrop-blur-sm">
                  <div className="relative">
                    <Clock className="h-5 w-5 text-emerald-400 mt-1 shrink-0 group-hover/card:scale-110 transition-transform" />
                    <div className="absolute inset-0 bg-emerald-400/20 rounded-full blur-md opacity-0 group-hover/card:opacity-100 transition-opacity"></div>
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">Hours</p>
                    <p className="text-gray-300 text-sm">{labInfo.workingHours}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-gradient-to-br from-gray-800/50 to-gray-800/30 rounded-2xl border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-300 group/card backdrop-blur-sm">
                  <div className="relative">
                    <MapPin className="h-5 w-5 text-emerald-400 mt-1 shrink-0 group-hover/card:scale-110 transition-transform" />
                    <div className="absolute inset-0 bg-emerald-400/20 rounded-full blur-md opacity-0 group-hover/card:opacity-100 transition-opacity"></div>
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">Location</p>
                    <p className="text-gray-300 text-sm">{labInfo.location}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent mb-6 flex items-center gap-2">
                Quick Links
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
              </h4>
              <ul className="space-y-3">
                {navigationItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="flex items-center space-x-2 text-gray-300 hover:text-emerald-300 transition-all duration-300 group p-2 rounded-lg hover:bg-gray-800/50"
                    >
                      <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full group-hover:scale-150 transition-transform"></span>
                      <span className="text-sm font-medium group-hover:translate-x-1 transition-transform">
                        {item.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Research Areas */}
            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent mb-6 flex items-center gap-2">
                Research Focus
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/research"
                    className="text-gray-300 hover:text-emerald-300 transition-all duration-300 flex items-center space-x-3 group p-2 rounded-lg hover:bg-gray-800/50"
                  >
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-0 group-hover:opacity-75 transition-opacity"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400 group-hover:scale-150 transition-transform"></span>
                    </span>
                    <span className="text-sm font-medium">Machine Learning & AI</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/research"
                    className="text-gray-300 hover:text-emerald-300 transition-all duration-300 flex items-center space-x-3 group p-2 rounded-lg hover:bg-gray-800/50"
                  >
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-0 group-hover:opacity-75 transition-opacity"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400 group-hover:scale-150 transition-transform"></span>
                    </span>
                    <span className="text-sm font-medium">Computer Vision</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/research"
                    className="text-gray-300 hover:text-emerald-300 transition-all duration-300 flex items-center space-x-3 group p-2 rounded-lg hover:bg-gray-800/50"
                  >
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-0 group-hover:opacity-75 transition-opacity"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-400 group-hover:scale-150 transition-transform"></span>
                    </span>
                    <span className="text-sm font-medium">LLM & Generative AI</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/research"
                    className="text-gray-300 hover:text-emerald-300 transition-all duration-300 flex items-center space-x-3 group p-2 rounded-lg hover:bg-gray-800/50"
                  >
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-0 group-hover:opacity-75 transition-opacity"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400 group-hover:scale-150 transition-transform"></span>
                    </span>
                    <span className="text-sm font-medium">IoT & Edge Computing</span>
                  </Link>
                </li>
              </ul>

              {/* Social Links */}
              <div className="mt-8">
                <h4 className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent mb-4 flex items-center gap-2">
                  Connect With Us
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                  </span>
                </h4>
                <div className="flex space-x-3">
                  <a
                    href="#"
                    className="relative p-3 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl text-gray-300 hover:text-white hover:from-emerald-600 hover:to-green-600 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-emerald-500/50 group/social"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5 relative z-10" />
                    <div className="absolute inset-0 bg-emerald-400/20 rounded-xl blur opacity-0 group-hover/social:opacity-100 transition-opacity"></div>
                  </a>
                  <a
                    href="#"
                    className="relative p-3 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl text-gray-300 hover:text-white hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-blue-500/50 group/social"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5 relative z-10" />
                    <div className="absolute inset-0 bg-blue-400/20 rounded-xl blur opacity-0 group-hover/social:opacity-100 transition-opacity"></div>
                  </a>
                  <a
                    href="#"
                    className="relative p-3 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl text-gray-300 hover:text-white hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-cyan-500/50 group/social"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-5 w-5 relative z-10" />
                    <div className="absolute inset-0 bg-cyan-400/20 rounded-xl blur opacity-0 group-hover/social:opacity-100 transition-opacity"></div>
                  </a>
                  <a
                    href={`mailto:${labInfo.email}`}
                    className="relative p-3 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl text-gray-300 hover:text-white hover:from-green-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-green-500/50 group/social"
                    aria-label="Email"
                  >
                    <Mail className="h-5 w-5 relative z-10" />
                    <div className="absolute inset-0 bg-green-400/20 rounded-xl blur opacity-0 group-hover/social:opacity-100 transition-opacity"></div>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Address */}
          <motion.div
            variants={itemVariants}
            className="mt-12 pt-8 border-t border-gradient-to-r from-transparent via-gray-700 to-transparent"
          >
            <div className="flex items-start space-x-4 max-w-3xl p-6 bg-gradient-to-br from-gray-800/40 to-gray-800/20 rounded-2xl border border-gray-700/50 backdrop-blur-sm hover:border-emerald-500/50 transition-all duration-300 group/address">
              <div className="relative">
                <MapPin className="h-6 w-6 text-emerald-400 mt-1 shrink-0 group-hover/address:scale-110 transition-transform" />
                <div className="absolute inset-0 bg-emerald-400/20 rounded-full blur-md opacity-0 group-hover/address:opacity-100 transition-opacity"></div>
              </div>
              <div>
                <h4 className="font-bold text-xl bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent mb-3 flex items-center gap-2">
                  Address
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                </h4>
                <p className="text-gray-300 leading-relaxed text-base">
                  {labInfo.address}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800/50 bg-gradient-to-b from-gray-950/80 to-black/90 backdrop-blur-sm relative">
          {/* Decorative gradient line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-50"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center sm:text-left"
              >
                <p className="text-gray-400 font-medium">
                  © {new Date().getFullYear()} {labInfo.name},{" "}
                  {labInfo.university}. All rights reserved.
                </p>
                <p className="text-sm text-gray-500 mt-2 flex items-center justify-center sm:justify-start gap-2">
                  <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-xs font-semibold border border-emerald-500/20">
                    Established {labInfo.established}
                  </span>
                  <span>•</span>
                  <span>Building the future through AI research</span>
                </p>
              </motion.div>

              {/* Back to Top Button */}
              <motion.button
                onClick={scrollToTop}
                className="relative group bg-gradient-to-br from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white p-4 rounded-2xl transition-all duration-300 transform hover:scale-110 shadow-xl hover:shadow-2xl hover:shadow-emerald-500/50"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Back to top"
              >
                <ArrowUp className="h-5 w-5 group-hover:-translate-y-1 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-emerald-400/30 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                {/* Blinking indicator */}
                <div className="absolute -top-1 -right-1">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-300"></span>
                  </span>
                </div>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}