// AI enrichment via free OpenRouter models. No SDK — plain REST calls.

// Must match the category keys used by the publications page UI.
export const CATEGORIES = [
  'medical-ai',
  'energy-systems',
  'computer-vision',
  'nlp',
  'robotics',
  'agriculture',
  'machine-learning',
]

const PREFERRED_FREE = [
  'openai/gpt-oss-120b:free',
  'qwen/qwen3-next-80b-a3b-instruct:free',
  'meta-llama/llama-3.3-70b-instruct:free',
  'nvidia/nemotron-3-super-120b-a12b:free',
  'nousresearch/hermes-3-llama-3.1-405b:free',
  'openai/gpt-oss-20b:free',
]

const SKIP_PATTERNS = ['content-safety', 'lyria', 'clip', 'owl', '-vl', 'omni']

export interface EnrichInput {
  id: string
  title: string
  authorsRaw?: string
  venueRaw?: string
  year?: number
}

function parseJsonObject(text: string): any {
  let t = text.trim()
  const fence = t.match(/```(?:json)?\s*([\s\S]*?)```/i)
  if (fence) t = fence[1].trim()
  if (!t.startsWith('{')) {
    const first = t.indexOf('{')
    const last = t.lastIndexOf('}')
    if (first !== -1 && last !== -1 && last > first) t = t.slice(first, last + 1)
  }
  return JSON.parse(t)
}

/** Discovers which models are currently free, prioritising the preferred list. */
async function getFreeModels(apiKey: string): Promise<string[]> {
  try {
    const res = await fetch('https://openrouter.ai/api/v1/models', {
      headers: { Authorization: `Bearer ${apiKey}` },
      cache: 'no-store',
    })
    if (!res.ok) return PREFERRED_FREE
    const json = await res.json()
    const live: string[] = (json?.data || [])
      .filter(
        (m: any) =>
          m?.pricing?.prompt === '0' &&
          m?.pricing?.completion === '0' &&
          typeof m.id === 'string' &&
          m.id.endsWith(':free') &&
          !SKIP_PATTERNS.some((p) => m.id.includes(p)),
      )
      .map((m: any) => m.id as string)
    const liveSet = new Set(live)
    const preferred = PREFERRED_FREE.filter((id) => liveSet.has(id))
    const rest = live.filter((id) => !preferred.includes(id))
    const order = [...preferred, ...rest].slice(0, 8)
    return order.length > 0 ? order : PREFERRED_FREE
  } catch {
    return PREFERRED_FREE
  }
}

export interface EnrichedPaper {
  id: string
  title?: string
  authors?: string[]
  journal?: string
  description?: string
  category?: string
  tags?: string[]
}

/**
 * The "agent" step: cleans a batch of papers with a free OpenRouter model —
 * proper title, expanded authors, one-sentence description, category + tags.
 * Returns [] if no model is available (callers keep the rule-based version).
 */
export async function enrichPapers(
  papers: EnrichInput[],
  apiKey: string,
): Promise<EnrichedPaper[]> {
  if (!apiKey || papers.length === 0) return []

  const input = papers.map((p) => ({
    id: p.id,
    title: p.title,
    authors: p.authorsRaw || '',
    venue: p.venueRaw || '',
    year: p.year || 0,
  }))

  const prompt = `You are a research librarian for the Machine Learning Lab at Jeju National University. For each Google Scholar paper below, produce a cleaned, display-ready record.

Return ONLY a JSON object of the exact shape:
{"publications": [{"id": string, "title": string, "authors": string[], "journal": string, "description": string, "category": string, "tags": string[]}]}

Rules for each paper:
- id: copy the given id EXACTLY (do not modify it).
- title: the full, properly capitalised title (fix ALL-CAPS or obvious truncation).
- authors: an array of full author names. Google Scholar abbreviates names (e.g. "YC Byun", "A Batool"). Expand abbreviations to a clean "First Last" form where you reasonably can; otherwise keep as given. Always render "YC Byun" as "Yung-Cheol Byun".
- journal: the journal or conference name only (strip year, volume, and page numbers).
- description: ONE clear, professional sentence (20-40 words) summarising the paper, inferred from the title and venue.
- category: choose the single best fit from EXACTLY this list: ${CATEGORIES.join(', ')}.
- tags: 3-5 short topical keywords.

Return a record for every paper. Output JSON only, no commentary. Papers (JSON):
${JSON.stringify(input, null, 2)}`

  const models = process.env.OPENROUTER_MODEL
    ? [process.env.OPENROUTER_MODEL]
    : await getFreeModels(apiKey)

  for (const model of models) {
    try {
      const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
          'X-Title': 'ML Lab JNU Publications',
        },
        body: JSON.stringify({
          model,
          messages: [{ role: 'user', content: prompt }],
          response_format: { type: 'json_object' },
          temperature: 0.2,
          max_tokens: 8000,
        }),
      })
      if (!res.ok) continue // try the next free model

      const json = await res.json()
      const content: string = json?.choices?.[0]?.message?.content || ''
      if (!content) continue

      const data = parseJsonObject(content)
      const publications: EnrichedPaper[] = Array.isArray(data?.publications)
        ? data.publications
        : []
      if (publications.length === 0) continue

      return publications.map((p) => ({
        ...p,
        category: CATEGORIES.includes(p?.category as string)
          ? p.category
          : 'machine-learning',
      }))
    } catch {
      continue
    }
  }

  return []
}
