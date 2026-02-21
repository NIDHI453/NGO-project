import { motion } from "framer-motion";
import { Leaf, ArrowRight } from "lucide-react";

const steps = [
  { label: "Agricultural Waste", sub: "Straw, sawdust, husks" },
  { label: "Prepared Substrate", sub: "Pasteurized & packed" },
  { label: "Mushroom Growth", sub: "Controlled cultivation" },
  { label: "Institutional Use", sub: "Food service delivery" },
];

export default function SustainabilitySection() {
  return (
    <div>
      <h2 className="text-2xl font-heading font-bold mb-3 text-foreground">Sustainability Logic</h2>
      <p className="text-muted-foreground mb-10 max-w-xl leading-relaxed">
        A circular flow that converts agricultural waste into nutritious food for institutional consumption.
      </p>

      <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-0">
        {steps.map((step, i) => (
          <motion.div
            key={step.label}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.18, duration: 0.4 }}
            className="flex items-center gap-2 md:gap-0"
          >
            <div className="bg-card border rounded-lg p-5 text-center min-w-[140px]">
              <Leaf className="w-4 h-4 text-primary mx-auto mb-2" />
              <h4 className="text-sm font-heading font-semibold">{step.label}</h4>
              <p className="text-xs text-muted-foreground mt-1">{step.sub}</p>
            </div>
            {i < steps.length - 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.18 + 0.3 }}
              >
                <ArrowRight className="w-4 h-4 text-primary mx-2 shrink-0 rotate-90 md:rotate-0" />
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
