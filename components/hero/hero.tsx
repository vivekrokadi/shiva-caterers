import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";
import { siteConfig, whatsappLink } from "@/data/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-maroon-dark">
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hero-feast.avif"
          alt="A traditional South Indian vegetarian feast served on a banana leaf"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-maroon-dark via-maroon-dark/85 to-maroon-dark/30" />
      </div>

      <div className="container-shiva relative py-24 md:py-36">
        <div className="max-w-xl">
          <p className="eyebrow flex items-center gap-3 text-gold-light">
            <span className="h-px w-8 bg-gold-light" />
            Premium Vegetarian Catering
          </p>

          <h1 className="mt-5 font-display text-5xl leading-[1.05] text-ivory sm:text-6xl">
            <span className="block">Pure Taste.</span>
            <span className="block text-gold-light">Pure Tradition.</span>
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-ivory/80">
            {siteConfig.description}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="/packages"
              className="inline-flex items-center gap-2 rounded-full bg-gold-light px-6 py-3 text-sm font-semibold text-maroon-dark transition-colors hover:bg-ivory"
            >
              Explore Packages <ArrowRight size={16} />
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-ivory/40 px-6 py-3 text-sm font-semibold text-ivory transition-colors hover:bg-ivory/10"
            >
              <MessageCircle size={16} /> WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}