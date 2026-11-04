import { createFileRoute } from "@tanstack/react-router";
import { PACKAGES, packageImage } from "@/data/packages";
import { PackageCard } from "@/components/site/PackageCard";
import { PageHeader } from "@/components/site/PageHeader";
import { Stagger } from "@/components/site/Reveal";

export const Route = createFileRoute("/packages/")({
  head: () => ({ meta: [{ title: "Tour Packages – Explore Tamil Nadu" }, { name: "description", content: "Curated Tamil Nadu tour packages with indicative prices." }, { property: "og:title", content: "Tamil Nadu Tour Packages" }, { property: "og:description", content: "Hill, temple and coastal itineraries." }] }),
  component: () => (
    <>
      <PageHeader image={packageImage(PACKAGES[5]!)} eyebrow="Tour Packages" title="Journeys crafted for you" subtitle="Prices are indicative and for inspiration only." />
      <Stagger className="container-x grid gap-8 py-16 sm:grid-cols-2 lg:grid-cols-3">{PACKAGES.map((p) => <PackageCard key={p.slug} p={p} />)}</Stagger>
    </>
  ),
});
