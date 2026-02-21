import { motion } from "framer-motion";
import oysterImg from "@/assets/mushroom-oyster.jpg";
import buttonImg from "@/assets/mushroom-button.jpg";
import milkyImg from "@/assets/mushroom-milky.jpg";
import shiitakeImg from "@/assets/mushroom-shiitake.jpg";

const types = [
  {
    name: "Oyster",
    image: oysterImg,
    desc: "Fast-growing and highly adaptable. Thrives on a wide range of substrates.",
    suitability: "Excellent for indoor cultivation",
    characteristics: "Rapid colonization, multiple flushes, tolerates varied conditions.",
  },
  {
    name: "Button",
    image: buttonImg,
    desc: "The most widely consumed mushroom globally. Requires composted substrate.",
    suitability: "Moderate — needs casing layer",
    characteristics: "Consistent yields, familiar flavor, requires temperature control.",
  },
  {
    name: "Milky",
    image: milkyImg,
    desc: "A tropical species well-suited for warm indoor environments.",
    suitability: "Good for warm climates",
    characteristics: "Heat-tolerant, firm texture, grows well in simple setups.",
  },
  {
    name: "Shiitake",
    image: shiitakeImg,
    desc: "Prized for rich umami flavor. Grows on hardwood-based substrates.",
    suitability: "Good with supplemented sawdust",
    characteristics: "Longer cycle, high nutritional value, excellent shelf life.",
  },
];

export default function MushroomTypesSection() {
  return (
    <div>
      <h2 className="text-2xl font-heading font-bold mb-3 text-foreground">Mushroom Types</h2>
      <p className="text-muted-foreground mb-8 max-w-xl leading-relaxed">
        Species selected for their suitability to controlled indoor cultivation.
      </p>

      <div className="grid sm:grid-cols-2 gap-5">
        {types.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="bg-card border rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300 group"
          >
            <div className="aspect-[3/2] overflow-hidden">
              <img
                src={t.image}
                alt={t.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="p-5">
              <h3 className="font-heading font-bold text-base mb-1">{t.name}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">{t.desc}</p>
              <div className="space-y-1">
                <p className="text-xs"><span className="font-medium text-foreground">Indoor Suitability:</span> <span className="text-muted-foreground">{t.suitability}</span></p>
                <p className="text-xs"><span className="font-medium text-foreground">Characteristics:</span> <span className="text-muted-foreground">{t.characteristics}</span></p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
