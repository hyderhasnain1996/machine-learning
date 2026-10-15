import { NextResponse } from 'next/server'
import { enrichPapers } from '@/app/lib/enrich'

export const runtime = 'nodejs'

/**
 * Standalone AI-enrichment endpoint (kept for debugging). The page uses
 * /api/publications, which calls the same enrichPapers() helper internally.
 */
export async function POST(req: Request) {
  const apiKey = process.env.OPENROUTER_API_KEY
  if (!apiKey) {
    return NextResponse.json(
      {
        error:
          'OPENROUTER_API_KEY is not set. Add it to .env.local and restart the dev server.',
        publications: [],
      },
      { status: 500 },
    )
  }

  let body: { papers?: any[] }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'invalid JSON body', publications: [] }, { status: 400 })
  }

  const papers = Array.isArray(body.papers) ? body.papers : []
  const publications = await enrichPapers(papers, apiKey)
  return NextResponse.json({ publications })
}
