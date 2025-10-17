import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const AccordionContext = React.createContext({})

const Accordion = React.forwardRef(({ className, type = "single", collapsible = false, children, ...props }, ref) => {
  const [openItems, setOpenItems] = React.useState(new Set())

  const toggleItem = React.useCallback((value) => {
    setOpenItems(prev => {
      const newSet = new Set(prev)
      if (newSet.has(value)) {
        newSet.delete(value)
      } else {
        if (type === "single") {
          newSet.clear()
        }
        newSet.add(value)
      }
      return newSet
    })
  }, [type])

  const contextValue = React.useMemo(() => ({
    openItems,
    toggleItem,
    type,
    collapsible
  }), [openItems, toggleItem, type, collapsible])

  return (
    <AccordionContext.Provider value={contextValue}>
      <div ref={ref} className={cn("", className)} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  )
})
Accordion.displayName = "Accordion"

const AccordionItem = React.forwardRef(({ className, value, children, ...props }, ref) => {
  const { openItems } = React.useContext(AccordionContext)
  const isOpen = openItems.has(value)

  return (
    <div ref={ref} className={cn("border-b", className)} data-state={isOpen ? "open" : "closed"} {...props}>
      {React.Children.map(children, child =>
        React.cloneElement(child, { value, isOpen })
      )}
    </div>
  )
})
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef(({ className, children, value, isOpen, ...props }, ref) => {
  const { toggleItem } = React.useContext(AccordionContext)

  return (
    <button
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className
      )}
      data-state={isOpen ? "open" : "closed"}
      onClick={() => toggleItem(value)}
      {...props}
    >
      {children}
      <ChevronDown className={cn(
        "h-4 w-4 shrink-0 transition-transform duration-200",
        isOpen && "rotate-180"
      )} />
    </button>
  )
})
AccordionTrigger.displayName = "AccordionTrigger"

const AccordionContent = React.forwardRef(({ className, children, isOpen, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "overflow-hidden text-sm transition-all duration-300 ease-in-out",
      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
      className
    )}
    data-state={isOpen ? "open" : "closed"}
    {...props}
  >
    <div className="pb-4 pt-0">{children}</div>
  </div>
))
AccordionContent.displayName = "AccordionContent"

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }