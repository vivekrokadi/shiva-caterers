import { Phone, MessageCircle, MapPin, Mail, Clock } from "lucide-react";
import { siteConfig, telLink, whatsappLink } from "@/data/site";
import { InstagramIcon } from "@/components/icons/instagram-icon";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-maroon-dark py-20 text-ivory md:py-28">
      <div className="container-shiva grid gap-14 md:grid-cols-2 md:items-center md:gap-20">
        <div>
          <p className="eyebrow text-gold-light">Get in Touch</p>
          <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
            Let&apos;s make your event special.
          </h2>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ivory/75">
            Tell us your event date, guest count and requirements over a call
            or WhatsApp. We&apos;ll help you plan the right vegetarian menu
            for your celebration.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href={telLink()}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-light px-7 py-3.5 text-sm font-semibold text-maroon-dark hover:bg-ivory"
            >
              <Phone size={17} /> Call Now
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-ivory/40 px-7 py-3.5 text-sm font-semibold text-ivory hover:bg-ivory/10"
            >
              <MessageCircle size={17} /> WhatsApp Us
            </a>
          </div>
        </div>

        <div className="border-t border-ivory/15 pt-10 md:border-l md:border-t-0 md:pl-16 md:pt-0">
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold-light/50 text-gold-light">
                <Phone size={17} />
              </span>
              <div>
                <p className="text-xs font-semibold tracking-wide text-gold-light">PHONE</p>
                <a href={telLink()} className="text-lg text-ivory hover:text-gold-light">
                  {siteConfig.phoneDisplay}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold-light/50 text-gold-light">
                <Mail size={17} />
              </span>
              <div>
                <p className="text-xs font-semibold tracking-wide text-gold-light">EMAIL</p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-lg text-ivory hover:text-gold-light break-all"
                >
                  {siteConfig.email}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold-light/50 text-gold-light">
                <InstagramIcon size={17} />
              </span>
              <div>
                <p className="text-xs font-semibold tracking-wide text-gold-light">INSTAGRAM</p>
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-ivory hover:text-gold-light"
                >
                  @shivacaterers.in
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold-light/50 text-gold-light">
                <MapPin size={17} />
              </span>
              <div>
                <p className="text-xs font-semibold tracking-wide text-gold-light">ADDRESS</p>
                <p className="text-lg text-ivory">
                  {siteConfig.address.line1}, {siteConfig.address.city},{" "}
                  {siteConfig.address.state} {siteConfig.address.postalCode}
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold-light/50 text-gold-light">
                <Clock size={17} />
              </span>
              <div>
                <p className="text-xs font-semibold tracking-wide text-gold-light">SERVICE AREAS</p>
                <p className="text-lg text-ivory">{siteConfig.serviceAreas.join(", ")}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}