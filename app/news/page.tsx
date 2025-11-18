'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react'

// Mock news data
const newsItems = [
  {
    id: 1,
    title: "Breakthrough in Medical AI: New Deep Learning Model for Cancer Detection",
    excerpt: "Our lab has developed a revolutionary AI system achieving 98% accuracy in early-stage cancer detection through advanced image analysis.",
    date: "2024-12-15",
    category: "Research",
    author: "ML Lab Team",
    readTime: "4 min read",
    image: "/mllab.jpeg",
    tags: ["Medical AI", "Cancer Detection", "Deep Learning"]
  },
  {
    id: 2,
    title: "International Recognition: Best Paper Award at NeurIPS 2024",
    excerpt: "Our groundbreaking research on efficient neural networks for edge computing has received the prestigious Best Paper Award at NeurIPS 2024.",
    date: "2024-12-10",
    category: "Achievement",
    author: "Prof. Yung-Cheol Byun",
    readTime: "3 min read",
    image: "/mllab.jpeg",
    tags: ["Award", "NeurIPS", "Edge Computing"]
  },
  {
    id: 3,
    title: "Smart Agriculture Revolution: AI-Powered Crop Monitoring System",
    excerpt: "Our IoT-based intelligent farming solution is being deployed across 500+ farms in South Korea, increasing crop yields by 30%.",
    date: "2024-12-05",
    category: "Innovation",
    author: "Dr. Research Team",
    readTime: "5 min read",
    image: "/bg-1.jpg",
    tags: ["Smart Agriculture", "IoT", "Sustainability"]
  },
  {
    id: 4,
    title: "Global Partnership: Collaboration with MIT CSAIL Announced",
    excerpt: "Strategic partnership with MIT's Computer Science and Artificial Intelligence Laboratory to advance quantum machine learning research.",
    date: "2024-11-28",
    category: "Partnership",
    author: "International Relations",
    readTime: "3 min read",
    image: "/IMG_5952.JPG",
    tags: ["MIT", "Partnership", "Quantum ML"]
  },
  {
    id: 5,
    title: "Workshop on Blockchain and IoT Security",
    excerpt: "Join us for a comprehensive workshop covering the latest developments in blockchain technology and IoT security implementations.",
    date: "2024-11-20",
    category: "Event",
    author: "Research Team",
    readTime: "1 min read",
    image: "/gal.jpg",
    tags: ["Event", "Workshop", "Blockchain"]
  },
  {
    id: 6,
    title: "Open Source Release: ML Toolkit for Edge Computing",
    excerpt: "We've released our machine learning toolkit for edge computing devices, featuring optimized algorithms for resource-constrained environments.",
    date: "2024-11-15",
    category: "Software",
    author: "Development Team",
    readTime: "5 min read",
    image: "/mllab.jpeg",
    tags: ["Software", "Open Source", "Edge Computing"]
  }
]

const categories = ["All", "Research", "Achievement", "Team", "Partnership", "Event", "Software"]

export default function News() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[400px] overflow-hidden pt-32 pb-20">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(/bg-1.jpg)`,
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
              Latest News
            </h1>
            <p className="text-xl text-emerald-50 max-w-3xl mx-auto">
              Stay updated with our latest research breakthroughs, achievements, partnerships,
              and upcoming events from the Machine Learning Lab.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`px-6 py-3 rounded-full font-medium transition-colors ${
                  category === "All"
                    ? "bg-blue-600 text-white"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured News */}
      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            {/* Gradient border effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>

            <div className="relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="aspect-video lg:aspect-square relative overflow-hidden">
                  <img
                    src={newsItems[0].image}
                    alt={newsItems[0].title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:hidden"></div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-sm px-4 py-1.5 rounded-full font-semibold shadow-lg">
                      Featured
                    </span>
                    <span className={`text-xs px-3 py-1 rounded-full font-semibold ${
                      newsItems[0].category === 'Research' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                      'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
                    }`}>
                      {newsItems[0].category}
                    </span>
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                    {newsItems[0].title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                    {newsItems[0].excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{newsItems[0].date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{newsItems[0].readTime}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {newsItems[0].tags.map((tag, idx) => (
                      <span key={idx} className="bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 text-xs px-3 py-1 rounded-full font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3.5 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl group/btn w-fit">
                    Read More
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* News Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.slice(1).map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Subtle gradient border on hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-300"></div>

                <div className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className={`text-xs px-3 py-1.5 rounded-full font-semibold backdrop-blur-sm ${
                        item.category === 'Research' ? 'bg-blue-500/90 text-white' :
                        item.category === 'Achievement' ? 'bg-green-500/90 text-white' :
                        item.category === 'Team' ? 'bg-purple-500/90 text-white' :
                        item.category === 'Partnership' ? 'bg-orange-500/90 text-white' :
                        item.category === 'Event' ? 'bg-pink-500/90 text-white' :
                        item.category === 'Innovation' ? 'bg-teal-500/90 text-white' :
                        'bg-gray-500/90 text-white'
                      }`}>
                        {item.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2 leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3 leading-relaxed">
                      {item.excerpt}
                    </p>

                    <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 mb-4 pb-4 border-b border-gray-100 dark:border-gray-700">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        <span>{item.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" />
                        <span>{item.readTime}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.slice(0, 2).map((tag, idx) => (
                        <span key={idx} className="bg-gradient-to-r from-emerald-50 to-blue-50 text-emerald-700 dark:from-emerald-900/30 dark:to-blue-900/30 dark:text-emerald-300 text-xs px-3 py-1 rounded-full font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:gap-3 transition-all text-sm group/btn">
                      Read Article
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 relative overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600"></div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-4000"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Subscribe to our newsletter to receive the latest news, research updates,
              and upcoming events directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-xl text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 shadow-xl backdrop-blur-sm"
              />
              <button className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all shadow-xl hover:shadow-2xl hover:scale-105 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}