import { NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'
import { scrapeScholar, mapScholarPaper, normalizeTitle } from '@/app/lib/scholar'
import { enrichPapers } from '@/app/lib/enrich'
import { publications as staticPublications } from '@/app/data/publications'
// Committed snapshot of the scraped + enriched papers. This is what production
// (Vercel) serves, since Google Scholar blocks cloud IPs and the filesystem is
// read-only there. Regenerate locally with `npm run seed:publications`.
import seed from '@/app/data/scholar-seed.json'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

// On read-only / cloud hosts (Vercel sets VERCEL=1) Scholar scraping fails and
// the disk store can't persist — so we skip scraping and serve the seed.
const CAN_SCRAPE = !process.env.VERCEL

// Persistent store on disk — survives restarts. Holds every paper ever seen.
const STORE_PATH = path.join(process.cwd(), '.publications-store.json')
// Re-check Google Scholar for NEW papers at most once per day.
const SCRAPE_INTERVAL = 24 * 60 * 60 * 1000
// Max papers to AI-enrich per run (keeps free-model usage bounded; the backlog
// is worked through over successive daily runs, newest first).
const ENRICH_PER_RUN = 15

interface Store {
  papers: Record<string, any>
  updatedAt: number
}

async function readStore(): Promise<Store> {
  try {
    const raw = await fs.readFile(STORE_PATH, 'utf-8')
    const parsed = JSON.parse(raw)
    if (parsed.papers && Object.keys(parsed.papers).length > 0) {
      return { papers: parsed.papers, updatedAt: parsed.updatedAt || 0 }
    }
  } catch {
    // No disk store (e.g. Vercel) — fall through to the committed seed.
  }
  const s = seed as unknown as Store
  return { papers: s.papers || {}, updatedAt: s.updatedAt || 0 }
}

async function writeStore(store: Store) {
  try {
    await fs.writeFile(STORE_PATH, JSON.stringify(store), 'utf-8')
  } catch {
    // Read-only filesystem (e.g. some cloud hosts) — store stays in memory only.
  }
}

export async function GET() {
  const store = await readStore()
  const hasData = Object.keys(store.papers).length > 0
  const fresh = hasData && Date.now() - store.updatedAt < SCRAPE_INTERVAL

  let inserted = 0
  let enrichedCount = 0

  // Only hit Google Scholar when we can (local dev) and the store is stale.
  if (CAN_SCRAPE && !fresh) {
    const { papers, blocked } = await scrapeScholar()

    if (!blocked && papers.length > 0) {
      // INSERT: add papers we've never seen; refresh citations on existing ones.
      for (const raw of papers) {
        const existing = store.papers[raw.id]
        if (!existing) {
          store.papers[raw.id] = mapScholarPaper(raw)
          inserted++
        } else {
          existing.citations = raw.citations
          existing.year = raw.year || existing.year
        }
      }

      // ENRICH: polish up to N not-yet-enriched papers, newest first.
      const apiKey = process.env.OPENROUTER_API_KEY
      if (apiKey) {
        const pending = Object.values(store.papers)
          .filter((p: any) => !p.enriched)
          .sort((a: any, b: any) => (b.year || 0) - (a.year || 0))
          .slice(0, ENRICH_PER_RUN)

        if (pending.length > 0) {
          const enriched = await enrichPapers(
            pending.map((p: any) => ({
              id: p.id,
              title: p.title,
              authorsRaw: p._authorsRaw || (p.authors || []).join(', '),
              venueRaw: p._venueRaw || p.journal,
              year: p.year,
            })),
            apiKey,
          )

          for (const e of enriched) {
            const rec = store.papers[e.id]
            if (!rec) continue
            if (e.title) rec.title = e.title
            if (Array.isArray(e.authors) && e.authors.length) rec.authors = e.authors
            if (e.journal) rec.journal = e.journal
            if (e.category) rec.category = e.category
            if (Array.isArray(e.tags) && e.tags.length) rec.tags = e.tags
            if (e.description) rec.abstract = e.description
            rec.enriched = true
            enrichedCount++
          }
        }
      }

      store.updatedAt = Date.now()
      await writeStore(store)
    }
  }

  // MERGE the stored Scholar papers with the curated static list.
  // A curated (hand-written) entry always wins over the scraped version.
  const staticTitles = new Set(staticPublications.map((p) => normalizeTitle(p.title)))
  const scholarRecords = Object.values(store.papers).filter(
    (p: any) => !staticTitles.has(normalizeTitle(p.title)),
  )

  const merged = [...scholarRecords, ...staticPublications].sort(
    (a: any, b: any) => (b.year || 0) - (a.year || 0),
  )

  // Total citations across ALL stored Scholar papers (the real figure, not the
  // few curated entries) so the site can show an accurate, self-updating count.
  const totalCitations = Object.values(store.papers).reduce(
    (sum: number, p: any) => sum + (Number(p.citations) || 0),
    0,
  )

  return NextResponse.json({
    publications: merged,
    total: merged.length,
    stored: Object.keys(store.papers).length,
    totalCitations,
    lastSync: store.updatedAt,
    inserted,
    enriched: enrichedCount,
  })
}
