import { createFileRoute, notFound } from "@tanstack/react-router";
import { formatINR, getPackage, packageImage } from "@/data/packages";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/packages/$slug")({
  loader: ({ params }) => { const p = getPackage(params.slug); if (!p) throw notFound(); return p; },
  head: ({ loaderData }) => ({ meta: loaderData ? [{ title: `${loaderData.name} – Explore Tamil Nadu` }, { name: "description", content: loaderData.highlights.join(", ") }, { property: "og:title", content: loaderData.name }, { property: "og:description", content: loaderData.duration }] : [{ title: "Unavailable" }, { name: "robots", content: "noindex" }] }),
  component: Page,
});

function Page() {
  const p = Route.useLoaderData();
  return (
    <>
      <PageHeader image={packageImage(p)} eyebrow={p.duration} title={p.name} subtitle={`From ${formatINR(p.price)} per person (indicative)`} />
      <section className="container-x grid gap-12 py-16 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-4xl font-semibold">Itinerary</h2>
          {p.itinerary.map((d) => <div key={d.day} className="border-l-2 border-gold pl-5"><p className="eyebrow">{d.day}</p><h3 className="text-2xl font-semibold">{d.title}</h3><p className="text-muted-foreground">{d.detail}</p></div>)}
        </div>
        <aside id="enquire" className="rounded-2xl bg-card p-6 shadow-elegant">
          <p className="eyebrow">Inclusions</p>
          <ul className="mt-2 list-disc pl-5 text-sm">{p.inclusions.map((x) => <li key={x}>{x}</li>)}</ul>
          <p className="mt-6 rounded-lg bg-muted p-4 text-sm">Booking is a demonstration — no real reservations are made on this website.</p>
        </aside>
      </section>
    </>
  );
}
