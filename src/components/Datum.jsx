import { useRef } from 'react'
import { gsap, ScrollTrigger, useGSAP, MQ } from '../lib/motion'

// The page's spine: a fixed hairline with architectural tick marks on the
// inline-start edge (right in RTL), plus a live level readout that climbs from
// ±0.00 to the top of the page as you scroll. Over paper sections the line
// switches from gold to deep gold so it stays visible.
//
// Decorative: hidden from assistive tech.

const MAX_LEVEL = 48 // metres shown at the very bottom of the page

const ticks = (period, width) => ({
  width,
  backgroundImage: `repeating-linear-gradient(to bottom, currentColor 0 1px, transparent 1px ${period}px)`,
})

export default function Datum() {
  const rootRef = useRef(null)
  const readoutRef = useRef(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      // Level readout follows overall scroll progress.
      ScrollTrigger.create({
        trigger: document.documentElement,
        start: 'top top',
        end: 'bottom bottom',
        onUpdate: (self) => {
          const level = self.progress * MAX_LEVEL
          if (readoutRef.current) {
            readoutRef.current.textContent =
              level < 0.05 ? '±0.00' : `+${level.toFixed(2)}`
          }
        },
      })

      // Tone follows whichever section sits at mid-screen.
      // document.querySelectorAll, not gsap.utils.toArray: inside useGSAP the latter
      // is scoped to this component's own root and would find nothing.
      document.querySelectorAll('main [data-theme="paper"]').forEach((section) => {
        ScrollTrigger.create({
          trigger: section,
          start: 'top 50%',
          end: 'bottom 50%',
          onToggle: (self) => {
            if (rootRef.current) rootRef.current.dataset.tone = self.isActive ? 'paper' : 'night'
          },
        })
      })

      mm.add(MQ.motion, () => {
        gsap.from(rootRef.current, {
          scaleY: 0,
          transformOrigin: 'top',
          duration: 1.4,
          ease: 'expo.out',
        })
      })
    },
    { scope: rootRef },
  )

  return (
    <div
      ref={rootRef}
      data-tone="night"
      aria-hidden="true"
      className="group/datum pointer-events-none fixed inset-y-0 start-5 z-30 w-5 text-gold transition-colors duration-500 data-[tone=paper]:text-gold-deep md:start-10"
    >
      <div className="absolute inset-y-0 start-0 w-px bg-current opacity-60" />
      <div className="absolute inset-y-0 start-0 opacity-40" style={ticks(14, '0.5rem')} />
      <div className="absolute inset-y-0 start-0 opacity-70" style={ticks(70, '1rem')} />
      <span
        ref={readoutRef}
        dir="ltr"
        className="absolute start-6 top-1/2 hidden -translate-y-1/2 font-mono text-xs [writing-mode:vertical-rl] group-data-[tone=paper]/datum:text-ink md:block"
      >
        ±0.00
      </span>
    </div>
  )
}
