import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check, Clock } from "lucide-react";
import { SmartImage } from "./SmartImage";
import { staggerChild } from "./Reveal";
import { Button } from "@/components/ui/button";
import { formatINR, packageImage, type TourPackage } from "@/data/packages";

export function PackageCard({ p }: { p: TourPackage }) {
  return (
    <motion.article variants={staggerChild} className="group flex flex-col overflow-hidden rounded-2xl bg-card shadow-elegant transition-transform duration-500 hover:-translate-y-1">
      <div className="relative aspect-[16/10] overflow-hidden">
        <SmartImage src={packageImage(p)} alt={p.name} className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
        <span className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full glass px-3 py-1 text-xs text-on-dark">
          <Clock className="h-3 w-3" /> {p.duration}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-2xl font-semibold">{p.name}</h3>
        <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
          {p.highlights.slice(0, 3).map((h) => (
            <li key={h} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> {h}</li>
          ))}
        </ul>
        <div className="mt-auto pt-6">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">From (indicative)</p>
          <p className="font-display text-3xl font-semibold text-primary">{formatINR(p.price)}<span className="font-sans text-sm font-normal text-muted-foreground"> / person</span></p>
          <div className="mt-4 flex gap-2">
            <Button asChild variant="forest" className="flex-1">
              <Link to="/packages/$slug" params={{ slug: p.slug }}>View Details</Link>
            </Button>
            <Button asChild variant="outlineGold" className="flex-1">
              <Link to="/packages/$slug" params={{ slug: p.slug }} hash="enquire">Book Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
