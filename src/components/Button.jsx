import { Button as UIButton } from '@/components/ui/button'
import { cn } from '@/lib/utils'

// Our branded call-to-action: shadcn's Button (asChild, so it renders a real
// link) plus an arrow that slides toward the line end on hover.

export function ArrowIcon({ className = '' }) {
  // Points toward the end of the line: left in RTL, flipped by rtl:-scale-x-100.
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="square"
      aria-hidden="true"
      className={cn('rtl:-scale-x-100', className)}
    >
      <path d="M2 9h13M10 4l5 5-5 5" />
    </svg>
  )
}

export default function Button({ href, children, arrow = true, className, ...rest }) {
  return (
    <UIButton asChild size="lg" className={cn('group', className)}>
      <a href={href} {...rest}>
        {children}
        {arrow && (
          <ArrowIcon className="transition-transform duration-500 ease-out group-hover:-translate-x-1.5" />
        )}
      </a>
    </UIButton>
  )
}
