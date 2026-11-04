import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { getDestination } from "@/data/destinations";

export const Route = createFileRoute("/gallery")({
  head: () => ({ meta: [{ title: "Gallery – Explore Tamil Nadu" }, { name: "description", content: "A visual journey across Tamil Nadu." }, { property: "og:title", content: "Gallery" }, { property: "og:description", content: "A visual journey across Tamil Nadu." }] }),
  component: () => (
    <>
      <PageHeader image={getDestination("shore-temple")?.images[0] ?? ""} eyebrow="Explore Tamil Nadu" title="Gallery" subtitle="A visual journey across Tamil Nadu." />
      <section className="container-x py-16 text-lg text-muted-foreground">More content for this page is coming soon.</section>
    </>
  ),
});
