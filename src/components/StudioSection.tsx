"use client";

import { useState } from "react";
import { HiPlus, HiMinus } from "react-icons/hi";
import { FaMapMarkerAlt, FaShieldAlt, FaClock, FaCalendarAlt } from "react-icons/fa";

export default function StudioSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "Can I bring an existing tattoo image from Pinterest or Instagram for you to copy?",
      a: "No. Anish strictly creates 100% custom, original pieces. You can provide mood boards, stylistic themes, and reference photos to communicate ideas, but your final tattoo will be uniquely drawn from scratch exclusively for you.",
    },
    {
      q: "How does the booking & deposit protocol work?",
      a: "Sessions are by appointment only. After discussing your design on WhatsApp, a date is confirmed with a non-refundable deposit that is deducted from your final session total.",
    },
    {
      q: "How painful are fine-line and single-needle tattoos?",
      a: "Single-needle (01RL/03RL) tattooing causes significantly less trauma to the skin compared to standard multi-needle clusters. Most clients report a gentle scratching sensation. For long multi-hour sessions, medical-grade numbing solutions can be discussed.",
    },
    {
      q: "Where is the private studio located?",
      a: "The private atelier is located in an exclusive, tranquil sector of Islamabad, Pakistan. The exact address and pin location are provided directly upon booking confirmation to ensure maximum privacy and calm for each client.",
    },
    {
      q: "What aftercare should I follow after the session?",
      a: "Your fresh tattoo is sealed with medical-grade Saniderm adhesive film. You leave this on for 3-4 days to heal in its natural plasma. Detailed aftercare instructions and balm recommendations are provided at the end of every session.",
    },
  ];

  return (
    <section id="studio" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#09090b] border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Studio Specs */}
          <div className="lg:col-span-5">
            <div className="text-xs font-mono tracking-[0.3em] text-emerald-500 mb-2">
              // 05 THE SANCTUARY
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-6">
              ISLAMABAD <span className="text-emerald-500">ATELIER</span>
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed mb-8">
              A climate-controlled private studio engineered for zero distractions. Designed for clients who value artistic focus, absolute privacy, and uncompromised medical hygiene.
            </p>

            <div className="space-y-4 font-mono text-xs">
              <div className="p-4 rounded-lg bg-zinc-950 border border-zinc-800/80 flex items-start gap-3">
                <FaMapMarkerAlt className="text-emerald-400 text-sm mt-0.5 shrink-0" />
                <div>
                  <div className="text-white font-bold tracking-wider">ISLAMABAD, PAKISTAN</div>
                  <div className="text-zinc-500 mt-0.5">Private Sector Atelier • Coordinates: 33.7294° N, 73.0931° E</div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-zinc-950 border border-zinc-800/80 flex items-start gap-3">
                <FaCalendarAlt className="text-emerald-400 text-sm mt-0.5 shrink-0" />
                <div>
                  <div className="text-white font-bold tracking-wider">EXCLUSIVE SLOTS ONLY</div>
                  <div className="text-zinc-500 mt-0.5">One client per day maximum to allow unhurried artistic precision</div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-zinc-950 border border-zinc-800/80 flex items-start gap-3">
                <FaShieldAlt className="text-emerald-400 text-sm mt-0.5 shrink-0" />
                <div>
                  <div className="text-white font-bold tracking-wider">CLINICAL HYGIENE STANDARDS</div>
                  <div className="text-zinc-500 mt-0.5">Single-use EO gas sterilized cartridges • Vegan dynamic carbon inks</div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-zinc-950 border border-zinc-800/80 flex items-start gap-3">
                <FaClock className="text-emerald-400 text-sm mt-0.5 shrink-0" />
                <div>
                  <div className="text-white font-bold tracking-wider">TIMING PROTOCOL</div>
                  <div className="text-zinc-500 mt-0.5">Tuesday – Sunday: 1:00 PM – 9:00 PM (Prior Booking Only)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: FAQ Accordion */}
          <div className="lg:col-span-7">
            <div className="text-xs font-mono tracking-[0.3em] text-emerald-500 mb-2">
              // FREQUENTLY ASKED PROTOCOLS
            </div>
            <h3 className="text-2xl sm:text-3xl font-black uppercase text-white mb-8">
              STUDIO INTEL & INQUIRIES
            </h3>

            <div className="space-y-3">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={faq.q}
                    className="rounded-xl border border-zinc-800/80 bg-zinc-950/80 overflow-hidden transition-all duration-200"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 hover:text-emerald-400 transition-colors"
                    >
                      <span className="font-mono text-sm font-bold text-zinc-200">
                        {faq.q}
                      </span>
                      <span className="p-1 rounded bg-zinc-900 border border-zinc-800 text-emerald-400 shrink-0">
                        {isOpen ? <HiMinus /> : <HiPlus />}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-zinc-400 font-light leading-relaxed border-t border-zinc-900">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
