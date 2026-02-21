import { motion } from "framer-motion";
import { ShieldCheck, Wind, Thermometer, AlertTriangle, Sparkles } from "lucide-react";

const items = [
  { icon: ShieldCheck, title: "Hygiene Standards", desc: "Strict protocols for personal hygiene, tool sanitization, and workspace cleanliness at every stage." },
  { icon: Wind, title: "Ventilation Control", desc: "Adequate air exchange to manage CO₂ levels and prevent stale-air conditions that promote contamination." },
  { icon: Thermometer, title: "Environmental Monitoring", desc: "Continuous tracking of temperature, humidity, and air quality within cultivation rooms." },
  { icon: AlertTriangle, title: "Contamination Isolation", desc: "Immediate removal and disposal of contaminated bags to prevent spread within the growing space." },
  { icon: Sparkles, title: "Clean Harvest Handling", desc: "Harvest and post-harvest handling follows food-grade cleanliness standards for institutional delivery." },
];

export default function RiskSafetySection() {
  return (
    <div>
      <h2 className="text-2xl font-heading font-bold mb-3 text-foreground">Risk & Safety Framework</h2>
      <p className="text-muted-foreground mb-8 max-w-xl leading-relaxed">
        Institutional-grade safety practices for controlled cultivation environments.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08, duration: 0.35 }}
            className="bg-card border rounded-lg p-5"
          >
            <item.icon className="w-5 h-5 text-primary mb-3" />
            <h3 className="font-heading font-semibold text-sm mb-1">{item.title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
