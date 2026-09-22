import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { navLinks, siteConfig, telLink, whatsappLink } from "@/data/site";
import { services } from "@/data/services";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-maroon-dark text-ivory/85 pb-24 md:pb-0">
      <div className="container-shiva grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2.5">
            <div className="inline-flex items-center rounded-lg bg-ivory/95 px-3 py-2">
            <Image
              src="/images/logo/shiva-caterers-logo.png"
              alt="Shiva Caterers — Pure Veg Catering"
              width={252}
              height={197}
              className="h-11 w-auto"
            />
          </div>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ivory/70">
            Bringing authentic vegetarian flavours to your special occasions.
          </p>
        </div>

        <div>
          <h3 className="eyebrow text-gold-light">Explore</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <Link href="/" className="hover:text-ivory">Home</Link>
            </li>
            {navLinks
              .filter((l) => l.href !== "/#reviews")
              .map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-ivory">
                    {link.label}
                  </Link>
                </li>
              ))}
          </ul>
        </div>

        <div>
          <h3 className="eyebrow text-gold-light">Services</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {services.slice(0, 6).map((s) => (
              <li key={s.title}>{s.title}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="eyebrow text-gold-light">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <MapPin size={16} className="mt-0.5 shrink-0 text-gold-light" />
              <span>
                {siteConfig.address.line1}, {siteConfig.address.city},{" "}
                {siteConfig.address.state} {siteConfig.address.postalCode}
              </span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone size={16} className="shrink-0 text-gold-light" />
              <a href={telLink()} className="hover:text-ivory">
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail size={16} className="shrink-0 text-gold-light" />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-ivory break-all">
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex items-center gap-2 rounded-full border border-gold-light/50 px-4 py-2 text-xs font-semibold text-gold-light hover:bg-ivory/10"
              >
                <MessageCircle size={14} /> WhatsApp Us
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="container-shiva flex flex-col items-center justify-between gap-2 py-6 text-xs text-ivory/50 sm:flex-row">
          <p>© {year} {siteConfig.name}. All rights reserved.</p>
          <p>Athani &amp; Belagavi, Karnataka</p>
        </div>
      </div>
    </footer>
  );
}