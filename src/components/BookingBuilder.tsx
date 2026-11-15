"use client";

import { useState } from "react";
import { FaWhatsapp, FaCheckCircle, FaPenNib } from "react-icons/fa";

export default function BookingBuilder() {
  const [style, setStyle] = useState<string>("Fine Line");
  const [placement, setPlacement] = useState<string>("Forearm");
  const [size, setSize] = useState<string>("Medium (4-6 inches)");
  const [notes, setNotes] = useState<string>("");

  const styles = ["Fine Line", "Geometric", "Surrealism", "Dark Art"];
  const placements = ["Forearm", "Upper Arm / Sleeve", "Spine / Back", "Ribs / Sternum", "Leg / Calf", "Custom"];
  const sizes = ["Small (2-3\")", "Medium (4-6\")", "Large (7-10\")", "Full Piece / Multi-session"];

  const buildWhatsAppUrl = () => {
    const rawMessage = `Hello Anish! I would like to book a tattoo session with you at your Islamabad Studio.\n\n` +
      `• Preferred Style: ${style}\n` +
      `• Body Placement: ${placement}\n` +
      `• Estimated Size: ${size}\n` +
      (notes.trim() ? `• Idea / Concept: ${notes.trim()}\n` : "") +
      `\nPlease let me know your available slots and consultation details.`;

    return `https://wa.me/923496907055?text=${encodeURIComponent(rawMessage)}`;
  };

  return (
    <section id="booking-builder" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-xs font-mono tracking-[0.25em] mb-4">
            <FaPenNib className="text-xs" />
            <span>// 04 SESSION GENERATOR</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            CONFIGURE YOUR <span className="text-emerald-500">SESSION</span>
          </h2>
          <p className="mt-3 text-sm text-zinc-400 font-light max-w-lg mx-auto">
            Select your preferences below to generate an immediate, structured inquiry sent directly to Anish on WhatsApp.
          </p>
        </div>

        {/* Tactical Configurator Box */}
        <div className="rounded-2xl border border-emerald-500/30 bg-[#09090b] p-6 sm:p-10 shadow-[0_0_40px_rgba(16,185,129,0.12)]">
          {/* Step 1: Style */}
          <div className="mb-8">
            <label className="block text-xs font-mono uppercase tracking-widest text-emerald-400 mb-3">
              1. Choose Tattoo Aesthetic
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {styles.map((s) => {
                const active = style === s;
                return (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setStyle(s)}
                    className={`py-3 px-4 rounded-lg text-xs font-mono uppercase tracking-wider border transition-all text-center flex items-center justify-center gap-2 ${
                      active
                        ? "bg-emerald-500/20 border-emerald-500 text-emerald-400 font-bold shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                        : "bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200"
                    }`}
                  >
                    {active && <FaCheckCircle className="text-xs text-emerald-400" />}
                    <span>{s}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Placement */}
          <div className="mb-8">
            <label className="block text-xs font-mono uppercase tracking-widest text-emerald-400 mb-3">
              2. Anatomical Placement
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {placements.map((p) => {
                const active = placement === p;
                return (
                  <button
                    key={p}
                    type="button"
                    onClick={() => setPlacement(p)}
                    className={`py-3 px-4 rounded-lg text-xs font-mono uppercase tracking-wider border transition-all text-center flex items-center justify-center gap-2 ${
                      active
                        ? "bg-emerald-500/20 border-emerald-500 text-emerald-400 font-bold shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                        : "bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200"
                    }`}
                  >
                    {active && <FaCheckCircle className="text-xs text-emerald-400" />}
                    <span>{p}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 3: Size */}
          <div className="mb-8">
            <label className="block text-xs font-mono uppercase tracking-widest text-emerald-400 mb-3">
              3. Approximate Scale
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {sizes.map((sz) => {
                const active = size === sz;
                return (
                  <button
                    key={sz}
                    type="button"
                    onClick={() => setSize(sz)}
                    className={`py-3 px-4 rounded-lg text-xs font-mono uppercase tracking-wider border transition-all text-left flex items-center justify-between ${
                      active
                        ? "bg-emerald-500/20 border-emerald-500 text-emerald-400 font-bold shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                        : "bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200"
                    }`}
                  >
                    <span>{sz}</span>
                    {active && <span className="text-emerald-400 font-mono text-xs">SELECTED</span>}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 4: Concept Notes */}
          <div className="mb-8">
            <label className="block text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2">
              4. Concept Notes or Elements (Optional)
            </label>
            <textarea
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g. Snakes, moths, sacred geometry, cybernetic spine, obsidian shading..."
              className="w-full bg-zinc-900/80 border border-zinc-800 rounded-lg p-3 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 font-mono transition-colors"
            />
          </div>

          {/* WhatsApp Direct Submit Button */}
          <div className="pt-4 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs font-mono text-zinc-500 text-center sm:text-left">
              Direct connection to Anish's private WhatsApp line
              <div className="text-emerald-400 font-bold">+92 349 6907055</div>
            </div>

            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded bg-emerald-500 text-black font-mono text-sm tracking-widest font-extrabold uppercase hover:bg-emerald-400 hover:shadow-[0_0_30px_rgba(16,185,129,0.7)] transition-all duration-300 active:scale-95 shadow-lg shadow-emerald-500/20"
            >
              <FaWhatsapp className="text-lg" />
              <span>SEND BRIEF VIA WHATSAPP</span>
              <span>↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
