"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <a
        href="https://wa.me/923496907055?text=Hello%20Anish%2C%20I%20would%20like%20to%20inquire%20about%20a%20tattoo%20session%20in%20Islamabad."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Book session on WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 text-black shadow-[0_0_25px_rgba(16,185,129,0.65)] hover:shadow-[0_0_40px_rgba(16,185,129,0.9)] hover:scale-110 active:scale-95 transition-all duration-300"
      >
        {/* Pulsing radar ping */}
        <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-60 animate-ping pointer-events-none" />

        {/* WhatsApp Icon */}
        <FaWhatsapp className="text-2xl transition-transform group-hover:rotate-12 relative z-10" />

        {/* Hover label for desktop */}
        <div className="absolute right-16 px-3 py-1.5 rounded bg-zinc-950 border border-emerald-500/40 text-emerald-400 font-mono text-xs whitespace-nowrap shadow-xl opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all pointer-events-none hidden sm:block">
          Book on WhatsApp // +92 349 6907055
        </div>
      </a>
    </div>
  );
}
