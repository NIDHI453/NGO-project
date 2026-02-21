import { motion } from "framer-motion";
import { Sun, Clock, Sunset, CalendarDays } from "lucide-react";

const routines = [
  { icon: Sun, time: "Morning", task: "Inspection", desc: "Check all bags for contamination, humidity levels, and pin formation. Record observations." },
  { icon: Clock, time: "Midday", task: "Monitoring", desc: "Verify environmental readings — temperature, humidity, CO₂. Adjust ventilation if needed." },
  { icon: Sunset, time: "Evening", task: "Harvest", desc: "Harvest mature mushrooms. Clean and pack for institutional distribution." },
  { icon: CalendarDays, time: "Weekly", task: "Preparation", desc: "Prepare new substrate batches. Remove spent bags. Sanitize surfaces and racks." },
];

export default function DailyRoutineSection() {
  return (
    <div>
      <h2 className="text-2xl font-heading font-bold mb-3 text-foreground">Daily Operational Routine</h2>
      <p className="text-muted-foreground mb-8 max-w-xl leading-relaxed">
        A structured schedule that keeps operations consistent and manageable.
      </p>

      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />

        <div className="space-y-6">
          {routines.map((r, i) => (
            <motion.div
              key={r.time}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.12, duration: 0.35 }}
              className="relative flex gap-5 pl-10"
            >
              <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-card border-2 border-primary flex items-center justify-center">
                <r.icon className="w-3.5 h-3.5 text-primary" />
              </div>
              <div className="bg-card border rounded-lg p-5 flex-1">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-xs font-heading font-bold text-primary uppercase tracking-wide">{r.time}</span>
                  <span className="text-sm font-medium text-foreground">— {r.task}</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
