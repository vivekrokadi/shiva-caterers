"use client";

import { Phone, MessageCircle, CalendarCheck } from "lucide-react";
import { telLink, whatsappLink } from "@/data/site";

export default function MobileStickyCta() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-ivory/95 backdrop-blur md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <div className="grid grid-cols-3 divide-x divide-line">
        <a
          href={telLink()}
          className="flex flex-col items-center gap-1 py-2.5 text-xs font-semibold text-charcoal"
        >
          <Phone size={18} className="text-maroon" />
          Call
        </a>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 bg-maroon py-2.5 text-xs font-semibold text-ivory"
        >
          <MessageCircle size={18} />
          WhatsApp
        </a>
        <a
          href="/contact"
          className="flex flex-col items-center gap-1 py-2.5 text-xs font-semibold text-charcoal"
        >
          <CalendarCheck size={18} className="text-gold" />
          Book Now
        </a>
      </div>
    </div>
  );
}