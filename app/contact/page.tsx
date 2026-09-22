import type { Metadata } from "next";
import PageHeader from "@/components/ui/page-header";
import ContactSection from "@/components/contact/contact-section";
import LocalSeoSection from "@/components/menu/local-seo-section";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Call or WhatsApp Shiva Caterers to book pure vegetarian catering for your wedding, engagement or celebration in Athani & Belagavi. Shivayogi Nagar, Athani, Karnataka 591304.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get in Touch"
        title="Let's plan your celebration."
        description="Call or WhatsApp us with your event date, guest count and location — we'll help you shape the right vegetarian menu."
      />
      <LocalSeoSection />
      <ContactSection />
    </>
  );
}