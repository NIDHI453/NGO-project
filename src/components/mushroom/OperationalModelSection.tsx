import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    id: "substrate",
    title: "Substrate Preparation",
    content: "Agricultural waste materials — straw, sawdust, or cotton seed hulls — are sourced, cleaned, pasteurized, and packed into cultivation bags. Each batch is documented for traceability.",
  },
  {
    id: "inoculation",
    title: "Inoculation",
    content: "Prepared substrate bags are inoculated with mushroom spawn under controlled sterile conditions. Laminar flow hoods or still-air boxes ensure contamination-free transfer.",
  },
  {
    id: "environment",
    title: "Environmental Control",
    content: "Temperature, humidity, CO₂, and light levels are monitored and maintained within species-specific ranges. Simple instrumentation and routine checks form the control protocol.",
  },
  {
    id: "harvest",
    title: "Harvest Protocol",
    content: "Mushrooms are harvested at optimal maturity using clean gloves and sanitized tools. Post-harvest handling follows food-safety protocols suited for institutional distribution.",
  },
  {
    id: "reset",
    title: "Reset Cycle",
    content: "Spent substrate is removed, surfaces sanitized, and new bags are introduced. The cycle restarts with minimal downtime, maintaining continuous operational rhythm.",
  },
];

export default function OperationalModelSection() {
  return (
    <div>
      <h2 className="text-2xl font-heading font-bold mb-3 text-foreground">Operational Model</h2>
      <p className="text-muted-foreground mb-8 max-w-xl leading-relaxed">
        A repeatable five-step operational framework for consistent cultivation.
      </p>

      <Accordion type="single" collapsible className="space-y-2">
        {items.map((item) => (
          <AccordionItem key={item.id} value={item.id} className="bg-card border rounded-lg px-5">
            <AccordionTrigger className="text-sm font-heading font-medium hover:no-underline">
              {item.title}
            </AccordionTrigger>
            <AccordionContent className="text-xs text-muted-foreground leading-relaxed pb-4">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
