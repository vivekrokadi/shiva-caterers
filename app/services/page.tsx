import type { Metadata } from "next";
import PageHeader from "@/components/ui/page-header";
import ServicesGrid from "@/components/services/services-grid";
import HowItWorks from "@/components/services/how-it-works";

export const metadata: Metadata = {
  title: "Catering Services",
  description:
    "Wedding, engagement, birthday, corporate, festival and religious function catering — pure vegetarian, delivered across Athani and Belagavi.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="For Every Kind of Gathering"
        title="Catering services for every occasion."
        description="From intimate family ceremonies to large public gatherings, Shiva Caterers brings the same care and pure vegetarian promise to every table."
      />
      <ServicesGrid />
      <HowItWorks />
    </>
  );
}