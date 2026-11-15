"use client";

import { RiDiscussLine, RiCompassDiscoverLine, RiFocus2Line, RiShieldCheckLine } from "react-icons/ri";

export default function ProcessSection() {
  const steps = [
    {
      num: "01",
      title: "Concept Dialogue",
      icon: <RiDiscussLine className="text-2xl text-emerald-400" />,
      tag: "PHASE // DISCOVERY",
      desc: "Direct conversation via WhatsApp or in-studio consultation. We discuss your reference points, themes, and body placement without templates.",
    },
    {
      num: "02",
      title: "Anatomical Custom Stencil",
      icon: <RiCompassDiscoverLine className="text-2xl text-emerald-400" />,
      tag: "PHASE // ARCHITECTURE",
      desc: "Every design is customized to harmonize with your muscle contours and natural flow lines, ensuring distortion-free posture.",
    },
    {
      num: "03",
      title: "Precision Session",
      icon: <RiFocus2Line className="text-2xl text-emerald-400" />,
      tag: "PHASE // INITIATION",
      desc: "Quiet, single-client studio atmosphere in Islamabad. Low vibration rotary pen, top-tier German needles, and deliberate calm focus.",
    },
    {
      num: "04",
      title: "Bio-Shield Aftercare",
      icon: <RiShieldCheckLine className="text-2xl text-emerald-400" />,
      tag: "PHASE // HEALING",
      desc: "Application of medical-grade second skin (Saniderm), comprehensive healing protocol, and complimentary lifetime touch-up review.",
    },
  ];

  return (
    <section id="protocol" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#09090b] border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="text-xs font-mono tracking-[0.3em] text-emerald-500 mb-2">
              // 03 PROTOCOL
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
              SESSION <span className="text-emerald-500">RITUAL</span>
            </h2>
          </div>
          <div className="text-xs font-mono text-zinc-500">
            [TRANSPARENT WORKFLOW • ISLAMABAD STUDIO]
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="relative p-6 rounded-xl bg-zinc-950/80 border border-zinc-800/80 hover:border-emerald-500/60 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-2xl font-black text-emerald-500/30 group-hover:text-emerald-400 transition-colors">
                    {step.num}
                  </span>
                  <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-emerald-400">
                    {step.icon}
                  </div>
                </div>

                <div className="text-[10px] font-mono tracking-widest text-emerald-400 mb-1">
                  {step.tag}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-900/80 text-[10px] font-mono text-zinc-500 flex items-center justify-between">
                <span>STAGE VERIFIED</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
