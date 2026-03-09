import { motion } from "framer-motion";
import { ArrowRight, Sun, Clock, Sunset, CalendarDays } from "lucide-react";

const flow = [
  "Agricultural Waste",
  "Prepared Substrate",
  "Mushroom Growth",
  "Institutional Use",
];

const routine = [
  { icon: Sun, time: "Morning", task: "Inspect" },
  { icon: Clock, time: "Midday", task: "Monitor" },
  { icon: Sunset, time: "Evening", task: "Harvest" },
  { icon: CalendarDays, time: "Weekly", task: "Reset" },
];

export default function SustainabilityRoutineSection() {
  return (
    <div>
      <h2 className="text-2xl font-heading font-bold mb-3 text-foreground">Sustainability & Routine</h2>
      <p className="text-muted-foreground mb-8 max-w-xl leading-relaxed">
        Circular flow from waste to food, with structured daily operations.
      </p>

      {/* Flow diagram */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-0 mb-12">
        {flow.map((step, i) => (
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.4 }}
            className="flex items-center gap-2 md:gap-0"
          >
            <div className="bg-card border rounded-lg px-5 py-4 text-center min-w-[130px] shadow-sm">
              <span className="text-sm font-heading font-semibold text-foreground">{step}</span>
            </div>
            {i < flow.length - 1 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.15 + 0.3 }}>
                <ArrowRight className="w-4 h-4 text-primary mx-2 shrink-0 rotate-90 md:rotate-0" />
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Daily routine */}
      <h3 className="text-lg font-heading font-bold mb-5 text-foreground">Daily Routine</h3>

      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />

        <div className="space-y-4">
          {routine.map((r, i) => (
            <motion.div
              key={r.time}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1, duration: 0.3 }}
              className="relative flex items-center gap-4 pl-10"
            >
              <div className="absolute left-0 w-8 h-8 rounded-full bg-card border-2 border-primary flex items-center justify-center">
                <r.icon className="w-3.5 h-3.5 text-primary" />
              </div>
              <span className="text-xs font-heading font-bold text-primary uppercase tracking-wide w-16">{r.time}</span>
              <span className="text-sm text-foreground font-medium">{r.task}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
