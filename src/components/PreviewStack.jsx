import { useRef } from 'react'
import { gsap, useGSAP, MQ } from '../lib/motion'

// Sticky project preview. Every photo is stacked; the active one wipes up over
// the others like a curtain rising (the page's "ascent" gesture) while its
// image settles from a slight zoom. Nothing unmounts, so there is no flash.
// Reduced motion: the new photo simply appears on top.
export default function PreviewStack({ items, activeId }) {
  const rootRef = useRef(null)
  const zRef = useRef(1)
  const firstRun = useRef(true)

  useGSAP(
    () => {
      if (firstRun.current) {
        firstRun.current = false
        return
      }
      const layer = rootRef.current.querySelector(`[data-id="${activeId}"]`)
      if (!layer) return
      zRef.current += 1
      const z = zRef.current

      const mm = gsap.matchMedia()
      mm.add(MQ.motion, () => {
        gsap.set(layer, { zIndex: z, clipPath: 'inset(100% 0% 0% 0%)' })
        gsap.to(layer, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.1, ease: 'expo.inOut' })
        gsap.fromTo(
          layer.querySelector('img'),
          { scale: 1.2 },
          { scale: 1, duration: 1.8, ease: 'expo.out' },
        )
      })
      mm.add(MQ.reduced, () => {
        gsap.set(layer, { zIndex: z })
      })
    },
    { scope: rootRef, dependencies: [activeId] },
  )

  return (
    <div ref={rootRef} className="absolute inset-0 overflow-hidden bg-surface-2">
      {items.map((item, i) => (
        <div key={item.id} data-id={item.id} className={`absolute inset-0 ${i === 0 ? 'z-[1]' : 'z-0'}`}>
          <img
            src={item.image}
            alt={item.alt}
            loading={i === 0 ? 'eager' : 'lazy'}
            className="size-full object-cover"
          />
        </div>
      ))}
    </div>
  )
}
