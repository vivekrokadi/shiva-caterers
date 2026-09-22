"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { navLinks, siteConfig, whatsappLink } from "@/data/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ivory/95 backdrop-blur">
      <div
        className={`container-shiva flex items-center justify-between transition-[padding] duration-200 ${
          scrolled ? "py-2" : "py-3"
        }`}
      >
        <Link
          href="/"
          className="flex items-center"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/images/logo/shiva-caterers-logo.png"
            alt="Shiva Caterers — Pure Veg Catering"
            width={2952}
            height={2308}
            priority
            className="h-16 w-auto sm:h-[72px]"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-charcoal-soft transition-colors hover:text-maroon"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-maroon px-5 py-2.5 text-sm font-semibold text-ivory transition-colors hover:bg-maroon-dark"
          >
            Book on WhatsApp
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-charcoal md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-ivory md:hidden">
          <nav className="container-shiva flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-base font-medium text-charcoal hover:bg-ivory-deep"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-full bg-maroon px-5 py-3 text-center text-sm font-semibold text-ivory"
            >
              Book on WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
