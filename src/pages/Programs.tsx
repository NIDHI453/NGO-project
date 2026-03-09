import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import mushroomImg from "@/assets/mushroom-cultivation.jpg";
import hydroponicImg from "@/assets/hydroponic-tower.jpg";

const programs = [
  {
    title: "Mushroom Farming",
    desc: "Controlled indoor mushroom cultivation using unused spaces to produce reliable food for institutional kitchens.",
    image: mushroomImg,
    link: "/programs/mushroom",
    cta: "Explore Mushroom Program",
  },
  {
    title: "Hydroponic Tower Farming",
    desc: "Vertical soil-free growing systems designed for institutions to produce fresh leafy vegetables in limited spaces.",
    image: hydroponicImg,
    link: "/programs/hydroponic",
    cta: "Explore Hydroponic Program",
  },
];

const Programs = () => (
  <Layout>
    <section className="py-24 md:py-32">
      <div className="container">
        <div className="max-w-2xl mb-14">
          <p className="text-xs tracking-[0.25em] uppercase text-primary mb-5 font-medium">
            Programs
          </p>
          <h1 className="text-3xl md:text-4xl font-heading font-bold tracking-tight mb-5 text-foreground leading-tight">
            Structured Food Systems for Institutions
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed">
            Annadaan develops operational food-growing systems for institutional
            environments — converting idle spaces into reliable sources of
            nutrition.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.45, ease: "easeOut" }}
            >
              <Link
                to={p.link}
                className="group block bg-card border rounded-lg overflow-hidden shadow-sm hover:shadow-lg hover:border-primary/40 transition-all duration-300"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover saturate-[0.85] group-hover:scale-[1.03] transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <h2 className="text-xl font-heading font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                    {p.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {p.desc}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all duration-300">
                    {p.cta}
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Programs;
