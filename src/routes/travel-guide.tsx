import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { getDestination } from "@/data/destinations";

export const Route = createFileRoute("/travel-guide")({
  head: () => ({ meta: [{ title: "Travel Guide – Explore Tamil Nadu" }, { name: "description", content: "Seasons, transport and etiquette for travelling Tamil Nadu." }, { property: "og:title", content: "Travel Guide" }, { property: "og:description", content: "Seasons, transport and etiquette for travelling Tamil Nadu." }] }),
  component: () => (
    <>
      <PageHeader image={getDestination("chettinad")?.images[0] ?? ""} eyebrow="Explore Tamil Nadu" title="Travel Guide" subtitle="Seasons, transport and etiquette for travelling Tamil Nadu." />
      <section className="container-x py-16 text-lg text-muted-foreground">More content for this page is coming soon.</section>
    </>
  ),
});
