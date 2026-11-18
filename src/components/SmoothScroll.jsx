import { useEffect } from 'react'
import Lenis from 'lenis'
import { gsap, ScrollTrigger, MQ } from '../lib/motion'

// Lenis smooth scroll, driven by GSAP's ticker so ScrollTrigger stays in sync.
// Off entirely for visitors who ask for reduced motion; touch devices keep
// native scrolling (Lenis does not smooth touch by default).
export default function SmoothScroll({ children }) {
  useEffect(() => {
    if (!window.matchMedia(MQ.motion).matches) return

    const lenis = new Lenis({ duration: 1.1, anchors: true })
    lenis.on('scroll', ScrollTrigger.update)

    const tick = (time) => lenis.raf(time * 1000)
    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(tick)
      lenis.destroy()
    }
  }, [])

  return children
}
