import { motion } from "framer-motion";
import { ShieldCheck, Wind, Eye, AlertTriangle } from "lucide-react";
import healthyImg from "@/assets/healthy-growth.jpg";
import contaminatedImg from "@/assets/contaminated-bag.jpg";

const points = [
  { icon: ShieldCheck, label: "Hygiene" },
  { icon: Wind, label: "Ventilation" },
  { icon: Eye, label: "Monitoring" },
  { icon: AlertTriangle, label: "Isolation" },
];

export default function QualitySafetySection() {
  return (
    <div>
      <h2 className="text-2xl font-heading font-bold mb-2 text-foreground">Quality & Safety</h2>
      <p className="text-muted-foreground mb-6 text-sm">Identifying healthy growth from contamination.</p>

      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="rounded-xl border overflow-hidden"
        >
          <img src={healthyImg} alt="Healthy mushroom growth" className="w-full aspect-[4/3] object-cover" loading="lazy" />
          <div className="p-4">
            <span className="text-xs font-heading font-semibold text-primary">Healthy Growth</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="rounded-xl border overflow-hidden"
        >
          <img src={contaminatedImg} alt="Contaminated substrate" className="w-full aspect-[4/3] object-cover" loading="lazy" />
          <div className="p-4">
            <span className="text-xs font-heading font-semibold text-destructive">Contamination</span>
          </div>
        </motion.div>
      </div>

      <div className="flex gap-6">
        {points.map((p, i) => (
          <motion.div
            key={p.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.08, duration: 0.3 }}
            className="flex items-center gap-2"
          >
            <p.icon className="w-4 h-4 text-primary shrink-0" />
            <span className="text-sm font-medium text-foreground">{p.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
