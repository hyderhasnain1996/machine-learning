'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { BookOpen, Calendar, User, ExternalLink, Award, Filter } from 'lucide-react'
import { publications, publicationCategories } from '../data/publications'

export default function Publications() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredPublications = publications.filter(pub => {
    const matchesCategory = selectedCategory === 'all' || pub.category === selectedCategory
    const matchesSearch = pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pub.authors.some(author => author.toLowerCase().includes(searchTerm.toLowerCase())) ||
                         pub.journal.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[400px] overflow-hidden pt-32 pb-20">
        {/* Background Image - Futuristic Research/Publication Theme */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1920&q=80)`,
          }}
        />

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-green-600 to-teal-700 opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        {/* Decorative animated blobs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-400/20 rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-green-400/20 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-teal-400/20 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-4000"></div>

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
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            {/* Decorative badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
              <BookOpen className="h-5 w-5 text-emerald-200" />
              <span className="text-sm font-semibold text-emerald-100">Research Publications</span>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
            </div>

            <h1 className="text-6xl font-bold mb-6 text-white drop-shadow-2xl">
              Publications
            </h1>
            <p className="text-xl text-emerald-50 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
              Our latest research contributions to the scientific community,
              published in top-tier journals and conferences worldwide.
            </p>

            {/* Stats */}
            <div className="flex items-center justify-center gap-8 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">200+</div>
                <div className="text-sm text-emerald-200">Publications</div>
              </div>
              <div className="w-px h-12 bg-white/30"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">100+</div>
                <div className="text-sm text-emerald-200">Journals</div>
              </div>
              <div className="w-px h-12 bg-white/30"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">5000+</div>
                <div className="text-sm text-emerald-200">Citations</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              {/* Search */}
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search publications..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              {/* Category Filter */}
              <div className="flex items-center gap-2">
                <Filter className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {publicationCategories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPublications.map((publication, index) => (
              <motion.div
                key={publication.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
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
                    {publication.featured && (
                      <span className="bg-gradient-to-r from-emerald-500 to-green-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                        Featured
                      </span>
                    )}
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                </div>

                {/* Publication icon/visual with category indicator */}
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${
                  publication.category === 'medical-ai' ? 'bg-gradient-to-br from-blue-100 to-cyan-200 dark:from-blue-900 dark:to-cyan-800' :
                  publication.category === 'computer-vision' ? 'bg-gradient-to-br from-green-100 to-emerald-200 dark:from-green-900 dark:to-emerald-800' :
                  publication.category === 'machine-learning' ? 'bg-gradient-to-br from-purple-100 to-pink-200 dark:from-purple-900 dark:to-pink-800' :
                  'bg-gradient-to-br from-orange-100 to-red-200 dark:from-orange-900 dark:to-red-800'
                }`}>
                  <BookOpen className={`h-8 w-8 ${
                    publication.category === 'medical-ai' ? 'text-blue-600 dark:text-blue-400' :
                    publication.category === 'computer-vision' ? 'text-green-600 dark:text-green-400' :
                    publication.category === 'machine-learning' ? 'text-purple-600 dark:text-purple-400' :
                    'text-orange-600 dark:text-orange-400'
                  }`} />
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

                  {/* Category badge */}
                  <div className="flex items-center gap-2">
                    <span className={`px-3 py-1 text-xs rounded-full font-medium ${
                      publication.category === 'medical-ai' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                      publication.category === 'computer-vision' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                      publication.category === 'machine-learning' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200' :
                      'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200'
                    }`}>
                      {publicationCategories.find(cat => cat.id === publication.category)?.name || publication.category}
                    </span>
                    {publication.citations && (
                      <span className="bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 px-2 py-1 text-xs rounded-full">
                        {publication.citations} citations
                      </span>
                    )}
                  </div>
                </div>

                {/* Footer */}
                <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {publication.impactFactor && (
                      <>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Impact Factor</div>
                        <div className="bg-gradient-to-r from-emerald-500 to-green-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                          {publication.impactFactor}
                        </div>
                      </>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    {publication.doi && (
                      <a
                        href={`https://doi.org/${publication.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
                        title="View Paper"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                    {publication.link && (
                      <a
                        href={publication.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                        title="Additional Link"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-green-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>

          {filteredPublications.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <BookOpen className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
                No publications found
              </h3>
              <p className="text-gray-500 dark:text-gray-500">
                Try adjusting your search or filter criteria.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}