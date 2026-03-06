import { NextResponse } from 'next/server'

export const revalidate = 604800 // Cache for 1 week (7 days)

const ORCID_ID = '0000-0003-1107-9941'
const BATCH_SIZE = 50

function inferCategory(title: string, journal: string): string {
  const text = (title + ' ' + journal).toLowerCase()
  if (/retina|diabetic|brain tumor|cancer|skin lesion|medical|clinical|health/.test(text)) return 'medical-ai'
  if (/energy|battery|electric vehicle|ev |solar|power|load forecast/.test(text)) return 'energy-systems'
  if (/image|vision|segmentation|detection|object|video|visual/.test(text)) return 'computer-vision'
  if (/language model|nlp|sentiment|text|llm|bert|gpt/.test(text)) return 'nlp'
  if (/robot|agv|control|autonomous vehicle|pid/.test(text)) return 'robotics'
  if (/crop|agriculture|farm|yield/.test(text)) return 'agriculture'
  return 'machine-learning'
}

export async function GET() {
  try {
    // Step 1: Get all put-codes from summary
    const summaryRes = await fetch(
      `https://pub.orcid.org/v3.0/${ORCID_ID}/works`,
      { headers: { Accept: 'application/json' }, cache: 'no-store' }
    )
    if (!summaryRes.ok) {
      return NextResponse.json({ error: `ORCID summary failed: ${summaryRes.status}` }, { status: 502 })
    }

    const summaryData = await summaryRes.json()
    const groups = summaryData.group || []
    const putCodes: number[] = groups
      .map((g: any) => g['work-summary']?.[0]?.['put-code'])
      .filter(Boolean)

    if (putCodes.length === 0) return NextResponse.json([])

    // Step 2: Fetch in batches of BATCH_SIZE (ORCID limit is 100)
    const allWorks: any[] = []
    for (let i = 0; i < putCodes.length; i += BATCH_SIZE) {
      const batch = putCodes.slice(i, i + BATCH_SIZE)
      const batchRes = await fetch(
        `https://pub.orcid.org/v3.0/${ORCID_ID}/works/${batch.join(',')}`,
        { headers: { Accept: 'application/json' }, cache: 'no-store' }
      )
      if (!batchRes.ok) continue
      const batchData = await batchRes.json()
      const works = (batchData.bulk || []).map((item: any) => item.work).filter(Boolean)
      allWorks.push(...works)
    }

    const publications = allWorks.map((work: any) => {
      const title = work.title?.title?.value || 'Untitled'
      const journal = work['journal-title']?.value || ''
      const year = parseInt(work['publication-date']?.year?.value || '0')
      const doi = work['external-ids']?.['external-id']
        ?.find((e: any) => e['external-id-type'] === 'doi')?.['external-id-value'] || ''
      const link = doi ? `https://doi.org/${doi}` : (work.url?.value || '')
      const abstract = work['short-description'] || ''
      const contributors = work.contributors?.contributor || []
      const authors: string[] = contributors
        .map((c: any) => c['credit-name']?.value)
        .filter(Boolean)
      const category = inferCategory(title, journal)
      const type = work.type === 'JOURNAL_ARTICLE' ? 'journal'
        : work.type === 'CONFERENCE_PAPER' ? 'conference' : 'journal'

      return {
        id: `orcid-${work['put-code']}`,
        title, authors, journal, year, doi, link, category, type, abstract,
        impactFactor: '', tags: [], featured: false, citations: 0,
      }
    })

    return NextResponse.json(publications)
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
