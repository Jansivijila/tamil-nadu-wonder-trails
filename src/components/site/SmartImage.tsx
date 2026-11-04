import { useState, type ImgHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

/** Image with lazy loading and a graceful fallback when a remote photo fails. */
export function SmartImage({ className, alt, src, loading = "lazy", ...rest }: ImgHTMLAttributes<HTMLImageElement>) {
  const [failed, setFailed] = useState(false);
  if (failed || !src) {
    return (
      <div role="img" aria-label={alt} className={cn("flex items-center justify-center bg-forest-gradient text-gold/70", className)}>
        <span className="font-display text-xl italic">{alt}</span>
      </div>
    );
  }
  return (
    <img src={src} alt={alt} loading={loading} decoding="async" referrerPolicy="no-referrer" onError={() => setFailed(true)} className={className} {...rest} />
  );
}
