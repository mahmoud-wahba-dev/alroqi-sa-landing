import { gsap, ScrollTrigger, EASE_OUT } from './motion'

// Scroll reveals. Call these ONLY inside a gsap.matchMedia() motion branch
// (inside useGSAP), so they are cleaned up on unmount and never run for
// visitors who asked for reduced motion; they get the finished markup.

// Fade-and-rise a group of elements as they enter, one batch at a time.
export function revealBatch(selector, { y = 40, stagger = 0.08 } = {}) {
  const els = gsap.utils.toArray(selector)
  if (!els.length) return
  gsap.set(els, { opacity: 0, y })
  ScrollTrigger.batch(els, {
    start: 'top 92%',
    once: true,
    onEnter: (batch) =>
      gsap.to(batch, { opacity: 1, y: 0, duration: 1, stagger, ease: EASE_OUT, overwrite: true }),
  })
}

// Grow a hairline from the inline-start edge as its row enters.
export function revealLines(selector) {
  gsap.utils.toArray(selector).forEach((line) => {
    gsap.fromTo(
      line,
      { scaleX: 0, transformOrigin: 'right center' }, // right = inline-start in RTL
      {
        scaleX: 1,
        duration: 1.4,
        ease: EASE_OUT,
        scrollTrigger: { trigger: line, start: 'top 92%', once: true },
      },
    )
  })
}

// Words of a heading rise out of their clip masks (see <Words />).
export function revealWords(heading) {
  const words = heading.querySelectorAll('.js-rw')
  if (!words.length) return
  gsap.from(words, {
    yPercent: 115,
    duration: 1.1,
    stagger: 0.07,
    ease: EASE_OUT,
    scrollTrigger: { trigger: heading, start: 'top 85%', once: true },
  })
}
