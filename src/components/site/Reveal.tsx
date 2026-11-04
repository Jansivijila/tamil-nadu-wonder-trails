import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({ children, delay = 0, className, y = 40 }: { children: ReactNode; delay?: number; className?: string; y?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export const staggerParent: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export function Stagger({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={staggerParent} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}>
      {children}
    </motion.div>
  );
}

export function SectionHeading({ eyebrow, title, subtitle, center = true, light = false }: { eyebrow: string; title: string; subtitle?: string; center?: boolean; light?: boolean }) {
  return (
    <Reveal className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className={`mt-3 text-4xl font-semibold leading-tight md:text-5xl ${light ? "text-on-dark" : "text-foreground"}`}>{title}</h2>
      {subtitle && <p className={`mt-4 text-base md:text-lg ${light ? "text-on-dark/75" : "text-muted-foreground"}`}>{subtitle}</p>}
    </Reveal>
  );
}
