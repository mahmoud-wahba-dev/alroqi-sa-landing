import { Accordion as AccordionPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

// shadcn Accordion, restyled: large display type, a plus that collapses to a
// minus, hairlines drawn by the page (so they can animate in).

function Accordion({ ...props }) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />
}

function AccordionItem({ className, ...props }) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn(className)}
      {...props}
    />
  )
}

function PlusMinusIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="square"
      aria-hidden="true"
    >
      <path d="M4 14h20" />
      {/* The vertical stroke collapses when open, leaving a minus. */}
      <path
        d="M14 4v20"
        className="origin-center transition-transform duration-500 ease-out group-data-[state=open]:scale-y-0"
      />
    </svg>
  )
}

function AccordionTrigger({ className, children, ...props }) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "group flex flex-1 items-center justify-between gap-6 py-7 text-start outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50",
          className
        )}
        {...props}
      >
        {children}
        <span className="text-primary">
          <PlusMinusIcon />
        </span>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({ className, children, ...props }) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      {...props}
    >
      <div className={cn("pb-9", className)}>{children}</div>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
