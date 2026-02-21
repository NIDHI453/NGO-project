import { useState } from "react";
import { motion } from "framer-motion";
import beforeImg from "@/assets/space-before.jpg";
import afterImg from "@/assets/space-after.jpg";

export default function SpaceTransformationSection() {
  const [sliderPos, setSliderPos] = useState(50);

  const handleMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  };

  return (
    <div>
      <h2 className="text-2xl font-heading font-bold mb-3 text-foreground">Space Transformation</h2>
      <p className="text-muted-foreground mb-8 max-w-xl leading-relaxed">
        Converting unused storage rooms into organized, rack-based grow rooms.
      </p>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="relative aspect-[16/9] rounded-lg overflow-hidden border cursor-col-resize select-none"
        onMouseMove={handleMove}
        onTouchMove={handleMove}
      >
        {/* After (full) */}
        <img src={afterImg} alt="After: Organized grow room" className="absolute inset-0 w-full h-full object-cover" />

        {/* Before (clipped) */}
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}>
          <img src={beforeImg} alt="Before: Unused storage room" className="w-full h-full object-cover" />
        </div>

        {/* Slider line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-card z-10"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-card border-2 border-primary flex items-center justify-center shadow-md">
            <span className="text-xs text-primary font-bold">⇄</span>
          </div>
        </div>

        {/* Labels */}
        <span className="absolute top-3 left-3 bg-foreground/70 text-background text-xs px-2 py-1 rounded font-medium">
          Before
        </span>
        <span className="absolute top-3 right-3 bg-primary/80 text-primary-foreground text-xs px-2 py-1 rounded font-medium">
          After
        </span>
      </motion.div>
    </div>
  );
}
