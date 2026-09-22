import Hero from "@/components/hero/hero";
import TrustStrip from "@/components/hero/trust-strip";
import AboutSection from "@/components/about/about-section";
import CoreValues from "@/components/about/core-values";
import PackagesSection from "@/components/packages/packages-section";
import ServicesGrid from "@/components/services/services-grid";
import HowItWorks from "@/components/services/how-it-works";
import GalleryGrid from "@/components/gallery/gallery-grid";
import TestimonialsCarousel from "@/components/testimonials/testimonials-carousel";
import MenuDownloadCta from "@/components/menu/menu-download-cta";
import LocalSeoSection from "@/components/menu/local-seo-section";
import FaqSection from "@/components/faq/faq-section";
import ContactSection from "@/components/contact/contact-section";
import { faqs } from "@/data/faqs";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Hero />
      <TrustStrip />
      <AboutSection />
      <CoreValues />
      <PackagesSection />
      <ServicesGrid />
      <HowItWorks />
      <GalleryGrid />
      <TestimonialsCarousel />
      <MenuDownloadCta />
      <LocalSeoSection />
      <FaqSection />
      <ContactSection />
    </>
  );
}