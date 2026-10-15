import * as cheerio from 'cheerio'

// Prof. Yung-Cheol Byun's Google Scholar profile id.
const SCHOLAR_USER = 'jfGGqJIAAAAJ'
const PAGE_SIZE = 100 // Scholar's max per request
const MAX_PAPERS = 500 // safety cap

export interface ScholarPaper {
  id: string
  title: string
  authorsRaw: string
  venueRaw: string
  year: number
  citations: number
  link: string
}

export function normalizeTitle(t: string) {
  return (t || '').toLowerCase().replace(/[^a-z0-9]/g, '')
}

// Keyword-based category guess (used for every Scholar paper before — or
// instead of — AI enrichment).
export function inferCategory(title: string, journal: string): string {
  const text = (title + ' ' + journal).toLowerCase()
  if (/retina|diabetic|brain tumor|cancer|skin lesion|medical|clinical|health|biomedical|signal/.test(text)) return 'medical-ai'
  if (/energy|battery|electric vehicle|ev |solar|power|load forecast|grid/.test(text)) return 'energy-systems'
  if (/image|vision|segmentation|detection|object|video|visual|yolo|cctv|surveillance/.test(text)) return 'computer-vision'
  if (/language model|nlp|sentiment|text|llm|bert|gpt|query/.test(text)) return 'nlp'
  if (/robot|agv|control|autonomous vehicle|pid/.test(text)) return 'robotics'
  if (/crop|agriculture|farm|yield/.test(text)) return 'agriculture'
  return 'machine-learning'
}

// Strips volume / issue / page / year noise from a Scholar venue string,
// e.g. "Biology 9 (12), 441, 2020" -> "Biology".
export function cleanJournal(venueRaw: string): string {
  const cut = (venueRaw || '').replace(/[,\s]+\d.*$/, '').trim()
  return cut || venueRaw || ''
}

// Turns a raw scraped Scholar paper into a display-ready record using only
// simple rules — no AI required, so every paper can show instantly.
export function mapScholarPaper(p: ScholarPaper) {
  const journal = cleanJournal(p.venueRaw)
  return {
    id: p.id,
    title: p.title,
    authors: (p.authorsRaw || '')
      .split(',')
      .map((a) => a.trim())
      .filter(Boolean),
    journal,
    year: p.year || 0,
    impactFactor: 'N/A',
    doi: '',
    link: p.link || '',
    category: inferCategory(p.title || '', journal),
    tags: [] as string[],
    type: 'journal' as const,
    featured: false,
    abstract: '',
    citations: p.citations || 0,
    enriched: false,
    // kept for higher-quality enrichment later, not displayed:
    _authorsRaw: p.authorsRaw || '',
    _venueRaw: p.venueRaw || '',
  }
}

/** Fetches one page of the profile and returns the parsed rows (or null on block/error). */
async function fetchPage(cstart: number): Promise<ScholarPaper[] | null> {
  const url = `https://scholar.google.com/citations?user=${SCHOLAR_USER}&hl=en&cstart=${cstart}&pagesize=${PAGE_SIZE}`

  const res = await fetch(url, {
    headers: {
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      'Accept-Language': 'en-US,en;q=0.9',
      Accept:
        'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
    },
    cache: 'no-store',
  })

  if (!res.ok) return null

  const html = await res.text()
  if (html.includes('gs_captcha') || html.includes('unusual traffic')) return null
  if (!html.includes('gsc_a_tr')) return [] // past the last page

  const $ = cheerio.load(html)
  const rows: ScholarPaper[] = []

  $('.gsc_a_tr').each((_, el) => {
    const titleEl = $(el).find('.gsc_a_at')
    const title = titleEl.text().trim()
    if (!title) return

    const href = titleEl.attr('href') || ''
    const grays = $(el).find('.gs_gray')
    const authorsRaw = $(grays.get(0)).text().trim()
    const venueRaw = $(grays.get(1)).text().trim()
    const citations = parseInt($(el).find('.gsc_a_ac').text().trim() || '0', 10) || 0
    const year = parseInt($(el).find('.gsc_a_h').text().trim() || '0', 10) || 0

    const match = href.match(/citation_for_view=([^&]+)/)
    const id = match
      ? `scholar-${match[1].replace(/:/g, '-')}`
      : `scholar-${title.toLowerCase().replace(/[^a-z0-9]/g, '').slice(0, 24)}`

    rows.push({
      id,
      title,
      authorsRaw,
      venueRaw,
      year,
      citations,
      link: href ? `https://scholar.google.com${href}` : '',
    })
  })

  return rows
}

/**
 * Scrapes the full profile (paginating 100 at a time). Returns the papers plus
 * a `blocked` flag so callers can keep existing data when Scholar refuses.
 */
export async function scrapeScholar(): Promise<{ papers: ScholarPaper[]; blocked: boolean }> {
  const papers: ScholarPaper[] = []

  for (let cstart = 0; cstart < MAX_PAPERS; cstart += PAGE_SIZE) {
    const rows = await fetchPage(cstart)
    if (rows === null) {
      // First page failing = fully blocked; later pages failing = keep what we have.
      return { papers, blocked: papers.length === 0 }
    }
    papers.push(...rows)
    if (rows.length < PAGE_SIZE) break
  }

  return { papers, blocked: false }
}
