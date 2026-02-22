import { useState } from "react";
import { motion } from "framer-motion";
import beforeImg from "@/assets/space-before.jpg";
import afterImg from "@/assets/space-after.jpg";
import oysterImg from "@/assets/mushroom-oyster.jpg";
import buttonImg from "@/assets/mushroom-button.jpg";
import milkyImg from "@/assets/mushroom-milky.jpg";
import shiitakeImg from "@/assets/mushroom-shiitake.jpg";

const types = [
  { name: "Oyster", image: oysterImg, desc: "Fast-growing, adaptable to many substrates.", suitability: "Excellent indoors" },
  { name: "Button", image: buttonImg, desc: "Most widely consumed globally.", suitability: "Needs casing layer" },
  { name: "Milky", image: milkyImg, desc: "Tropical species suited for warm environments.", suitability: "Good in warm climates" },
  { name: "Shiitake", image: shiitakeImg, desc: "Rich umami flavor, hardwood substrate.", suitability: "Good with sawdust blocks" },
];

export default function SpaceTypesSection() {
  const [sliderPos, setSliderPos] = useState(50);

  const handleMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  };

  return (
    <div>
      {/* Space Transformation */}
      <h2 className="text-2xl font-heading font-bold mb-3 text-foreground">Space & Types</h2>
      <p className="text-muted-foreground mb-6 max-w-xl leading-relaxed">
        Unused storage rooms become organized, rack-based grow rooms.
        Minimal infrastructure converts idle space into productive cultivation areas.
      </p>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="relative aspect-[16/9] rounded-lg overflow-hidden border cursor-col-resize select-none mb-12"
        onMouseMove={handleMove}
        onTouchMove={handleMove}
      >
        <img src={afterImg} alt="After: Organized grow room" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}>
          <img src={beforeImg} alt="Before: Unused storage room" className="w-full h-full object-cover" />
        </div>
        <div className="absolute top-0 bottom-0 w-0.5 bg-card z-10" style={{ left: `${sliderPos}%` }}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-card border-2 border-primary flex items-center justify-center shadow-md">
            <span className="text-xs text-primary font-bold">⇄</span>
          </div>
        </div>
        <span className="absolute top-3 left-3 bg-foreground/70 text-background text-xs px-2 py-1 rounded font-medium">Before</span>
        <span className="absolute top-3 right-3 bg-primary/80 text-primary-foreground text-xs px-2 py-1 rounded font-medium">After</span>
      </motion.div>

      {/* Mushroom Types */}
      <h3 className="text-lg font-heading font-bold mb-6 text-foreground">Mushroom Types</h3>

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
              <img src={t.image} alt={t.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
            </div>
            <div className="p-5">
              <h4 className="font-heading font-bold text-base mb-1">{t.name}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed mb-2">{t.desc}</p>
              <p className="text-xs"><span className="font-medium text-foreground">Indoor:</span> <span className="text-muted-foreground">{t.suitability}</span></p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
