import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, MapPin, Pause, Play } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { HERO_SLUGS, getDestination } from "@/data/destinations";

const SLIDES = HERO_SLUGS.map((s) => getDestination(s)!).filter(Boolean);
const INTERVAL = 5000;

export function HeroSlider() {
  const [[index, dir], setState] = useState<[number, number]>([0, 1]);
  const [playing, setPlaying] = useState(true);
  const [hover, setHover] = useState(false);
  const reduce = useReducedMotion();

  const go = useCallback((d: number) => setState(([i]) => [(i + d + SLIDES.length) % SLIDES.length, d]), []);
  const goTo = (i: number) => setState(([cur]) => [i, i > cur ? 1 : -1]);

  useEffect(() => {
    if (!playing || hover) return;
    const t = setTimeout(() => go(1), INTERVAL);
    return () => clearTimeout(t);
  }, [index, playing, hover, go]);

  const slide = SLIDES[index];

  return (
    <section className="relative h-[100svh] min-h-[600px] w-full overflow-hidden bg-forest-deep" aria-roledescription="carousel" aria-label="Featured destinations"
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onFocus={() => setHover(true)} onBlur={() => setHover(false)}>
      <AnimatePresence initial={false} custom={dir}>
        <motion.div key={slide.slug} custom={dir} className="absolute inset-0"
          variants={{
            enter: (d: number) => ({ x: d > 0 ? "100%" : "-100%", opacity: 0.6 }),
            center: { x: 0, opacity: 1 },
            exit: (d: number) => ({ x: d > 0 ? "-30%" : "30%", opacity: 0 }),
          }}
          initial="enter" animate="center" exit="exit" transition={{ duration: reduce ? 0 : 1.1, ease: [0.65, 0, 0.35, 1] }}>
          <motion.img src={slide.images[0]} alt={`${slide.name}, Tamil Nadu`} referrerPolicy="no-referrer"
            className="h-full w-full object-cover" initial={{ scale: 1.15 }} animate={{ scale: reduce ? 1.15 : 1 }} transition={{ duration: 6, ease: "linear" }} />
        </motion.div>
      </AnimatePresence>
      <div className="pointer-events-none absolute inset-0 bg-hero-overlay" />

      <div className="container-x relative z-10 flex h-full flex-col justify-end pb-28 md:justify-center md:pb-0">
        <AnimatePresence mode="wait">
          <motion.div key={slide.slug} className="max-w-3xl text-on-dark" initial="hidden" animate="show" exit="hidden"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } } }}>
            <motion.p variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="eyebrow flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5" /> {slide.location}
            </motion.p>
            <motion.h1 variants={{ hidden: { opacity: 0, y: 60 }, show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } } }}
              className="mt-4 text-6xl font-semibold leading-[0.95] sm:text-7xl md:text-8xl lg:text-9xl">{slide.name}</motion.h1>
            <motion.p variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="mt-3 font-display text-2xl italic text-gold-soft md:text-3xl">{slide.tagline}</motion.p>
            <motion.p variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="mt-4 line-clamp-3 max-w-xl text-base text-on-dark/80 md:text-lg">{slide.description}</motion.p>
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="gold" size="xl"><Link to="/destinations/$slug" params={{ slug: slide.slug }}>Explore Now</Link></Button>
              <Button asChild variant="glass" size="xl"><Link to="/destinations">Discover More</Link></Button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute inset-x-0 bottom-6 z-20">
        <div className="container-x flex items-center justify-between gap-4">
          <div className="flex items-center gap-2" role="tablist" aria-label="Choose slide">
            {SLIDES.map((s, i) => (
              <button key={s.slug} role="tab" aria-selected={i === index} aria-label={`Go to ${s.name}`} onClick={() => goTo(i)}
                className="group relative h-8 py-3.5">
                <span className={`block h-1 rounded-full transition-all duration-500 ${i === index ? "w-10 bg-gold" : "w-4 bg-on-dark/40 group-hover:bg-on-dark/70"}`} />
              </button>
            ))}
            <span className="ml-3 hidden text-xs tracking-widest text-on-dark/70 sm:inline">{String(index + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}</span>
          </div>
          <div className="flex gap-2">
            <button onClick={() => setPlaying((p) => !p)} aria-label={playing ? "Pause slideshow" : "Play slideshow"} className="rounded-full glass p-3 text-on-dark transition hover:text-gold">
              {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </button>
            <button onClick={() => go(-1)} aria-label="Previous slide" className="rounded-full glass p-3 text-on-dark transition hover:text-gold"><ChevronLeft className="h-4 w-4" /></button>
            <button onClick={() => go(1)} aria-label="Next slide" className="rounded-full glass p-3 text-on-dark transition hover:text-gold"><ChevronRight className="h-4 w-4" /></button>
          </div>
        </div>
      </div>
    </section>
  );
}
