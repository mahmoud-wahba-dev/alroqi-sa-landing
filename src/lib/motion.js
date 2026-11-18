import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

// Register once, import from here everywhere else.
gsap.registerPlugin(useGSAP, ScrollTrigger)

// Exponential ease-out, the house easing for every entrance.
export const EASE_OUT = 'expo.out'

// Media conditions used with gsap.matchMedia().
export const MQ = {
  motion: '(prefers-reduced-motion: no-preference)',
  reduced: '(prefers-reduced-motion: reduce)',
  finePointer: '(hover: hover) and (pointer: fine)',
}

export { gsap, ScrollTrigger, useGSAP }
