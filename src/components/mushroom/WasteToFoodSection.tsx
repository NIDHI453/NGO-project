import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const flow = [
  "Agricultural Waste",
  "Prepared Substrate",
  "Mushroom Growth",
  "Kitchen Use",
];

export default function WasteToFoodSection() {
  return (
    <div>
      <h2 className="text-2xl font-heading font-bold mb-2 text-foreground">From Waste to Food</h2>
      <p className="text-muted-foreground mb-8 text-sm">A circular process that turns agricultural waste into nutrition.</p>

      <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-0">
        {flow.map((step, i) => (
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.4 }}
            className="flex items-center gap-2 md:gap-0"
          >
            <div className="bg-card border rounded-lg px-6 py-4 text-center min-w-[130px]">
              <span className="text-sm font-heading font-semibold text-foreground">{step}</span>
            </div>
            {i < flow.length - 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.15 + 0.3 }}
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
