import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Accordian() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1" className={`border-none`}>
        <AccordionTrigger className={`hover:no-underline`}>
            Pay in Account
        </AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className={`border-none`}>
        <AccordionTrigger className={`hover:no-underline`}>
            Pay in Account
        </AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

