import { motion } from "framer-motion";
import healthyImg from "@/assets/healthy-growth.jpg";
import contaminatedImg from "@/assets/contaminated-bag.jpg";
import { CheckCircle, XCircle, Eye, ShieldCheck } from "lucide-react";

const points = [
  { icon: Eye, label: "Identification", desc: "Recognizing healthy mycelium patterns versus contamination indicators through visual inspection." },
  { icon: XCircle, label: "Isolation", desc: "Immediately removing contaminated bags from the growing area to prevent cross-contamination." },
  { icon: ShieldCheck, label: "Hygiene Protocol", desc: "Maintaining strict hygiene at every stage — from substrate prep to harvest." },
  { icon: CheckCircle, label: "Monitoring Practice", desc: "Daily visual checks and environmental logging to catch issues early." },
];

export default function QualityControlSection() {
  return (
    <div>
      <h2 className="text-2xl font-heading font-bold mb-3 text-foreground">Quality Control</h2>
      <p className="text-muted-foreground mb-8 max-w-xl leading-relaxed">
        Distinguishing healthy growth from contamination is critical to operational success.
      </p>

      {/* Split screen */}
      <div className="grid md:grid-cols-2 gap-4 mb-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-card rounded-lg border overflow-hidden"
        >
          <div className="aspect-[4/3] overflow-hidden">
            <img src={healthyImg} alt="Healthy mushroom growth" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="p-4">
            <span className="text-xs font-heading font-semibold text-primary">Healthy Growth</span>
            <p className="text-xs text-muted-foreground mt-1">White, uniform mycelium spreading evenly through substrate.</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="bg-card rounded-lg border overflow-hidden"
        >
          <div className="aspect-[4/3] overflow-hidden">
            <img src={contaminatedImg} alt="Contaminated substrate bag" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="p-4">
            <span className="text-xs font-heading font-semibold text-destructive">Contamination</span>
            <p className="text-xs text-muted-foreground mt-1">Green or black mold patches indicating trichoderma or other contaminants.</p>
          </div>
        </motion.div>
      </div>

      {/* Points */}
      <div className="grid sm:grid-cols-2 gap-4">
        {points.map((p, i) => (
          <motion.div
            key={p.label}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.08, duration: 0.35 }}
            className="flex gap-3 items-start"
          >
            <p.icon className="w-4 h-4 text-primary mt-0.5 shrink-0" />
            <div>
              <h4 className="text-sm font-medium">{p.label}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
