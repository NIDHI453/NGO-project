import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import GrowthJourneySection from "@/components/mushroom/GrowthJourneySection";
import GrowRoomSection from "@/components/mushroom/GrowRoomSection";
import QualitySafetySection from "@/components/mushroom/QualitySafetySection";
import WasteToFoodSection from "@/components/mushroom/WasteToFoodSection";

const MushroomProgram = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl mx-auto space-y-24">
          {/* 1. Concept */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs tracking-[0.2em] uppercase text-primary mb-4 font-medium">
              Mushroom Program
            </p>
            <h1 className="text-3xl md:text-4xl font-heading font-bold tracking-tight text-foreground mb-4">
              Protein. Grown Indoors.
            </h1>
            <p className="text-muted-foreground leading-relaxed max-w-lg">
              We convert unused institutional spaces into controlled mushroom cultivation rooms — 
              producing fresh, nutritious food through a structured, repeatable biological process.
            </p>
          </motion.div>

          {/* 2. Interactive Growth Journey */}
          <GrowthJourneySection />

          {/* 3. Inside the Grow Room */}
          <GrowRoomSection />

          {/* 4. Quality & Safety */}
          <QualitySafetySection />

          {/* 5. From Waste to Food */}
          <WasteToFoodSection />
        </div>
      </section>
    </Layout>
  );
};

export default MushroomProgram;
