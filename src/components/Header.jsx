import { MenuIcon } from 'lucide-react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { company } from '../data/content'

const links = [
  { label: 'المشاريع', href: '#projects' },
  { label: 'الخدمات', href: '#services' },
  { label: 'تواصل معنا', href: '#contact' },
]

// Mobile menu: shadcn Sheet (Radix Dialog underneath: focus trap, Esc, scroll lock, ARIA).
function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger
        className="grid size-12 place-items-center text-fg md:hidden"
        aria-label="فتح القائمة"
      >
        <MenuIcon className="size-6" strokeWidth={1.5} aria-hidden="true" />
      </SheetTrigger>
      <SheetContent side="right" data-theme="night" className="gap-10 px-8 py-8">
        <SheetTitle className="sr-only">القائمة</SheetTitle>
        <SheetDescription className="sr-only">روابط التنقل في الصفحة</SheetDescription>
        <nav aria-label="التنقل الرئيسي" className="mt-16 flex flex-col">
          {links.map((link) => (
            <SheetClose asChild key={link.href}>
              <a
                href={link.href}
                className="border-b border-line py-5 font-display text-2xl font-light text-fg transition-colors duration-300 hover:text-accent"
              >
                {link.label}
              </a>
            </SheetClose>
          ))}
        </nav>
        <a href={`tel:${company.phone}`} dir="ltr" className="mt-auto font-mono text-lg text-accent">
          {company.phoneDisplay}
        </a>
      </SheetContent>
    </Sheet>
  )
}

// Sits on top of the (dark) hero. The logo file is a gold mark on a black
// square, so `mix-blend-lighten` lets the square dissolve into the ink ground.
export default function Header() {
  return (
    <header className="js-fade absolute inset-x-0 top-0 z-20">
      {/* On desktop the header stays inside the text column (7/12), clear of the photo. */}
      <div className="flex items-center justify-between gap-6 ps-14 pe-3 pt-5 md:ps-20 md:pe-10 md:pt-7 lg:w-7/12 lg:pe-16">
        <a href="#top" className="flex items-center gap-3" aria-label={company.fullName}>
          <img
            src="/images/al-ruqi-mark.jpg"
            alt=""
            width="285"
            height="375"
            className="h-12 w-auto mix-blend-lighten md:h-14"
          />
          <span className="flex flex-col leading-tight">
            <span className="font-display text-lg font-medium text-fg md:text-xl">
              {company.name}
            </span>
            <span className="hidden text-xs text-fg-muted sm:block">للتطوير والاستثمار العقاري</span>
          </span>
        </a>

        <nav aria-label="التنقل الرئيسي" className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-fg-muted transition-colors duration-300 hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={`tel:${company.phone}`}
          dir="ltr"
          className="hidden font-mono text-sm text-fg transition-colors duration-300 hover:text-accent md:block"
        >
          {company.phoneDisplay}
        </a>

        <MobileMenu />
      </div>
    </header>
  )
}
