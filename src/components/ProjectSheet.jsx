import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
} from '@/components/ui/sheet'
import { company } from '../data/content'
import Button from './Button'

// Project detail sheet (shadcn Sheet: focus trap, Esc, scroll lock, ARIA).
export default function ProjectSheet({ project, onClose }) {
  const specs = project
    ? [
        ['المساحة', project.area],
        ['الأدوار', project.floors],
        ['الوحدات', project.units],
        ['النوع', project.type],
      ].filter(([, value]) => value)
    : []

  const message = project
    ? `${company.whatsapp}?text=${encodeURIComponent(`السلام عليكم، أود الاستفسار عن مشروع ${project.name}، ${project.street}`)}`
    : company.whatsapp

  const rest = project ? project.gallery.slice(1) : []

  return (
    <Sheet open={Boolean(project)} onOpenChange={(open) => !open && onClose()}>
      <SheetContent
        side="right"
        data-theme="paper"
        className="w-[min(44rem,100vw)] overflow-y-auto sm:max-w-none"
      >
        {project && (
          <>
            <img
              src={project.gallery[0]}
              alt={project.alt}
              className="aspect-[16/10] w-full object-cover"
            />

            <div className="flex flex-col gap-8 px-6 py-8 md:px-10 md:py-10">
              <div className="flex flex-col gap-2">
                <SheetTitle className="text-3xl leading-snug md:text-4xl">{project.name}</SheetTitle>
                <SheetDescription>
                  {project.street} · {project.district}
                </SheetDescription>
              </div>

              <dl className="grid grid-cols-2 border-t border-line md:grid-cols-4">
                {specs.map(([label, value]) => (
                  <div key={label} className="border-b border-line py-4 pe-4">
                    <dt className="text-xs text-fg-muted">{label}</dt>
                    <dd className="mt-1 font-medium">{value}</dd>
                  </div>
                ))}
              </dl>

              <p className="max-w-[60ch] leading-8 text-fg-muted">{project.description}</p>

              <ul className="flex flex-col">
                {project.features.map((feature) => (
                  <li key={feature} className="border-t border-line py-3 first:border-t-0">
                    {feature}
                  </li>
                ))}
              </ul>

              {rest.length > 0 && (
                <div className="-mx-6 md:-mx-10">
                  <ul className="flex snap-x snap-mandatory gap-2 overflow-x-auto px-6 pb-2 md:px-10">
                    {rest.map((src, i) => (
                      <li key={src} className="shrink-0 snap-start">
                        <img
                          src={src}
                          alt={`${project.name}، صورة ${i + 2}`}
                          loading="lazy"
                          className="h-56 w-auto max-w-none object-cover md:h-72"
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <Button href={message} target="_blank" rel="noreferrer">
                  استفسر عن هذا المشروع
                </Button>
              </div>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}
