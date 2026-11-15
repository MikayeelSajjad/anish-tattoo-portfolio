"use client";

import { FaWhatsapp, FaArrowDown } from "react-icons/fa";
import { GiInkSwirl, GiDaggerRose } from "react-icons/gi";
import { RiContrastDrop2Line, RiCompass3Line } from "react-icons/ri";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      {/* Background Cyber Gradients & Radial Noise Effect */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Primary Emerald Radial Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[650px] h-[350px] sm:h-[650px] bg-emerald-500/10 rounded-full blur-[140px] animate-pulse-glow" />
        
        {/* Secondary Deep Cyan Glow */}
        <div className="absolute bottom-10 right-10 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-emerald-950/20 rounded-full blur-[120px]" />

        {/* Tactical Mesh Grid Lines */}
        <div 
          className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(to_right,#10b981_1px,transparent_1px),linear-gradient(to_bottom,#10b981_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] animate-grid-fade"
        />

        {/* Ambient Corner Tactical Coordinates */}
        <div className="hidden lg:block absolute top-24 left-8 text-[11px] font-mono text-zinc-600 tracking-widest leading-relaxed">
          <div>LOC // 33.7294° N, 73.0931° E</div>
          <div>ELEV // 540M • ISLAMABAD</div>
          <div className="text-emerald-500/70 mt-1">STATUS // BESPOKE ONLY</div>
        </div>

        <div className="hidden lg:block absolute top-24 right-8 text-right text-[11px] font-mono text-zinc-600 tracking-widest leading-relaxed">
          <div>CANVAS // HUMAN EPIDERMIS</div>
          <div>NEEDLE // 0.25MM SINGLE PASS</div>
          <div className="text-emerald-500/70 mt-1">CODE // ZERO TEMPLATES</div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        {/* Left Column: Typography & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/5 text-emerald-400 text-xs font-mono tracking-[0.2em] mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>PRIVATE ATELIER // ISLAMABAD</span>
          </div>

          {/* Massive Bold Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-black tracking-tighter uppercase text-white leading-[0.92] mb-6 select-none">
            DEFY THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-300 drop-shadow-[0_0_35px_rgba(16,185,129,0.35)]">NORM.</span>
            <br />
            <span className="font-mono font-light text-zinc-400 text-3xl sm:text-5xl md:text-6xl tracking-tight">
              INK BY{" "}
              <span className="font-black text-white underline decoration-emerald-500 decoration-wavy decoration-2">
                ANISH.
              </span>
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-base sm:text-xl text-zinc-300 max-w-xl font-light tracking-wide leading-relaxed mb-8 border-l-2 border-emerald-500/60 pl-4 bg-gradient-to-r from-emerald-950/20 to-transparent py-1">
            Custom fine-line, surrealist, and dark-art tattoos. Designed exclusively in Islamabad.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
            {/* Primary CTA: Secure Your Ink */}
            <a
              href="https://wa.me/923496907055?text=Hello%20Anish%2C%20I%20want%20to%20secure%20my%20ink%20session.%20Please%20share%20your%20next%20available%20dates."
              target="_blank"
              rel="noopener noreferrer"
              className="relative group inline-flex items-center justify-center gap-3 px-8 py-4 rounded bg-emerald-500 text-black font-mono text-sm tracking-widest font-extrabold uppercase shadow-[0_0_30px_rgba(16,185,129,0.5)] hover:shadow-[0_0_45px_rgba(16,185,129,0.85)] hover:bg-emerald-400 transition-all duration-300 active:scale-95"
            >
              <FaWhatsapp className="text-lg transition-transform group-hover:rotate-12" />
              <span>SECURE YOUR INK</span>
              <span className="text-xs">↗</span>
            </a>

            {/* Secondary CTA: View Portfolio */}
            <a
              href="#vault"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded border border-zinc-800 hover:border-emerald-500/60 bg-zinc-900/60 hover:bg-zinc-900 text-zinc-200 hover:text-emerald-400 font-mono text-sm tracking-widest uppercase transition-all duration-300 group"
            >
              <GiInkSwirl className="text-lg text-emerald-500 group-hover:scale-125 transition-transform" />
              <span>VIEW PORTFOLIO</span>
              <span className="text-xs text-zinc-500 group-hover:text-emerald-400">↓</span>
            </a>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-6 sm:gap-10 mt-12 pt-8 border-t border-zinc-800/80 w-full max-w-lg font-mono">
            <div>
              <div className="text-2xl sm:text-3xl font-black text-white">8+</div>
              <div className="text-[11px] tracking-wider text-zinc-400 mt-1 uppercase">Years Inking</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-emerald-400">1,200+</div>
              <div className="text-[11px] tracking-wider text-zinc-400 mt-1 uppercase">Custom Pieces</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-white">0%</div>
              <div className="text-[11px] tracking-wider text-zinc-400 mt-1 uppercase">Flash / Clones</div>
            </div>
          </div>
        </div>

        {/* Right Column: Floating Anti-Gravity Cyber-Gothic Visual Display */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          {/* Anti-Gravity Floating Container */}
          <div className="relative w-full max-w-md animate-float-slow">
            {/* Glow Aura */}
            <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/30 via-teal-500/20 to-emerald-600/30 rounded-2xl blur-xl opacity-70 group-hover:opacity-100 transition-opacity" />

            {/* Main Showcase Card */}
            <div className="relative rounded-xl overflow-hidden border border-emerald-500/30 bg-zinc-950/90 shadow-2xl backdrop-blur-sm">
              {/* Tactical Header bar */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800 bg-zinc-900/50 text-[11px] font-mono text-zinc-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="text-emerald-400 font-bold">ARTIFACT #0924</span>
                </div>
                <div className="tracking-widest text-zinc-400">ISLAMABAD ATELIER</div>
              </div>

              {/* Image with Tactical Stencil Overlay */}
              <div className="relative aspect-[4/5] overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?q=80&w=1000&auto=format&fit=crop"
                  alt="Anish Signature Tattoo Fine-line Artwork"
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                
                {/* Subtle vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none" />

                {/* Stencil Watermark */}
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between pointer-events-none">
                  <div>
                    <div className="text-[10px] font-mono text-emerald-400 tracking-widest uppercase">
                      Signature Single-Needle
                    </div>
                    <div className="text-lg font-mono font-bold text-white tracking-wide">
                      THE OUROBOROS PROTOCOL
                    </div>
                  </div>
                  <div className="text-right font-mono text-[10px] text-zinc-400">
                    <div>ANISH INK</div>
                    <div className="text-emerald-400">CUSTOM 1/1</div>
                  </div>
                </div>
              </div>

              {/* Tactical Specs footer */}
              <div className="p-4 grid grid-cols-2 gap-2 border-t border-zinc-800/80 bg-zinc-900/40 text-[11px] font-mono text-zinc-400">
                <div className="flex items-center gap-2">
                  <RiContrastDrop2Line className="text-emerald-400" />
                  <span>Carbon Dynamic Ink</span>
                </div>
                <div className="flex items-center gap-2">
                  <RiCompass3Line className="text-emerald-400" />
                  <span>Anatomical Flow</span>
                </div>
              </div>
            </div>

            {/* Anti-Gravity Floating Satellite Badge 1 (Top Left) */}
            <div className="absolute -top-6 -left-6 bg-zinc-950/95 border border-emerald-500/50 p-3 rounded-lg shadow-xl shadow-black/80 flex items-center gap-3 backdrop-blur-md animate-float-reverse hidden sm:flex">
              <div className="p-2 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                <GiDaggerRose className="text-lg" />
              </div>
              <div className="font-mono text-left">
                <div className="text-[10px] text-zinc-400 uppercase tracking-wider">Discipline</div>
                <div className="text-xs font-bold text-white tracking-wide">SURREALIST FINE-LINE</div>
              </div>
            </div>

            {/* Anti-Gravity Floating Satellite Badge 2 (Bottom Right) */}
            <div className="absolute -bottom-6 -right-6 bg-zinc-950/95 border border-emerald-500/50 px-4 py-3 rounded-lg shadow-xl shadow-black/80 flex items-center gap-3 backdrop-blur-md animate-float-subtle hidden sm:flex">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <div className="font-mono text-left">
                <div className="text-[10px] text-emerald-400 tracking-widest font-bold">100% BESPOKE</div>
                <div className="text-[10px] text-zinc-400">ZERO DUPLICATES</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Down Scroll Indicator */}
      <a
        href="#vault"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500 hover:text-emerald-400 transition-colors cursor-pointer group"
        aria-label="Scroll to Vault"
      >
        <span className="text-[10px] font-mono tracking-widest uppercase group-hover:tracking-[0.25em] transition-all">
          EXPLORE VAULT
        </span>
        <FaArrowDown className="text-xs animate-bounce text-emerald-500" />
      </a>
    </section>
  );
}
