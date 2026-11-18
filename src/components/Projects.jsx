import { useRef, useState } from 'react'
import { gsap, useGSAP, MQ } from '../lib/motion'
import { revealBatch, revealLines, revealWords } from '../lib/reveal'
import { projects } from '../data/content'
import Words from './Words'
import PreviewStack from './PreviewStack'
import ProjectSheet from './ProjectSheet'

// Project index, not a card grid: big editorial rows. On desktop, hovering or
// focusing a row swaps the sticky lattice preview. Click opens the detail sheet.
export default function Projects() {
  const rootRef = useRef(null)
  const [activeId, setActiveId] = useState(projects.items[0].id)
  const [openProject, setOpenProject] = useState(null)
  const active = projects.items.find((p) => p.id === activeId)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(MQ.motion, () => {
        revealWords(rootRef.current.querySelector('h2'))
        revealBatch('.js-prow', { y: 36, stagger: 0.07 })
        revealLines('.js-pline')
      })
    },
    { scope: rootRef },
  )

  return (
    <section
      id="projects"
      ref={rootRef}
      data-theme="night"
      className="relative z-10 bg-surface text-fg"
    >
      <div className="grid lg:grid-cols-12">
        <div className="ps-14 pe-5 py-24 md:ps-24 md:pe-10 lg:col-span-7 lg:pe-16">
          <h2 className="mb-16 font-display text-[clamp(2.5rem,6vw,5rem)] font-light leading-tight">
            <Words text={projects.title} />
          </h2>

          <ul>
            {projects.items.map((project) => {
              const isActive = project.id === activeId
              return (
                <li key={project.id} className="js-prow">
                  <div className="js-pline h-px w-full bg-line" aria-hidden="true" />
                  <button
                    type="button"
                    onClick={() => setOpenProject(project)}
                    onPointerEnter={() => setActiveId(project.id)}
                    onFocus={() => setActiveId(project.id)}
                    className="group grid w-full grid-cols-[1fr_auto] items-start gap-x-6 gap-y-4 py-7 text-start"
                  >
                    <span className="flex flex-col gap-2">
                      <span
                        className={`font-display text-2xl font-light leading-snug transition-colors duration-500 md:text-4xl ${
                          isActive ? 'text-accent' : 'text-fg'
                        }`}
                      >
                        {project.name}
                      </span>
                      <span className="text-sm text-fg-muted">
                        {project.street} · {project.district}
                      </span>
                    </span>
                    <span className="flex flex-col items-end gap-1 text-sm text-fg-muted">
                      <span>{project.area}</span>
                      <span>{project.type}</span>
                    </span>

                    {/* Phones and tablets have no sticky preview, so each row carries its photo. */}
                    <img
                      src={project.image}
                      alt={project.alt}
                      loading="lazy"
                      className="col-span-2 aspect-[16/9] w-full object-cover lg:hidden"
                    />
                  </button>
                </li>
              )
            })}
          </ul>
          <div className="js-pline h-px w-full bg-line" aria-hidden="true" />
        </div>

        <div className="relative hidden lg:col-span-5 lg:block">
          <div className="sticky top-0 h-svh overflow-hidden">
            <PreviewStack items={projects.items} activeId={activeId} />
            <p className="absolute inset-x-0 bottom-0 z-[1000] border-t border-line bg-surface px-5 py-3 text-xs text-fg-muted">
              {active.name} · {active.street}
            </p>
          </div>
        </div>
      </div>

      <ProjectSheet project={openProject} onClose={() => setOpenProject(null)} />
    </section>
  )
}
