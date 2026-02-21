import { motion } from "framer-motion";
import substrateImg from "@/assets/substrate-preparation.jpg";
import inoculationImg from "@/assets/inoculation.jpg";
import incubationImg from "@/assets/incubation.jpg";
import fruitingImg from "@/assets/fruiting.jpg";
import harvestImg from "@/assets/harvest.jpg";

const stages = [
  { title: "Substrate Preparation", caption: "Raw materials are pasteurized and prepared to create the optimal growing medium for mushroom mycelium.", image: substrateImg },
  { title: "Inoculation", caption: "Mushroom spawn is introduced into the prepared substrate under sterile conditions to initiate colonization.", image: inoculationImg },
  { title: "Incubation", caption: "Bags are placed in controlled dark environments where mycelium spreads throughout the substrate over 14–21 days.", image: incubationImg },
  { title: "Fruiting", caption: "Environmental triggers — humidity, airflow, and light — stimulate mushroom pin formation and fruit body development.", image: fruitingImg },
  { title: "Harvest", caption: "Mature mushrooms are carefully harvested by hand, maintaining quality standards for institutional use.", image: harvestImg },
];

export default function GrowthCycleSection() {
  return (
    <div>
      <h2 className="text-2xl font-heading font-bold mb-3 text-foreground">Growth Cycle</h2>
      <p className="text-muted-foreground mb-10 max-w-xl leading-relaxed">
        A five-stage biological process, each phase carefully controlled for optimal results.
      </p>

      <div className="relative">
        {/* Connecting line */}
        <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />

        <div className="space-y-10">
          {stages.map((stage, i) => (
            <motion.div
              key={stage.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.45 }}
              className="relative flex gap-6 md:gap-8"
            >
              {/* Dot */}
              <div className="relative z-10 mt-1 shrink-0">
                <div className="w-8 md:w-12 h-8 md:h-12 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
                  <span className="text-xs font-heading font-bold text-primary">{i + 1}</span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 bg-card rounded-lg border overflow-hidden">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={stage.image}
                    alt={stage.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-semibold text-sm mb-1">{stage.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{stage.caption}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
