'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Brain, Menu, X, Home, Beaker, BookOpen, Users, Newspaper, Mail, Search, Moon, Sun, Camera, Rocket, Sparkles, Zap } from 'lucide-react'
import { useTheme } from 'next-themes'

const navigationItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Research", href: "/research", icon: Beaker },
  { name: "Projects", href: "/projects", icon: Rocket },
  { name: "Publications", href: "/publications", icon: BookOpen },
  { name: "Team", href: "/team", icon: Users },
  { name: "Gallery", href: "/gallery", icon: Camera },
  { name: "News", href: "/news", icon: Newspaper },
  { name: "Contact", href: "/contact", icon: Mail }
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)
  const toggleSearch = () => setSearchOpen(!searchOpen)

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  }

  return (
    <>
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={navVariants}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl shadow-2xl border-b border-emerald-200/30 dark:border-emerald-500/20'
            : 'bg-gradient-to-b from-black/30 via-black/10 to-transparent backdrop-blur-sm'
        }`}
      >
        {/* Futuristic top accent line */}
        <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-500 to-transparent transition-opacity duration-500 ${
          isScrolled ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-emerald-400 to-teal-400 animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Clean Professional Logo */}
            <motion.div variants={itemVariants} className="flex-shrink-0">
              <Link href="/" className="flex items-center gap-3 group">
                {/* Logo Icon */}
                <div className={`relative w-11 h-11 rounded-lg bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500 flex items-center justify-center transition-all duration-300 group-hover:shadow-lg ${
                  isScrolled ? 'shadow-md shadow-emerald-500/30' : 'shadow-lg shadow-white/20'
                }`}>
                  <Brain className="h-6 w-6 text-white" />
                </div>

                {/* Logo Text */}
                <div className="hidden sm:block">
                  <div className={`text-lg font-bold tracking-tight transition-colors duration-300 ${
                    isScrolled
                      ? 'bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent'
                      : 'text-white'
                  }`}>
                    ML Lab JNU
                  </div>
                  <div className={`text-xs font-medium transition-colors duration-300 ${
                    isScrolled ? 'text-gray-500 dark:text-gray-400' : 'text-emerald-100'
                  }`}>
                    Jeju National University
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation - Clean & Professional */}
            <motion.div
              variants={itemVariants}
              className="hidden lg:flex items-center gap-1 bg-white/10 dark:bg-slate-800/30 backdrop-blur-md rounded-full px-2 py-1.5 border border-white/20 dark:border-slate-700/50"
            >
              {navigationItems.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`group relative px-3 py-2 rounded-full transition-all duration-300 flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 text-white shadow-md shadow-emerald-500/40'
                        : isScrolled
                          ? 'text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-slate-700/50'
                          : 'text-white/90 hover:bg-white/20'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="font-medium text-sm">
                      {item.name}
                    </span>
                  </Link>
                )
              })}
            </motion.div>

            {/* Actions - Clean Buttons */}
            <motion.div variants={itemVariants} className="flex items-center gap-2">
              {/* Search Button */}
              <button
                onClick={toggleSearch}
                className={`p-2.5 rounded-lg transition-all duration-300 ${
                  isScrolled
                    ? 'bg-emerald-50 dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-100 dark:hover:bg-slate-700'
                    : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm'
                }`}
                aria-label="Search"
              >
                <Search className="h-5 w-5" />
              </button>

              {/* Theme Toggle */}
              {mounted && (
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className={`p-2.5 rounded-lg transition-all duration-300 ${
                    isScrolled
                      ? 'bg-emerald-50 dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-100 dark:hover:bg-slate-700'
                      : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm'
                  }`}
                  aria-label="Toggle theme"
                >
                  {theme === 'dark' ? (
                    <Sun className="h-5 w-5" />
                  ) : (
                    <Moon className="h-5 w-5" />
                  )}
                </button>
              )}

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMenu}
                className={`lg:hidden p-2.5 rounded-lg transition-all duration-300 ${
                  isScrolled
                    ? 'bg-emerald-50 dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-100 dark:hover:bg-slate-700'
                    : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm'
                }`}
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </motion.div>
          </div>
        </div>

        {/* Mobile Menu - Clean Design */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-t border-emerald-200/30 dark:border-emerald-500/20 shadow-xl"
            >
              <div className="max-w-7xl mx-auto px-4 py-4">
                <div className="space-y-1">
                  {navigationItems.map((item, index) => {
                    const Icon = item.icon
                    const isActive = pathname === item.href

                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          href={item.href}
                          onClick={closeMenu}
                          className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                            isActive
                              ? 'bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 text-white shadow-md shadow-emerald-500/30'
                              : 'bg-gray-50 dark:bg-slate-800/50 text-gray-700 dark:text-gray-300 hover:bg-emerald-100 dark:hover:bg-slate-700'
                          }`}
                        >
                          <Icon className="h-5 w-5" />
                          <span className="font-medium">
                            {item.name}
                          </span>
                        </Link>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Search Overlay */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center pt-20"
            onClick={() => setSearchOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: -50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.9 }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 w-full max-w-2xl mx-4 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center space-x-4">
                <Search className="h-6 w-6 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search publications, research areas, team members..."
                  className="flex-1 text-lg bg-transparent outline-none text-gray-900 dark:text-white placeholder-gray-500"
                  autoFocus
                />
                <button
                  onClick={() => setSearchOpen(false)}
                  className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}