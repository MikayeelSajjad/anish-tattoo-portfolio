"use client";

import { useState } from "react";
import { TATTOO_PORTFOLIO, CATEGORIES, TattooItem } from "@/data/tattoos";
import { FaWhatsapp, FaTimes, FaExpandAlt } from "react-icons/fa";
import { GiScalpel, GiHourglass, GiAbstract050 } from "react-icons/gi";

export default function PortfolioVault() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeItem, setActiveItem] = useState<TattooItem | null>(null);

  const filteredItems =
    selectedCategory === "All"
      ? TATTOO_PORTFOLIO
      : TATTOO_PORTFOLIO.filter((item) => item.category === selectedCategory);

  return (
    <section id="vault" className="relative py-28 px-4 sm:px-6 lg:px-8 border-t border-zinc-900 bg-[#09090b]">
      {/* Background Accent Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-[0.3em] text-emerald-500 mb-2">
              <span>// 01 ARCHIVE</span>
              <span className="w-8 h-[1px] bg-emerald-500/50" />
              <span>ISLAMABAD CANVASES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight uppercase text-white">
              THE <span className="text-emerald-500 underline decoration-emerald-500/40 decoration-1 underline-offset-8">VAULT</span>
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 font-light mt-3 max-w-xl">
              Strictly custom fine-line, sacred geometric structures, and dark surrealism. Every piece is drafted once and never replicated.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded uppercase tracking-wider transition-all duration-200 border ${
                    active
                      ? "bg-emerald-500 text-black border-emerald-500 font-bold shadow-[0_0_15px_rgba(16,185,129,0.4)]"
                      : "bg-zinc-950/80 text-zinc-400 border-zinc-800 hover:border-emerald-500/50 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Grid / Masonry Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group relative rounded-lg overflow-hidden border border-zinc-800/80 bg-zinc-950 hover:border-emerald-500/70 transition-all duration-500 cursor-pointer shadow-lg hover:shadow-[0_0_30px_rgba(16,185,129,0.25)] flex flex-col"
            >
              {/* Tactical Card Top Status Bar */}
              <div className="flex items-center justify-between px-3.5 py-2.5 bg-zinc-900/60 border-b border-zinc-800/80 text-[10px] font-mono text-zinc-400 group-hover:text-emerald-400 transition-colors">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 group-hover:animate-ping" />
                  <span>REF #{item.id}</span>
                </span>
                <span className="uppercase tracking-widest text-zinc-400">{item.placement}</span>
              </div>

              {/* Image Frame with Grayscale to Color & Scale on hover */}
              <div className="relative aspect-[3/4] overflow-hidden bg-zinc-900">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  loading="lazy"
                />

                {/* Cyber Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-300" />

                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded bg-black/80 backdrop-blur-md border border-emerald-500/50 text-emerald-400 text-[10px] font-mono tracking-widest uppercase font-semibold">
                    {item.category}
                  </span>
                </div>

                {/* Inspect Icon on Hover */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2 rounded-full bg-black/80 border border-emerald-500/50 text-emerald-400">
                  <FaExpandAlt className="text-xs" />
                </div>

                {/* Stencil Title Overlay at Bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-bold text-white tracking-wide group-hover:text-emerald-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-400 line-clamp-1 mt-1 font-mono">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Card Footer Technical Meta */}
              <div className="p-3.5 bg-zinc-950 border-t border-zinc-900 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                <span className="text-zinc-400">{item.duration}</span>
                <span className="text-emerald-500/80 group-hover:text-emerald-400 transition-colors flex items-center gap-1">
                  VIEW SPECS <span>→</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Artwork Guarantee Banner */}
        <div className="mt-16 p-6 sm:p-8 rounded-xl border border-emerald-500/30 bg-gradient-to-r from-zinc-950 via-emerald-950/20 to-zinc-950 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-lg border border-emerald-500/40 bg-emerald-500/10 text-emerald-400 text-2xl hidden sm:block">
              <GiScalpel />
            </div>
            <div>
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-emerald-400">
                // ZERO DUPLICATION COVENANT
              </div>
              <h4 className="text-xl font-bold text-white tracking-tight mt-0.5">
                Have an abstract idea or bespoke concept?
              </h4>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                Anish drafts every stencil by hand to match your exact anatomy and muscle geometry.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/923496907055?text=Hello%20Anish%2C%20I%20have%20a%20custom%20tattoo%20idea%20I%20would%20like%20to%20discuss%20with%20you."
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap px-6 py-3 rounded bg-emerald-500 text-black font-mono text-xs tracking-widest font-extrabold uppercase hover:bg-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.6)] transition-all flex items-center gap-2"
          >
            <FaWhatsapp className="text-base" />
            <span>DISCUSS BESPOKE CONCEPT</span>
          </a>
        </div>
      </div>

      {/* Interactive Lightbox / Modal */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-zinc-950 border border-emerald-500/50 rounded-xl overflow-hidden shadow-[0_0_50px_rgba(16,185,129,0.3)] grid grid-cols-1 md:grid-cols-2"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/80 border border-zinc-700 text-zinc-300 hover:text-emerald-400 hover:border-emerald-500 transition-colors"
              aria-label="Close detail modal"
            >
              <FaTimes className="text-base" />
            </button>

            {/* Modal Image */}
            <div className="relative aspect-square md:aspect-auto h-72 md:h-full bg-zinc-900 overflow-hidden">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent md:hidden" />
            </div>

            {/* Modal Content / Specs */}
            <div className="p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>REF #{activeItem.id} // {activeItem.category.toUpperCase()}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  {activeItem.title}
                </h3>
                <p className="text-sm text-zinc-300 mt-3 font-light leading-relaxed">
                  {activeItem.description}
                </p>

                {/* Technical Specs Grid */}
                <div className="mt-6 pt-6 border-t border-zinc-800 space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between text-zinc-400">
                    <span className="flex items-center gap-2">
                      <GiAbstract050 className="text-emerald-400" />
                      Placement
                    </span>
                    <span className="text-white font-medium">{activeItem.placement}</span>
                  </div>
                  <div className="flex items-center justify-between text-zinc-400">
                    <span className="flex items-center gap-2">
                      <GiHourglass className="text-emerald-400" />
                      Session Time
                    </span>
                    <span className="text-white font-medium">{activeItem.duration}</span>
                  </div>
                  <div className="flex items-center justify-between text-zinc-400">
                    <span className="flex items-center gap-2">
                      <GiScalpel className="text-emerald-400" />
                      Needle Setup
                    </span>
                    <span className="text-white font-medium">{activeItem.needle}</span>
                  </div>
                  <div className="flex items-center justify-between text-zinc-400">
                    <span>Dimensions</span>
                    <span className="text-white font-medium">{activeItem.dimensions}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-zinc-800 flex flex-col gap-3">
                <a
                  href={`https://wa.me/923496907055?text=Hello%20Anish%2C%20I%20am%20interested%20in%20a%20tattoo%20similar%20in%20style%20to%20'${encodeURIComponent(activeItem.title)}'%20(${activeItem.category}%2C%20${activeItem.placement}).`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded bg-emerald-500 text-black font-mono text-xs tracking-widest font-extrabold uppercase hover:bg-emerald-400 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.5)]"
                >
                  <FaWhatsapp className="text-base" />
                  <span>INQUIRE ABOUT THIS STYLE</span>
                </a>
                <button
                  onClick={() => setActiveItem(null)}
                  className="w-full py-2.5 text-center font-mono text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
                >
                  CLOSE PREVIEW [ESC]
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
