import { motion } from "framer-motion";
import afterImg from "@/assets/space-after.jpg";

export default function GrowRoomSection() {
  return (
    <div>
      <h2 className="text-2xl font-heading font-bold mb-2 text-foreground">Inside the Grow Room</h2>
      <p className="text-muted-foreground mb-6 text-sm">Structured racks. Controlled airflow. Clean environment.</p>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="rounded-xl overflow-hidden border"
      >
        <img
          src={afterImg}
          alt="Organized rack-based grow room"
          className="w-full aspect-[16/9] object-cover"
          loading="lazy"
        />
      </motion.div>

      <div className="mt-6 grid grid-cols-3 gap-4">
        {["Organized Racks", "Clean Ventilation", "Structured Grow Bags"].map((label, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1, duration: 0.3 }}
            className="text-center"
          >
            <div className="w-2 h-2 rounded-full bg-primary mx-auto mb-2" />
            <span className="text-xs font-medium text-foreground">{label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
