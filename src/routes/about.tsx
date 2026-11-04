import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { getDestination } from "@/data/destinations";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "About Us – Explore Tamil Nadu" }, { name: "description", content: "Who we are and why we love Tamil Nadu." }, { property: "og:title", content: "About Us" }, { property: "og:description", content: "Who we are and why we love Tamil Nadu." }] }),
  component: () => (
    <>
      <PageHeader image={getDestination("srirangam")?.images[0] ?? ""} eyebrow="Explore Tamil Nadu" title="About Us" subtitle="Who we are and why we love Tamil Nadu." />
      <section className="container-x py-16 text-lg text-muted-foreground">More content for this page is coming soon.</section>
    </>
  ),
});
