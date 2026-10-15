'use client'

/**
 * Absolute-positioned aurora gradient layer for a section background.
 * Place inside a `relative overflow-hidden` parent.
 */
export default function Aurora({ className = '' }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div
        className="absolute -inset-[30%] opacity-70 blur-[40px]"
        style={{
          background:
            'radial-gradient(40% 40% at 20% 30%, rgba(37,99,235,0.35), transparent 60%),' +
            'radial-gradient(35% 35% at 80% 20%, rgba(6,182,212,0.32), transparent 60%),' +
            'radial-gradient(45% 45% at 60% 80%, rgba(14,165,233,0.3), transparent 60%),' +
            'radial-gradient(30% 30% at 30% 75%, rgba(99,102,241,0.28), transparent 60%)',
          animation: 'aurora 24s linear infinite',
        }}
      />
    </div>
  )
}
