import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { getDestination, DESTINATIONS } from "@/data/destinations";
import { PageHeader } from "@/components/site/PageHeader";
import { Lightbox } from "@/components/site/Lightbox";
import { DestinationCard } from "@/components/site/DestinationCard";
import { Stagger } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/destinations/$slug")({
  loader: ({ params }) => { const d = getDestination(params.slug); if (!d) throw notFound(); return d; },
  head: ({ loaderData }) => ({ meta: loaderData ? [{ title: `${loaderData.name} – Explore Tamil Nadu` }, { name: "description", content: loaderData.tagline }, { property: "og:title", content: loaderData.name }, { property: "og:description", content: loaderData.tagline }, { property: "og:image", content: loaderData.images[0] ?? "" }] : [{ title: "Unavailable" }, { name: "robots", content: "noindex" }] }),
  component: Page,
});

function Page() {
  const d = Route.useLoaderData();
  const [i, setI] = useState<number | null>(null);
  const items = d.images.map((src, n) => ({ src, alt: `${d.name} photo ${n + 1}` }));
  const info: [string, string | string[]][] = [["Best time to visit", d.bestTime], ["How to reach", d.howToReach], ["Suggested duration", d.duration], ["Nearby attractions", d.nearby], ["Things to do", d.things], ["Famous local foods", d.foods], ["Travel tips", d.tips]];
  return (
    <>
      <PageHeader image={d.images[0] ?? ""} eyebrow={d.location} title={d.name} subtitle={d.tagline} />
      <section className="container-x grid gap-12 py-16 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="text-4xl font-semibold">Overview</h2>
          <p className="mt-4 text-lg text-muted-foreground">{d.description}</p>
          <div className="mt-8 grid grid-cols-2 gap-3">
            {items.map((it, n) => <button key={it.src} onClick={() => setI(n)} className="overflow-hidden rounded-xl"><img src={it.src} alt={it.alt} loading="lazy" referrerPolicy="no-referrer" className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-110" /></button>)}
          </div>
          <Button asChild variant="gold" size="xl" className="mt-8"><Link to="/packages">Explore Packages</Link></Button>
        </div>
        <aside className="space-y-6 rounded-2xl bg-card p-6 shadow-elegant">
          {info.map(([k, v]) => <div key={k}><p className="eyebrow">{k}</p>{Array.isArray(v) ? <ul className="mt-2 list-disc pl-5 text-sm">{v.map((x) => <li key={x}>{x}</li>)}</ul> : <p className="mt-2 text-sm">{v}</p>}</div>)}
        </aside>
      </section>
      <section className="container-x pb-20">
        <h2 className="text-3xl font-semibold">Related destinations</h2>
        <Stagger className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DESTINATIONS.filter((x) => x.category === d.category && x.slug !== d.slug).slice(0, 3).map((x) => <DestinationCard key={x.slug} d={x} />)}
        </Stagger>
      </section>
      <Lightbox items={items} index={i} onClose={() => setI(null)} onIndex={setI} />
    </>
  );
}
