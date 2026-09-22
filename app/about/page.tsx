import type { Metadata } from "next";
import PageHeader from "@/components/ui/page-header";
import AboutSection from "@/components/about/about-section";
import CoreValues from "@/components/about/core-values";
import TrustStrip from "@/components/hero/trust-strip";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Shiva Caterers has brought authentic pure vegetarian catering to weddings, engagements and celebrations in Athani and Belagavi for over a decade.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Story"
        title="A decade of pure vegetarian hospitality."
        description="From family gatherings to grand weddings, Shiva Caterers has stayed true to one promise: authentic vegetarian food, prepared with care."
      />
      <TrustStrip />
      <AboutSection />
      <CoreValues />
    </>
  );
}