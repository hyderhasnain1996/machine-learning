'use client'

/**
 * Infinite horizontal scrolling row. Pauses on hover.
 */
export default function Marquee({
  items,
  className = '',
}: {
  items: string[]
  className?: string
}) {
  const doubled = [...items, ...items]
  return (
    <div className={`group relative overflow-hidden ${className}`}>
      {/* edge fades */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-white dark:from-[#0a0f1f] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-white dark:from-[#0a0f1f] to-transparent" />
      <div className="flex w-max animate-marquee gap-4 group-hover:[animation-play-state:paused]">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="whitespace-nowrap rounded-full border border-blue-200/70 dark:border-blue-500/30 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/20 px-5 py-2.5 text-sm font-semibold text-blue-700 dark:text-cyan-300 shadow-sm"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
