import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CATEGORIES, DESTINATIONS, type Category } from "@/data/destinations";
import { DestinationCard } from "@/components/site/DestinationCard";
import { PageHeader } from "@/components/site/PageHeader";
import { Stagger } from "@/components/site/Reveal";

export const Route = createFileRoute("/destinations/")({
  validateSearch: (s: Record<string, unknown>): { category?: Category } =>
    CATEGORIES.some((c) => c.id === s.category) ? { category: s.category as Category } : {},
  head: () => ({ meta: [{ title: "Explore Destinations – Explore Tamil Nadu" }, { name: "description", content: "Hill stations, beaches, waterfalls, temples and wildlife across Tamil Nadu." }, { property: "og:title", content: "Explore Tamil Nadu Destinations" }, { property: "og:description", content: "Search and filter Tamil Nadu's top destinations." }] }),
  component: Page,
});

function Page() {
  const { category } = Route.useSearch();
  const nav = Route.useNavigate();
  const [q, setQ] = useState("");
  const list = DESTINATIONS.filter((d) => (!category || d.category === category) && (d.name + d.location).toLowerCase().includes(q.toLowerCase()));
  return (
    <>
      <PageHeader image={DESTINATIONS[0]!.images[1] ?? ""} eyebrow="Explore" title="Destinations of Tamil Nadu" subtitle="Search and filter every corner of the state." />
      <section className="container-x py-16">
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search destinations…" aria-label="Search destinations" className="h-12 w-full rounded-full border bg-card px-5" />
        <div className="mt-6 flex flex-wrap gap-2">
          <button onClick={() => nav({ search: {} })} className={`rounded-full border px-4 py-2 text-sm ${!category ? "bg-primary text-primary-foreground" : ""}`}>All</button>
          {CATEGORIES.map((c) => (
            <button key={c.id} onClick={() => nav({ search: { category: c.id } })} className={`rounded-full border px-4 py-2 text-sm ${category === c.id ? "bg-primary text-primary-foreground" : ""}`}>{c.label}</button>
          ))}
        </div>
        <Stagger key={(category ?? "") + q} className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((d) => <DestinationCard key={d.slug} d={d} />)}
        </Stagger>
        {!list.length && <p className="mt-10 text-center text-muted-foreground">No destinations match your search.</p>}
      </section>
    </>
  );
}
