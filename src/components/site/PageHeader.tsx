import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { SmartImage } from "./SmartImage";

/** Parallax banner used at the top of inner pages. */
export function PageHeader({ image, eyebrow, title, subtitle, children }: { image: string; eyebrow: string; title: string; subtitle?: string; children?: ReactNode }) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "25%"]);
  return (
    <section ref={ref} className="relative flex min-h-[60vh] items-end overflow-hidden pb-16 pt-32 md:min-h-[70vh]">
      <motion.div style={{ y }} className="absolute inset-0">
        <SmartImage src={image} alt={title} loading="eager" className="h-full w-full scale-110 object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="container-x relative text-on-dark">
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="eyebrow">{eyebrow}</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }} className="mt-3 max-w-4xl text-5xl font-semibold leading-[1.05] md:text-7xl">{title}</motion.h1>
        {subtitle && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-4 max-w-2xl text-lg text-on-dark/80">{subtitle}</motion.p>}
        {children}
      </div>
    </section>
  );
}
