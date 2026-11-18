import { useRef } from 'react'
import { gsap, useGSAP, MQ } from '../lib/motion'
import { manifesto } from '../data/content'

// The dawn moment. A paper-coloured sheet rises over the dark hero, then the
// statement is pinned and "inks in" word by word as the visitor scrolls.
// Default markup is the finished state (every word fully visible).
export default function Manifesto() {
  const rootRef = useRef(null)
  const words = manifesto.text.split(' ')

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add(MQ.motion, () => {
        const root = rootRef.current

        // 1. The paper sheet rises over the hero.
        gsap.fromTo(
          '.js-sheet',
          { clipPath: 'inset(16% 0% 0% 0%)' },
          {
            clipPath: 'inset(0% 0% 0% 0%)',
            ease: 'none',
            scrollTrigger: { trigger: root, start: 'top bottom', end: 'top 20%', scrub: true },
          },
        )

        // 2. Pin the statement and ink the words in.
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: root,
            start: 'top top',
            end: '+=140%',
            pin: true,
            scrub: 0.6,
          },
        })
        tl.fromTo(
          '.js-mword',
          { opacity: 0.16 },
          { opacity: 1, ease: 'none', stagger: 0.1, duration: 1 },
        )
      })
    },
    { scope: rootRef },
  )

  return (
    <section
      ref={rootRef}
      data-theme="paper"
      className="relative z-10 min-h-svh bg-ink text-fg"
    >
      <div className="js-sheet flex min-h-svh items-center bg-surface ps-14 pe-5 py-24 md:ps-24 md:pe-16">
        <p className="max-w-[30ch] font-display text-[clamp(1.75rem,4.2vw,3.75rem)] font-light leading-[1.6]">
          {words.map((word, i) => (
            <span key={i}>
              <span className="js-mword">{word}</span>{' '}
            </span>
          ))}
        </p>
      </div>
    </section>
  )
}
