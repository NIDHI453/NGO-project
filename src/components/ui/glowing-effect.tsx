import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowingEffectProps {
  disabled?: boolean;
  blur?: number;
  spread?: number;
  borderWidth?: number;
  className?: string;
  proximity?: number;
  inactiveZone?: number;
}

export function GlowingEffect({
  disabled = false,
  blur = 8,
  spread = 60,
  borderWidth = 1,
  className,
  proximity = 100,
  inactiveZone = 0.01,
}: GlowingEffectProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const opacity = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 200, damping: 30 });
  const springY = useSpring(y, { stiffness: 200, damping: 30 });
  const springOpacity = useSpring(opacity, { stiffness: 200, damping: 40 });

  useEffect(() => {
    if (disabled) return;

    const handleMouseMove = (e: MouseEvent) => {
      const el = containerRef.current?.parentElement;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dist = Math.sqrt((e.clientX - cx) ** 2 + (e.clientY - cy) ** 2);
      const maxDist = proximity + Math.max(rect.width, rect.height) / 2;

      if (dist < maxDist) {
        const relX = e.clientX - rect.left;
        const relY = e.clientY - rect.top;
        x.set(relX);
        y.set(relY);
        opacity.set(Math.max(0, 1 - dist / maxDist));
      } else {
        opacity.set(0);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [disabled, proximity, x, y, opacity]);

  if (disabled) return null;

  return (
    <div ref={containerRef} className={cn("pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]", className)}>
      <motion.div
        className="absolute rounded-[inherit]"
        style={{
          left: springX,
          top: springY,
          width: spread * 2,
          height: spread * 2,
          x: -spread,
          y: -spread,
          opacity: springOpacity,
          background: `radial-gradient(circle, hsl(var(--olive-light) / 0.4) 0%, hsl(var(--olive) / 0.15) 40%, transparent 70%)`,
          filter: `blur(${blur}px)`,
        }}
      />
      <motion.div
        className="absolute inset-0 rounded-[inherit] border"
        style={{
          borderWidth,
          borderColor: `hsl(var(--olive) / 0.15)`,
          opacity: springOpacity,
        }}
      />
    </div>
  );
}
