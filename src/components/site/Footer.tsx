import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { CATEGORIES } from "@/data/destinations";
import { Newsletter } from "./Newsletter";

export function Footer() {
  return (
    <footer className="bg-forest-gradient text-on-dark">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-2xl font-bold tracking-[0.18em]">EXPLORE <span className="text-gold">TAMIL NADU</span></p>
          <p className="mt-4 text-sm text-on-dark/70">Discover the Beauty of Tamil Nadu — from misty Nilgiri peaks to the temple towers of Madurai and the shores of Kanyakumari.</p>
          <div className="mt-6 flex gap-3">
            {[Instagram, Facebook, Youtube].map((I, i) => (
              <span key={i} aria-hidden className="rounded-full border border-on-dark/20 p-2.5 text-on-dark/80"><I className="h-4 w-4" /></span>
            ))}
          </div>
        </div>
        <div>
          <h4 className="eyebrow">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm text-on-dark/75">
            {CATEGORIES.map((c) => (
              <li key={c.id}><Link to="/destinations" search={{ category: c.id }} className="hover:text-gold">{c.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="eyebrow">Plan</h4>
          <ul className="mt-4 space-y-2 text-sm text-on-dark/75">
            <li><Link to="/packages" className="hover:text-gold">Tour Packages</Link></li>
            <li><Link to="/travel-guide" className="hover:text-gold">Travel Guide</Link></li>
            <li><Link to="/gallery" className="hover:text-gold">Gallery</Link></li>
            <li><Link to="/about" className="hover:text-gold">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
          <ul className="mt-6 space-y-2 text-sm text-on-dark/75">
            <li className="flex gap-2"><MapPin className="h-4 w-4 text-gold" /> Chennai, Tamil Nadu</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 text-gold" /> +91 00000 00000 (sample)</li>
            <li className="flex gap-2"><Mail className="h-4 w-4 text-gold" /> hello@example.com (sample)</li>
          </ul>
        </div>
        <div>
          <h4 className="eyebrow">Newsletter</h4>
          <p className="mt-4 text-sm text-on-dark/70">Seasonal travel ideas, festival dates and hidden gems.</p>
          <div className="mt-4"><Newsletter compact /></div>
        </div>
      </div>
      <div className="border-t border-on-dark/10">
        <div className="container-x flex flex-col gap-2 py-6 text-xs text-on-dark/55 md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} Explore Tamil Nadu. A travel inspiration website — not an official government portal.</p>
          <p>Photographs via Wikimedia Commons contributors.</p>
        </div>
      </div>
    </footer>
  );
}
