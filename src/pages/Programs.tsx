import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Programs = () => (
  <Layout>
    <section className="py-24 md:py-32">
      <div className="container max-w-2xl">
        <p className="text-xs tracking-[0.2em] uppercase text-primary mb-6 font-medium">Programs</p>
        <h1 className="text-3xl md:text-4xl font-heading font-bold tracking-tight mb-6 text-foreground leading-tight">
          Structured Food Systems for Institutions
        </h1>
        <p className="text-base text-muted-foreground leading-relaxed mb-10">
          Annadaan develops operational food-growing systems for institutional environments, 
          beginning with controlled indoor mushroom cultivation.
        </p>
        <Button asChild>
          <Link to="/programs/mushroom" className="inline-flex items-center gap-2">
            Explore Mushroom Program
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
      </div>
    </section>
  </Layout>
);

export default Programs;
