import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { CATEGORIES } from "@/data/destinations";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/destinations", label: "Destinations", dropdown: true },
  { to: "/packages", label: "Packages" },
  { to: "/travel-guide", label: "Travel Guide" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dd, setDd] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => { setOpen(false); setDd(false); }, [pathname]);

  const isActive = (to: string) => (to === "/" ? pathname === "/" : pathname.startsWith(to));

  return (
    <motion.header initial={{ y: -80 }} animate={{ y: 0 }} transition={{ duration: 0.6 }}
      className={cn("fixed inset-x-0 top-0 z-50 transition-all duration-500", scrolled || open ? "glass-solid py-3 shadow-elegant" : "bg-transparent py-5")}>
      <nav className="container-x flex items-center justify-between" aria-label="Main">
        <Link to="/" className="group flex flex-col leading-none text-on-dark">
          <span className="font-display text-xl font-bold tracking-[0.18em] md:text-2xl">EXPLORE <span className="text-gold">TAMIL NADU</span></span>
          <span className="mt-1 text-[0.6rem] uppercase tracking-[0.35em] text-on-dark/60">Discover the Beauty</span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <li key={n.to} className="relative" onMouseEnter={() => "dropdown" in n && setDd(true)} onMouseLeave={() => "dropdown" in n && setDd(false)}>
              <Link to={n.to} className={cn("relative flex items-center gap-1 px-3 py-2 text-sm tracking-wide text-on-dark/85 transition-colors hover:text-gold", isActive(n.to) && "text-gold")}
                onFocus={() => "dropdown" in n && setDd(true)}>
                {n.label}
                {"dropdown" in n && <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", dd && "rotate-180")} />}
                {isActive(n.to) && <motion.span layoutId="nav-active" className="absolute inset-x-3 -bottom-0.5 h-px bg-gold" />}
              </Link>
              {"dropdown" in n && (
                <AnimatePresence>
                  {dd && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ duration: 0.2 }}
                      className="absolute left-0 top-full w-72 pt-3">
                      <div className="glass-solid rounded-xl p-2 shadow-elegant">
                        {CATEGORIES.map((c) => (
                          <Link key={c.id} to="/destinations" search={{ category: c.id }} className="block rounded-lg px-3 py-2.5 text-on-dark transition-colors hover:bg-on-dark/10" onBlur={() => setDd(false)}>
                            <span className="block text-sm font-medium">{c.label}</span>
                            <span className="block text-xs text-on-dark/60">{c.blurb}</span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </li>
          ))}
        </ul>

        <button className="rounded-full glass p-2.5 text-on-dark lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden lg:hidden">
            <ul className="container-x flex flex-col gap-1 py-4">
              {NAV.map((n, i) => (
                <motion.li key={n.to} initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: i * 0.04 }}>
                  <Link to={n.to} className={cn("block rounded-lg px-3 py-3 font-display text-2xl text-on-dark", isActive(n.to) && "text-gold")}>{n.label}</Link>
                  {"dropdown" in n && (
                    <div className="flex flex-wrap gap-2 px-3 pb-2">
                      {CATEGORIES.map((c) => (
                        <Link key={c.id} to="/destinations" search={{ category: c.id }} className="rounded-full border border-on-dark/20 px-3 py-1 text-xs text-on-dark/80">{c.label}</Link>
                      ))}
                    </div>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
