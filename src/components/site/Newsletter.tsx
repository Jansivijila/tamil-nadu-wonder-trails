import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function Newsletter({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!EMAIL.test(email.trim())) { setError("Please enter a valid email address."); return; }
    setError("");
    setEmail("");
    toast.success("Thanks for subscribing!", { description: "This is a demo — no emails will actually be sent." });
  };
  return (
    <form onSubmit={submit} noValidate className="w-full">
      <div className={cn("flex gap-2", compact ? "flex-col" : "flex-col sm:flex-row")}>
        <label htmlFor={compact ? "nl-compact" : "nl-main"} className="sr-only">Email address</label>
        <input id={compact ? "nl-compact" : "nl-main"} type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com"
          aria-invalid={!!error} className="h-12 flex-1 rounded-full border border-on-dark/25 bg-on-dark/10 px-5 text-on-dark placeholder:text-on-dark/50 focus:border-gold focus:outline-none" />
        <Button type="submit" variant="gold" size="xl">Subscribe</Button>
      </div>
      {error && <p className="mt-2 px-2 text-sm text-gold-soft" role="alert">{error}</p>}
    </form>
  );
}
