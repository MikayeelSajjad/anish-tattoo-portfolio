"use client";

import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { GiArrowDunk } from "react-icons/gi";

export default function MarqueeFooter() {
  const marqueePhrase = "NO TEMPLATES • CUSTOM ART ONLY • ANISH INK • ISLAMABAD • ";
  const repeatedText = Array(8).fill(marqueePhrase).join("");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#09090b] text-zinc-400 border-t border-zinc-800/80 overflow-hidden pt-12 pb-6">
      {/* Upper Footer Links and Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-zinc-900">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="font-mono text-2xl font-black text-white tracking-[0.2em]">
              ANISH <span className="text-emerald-500">//</span> INK
            </div>
            <p className="text-xs font-mono text-zinc-500 tracking-wider mt-1">
              HAUTE INK & DARK SURREALISM • ISLAMABAD
            </p>
          </div>

          {/* Social and Direct Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/923496907055"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded border border-emerald-500/40 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500 hover:text-black transition-all font-mono text-xs uppercase tracking-wider"
            >
              <FaWhatsapp className="text-sm" />
              <span>WhatsApp Direct</span>
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded border border-zinc-800 hover:border-zinc-700 bg-zinc-900/60 text-zinc-300 hover:text-white transition-colors"
              aria-label="Instagram Profile"
            >
              <FaInstagram className="text-base" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded border border-zinc-800 hover:border-emerald-500/50 bg-zinc-900/60 text-zinc-400 hover:text-emerald-400 transition-colors"
              aria-label="Back to top"
              title="Return to top"
            >
              <GiArrowDunk className="text-base rotate-180" />
            </button>
          </div>
        </div>

        {/* Micro-Details */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-[11px] font-mono text-zinc-600">
          <div>
            © {new Date().getFullYear()} ANISH // INK. ALL RIGHTS RESERVED. EXCLUSIVE BESPOKE TATTOOING.
          </div>
          <div className="flex items-center gap-4">
            <span>ISLAMABAD, PAKISTAN</span>
            <span>•</span>
            <span className="text-emerald-500/80">LAT 33.7294° N, LON 73.0931° E</span>
          </div>
        </div>
      </div>

      {/* CONTINUOUS SCROLLING MARQUEE TEXT */}
      <div className="relative w-full overflow-hidden border-y border-emerald-500/30 bg-black py-4 select-none">
        {/* Glow sheen */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#09090b] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#09090b] to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee">
          <span className="text-sm sm:text-base md:text-lg font-mono font-black tracking-[0.25em] text-emerald-400 uppercase drop-shadow-[0_0_12px_rgba(16,185,129,0.6)] whitespace-nowrap">
            {repeatedText}
          </span>
          <span className="text-sm sm:text-base md:text-lg font-mono font-black tracking-[0.25em] text-emerald-400 uppercase drop-shadow-[0_0_12px_rgba(16,185,129,0.6)] whitespace-nowrap">
            {repeatedText}
          </span>
        </div>
      </div>
    </footer>
  );
}
