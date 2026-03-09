import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import substrateImg from "@/assets/substrate-preparation.jpg";
import inoculationImg from "@/assets/inoculation.jpg";
import incubationImg from "@/assets/incubation.jpg";
import fruitingImg from "@/assets/fruiting.jpg";
import harvestImg from "@/assets/harvest.jpg";
import { Progress } from "@/components/ui/progress";
import { ChevronRight, ChevronLeft } from "lucide-react";

const stages = [
  { title: "Substrate Preparation", caption: "Raw materials pasteurized and packed.", takeaway: "Foundation of every cycle.", image: substrateImg },
  { title: "Inoculation", caption: "Spawn introduced under sterile conditions.", takeaway: "Precision prevents contamination.", image: inoculationImg },
  { title: "Incubation", caption: "Mycelium colonizes substrate in darkness.", takeaway: "Patience builds strength.", image: incubationImg },
  { title: "Fruiting", caption: "Humidity and airflow trigger formation.", takeaway: "Environment drives results.", image: fruitingImg },
  { title: "Harvest", caption: "Mature mushrooms harvested by hand.", takeaway: "Quality at the finish.", image: harvestImg },
];

export default function GrowthCycleSection() {
  const [active, setActive] = useState(0);
  const stage = stages[active];
  const progress = ((active + 1) / stages.length) * 100;

  return (
    <div>
      <h2 className="text-2xl font-heading font-bold mb-3 text-foreground">Growth Cycle</h2>
      <p className="text-muted-foreground mb-8 max-w-xl leading-relaxed">
        Five controlled stages from substrate to harvest.
      </p>

      {/* Progress bar */}
      <div className="mb-6">
        <Progress value={progress} className="h-1.5 bg-muted" />
      </div>

      {/* Step indicators */}
      <div className="flex gap-2 mb-8">
        {stages.map((s, i) => (
          <button
            key={s.title}
            onClick={() => setActive(i)}
            className={`flex-1 py-2.5 px-1 rounded-md text-xs font-heading font-medium transition-all duration-300 border ${
              i === active
                ? "bg-primary/10 border-primary text-primary shadow-sm"
                : i < active
                ? "bg-muted/50 border-border text-muted-foreground"
                : "bg-card border-border text-muted-foreground hover:border-primary/40"
            }`}
          >
            <span className="block text-[10px] opacity-60 mb-0.5">Step {i + 1}</span>
            <span className="hidden sm:block truncate">{s.title.split(" ")[0]}</span>
          </button>
        ))}
      </div>

      {/* Active stage panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="bg-card border rounded-lg overflow-hidden shadow-sm"
        >
          <div className="aspect-video relative overflow-hidden">
            <motion.img
              src={stage.image}
              alt={stage.title}
              className="w-full h-full object-cover saturate-[0.85]"
              initial={{ scale: 1.05, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-foreground/50 to-transparent h-24" />
            <div className="absolute bottom-4 left-5">
              <span className="text-primary-foreground font-heading font-bold text-lg">{stage.title}</span>
            </div>
          </div>
          <div className="p-6">
            <p className="text-sm text-muted-foreground leading-relaxed mb-2">{stage.caption}</p>
            <p className="text-xs font-medium text-primary italic">{stage.takeaway}</p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex justify-between mt-6">
        <button
          onClick={() => setActive(Math.max(0, active - 1))}
          disabled={active === 0}
          className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground disabled:opacity-30 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" /> Previous
        </button>
        <button
          onClick={() => setActive(Math.min(stages.length - 1, active + 1))}
          disabled={active === stages.length - 1}
          className="flex items-center gap-1.5 text-sm font-medium text-primary hover:text-olive-light disabled:opacity-30 transition-colors"
        >
          Next Step <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
