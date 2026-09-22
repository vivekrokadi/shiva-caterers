export const siteConfig = {
  name: "Shiva Caterers",
  tagline: "Pure Taste. Pure Tradition.",
  description:
    "Pure vegetarian catering for weddings, engagements, family celebrations and grand occasions across Athani, Belagavi and nearby areas.",
  url: "https://shivacaterers.in",
  phone: "+919902754584",
  phoneDisplay: "+91 99027 54584",
  email: "shivacaterers84@gmail.com",
  address: {
    line1: "Shivayogi Nagar",
    city: "Athani",
    state: "Karnataka",
    postalCode: "591304",
    country: "India",
  },
  serviceAreas: ["Athani", "Belagavi / Belgaum", "nearby areas"],
  stats: [
    { value: "10+", label: "Years of\nExperience" },
    { value: "2k+", label: "Events\nCatered" },
    { value: "100%", label: "Pure\nVegetarian" },
  ],
  whatsappMessage:
    "Hi Shiva Caterers, I'd like to enquire about catering for my event.",
} as const;

export function whatsappLink(message?: string) {
  const text = encodeURIComponent(message ?? siteConfig.whatsappMessage);
  return `https://wa.me/${siteConfig.phone.replace("+", "")}?text=${text}`;
}

export function telLink() {
  return `tel:${siteConfig.phone}`;
}

export const navLinks = [
  { href: "/about", label: "About" },
  { href: "/packages", label: "Packages" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/#faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;