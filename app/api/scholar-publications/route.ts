import { NextResponse } from 'next/server'
import { scrapeScholar } from '@/app/lib/scholar'

// Run on the Node runtime (cheerio needs Node APIs).
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

/**
 * Raw Google Scholar scrape (no store, no AI). Kept as a standalone endpoint
 * for debugging; the page uses /api/publications, which adds the store + agent.
 */
export async function GET() {
  const { papers, blocked } = await scrapeScholar()
  if (blocked) {
    return NextResponse.json({ error: 'blocked', papers: [] }, { status: 503 })
  }
  return NextResponse.json({ papers })
}
