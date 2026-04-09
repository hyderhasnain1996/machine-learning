import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { texts, target } = await req.json()
    if (!Array.isArray(texts) || !target) {
      return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
    }

    const translated: string[] = []

    for (const text of texts) {
      if (!text || text.trim() === '') {
        translated.push(text)
        continue
      }
      const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${target}&dt=t&q=${encodeURIComponent(text)}`
      const res = await fetch(url)
      if (!res.ok) {
        translated.push(text)
        continue
      }
      const data = await res.json()
      const result = data[0]?.map((chunk: any[]) => chunk[0]).join('') ?? text
      translated.push(result)
    }

    return NextResponse.json({ translated })
  } catch {
    return NextResponse.json({ error: 'Translation failed' }, { status: 500 })
  }
}
