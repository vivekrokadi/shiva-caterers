import type { Metadata } from "next";
import PageHeader from "@/components/ui/page-header";
import GalleryGrid from "@/components/gallery/gallery-grid";

export const metadata: Metadata = {
  title: "Event Gallery",
  description:
    "A look at the weddings, engagements, family functions and public events Shiva Caterers has served across Athani and Belagavi.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="A Taste of the Table"
        title="Moments we've catered."
        description="A glimpse at the warmth, colour and abundance we bring to every celebration."
      />
      <GalleryGrid />
    </>
  );
}