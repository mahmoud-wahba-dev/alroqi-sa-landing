import { useRef } from 'react'
import { gsap, useGSAP, MQ, EASE_OUT } from '../lib/motion'
import { revealWords } from '../lib/reveal'
import { company, contact } from '../data/content'
import Words from './Words'
import Button from './Button'

// The roof: the last, lightest level. WhatsApp first (the way Saudi clients
// actually reach a developer), phone and email as plain, large, tappable links.
export default function Contact() {
  const rootRef = useRef(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(MQ.motion, () => {
        revealWords(rootRef.current.querySelector('h2'))

        gsap.from('.js-contact-fade', {
          opacity: 0,
          y: 30,
          duration: 1.1,
          stagger: 0.12,
          ease: EASE_OUT,
          scrollTrigger: { trigger: rootRef.current.querySelector('h2'), start: 'top 70%', once: true },
        })
      })
    },
    { scope: rootRef },
  )

  return (
    <section
      id="contact"
      ref={rootRef}
      data-theme="paper"
      className="relative z-10 bg-surface text-fg"
    >
      <div className="flex min-h-svh flex-col justify-between gap-24 ps-14 pe-5 pt-28 pb-8 md:ps-24 md:pe-16">
        <div className="flex flex-col gap-10">
          <h2 className="max-w-[16ch] font-display text-[clamp(2.5rem,6.5vw,5.5rem)] font-light leading-[1.25]">
            <Words text={contact.title} />
          </h2>
          <p className="js-contact-fade max-w-[46ch] text-lg leading-8 text-fg-muted">{contact.lead}</p>

          <div className="js-contact-fade flex flex-wrap items-center gap-x-8 gap-y-4">
            <Button href={company.whatsapp} target="_blank" rel="noreferrer">
              تحدث معنا عبر واتساب
            </Button>
          </div>

          <a
            href={`tel:${company.phone}`}
            dir="ltr"
            className="js-contact-fade w-fit self-start font-mono text-[clamp(1.75rem,5.5vw,4.5rem)] leading-tight text-fg underline decoration-line underline-offset-[0.3em] transition-colors duration-500 hover:text-accent hover:decoration-accent"
          >
            {company.phoneDisplay}
          </a>
          <a
            href={`mailto:${company.email}`}
            dir="ltr"
            className="js-contact-fade w-fit self-start text-lg text-fg-muted transition-colors duration-300 hover:text-accent"
          >
            {company.email}
          </a>
        </div>

        <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6 text-sm text-fg-muted">
          <span className="flex items-center gap-3">
            <img
              src="/images/al-ruqi-mark.jpg"
              alt=""
              width="285"
              height="375"
              className="h-10 w-auto rounded-sm"
            />
            <span>{company.fullName}</span>
          </span>
          <span>© 2026 {company.name} · {company.descriptor}</span>
        </footer>
      </div>
    </section>
  )
}
