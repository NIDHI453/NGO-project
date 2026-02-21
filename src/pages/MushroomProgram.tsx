import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import Layout from "@/components/Layout";
import ConceptSection from "@/components/mushroom/ConceptSection";
import GrowthCycleSection from "@/components/mushroom/GrowthCycleSection";
import OperationalModelSection from "@/components/mushroom/OperationalModelSection";
import QualityControlSection from "@/components/mushroom/QualityControlSection";
import SpaceTransformationSection from "@/components/mushroom/SpaceTransformationSection";
import SustainabilitySection from "@/components/mushroom/SustainabilitySection";
import MushroomTypesSection from "@/components/mushroom/MushroomTypesSection";
import DailyRoutineSection from "@/components/mushroom/DailyRoutineSection";
import RiskSafetySection from "@/components/mushroom/RiskSafetySection";

const sections = [
  { id: "concept", label: "Concept" },
  { id: "growth-cycle", label: "Growth Cycle" },
  { id: "operational-model", label: "Operational Model" },
  { id: "quality-control", label: "Quality Control" },
  { id: "space-transformation", label: "Space Transformation" },
  { id: "sustainability", label: "Sustainability" },
  { id: "mushroom-types", label: "Mushroom Types" },
  { id: "daily-routine", label: "Daily Routine" },
  { id: "risk-safety", label: "Risk & Safety" },
];

const sectionComponents: Record<string, React.FC> = {
  "concept": ConceptSection,
  "growth-cycle": GrowthCycleSection,
  "operational-model": OperationalModelSection,
  "quality-control": QualityControlSection,
  "space-transformation": SpaceTransformationSection,
  "sustainability": SustainabilitySection,
  "mushroom-types": MushroomTypesSection,
  "daily-routine": DailyRoutineSection,
  "risk-safety": RiskSafetySection,
};

const MushroomProgram = () => {
  const [activeSection, setActiveSection] = useState("concept");
  const activeIndex = sections.findIndex((s) => s.id === activeSection);
  const ActiveComponent = sectionComponents[activeSection];

  return (
    <Layout>
      <section className="py-12 md:py-20">
        <div className="container mb-12">
          <p className="text-xs tracking-[0.2em] uppercase text-primary mb-4 font-medium">
            Mushroom Program
          </p>
          <h1 className="text-2xl md:text-3xl font-heading font-bold tracking-tight text-foreground">
            Controlled Indoor Mushroom Cultivation
          </h1>
        </div>

        <div className="container flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Vertical Navigation */}
          <nav className="lg:sticky lg:top-24 lg:self-start shrink-0 lg:w-56">
            <div className="relative flex lg:flex-col gap-1 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
              {/* Progress line (desktop) */}
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

              {sections.map((section, i) => (
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

          {/* Content Panel */}
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
