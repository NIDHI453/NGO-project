import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Layout from "@/components/Layout";
import ConceptSection from "@/components/mushroom/ConceptSection";
import GrowthCycleSection from "@/components/mushroom/GrowthCycleSection";
import OperationalModelSection from "@/components/mushroom/OperationalModelSection";
import SpaceTypesSection from "@/components/mushroom/SpaceTypesSection";
import SustainabilityRoutineSection from "@/components/mushroom/SustainabilityRoutineSection";
import RiskSafetySection from "@/components/mushroom/RiskSafetySection";
import growRoomImg from "@/assets/space-after.jpg";

const sections = [
  { id: "concept", label: "Concept" },
  { id: "growth-cycle", label: "Growth Cycle" },
  { id: "operational-model", label: "Operational Model" },
  { id: "space-types", label: "Space & Types" },
  { id: "sustainability-routine", label: "Sustainability & Routine" },
  { id: "risk-safety", label: "Risk & Safety" },
];

const sectionMeta: Record<string, { component: React.FC; bg?: string }> = {
  "concept": { component: ConceptSection },
  "growth-cycle": { component: GrowthCycleSection },
  "operational-model": { component: OperationalModelSection, bg: "bg-sage/40" },
  "space-types": { component: SpaceTypesSection },
  "sustainability-routine": { component: SustainabilityRoutineSection, bg: "bg-muted/30" },
  "risk-safety": { component: RiskSafetySection },
};

const MushroomProgram = () => {
  const [activeSection, setActiveSection] = useState("concept");
  const activeIndex = sections.findIndex((s) => s.id === activeSection);
  const ActiveComponent = sectionComponents[activeSection];

  return (
    <Layout>
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative h-[340px] md:h-[420px] overflow-hidden"
      >
        <img
          src={growRoomImg}
          alt="Indoor mushroom grow room with organized racks"
          className="absolute inset-0 w-full h-full object-cover saturate-[0.85]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(0,0%,7%,0.75)] via-[hsl(0,0%,7%,0.35)] to-transparent" />
        <div className="relative container h-full flex flex-col justify-end pb-14">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-xs tracking-[0.25em] uppercase text-white/70 mb-3 font-medium"
          >
            Mushroom Program
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            className="text-3xl md:text-5xl font-heading font-bold tracking-tight text-white"
          >
            Controlled Indoor Cultivation
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.7, duration: 0.5, ease: "easeOut" }}
            className="mt-4 h-[3px] w-16 bg-primary origin-left rounded-full"
          />
        </div>
      </motion.div>

      <section className="py-16 md:py-24">

        <div className="container flex flex-col lg:flex-row gap-10 lg:gap-20">
          <nav className="lg:sticky lg:top-24 lg:self-start shrink-0 lg:w-56">
            <div className="relative flex lg:flex-col gap-1 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
              <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-px bg-border">
                <motion.div
                  className="w-full bg-primary"
                  initial={false}
                  animate={{
                    height: `${((activeIndex + 1) / sections.length) * 100}%`,
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                />
              </div>

              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`text-left lg:pl-5 px-3 lg:px-0 py-2 text-sm whitespace-nowrap transition-all duration-300 rounded-sm ${
                    activeSection === section.id
                      ? "text-primary font-medium bg-olive-muted lg:bg-transparent"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </div>
          </nav>

          <div className="flex-1 min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <ActiveComponent />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MushroomProgram;
