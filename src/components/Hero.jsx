import { useRef } from 'react'
import { gsap, useGSAP, MQ } from '../lib/motion'
import { company, hero } from '../data/content'
import Header from './Header'
import Button from './Button'

export default function Hero() {
  const rootRef = useRef(null)
  const words = hero.headline.split(' ')

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      // Everything is already readable in the markup. Motion only enhances it,
      // and only when the visitor allows motion.
      mm.add(MQ.motion, () => {
        const tl = gsap.timeline({ defaults: { ease: 'expo.out' } })

        tl.from('.js-word', { yPercent: 115, duration: 1.1, stagger: 0.08 }, 0.15)
          // The photo rises like a curtain (the page's "ascent" gesture) while
          // the image inside settles from a slight zoom.
          .fromTo(
            '.js-hero-clip',
            { clipPath: 'inset(100% 0% 0% 0%)' },
            { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.6, ease: 'expo.inOut' },
            0.1,
          )
          .from('.js-hero-img', { scale: 1.3, duration: 2.4 }, 0.1)
          .from('.js-fade', { opacity: 0, y: 14, duration: 0.9, stagger: 0.1 }, 0.7)

        // Leaving the hero: text drifts up faster than the image, so the
        // two layers separate as the page climbs.
        const leave = { trigger: rootRef.current, start: 'top top', end: 'bottom top', scrub: true }
        gsap.to('.js-parallax-text', { yPercent: -14, ease: 'none', scrollTrigger: leave })
        gsap.to('.js-parallax-image', { yPercent: 8, ease: 'none', scrollTrigger: leave })
      })
    },
    { scope: rootRef },
  )

  return (
    <section
      id="top"
      ref={rootRef}
      data-theme="night"
      className="relative isolate min-h-svh overflow-hidden bg-surface text-fg"
    >
      <Header />

      <div className="grid min-h-svh grid-cols-1 lg:grid-cols-12">
        <div className="js-parallax-text relative z-10 flex flex-col justify-between gap-16 pe-5 pb-8 ps-14 pt-36 md:ps-24 md:pe-10 lg:col-span-7 lg:pe-16 lg:pt-40 lg:pb-10">
          <div className="flex flex-col gap-8">
            <h1 className="font-display text-[clamp(2.25rem,5.4vw,5rem)] font-light leading-[1.3]">
              {words.map((word, i) => (
                <span key={i}>
                  {/* Split by word, never by letter: letter splits break Arabic joining. */}
                  <span className="-my-[0.2em] inline-block overflow-hidden py-[0.2em] align-bottom">
                    <span className="js-word inline-block">{word}</span>
                  </span>{' '}
                </span>
              ))}
            </h1>

            <p className="js-fade max-w-[46ch] text-lg leading-8 text-fg-muted">{hero.lead}</p>

            <div className="js-fade flex flex-wrap items-center gap-x-8 gap-y-4">
              <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
              <a
                href={hero.secondaryCta.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center text-base text-fg underline decoration-accent/60 transition-colors duration-300 hover:text-accent"
              >
                {hero.secondaryCta.label}
              </a>
            </div>
          </div>

          <p className="js-fade text-xs text-fg-muted">الأساس · {company.descriptor}</p>
        </div>

        <figure className="relative min-h-[70svh] overflow-hidden lg:col-span-5 lg:min-h-svh">
          <div className="js-hero-clip absolute inset-0 overflow-hidden">
            <div className="js-parallax-image absolute -inset-y-[8%] inset-x-0">
              <img
                src={hero.image.src}
                srcSet={`${hero.image.srcSmall} 640w, ${hero.image.src} ${hero.image.width}w`}
                sizes="(min-width: 1024px) 42vw, 100vw"
                width={hero.image.width}
                height={hero.image.height}
                alt={hero.image.alt}
                fetchPriority="high"
                className="js-hero-img size-full object-cover"
              />
            </div>
          </div>
          <figcaption className="js-fade absolute inset-x-0 bottom-0 border-t border-line bg-surface px-5 py-3 text-xs text-fg-muted">
            {hero.image.caption}
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
