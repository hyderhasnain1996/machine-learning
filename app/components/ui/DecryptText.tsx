'use client'

import { useEffect, useRef, useState } from 'react'

const CHARS = '!<>-_\\/[]{}—=+*^?#________01'

/**
 * "Decrypt" / scramble-in text reveal. Re-runs whenever `text` changes.
 */
export default function DecryptText({
  text,
  className = '',
  speed = 1,
  as: Tag = 'span',
}: {
  text: string
  className?: string
  speed?: number
  as?: 'span' | 'h1' | 'h2' | 'p'
}) {
  const [output, setOutput] = useState(text)
  const frame = useRef(0)
  const raf = useRef(0)

  useEffect(() => {
    const target = text
    let frameCount = 0
    const queue = target.split('').map((char, i) => ({
      char,
      start: Math.floor(i * 2),
      end: Math.floor(i * 2) + Math.floor(Math.random() * 18) + 8,
    }))

    const update = () => {
      let out = ''
      let done = 0
      for (const item of queue) {
        if (frameCount >= item.end) {
          out += item.char
          done++
        } else if (frameCount >= item.start) {
          out += CHARS[Math.floor(Math.random() * CHARS.length)]
        } else {
          out += ' '
        }
      }
      setOutput(out)
      frame.current = frameCount
      if (done < queue.length) {
        frameCount += speed
        raf.current = requestAnimationFrame(update)
      } else {
        setOutput(target)
      }
    }
    update()
    return () => cancelAnimationFrame(raf.current)
  }, [text, speed])

  return <Tag className={className}>{output}</Tag>
}
