import type { Metadata } from "next";
import PageHeader from "@/components/ui/page-header";
import PackagesSection from "@/components/packages/packages-section";
import MenuDownloadCta from "@/components/menu/menu-download-cta";

export const metadata: Metadata = {
  title: "Catering Packages",
  description:
    "Compare Shiva Caterers' Classic, Signature and Royal vegetarian catering packages — pricing, guest ranges and menu highlights for weddings and celebrations in Athani & Belagavi.",
  alternates: { canonical: "/packages" },
};

export default function PackagesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Curated for Your Occasion"
        title="Vegetarian catering packages for every celebration."
        description="Thoughtfully structured menus for different occasions, guest sizes and budgets. Final choices are always planned with you."
      />
      <PackagesSection />
      <MenuDownloadCta />
    </>
  );
}