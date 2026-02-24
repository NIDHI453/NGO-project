import { motion } from "framer-motion";
import { Leaf, Factory, ArrowLeftRight, Recycle, Shield } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { useIsMobile } from "@/hooks/use-mobile";

const features = [
  {
    icon: Leaf,
    title: "Controlled Indoor System",
    desc: "Climate-managed cultivation in converted spaces.",
    span: "md:col-span-2",
  },
  {
    icon: Factory,
    title: "Growth Stages",
    desc: "Five repeatable stages from substrate to harvest.",
    span: "",
  },
  {
    icon: ArrowLeftRight,
    title: "Space Transformation",
    desc: "Idle rooms become productive grow areas.",
    span: "",
  },
  {
    icon: Recycle,
    title: "Sustainability Loop",
    desc: "Agricultural waste converted into nutritious food.",
    span: "",
  },
  {
    icon: Shield,
    title: "Safety Framework",
    desc: "Prevention-focused protocols at every stage.",
    span: "",
  },
];

export default function FeatureHighlightGrid() {
  const isMobile = useIsMobile();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {features.map((f, i) => (
        <motion.div
          key={f.title}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.08, duration: 0.4, ease: "easeOut" }}
          className={`relative rounded-xl bg-card border p-6 ${f.span}`}
        >
          <GlowingEffect
            disabled={isMobile}
            spread={50}
            blur={10}
            proximity={120}
            borderWidth={1}
          />
          <div className="relative z-10">
            <f.icon className="w-5 h-5 text-primary mb-3" />
            <h3 className="font-heading font-semibold text-sm mb-1 text-foreground">{f.title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
