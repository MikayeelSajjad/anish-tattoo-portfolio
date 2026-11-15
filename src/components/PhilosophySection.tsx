"use client";

import { GiMicroscopeLens, GiDaggerRose, GiSkullShield } from "react-icons/gi";

export default function PhilosophySection() {
  const pillars = [
    {
      icon: <GiMicroscopeLens className="text-3xl text-emerald-400" />,
      tag: "MICRON SCALE",
      title: "Single-Needle Mastery",
      description:
        "Specializing in single-needle (01RL) and micro-bugpin configurations. Line weights calibrated to age gracefully under the epidermis without blurring or blowout.",
    },
    {
      icon: <GiDaggerRose className="text-3xl text-emerald-400" />,
      tag: "DARK SURREALISM",
      title: "The Subconscious Canvas",
      description:
        "Melting anatomical forms, gothic architecture, and esoteric iconography. Every flash of ink challenges conventional aesthetic standards.",
    },
    {
      icon: <GiSkullShield className="text-3xl text-emerald-400" />,
      tag: "MED-GRADE STERILITY",
      title: "Surgical Sanctuary",
      description:
        "Hospital-grade autoclaves, 100% single-use disposable cartridge barriers, and certified carbon pigments meeting rigorous international standards.",
    },
  ];

  return (
    <section id="philosophy" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-zinc-950/80 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-xs font-mono tracking-[0.25em] mb-4">
            <span>// 02 PHILOSOPHY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            REJECT THE <span className="text-emerald-500">ORDINARY.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
            In a world saturated with repetitive catalog stencils, Anish crafts permanent identities. 
            Each piece is born from a dialogue between human anatomy and existential dark art.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className="relative p-8 rounded-xl bg-[#09090b] border border-zinc-800/80 hover:border-emerald-500/60 transition-all duration-300 group hover:-translate-y-1 shadow-lg hover:shadow-[0_0_25px_rgba(16,185,129,0.15)]"
            >
              {/* Corner accent tick */}
              <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden">
                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-emerald-500/50 group-hover:border-emerald-500 transition-colors" />
              </div>

              <div className="flex items-center justify-between mb-6">
                <div className="p-3.5 rounded-lg bg-zinc-900/80 border border-zinc-800 group-hover:border-emerald-500/40 group-hover:bg-emerald-500/10 transition-colors">
                  {pillar.icon}
                </div>
                <span className="font-mono text-xs text-zinc-600 group-hover:text-emerald-500 transition-colors">
                  0{i + 1} //
                </span>
              </div>

              <div className="font-mono text-[10px] tracking-[0.2em] text-emerald-400 uppercase mb-2">
                {pillar.tag}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-emerald-400 transition-colors">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
