'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { BookOpen, User, ExternalLink, Award, Filter } from 'lucide-react'
import { publications as staticPublications, publicationCategories } from '../data/publications'
import { useLanguage } from '../i18n/LanguageContext'
import { translations } from '../i18n/translations'
import { useTranslatePublications } from '../i18n/useTranslatePublications'

const categoryColors: Record<string, { bg: string; text: string; badge: string }> = {
  'medical-ai':       { bg: 'bg-gradient-to-br from-blue-100 to-cyan-200 dark:from-blue-900 dark:to-cyan-800',        text: 'text-blue-600 dark:text-blue-400',    badge: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' },
  'energy-systems':   { bg: 'bg-gradient-to-br from-yellow-100 to-orange-200 dark:from-yellow-900 dark:to-orange-800', text: 'text-yellow-600 dark:text-yellow-400', badge: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' },
  'computer-vision':  { bg: 'bg-gradient-to-br from-green-100 to-emerald-200 dark:from-green-900 dark:to-emerald-800', text: 'text-green-600 dark:text-green-400',   badge: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' },
  'nlp':              { bg: 'bg-gradient-to-br from-pink-100 to-rose-200 dark:from-pink-900 dark:to-rose-800',         text: 'text-pink-600 dark:text-pink-400',     badge: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200' },
  'robotics':         { bg: 'bg-gradient-to-br from-orange-100 to-red-200 dark:from-orange-900 dark:to-red-800',       text: 'text-orange-600 dark:text-orange-400', badge: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200' },
  'agriculture':      { bg: 'bg-gradient-to-br from-lime-100 to-green-200 dark:from-lime-900 dark:to-green-800',       text: 'text-lime-600 dark:text-lime-400',     badge: 'bg-lime-100 text-lime-800 dark:bg-lime-900 dark:text-lime-200' },
  'machine-learning': { bg: 'bg-gradient-to-br from-purple-100 to-pink-200 dark:from-purple-900 dark:to-pink-800',    text: 'text-purple-600 dark:text-purple-400', badge: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200' },
}

function normalizeTitle(t: string) {
  return t.toLowerCase().replace(/[^a-z0-9]/g, '')
}

const PINNED_ID = 'pub-2025-002'
const PINNED_ID_3 = 'pub-2025-yolov8'
const CACHE_KEY = 'orcid_publications_cache'
const CACHE_TTL = 7 * 24 * 60 * 60 * 1000 // 1 week in ms

function applyPins<T extends { id: string }>(list: T[]): T[] {
  let result = [...list]

  const idx2 = result.findIndex(p => p.id === PINNED_ID)
  if (idx2 !== -1 && idx2 !== 1) {
    const pinned = result.splice(idx2, 1)[0]
    result.splice(1, 0, pinned)
  }

  const idx3 = result.findIndex(p => p.id === PINNED_ID_3)
  if (idx3 !== -1 && idx3 !== 2) {
    const pinned = result.splice(idx3, 1)[0]
    result.splice(2, 0, pinned)
  }

  return result
}

function mergeWithStatic(orcidPubs: any[]) {
  const staticDois = new Set(staticPublications.map(p => p.doi?.toLowerCase()).filter(Boolean))
  const staticTitles = new Set(staticPublications.map(p => normalizeTitle(p.title)))

  const newPubs = orcidPubs.filter((pub: any) => {
    if (pub.doi && staticDois.has(pub.doi.toLowerCase())) return false
    if (staticTitles.has(normalizeTitle(pub.title))) return false
    return true
  })

  const merged = [...newPubs, ...staticPublications]
  merged.sort((a, b) => b.year - a.year)
  return merged
}

export default function Publications() {
  const { lang } = useLanguage()
  const tpub = translations[lang].publications
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [allPublications, setAllPublications] = useState(staticPublications)
  const [syncing, setSyncing] = useState(false)

  useEffect(() => {
    // Check localStorage cache first
    try {
      const cached = localStorage.getItem(CACHE_KEY)
      if (cached) {
        const { timestamp, data } = JSON.parse(cached)
        const age = Date.now() - timestamp
        if (age < CACHE_TTL && Array.isArray(data) && data.length > 0) {
          // Cache is fresh — use it directly, no fetch needed
          setAllPublications(data)
          return
        }
      }
    } catch {
      // localStorage unavailable or corrupt — proceed to fetch
    }

    // Cache is stale or missing — fetch from ORCID
    setSyncing(true)
    async function fetchFromOrcid() {
      try {
        const res = await fetch('/api/orcid-publications')
        if (!res.ok) return

        const orcidPubs = await res.json()
        if (!Array.isArray(orcidPubs)) return

        const merged = mergeWithStatic(orcidPubs)

        // Save to localStorage with timestamp
        try {
          localStorage.setItem(CACHE_KEY, JSON.stringify({ timestamp: Date.now(), data: merged }))
        } catch {
          // Storage quota exceeded — still update state
        }

        setAllPublications(merged)
      } catch {
        // Silently fail — static publications still show
      } finally {
        setSyncing(false)
      }
    }

    fetchFromOrcid()
  }, [])

  const { get: getTranslation, loading: translating } = useTranslatePublications(
    allPublications,
    lang === 'ko'
  )

  const categories = publicationCategories

  const filtered = allPublications.filter(pub => {
    const matchesCategory = selectedCategory === 'all' || pub.category === selectedCategory
    const matchesSearch =
      pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.authors.some(a => a.toLowerCase().includes(searchTerm.toLowerCase())) ||
      pub.journal.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const filteredPublications = applyPins(filtered)

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[400px] overflow-hidden pt-32 pb-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1920&q=80)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-green-600 to-teal-700 opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
              <BookOpen className="h-5 w-5 text-emerald-200" />
              <span className="text-sm font-semibold text-emerald-100">{tpub.heroTitle}</span>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
            </div>
            <h1 className="text-6xl font-bold mb-6 text-white drop-shadow-2xl">{tpub.heroTitle}</h1>
            <p className="text-xl text-emerald-50 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
              {tpub.heroDesc}
            </p>
            <div className="flex items-center justify-center gap-8 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">{allPublications.length}+</div>
                <div className="text-sm text-emerald-200">{tpub.statPublications}</div>
              </div>
              <div className="w-px h-12 bg-white/30"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">5000+</div>
                <div className="text-sm text-emerald-200">{tpub.statCitations}</div>
              </div>
              <div className="w-px h-12 bg-white/30"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">100+</div>
                <div className="text-sm text-emerald-200">{tpub.statJournals}</div>
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
              <div className="flex-1">
                <input
                  type="text"
                  placeholder={tpub.searchPlaceholder}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="flex items-center gap-2">
                <Filter className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {tpub.categoryNames[category.id as keyof typeof tpub.categoryNames] ?? category.name} ({category.id === 'all' ? allPublications.length : allPublications.filter(p => p.category === category.id).length})
                    </option>
                  ))}
                </select>
              </div>
              {(syncing || translating) && (
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <div className="w-4 h-4 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
                  {tpub.syncing}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Publications Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPublications.map((publication, index) => {
              const colors = categoryColors[publication.category] || categoryColors['machine-learning']
              return (
                <motion.div
                  key={publication.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="relative group bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-emerald-100 dark:border-emerald-800 hover:border-emerald-300 dark:hover:border-emerald-600 transform hover:-translate-y-2"
                >
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
                          {tpub.featured}
                        </span>
                      )}
                      {publication.id.startsWith('orcid-') && (
                        <span className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 text-xs px-2 py-0.5 rounded-full font-medium">
                          {tpub.newBadge}
                        </span>
                      )}
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    </div>
                  </div>

                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${colors.bg}`}>
                    <BookOpen className={`h-8 w-8 ${colors.text}`} />
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight line-clamp-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {getTranslation(publication.id, 'title', publication.title)}
                    </h3>

                    {publication.authors.length > 0 && (
                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <User className="h-4 w-4 shrink-0" />
                        <span className="truncate">
                          {publication.authors.slice(0, 2).join(', ')}
                          {publication.authors.length > 2 && ` +${publication.authors.length - 2} ${tpub.moreAuthors}`}
                        </span>
                      </div>
                    )}

                    <div className="flex items-center gap-2 text-sm font-medium text-emerald-600 dark:text-emerald-400">
                      <Award className="h-4 w-4 shrink-0" />
                      <span className="truncate">{getTranslation(publication.id, 'journal', publication.journal)}</span>
                    </div>

                    {publication.abstract && (
                      <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
                        {getTranslation(publication.id, 'abstract', publication.abstract)}
                      </p>
                    )}

                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={`px-3 py-1 text-xs rounded-full font-medium ${colors.badge}`}>
                        {tpub.categoryNames[publication.category as keyof typeof tpub.categoryNames] ?? publicationCategories.find(c => c.id === publication.category)?.name ?? publication.category}
                      </span>
                      {publication.citations && (
                        <span className="bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 px-2 py-1 text-xs rounded-full">
                          {publication.citations} {tpub.citations}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {publication.impactFactor && (
                        <>
                          <div className="text-xs text-gray-500 dark:text-gray-400">{tpub.impactFactor}</div>
                          <div className="bg-gradient-to-r from-emerald-500 to-green-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                            {publication.impactFactor}
                          </div>
                        </>
                      )}
                    </div>
                    {publication.link && (
                      <a
                        href={publication.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span>{tpub.viewPaper}</span>
                      </a>
                    )}
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-green-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </motion.div>
              )
            })}
          </div>

          {filteredPublications.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <BookOpen className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">{tpub.noPublications}</h3>
              <p className="text-gray-500 dark:text-gray-500">{tpub.noPublicationsHint}</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
