import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { getDestination } from "@/data/destinations";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact Us – Explore Tamil Nadu" }, { name: "description", content: "Get in touch to plan your Tamil Nadu trip." }, { property: "og:title", content: "Contact Us" }, { property: "og:description", content: "Get in touch to plan your Tamil Nadu trip." }] }),
  component: () => (
    <>
      <PageHeader image={getDestination("marina-beach")?.images[0] ?? ""} eyebrow="Explore Tamil Nadu" title="Contact Us" subtitle="Get in touch to plan your Tamil Nadu trip." />
      <section className="container-x py-16 text-lg text-muted-foreground">More content for this page is coming soon.</section>
    </>
  ),
});
