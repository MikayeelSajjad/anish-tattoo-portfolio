"use client";

import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "VAULT", href: "#vault" },
    { name: "PHILOSOPHY", href: "#philosophy" },
    { name: "PROTOCOL", href: "#protocol" },
    { name: "STUDIO", href: "#studio" },
    { name: "CONSULT", href: "#booking-builder" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#09090b]/90 backdrop-blur-md border-b border-emerald-500/20 py-3 shadow-lg shadow-black/60"
          : "bg-transparent border-b border-white/5 py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Brand */}
        <a
          href="#"
          className="group flex items-center gap-3 text-white transition-colors"
        >
          <div className="relative flex items-center justify-center w-8 h-8 rounded border border-emerald-500/40 bg-zinc-950/80 group-hover:border-emerald-500 group-hover:shadow-[0_0_12px_rgba(16,185,129,0.5)] transition-all">
            <span className="text-emerald-500 font-mono text-xs font-black">A</span>
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-500 animate-ping opacity-75" />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-500" />
          </div>
          <div className="flex flex-col">
            <span className="font-mono tracking-[0.25em] text-lg sm:text-xl font-black text-white group-hover:text-emerald-400 transition-colors">
              ANISH <span className="text-emerald-500 font-light">//</span> INK
            </span>
            <span className="text-[9px] tracking-[0.35em] text-zinc-500 uppercase font-mono hidden sm:inline-block">
              Islamabad • Fine Line & Dark Art
            </span>
          </div>
        </a>

        {/* Center: Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-mono tracking-widest text-zinc-400 hover:text-emerald-400 hover:tracking-[0.2em] transition-all duration-200 relative py-1 group"
            >
              <span className="text-emerald-500/60 mr-1 text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">
                /
              </span>
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-emerald-500 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* Right: Glow WhatsApp CTA Button */}
        <div className="hidden sm:flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-2 text-[10px] font-mono text-zinc-500 border border-zinc-800/80 px-2.5 py-1 rounded bg-zinc-900/40">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>STUDIO STATUS: PRIVATE SESSIONS ONLY</span>
          </div>

          <a
            href="https://wa.me/923496907055?text=Hello%20Anish%2C%20I%20would%20like%20to%20book%20a%20tattoo%20session%20with%20you."
            target="_blank"
            rel="noopener noreferrer"
            className="relative group inline-flex items-center gap-2 px-5 py-2.5 rounded text-xs font-mono tracking-widest font-bold uppercase transition-all duration-300 overflow-hidden bg-emerald-500/10 border border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-black hover:shadow-[0_0_25px_rgba(16,185,129,0.7)] active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2">
              <FaWhatsapp className="text-sm group-hover:scale-110 transition-transform" />
              <span>BOOK SESSION</span>
            </span>
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex sm:hidden items-center gap-2">
          <a
            href="https://wa.me/923496907055"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 border border-emerald-500/60 rounded bg-emerald-500/10 text-emerald-400"
            aria-label="Book on WhatsApp"
          >
            <FaWhatsapp className="text-base" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded border border-zinc-800 text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/40"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <HiX className="text-xl" /> : <HiMenuAlt3 className="text-xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#09090b]/98 border-b border-emerald-500/30 px-6 py-6 backdrop-blur-xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-4">
            <div className="text-[10px] font-mono tracking-widest text-emerald-500 mb-2">
              // NAVIGATION PROTOCOL
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-mono tracking-widest text-zinc-300 hover:text-emerald-400 py-1 flex items-center justify-between border-b border-zinc-900"
              >
                <span>{link.name}</span>
                <span className="text-emerald-500 text-xs">→</span>
              </a>
            ))}

            <div className="pt-4 mt-2">
              <a
                href="https://wa.me/923496907055?text=Hello%20Anish%2C%20I%20would%20like%20to%20book%20a%20tattoo%20session%20with%20you."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded text-xs font-mono tracking-widest font-bold uppercase bg-emerald-500 text-black shadow-[0_0_20px_rgba(16,185,129,0.5)]"
              >
                <FaWhatsapp className="text-base" />
                <span>BOOK SESSION NOW</span>
              </a>
              <div className="text-center text-[10px] font-mono text-zinc-600 mt-2">
                Islamabad, Pakistan • By Appointment Only
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
