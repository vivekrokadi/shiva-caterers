import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import MobileStickyCta from "@/components/layout/mobile-sticky-cta";
import { siteConfig } from "@/data/site";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Pure Vegetarian Catering in Athani & Belagavi`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Shiva Caterers offers pure vegetarian catering for weddings, engagements, birthdays, corporate events, religious functions and celebrations in Athani, Belagavi and nearby areas.",
  keywords: [
    "vegetarian catering in Athani",
    "catering services in Athani",
    "wedding catering in Athani",
    "pure vegetarian catering Athani",
    "vegetarian caterers in Belagavi",
    "wedding caterers in Belagavi",
    "event catering in Athani",
    "engagement catering Athani",
    "birthday catering Athani",
    "religious function catering",
    "corporate catering Athani",
  ],
  authors: [{ name: siteConfig.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Pure Vegetarian Catering in Athani & Belagavi`,
    description:
      "Pure vegetarian catering for weddings, engagements, family celebrations and grand occasions across Athani, Belagavi and nearby areas.",
    images: [{ url: "/images/hero/hero-feast.avif", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Pure Vegetarian Catering`,
    description:
      "Pure vegetarian catering for weddings, engagements and celebrations across Athani & Belagavi.",
    images: ["/images/hero/hero-feast.avif"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["Caterer", "LocalBusiness"],
  name: siteConfig.name,
  description:
    "Pure vegetarian catering for weddings, engagements, birthdays, corporate events, religious functions and large celebrations.",
  telephone: siteConfig.phone,
  email: siteConfig.email,
  url: siteConfig.url,
  image: `${siteConfig.url}/images/hero/hero-feast.avif`,
  servesCuisine: "Indian Vegetarian",
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Shivayogi Nagar",
    addressLocality: "Athani",
    addressRegion: "Karnataka",
    postalCode: "591304",
    addressCountry: "IN",
  },
  areaServed: [
    { "@type": "City", name: "Athani" },
    { "@type": "City", name: "Belagavi" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${manrope.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col bg-ivory text-charcoal"
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileStickyCta />
      </body>
    </html>
  );
}
