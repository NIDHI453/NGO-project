import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import substrateImg from "@/assets/substrate-preparation.jpg";
import inoculationImg from "@/assets/inoculation.jpg";
import incubationImg from "@/assets/incubation.jpg";
import fruitingImg from "@/assets/fruiting.jpg";
import harvestImg from "@/assets/harvest.jpg";

const steps = [
  {
    title: "Substrate Preparation",
    caption: "Raw agricultural waste is pasteurized and packed into growing bags — the foundation of every cycle.",
    image: substrateImg,
  },
  {
    title: "Inoculation",
    caption: "Mushroom spawn is introduced into the substrate under sterile conditions to begin colonization.",
    image: inoculationImg,
  },
  {
    title: "Incubation",
    caption: "Bags rest in dark, controlled environments as mycelium spreads through the substrate over 14–21 days.",
    image: incubationImg,
  },
  {
    title: "Fruiting",
    caption: "Humidity, airflow, and light trigger pin formation — mushrooms begin to emerge and develop.",
    image: fruitingImg,
  },
  {
    title: "Harvest",
    caption: "Mature mushrooms are carefully harvested by hand, ready for institutional kitchens.",
    image: harvestImg,
  },
];

export default function GrowthJourneySection() {
  const [current, setCurrent] = useState(0);
  const step = steps[current];

  const goTo = (i: number) => setCurrent(i);
  const next = () => setCurrent((c) => Math.min(c + 1, steps.length - 1));

  return (
    <div>
      <h2 className="text-2xl font-heading font-bold mb-2 text-foreground">Growth Journey</h2>
      <p className="text-muted-foreground mb-8 text-sm">Five stages. One guided process.</p>

      {/* Main panel */}
      <div className="bg-card border rounded-xl overflow-hidden">
        <div className="relative aspect-[16/9] overflow-hidden bg-muted">
          <AnimatePresence mode="wait">
            <motion.img
              key={current}
              src={step.image}
              alt={step.title}
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </AnimatePresence>

          {/* Step badge */}
          <div className="absolute top-4 left-4 bg-foreground/70 text-background text-xs font-heading font-semibold px-3 py-1.5 rounded-md backdrop-blur-sm">
            Step {current + 1} of {steps.length}
          </div>
        </div>

        <div className="p-6 md:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
            >
              <h3 className="font-heading font-bold text-lg mb-2 text-foreground">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">{step.caption}</p>
            </motion.div>
          </AnimatePresence>

          {current < steps.length - 1 && (
            <button
              onClick={next}
              className="mt-6 inline-flex items-center gap-2 bg-primary text-primary-foreground text-sm font-medium px-5 py-2.5 rounded-md hover:bg-primary/90 transition-colors"
            >
              Next Step
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Step indicators */}
      <div className="mt-6 flex items-center gap-2">
        {steps.map((s, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="flex-1 group relative"
          >
            {/* Progress bar */}
            <div className="h-1 rounded-full bg-border overflow-hidden">
              <motion.div
                className="h-full bg-primary rounded-full"
                initial={false}
                animate={{ width: i <= current ? "100%" : "0%" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </div>
            <span
              className={`block mt-2 text-xs font-medium transition-colors ${
                i === current ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {s.title}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
