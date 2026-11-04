import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import { SmartImage } from "./SmartImage";
import { staggerChild } from "./Reveal";
import { categoryLabel, type Destination } from "@/data/destinations";
import { cn } from "@/lib/utils";

/** Card with primary photo that crossfades + zooms into an alternate photo on hover. */
export function DestinationCard({ d, className, tall = false }: { d: Destination; className?: string; tall?: boolean }) {
  const [a, b] = [d.images[0], d.images[1] ?? d.images[0]];
  return (
    <motion.div variants={staggerChild} className={className}>
      <Link
        to="/destinations/$slug"
        params={{ slug: d.slug }}
        className={cn("group relative block overflow-hidden rounded-2xl shadow-elegant focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold", tall ? "aspect-[3/4]" : "aspect-[4/5]")}
      >
        <SmartImage src={a} alt={`${d.name}, ${d.location}`} className="absolute inset-0 h-full w-full object-cover transition-all duration-[1200ms] ease-out group-hover:scale-110 group-hover:opacity-0 group-focus-visible:opacity-0" />
        <SmartImage src={b} alt={`${d.name} alternate view`} className="absolute inset-0 h-full w-full scale-110 object-cover opacity-0 transition-all duration-[1200ms] ease-out group-hover:scale-100 group-hover:opacity-100 group-focus-visible:opacity-100" />
        <div className="absolute inset-0 bg-card-overlay opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
        <span className="absolute left-4 top-4 rounded-full glass px-3 py-1 text-[0.65rem] uppercase tracking-[0.2em] text-on-dark">{categoryLabel(d.category)}</span>
        <div className="absolute inset-x-0 bottom-0 p-5 text-on-dark">
          <div className="translate-y-6 transition-transform duration-500 ease-out group-hover:translate-y-0">
            <p className="flex items-center gap-1 text-xs uppercase tracking-[0.2em] text-gold-soft">
              <MapPin className="h-3 w-3" /> {d.location}
            </p>
            <h3 className="mt-1 text-2xl font-semibold leading-tight md:text-3xl">{d.name}</h3>
            <p className="mt-1 line-clamp-1 text-sm text-on-dark/75">{d.tagline}</p>
            <span className="mt-4 inline-flex items-center gap-1 rounded-full bg-gold px-4 py-1.5 text-xs font-semibold text-forest-deep opacity-0 transition-all duration-500 group-hover:opacity-100">
              Explore <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
