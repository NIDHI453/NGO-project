import { motion } from "framer-motion";
import { Building2, RefreshCw, Layers } from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "Converting Unused Spaces",
    desc: "Repurposing storage rooms and basements into controlled growing environments.",
  },
  {
    icon: RefreshCw,
    title: "Structured Cycles",
    desc: "Repeatable, documented cultivation cycles for consistent output.",
  },
  {
    icon: Layers,
    title: "Institutional Integration",
    desc: "Systems aligned with existing operations, staffing, and resources.",
  },
];

export default function ConceptSection() {
  return (
    <div>
      <h2 className="text-2xl font-heading font-bold mb-3 text-foreground">
        Controlled Indoor Mushroom Cultivation
      </h2>
      <p className="text-muted-foreground mb-10 max-w-xl leading-relaxed">
        Converting underutilized institutional spaces into climate-controlled cultivation rooms.
        A structured, repeatable biological process for growing nutritious food indoors.
      </p>

      <div className="grid gap-6 sm:grid-cols-3">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.12, duration: 0.4 }}
            className="bg-card rounded-lg p-6 border"
          >
            <f.icon className="w-5 h-5 text-primary mb-4" />
            <h3 className="font-heading font-semibold text-sm mb-2">{f.title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
