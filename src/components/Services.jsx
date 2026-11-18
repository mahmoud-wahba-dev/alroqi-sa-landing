import { useRef } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { gsap, useGSAP, MQ } from '../lib/motion'
import { revealBatch, revealLines, revealWords } from '../lib/reveal'
import { services } from '../data/content'
import Words from './Words'

// Services as an accordion of large type, not icon cards (shadcn Accordion:
// keyboard handling and ARIA from Radix, look from us).
export default function Services() {
  const rootRef = useRef(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(MQ.motion, () => {
        revealWords(rootRef.current.querySelector('h2'))
        revealBatch('.js-srow', { y: 36, stagger: 0.07 })
        revealLines('.js-sline')
      })
    },
    { scope: rootRef },
  )

  return (
    <section
      id="services"
      ref={rootRef}
      data-theme="night"
      className="relative z-10 bg-surface-2 text-fg"
    >
      <div className="grid gap-16 ps-14 pe-5 py-24 md:ps-24 md:pe-10 lg:grid-cols-12 lg:pe-16">
        <div className="lg:col-span-4">
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-light leading-tight lg:sticky lg:top-24">
            <Words text={services.title} />
          </h2>
        </div>

        <Accordion
          type="single"
          collapsible
          defaultValue={services.items[0].id}
          className="lg:col-span-8"
        >
          {services.items.map((service) => (
            <AccordionItem key={service.id} value={service.id} className="js-srow">
              <div className="js-sline h-px w-full bg-line" aria-hidden="true" />
              <AccordionTrigger>
                <span className="font-display text-2xl font-light leading-snug transition-colors duration-500 group-hover:text-accent group-data-[state=open]:text-accent md:text-4xl">
                  {service.name}
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-6">
                  <p className="max-w-[56ch] text-lg leading-8 text-fg-muted">{service.desc}</p>
                  <ul className="grid gap-x-10 sm:grid-cols-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="border-t border-line py-3 text-sm leading-7">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
          <div className="js-sline h-px w-full bg-line" aria-hidden="true" />
        </Accordion>
      </div>
    </section>
  )
}
