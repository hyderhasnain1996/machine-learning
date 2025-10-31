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
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] bg-repeat"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => {
          // Pre-calculated deterministic values to avoid hydration mismatch
          const positions = [
            { x: 10, y: 20, left: 15, top: 25 },
            { x: -15, y: 10, left: 45, top: 60 },
            { x: 20, y: -10, left: 75, top: 30 },
            { x: -10, y: 15, left: 20, top: 80 },
            { x: 15, y: -20, left: 65, top: 15 },
            { x: -20, y: 5, left: 35, top: 70 },
            { x: 25, y: -15, left: 85, top: 45 },
            { x: -5, y: 20, left: 55, top: 10 },
            { x: 10, y: -25, left: 25, top: 55 },
            { x: -25, y: 10, left: 70, top: 35 },
            { x: 20, y: -5, left: 40, top: 75 },
            { x: -15, y: 25, left: 80, top: 20 },
            { x: 5, y: -15, left: 30, top: 65 },
            { x: -20, y: 15, left: 60, top: 40 },
            { x: 15, y: -10, left: 90, top: 85 },
          ];
          const durations = [
            4, 5, 3.5, 6, 4.5, 5.5, 3, 4.8, 5.2, 6.5, 3.8, 4.2, 5.8, 3.3, 4.7,
          ];

          const pos = positions[i] || positions[0];
          const duration = durations[i] || 4;

          return (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-emerald-400/30 rounded-full"
              animate={{
                x: [0, pos.x],
                y: [0, pos.y],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: duration,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                left: `${pos.left}%`,
                top: `${pos.top}%`,
              }}
            />
          );
        })}
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
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <Brain className="h-10 w-10 text-emerald-400" />
                  <div className="absolute inset-0 bg-emerald-400/20 rounded-full blur-lg"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {labInfo.name}
                  </h3>
                  <p className="text-emerald-300">{labInfo.university}</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed max-w-lg">
                Pioneering research in artificial intelligence, machine
                learning, and emerging technologies. Our lab focuses on
                developing innovative solutions for healthcare, energy, and
                smart systems that make a positive impact on society.
              </p>

              {/* Contact Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-emerald-400 mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold text-white">Phone</p>
                    <a
                      href={`tel:${labInfo.phone}`}
                      className="text-gray-300 hover:text-emerald-300 transition-colors"
                    >
                      {labInfo.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-emerald-400 mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold text-white">Email</p>
                    <a
                      href={`mailto:${labInfo.email}`}
                      className="text-gray-300 hover:text-emerald-300 transition-colors"
                    >
                      {labInfo.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-emerald-400 mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold text-white">Hours</p>
                    <p className="text-gray-300">{labInfo.workingHours}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-emerald-400 mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold text-white">Location</p>
                    <p className="text-gray-300">{labInfo.location}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold text-white mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {navigationItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="flex items-center space-x-2 text-gray-300 hover:text-emerald-300 transition-colors group"
                    >
                      <span className="text-sm group-hover:translate-x-1 transition-transform">
                        {item.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Research Areas */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold text-white mb-6">
                Research Focus
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/research"
                    className="text-gray-300 hover:text-emerald-300 transition-colors flex items-center space-x-2 group"
                  >
                    <span className="w-2 h-2 bg-emerald-400 rounded-full group-hover:scale-125 transition-transform"></span>
                    <span>Machine Learning & AI</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/research"
                    className="text-gray-300 hover:text-emerald-300 transition-colors flex items-center space-x-2 group"
                  >
                    <span className="w-2 h-2 bg-green-400 rounded-full group-hover:scale-125 transition-transform"></span>
                    <span>Medical Image Analysis</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/research"
                    className="text-gray-300 hover:text-emerald-300 transition-colors flex items-center space-x-2 group"
                  >
                    <span className="w-2 h-2 bg-teal-400 rounded-full group-hover:scale-125 transition-transform"></span>
                    <span>Blockchain Technology</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/research"
                    className="text-gray-300 hover:text-emerald-300 transition-colors flex items-center space-x-2 group"
                  >
                    <span className="w-2 h-2 bg-cyan-400 rounded-full group-hover:scale-125 transition-transform"></span>
                    <span>IoT & Edge Computing</span>
                  </Link>
                </li>
              </ul>

              {/* Social Links */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-white mb-4">
                  Connect With Us
                </h4>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="p-3 bg-gray-800 rounded-full text-gray-300 hover:text-white hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="p-3 bg-gray-800 rounded-full text-gray-300 hover:text-white hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="p-3 bg-gray-800 rounded-full text-gray-300 hover:text-white hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a
                    href={`mailto:${labInfo.email}`}
                    className="p-3 bg-gray-800 rounded-full text-gray-300 hover:text-white hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
                    aria-label="Email"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Address */}
          <motion.div
            variants={itemVariants}
            className="mt-12 pt-8 border-t border-gray-800"
          >
            <div className="flex items-start space-x-3 max-w-2xl">
              <MapPin className="h-5 w-5 text-blue-400 mt-1 shrink-0" />
              <div>
                <h4 className="font-semibold text-white mb-2">Address</h4>
                <p className="text-gray-300 leading-relaxed">
                  {labInfo.address}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 bg-gray-950/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center sm:text-left"
              >
                <p className="text-gray-400">
                  © {new Date().getFullYear()} {labInfo.name},{" "}
                  {labInfo.university}. All rights reserved.
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Established {labInfo.established} • Building the future
                  through AI research
                </p>
              </motion.div>

              {/* Back to Top Button */}
              <motion.button
                onClick={scrollToTop}
                className="group bg-emerald-600 hover:bg-emerald-700 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Back to top"
              >
                <ArrowUp className="h-5 w-5 group-hover:-translate-y-1 transition-transform" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}