import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect } from "react";

export interface LightboxItem { src: string; alt: string }

export function Lightbox({ items, index, onClose, onIndex }: { items: LightboxItem[]; index: number | null; onClose: () => void; onIndex: (i: number) => void }) {
  const open = index !== null;
  const go = useCallback((dir: number) => { if (index === null) return; onIndex((index + dir + items.length) % items.length); }, [index, items.length, onIndex]);
  useEffect(() => {
    if (!open) return;
    const h = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); if (e.key === "ArrowRight") go(1); if (e.key === "ArrowLeft") go(-1); };
    window.addEventListener("keydown", h);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", h); document.body.style.overflow = ""; };
  }, [open, go, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div role="dialog" aria-modal="true" aria-label="Image viewer" className="fixed inset-0 z-[100] flex items-center justify-center bg-forest-deep/95 p-4"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
          <button aria-label="Close" onClick={onClose} className="absolute right-4 top-4 rounded-full glass p-3 text-on-dark hover:text-gold"><X className="h-5 w-5" /></button>
          <button aria-label="Previous image" onClick={(e) => { e.stopPropagation(); go(-1); }} className="absolute left-2 rounded-full glass p-3 text-on-dark hover:text-gold md:left-6"><ChevronLeft className="h-6 w-6" /></button>
          <AnimatePresence mode="wait">
            <motion.figure key={index} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.35 }}
              className="max-h-[85vh] max-w-5xl" onClick={(e) => e.stopPropagation()}>
              <img src={items[index!].src} alt={items[index!].alt} referrerPolicy="no-referrer" className="max-h-[78vh] w-auto rounded-xl object-contain" />
              <figcaption className="mt-3 text-center text-sm text-on-dark/80">{items[index!].alt} · {index! + 1} / {items.length}</figcaption>
            </motion.figure>
          </AnimatePresence>
          <button aria-label="Next image" onClick={(e) => { e.stopPropagation(); go(1); }} className="absolute right-2 rounded-full glass p-3 text-on-dark hover:text-gold md:right-6"><ChevronRight className="h-6 w-6" /></button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
