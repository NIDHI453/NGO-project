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
    points: [
      "Source straw, sawdust, or cotton seed hulls",
      "Clean and pasteurize materials",
      "Pack into cultivation bags",
      "Document each batch for traceability",
    ],
  },
  {
    id: "inoculation",
    title: "Inoculation",
    points: [
      "Use laminar flow hood or still-air box",
      "Introduce spawn into prepared substrate",
      "Maintain sterile conditions throughout",
      "Seal bags for incubation",
    ],
  },
  {
    id: "environment",
    title: "Environmental Control",
    points: [
      "Monitor temperature and humidity",
      "Manage CO₂ and air exchange",
      "Adjust light exposure per species",
      "Log readings daily",
    ],
  },
  {
    id: "harvest",
    title: "Harvest Protocol",
    points: [
      "Harvest at optimal maturity",
      "Use clean gloves and sanitized tools",
      "Follow food-safety handling standards",
      "Package for institutional delivery",
    ],
  },
  {
    id: "reset",
    title: "Reset Cycle",
    points: [
      "Remove spent substrate",
      "Sanitize surfaces and racks",
      "Introduce new prepared bags",
      "Restart cycle with minimal downtime",
    ],
  },
];

export default function OperationalModelSection() {
  return (
    <div>
      <h2 className="text-2xl font-heading font-bold mb-3 text-foreground">Operational Model</h2>
      <p className="text-muted-foreground mb-8 max-w-xl leading-relaxed">
        A repeatable five-step framework for consistent cultivation.
      </p>

      <Accordion type="single" collapsible className="space-y-2">
        {items.map((item) => (
          <AccordionItem key={item.id} value={item.id} className="bg-card border rounded-lg px-5">
            <AccordionTrigger className="text-sm font-heading font-medium hover:no-underline">
              {item.title}
            </AccordionTrigger>
            <AccordionContent className="pb-4">
              <ul className="space-y-1.5">
                {item.points.map((point) => (
                  <li key={point} className="text-xs text-muted-foreground leading-relaxed flex gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
