'use client'

import { useState, useEffect, useRef } from 'react'
// Pre-translated Korean titles/abstracts (English text -> Korean), bundled with the site
// so Korean titles show instantly without depending on an online translation service.
import bundledKo from './publicationsKo.json'

const BUNDLED: Record<string, string> = bundledKo as Record<string, string>

const CACHE_KEY = 'pub_translations_ko_v2'

function loadCache(): Record<string, string> {
  try {
    const raw = localStorage.getItem(CACHE_KEY)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

function saveCache(cache: Record<string, string>) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify(cache))
  } catch {}
}

export function useTranslatePublications(
  publications: any[],
  enabled: boolean
) {
  const [translations, setTranslations] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(false)
  const translatingRef = useRef(false)

  useEffect(() => {
    if (!enabled || publications.length === 0) {
      setTranslations({})
      return
    }
    if (translatingRef.current) return

    const cache = loadCache()

    // Collect texts that need translation
    const toTranslate: { key: string; text: string }[] = []
    for (const pub of publications) {
      // Journal names are proper names, so they stay in English
      for (const field of ['title', 'abstract'] as const) {
        const text: string = (pub[field] || '').trim()
        if (!text) continue
        const key = `${pub.id}__${field}`
        if (cache[key]) continue
        if (BUNDLED[text]) {
          cache[key] = BUNDLED[text]
        } else {
          toTranslate.push({ key, text })
        }
      }
    }

    // Apply cached translations immediately
    setTranslations({ ...cache })

    if (toTranslate.length === 0) return

    translatingRef.current = true
    setLoading(true)

    async function run() {
      const BATCH = 20
      const updated = { ...cache }

      for (let i = 0; i < toTranslate.length; i += BATCH) {
        const batch = toTranslate.slice(i, i + BATCH)
        try {
          const res = await fetch('/api/translate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ texts: batch.map(b => b.text), target: 'ko' }),
          })
          if (res.ok) {
            const data = await res.json()
            batch.forEach((b, idx) => {
              updated[b.key] = data.translated[idx] ?? b.text
            })
            saveCache(updated)
            setTranslations({ ...updated })
          }
        } catch {
          // keep original on error
        }
      }

      setLoading(false)
      translatingRef.current = false
    }

    run()
  }, [enabled, publications.length])

  const get = (pubId: string, field: string, fallback: string): string => {
    return translations[`${pubId}__${field}`] || fallback
  }

  return { get, loading }
}
