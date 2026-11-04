import { AnimatePresence, animate, motion, useInView } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.button initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top"
          className="fixed bottom-6 right-6 z-40 rounded-full bg-gold p-3.5 text-forest-deep shadow-gold transition hover:-translate-y-1">
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export function LoadingScreen() {
  const [done, setDone] = useState(false);
  useEffect(() => { const t = setTimeout(() => setDone(true), 1300); return () => clearTimeout(t); }, []);
  return (
    <AnimatePresence>
      {!done && (
        <motion.div className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-forest-deep" exit={{ opacity: 0, transition: { duration: 0.6 } }}>
          <motion.p initial={{ opacity: 0, letterSpacing: "0.6em" }} animate={{ opacity: 1, letterSpacing: "0.25em" }} transition={{ duration: 1 }}
            className="font-display text-2xl font-bold text-on-dark md:text-4xl">EXPLORE <span className="text-gold">TAMIL NADU</span></motion.p>
          <motion.span initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.1, ease: "easeInOut" }} className="mt-6 block h-px w-48 origin-left bg-gold" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, to, { duration: 2, ease: "easeOut", onUpdate: (x) => setV(Math.round(x)) });
    return () => c.stop();
  }, [inView, to]);
  return <span ref={ref}>{v.toLocaleString("en-IN")}{suffix}</span>;
}
