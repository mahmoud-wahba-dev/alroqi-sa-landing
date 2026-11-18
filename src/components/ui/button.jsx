import { cva } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

// shadcn Button, restyled for Al-Ruqi: square corners, flat, gold on night /
// deep gold on paper (through the `primary` token), no shadows.
const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-3 rounded-none text-base font-medium whitespace-nowrap transition-[filter,background-color,color] duration-300 outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:brightness-110",
        outline:
          "border border-line text-foreground hover:bg-primary hover:text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:brightness-110",
        ghost: "text-foreground hover:text-primary",
        link: "text-foreground underline decoration-primary/60 hover:text-primary",
      },
      size: {
        default: "min-h-11 px-5",
        lg: "min-h-14 px-8",
        icon: "size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

// shadcn convention: variants are exported for reuse (e.g. styling links as buttons).
// eslint-disable-next-line react-refresh/only-export-components
export { Button, buttonVariants }
