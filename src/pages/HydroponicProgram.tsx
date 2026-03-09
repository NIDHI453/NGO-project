import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import hydroponicImg from "@/assets/hydroponic-tower.jpg";

const HydroponicProgram = () => (
  <Layout>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative h-[340px] md:h-[420px] overflow-hidden"
    >
      <img
        src={hydroponicImg}
        alt="Hydroponic tower farming system with fresh greens"
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
          Hydroponic Program
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="text-3xl md:text-5xl font-heading font-bold tracking-tight text-white"
        >
          Vertical Tower Farming
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
      <div className="container max-w-2xl text-center">
        <p className="text-muted-foreground leading-relaxed">
          Content under development. This section will detail the hydroponic tower farming program designed for institutional environments.
        </p>
      </div>
    </section>
  </Layout>
);

export default HydroponicProgram;
