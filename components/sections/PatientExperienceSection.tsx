"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { RevealSection } from "@/components/ui/RevealSection";
import { useState } from "react";

const testimonials = [
  {
    quote: "The level of care at City Care Hospital is unlike anything I've experienced. The staff's dedication and the cutting-edge technology gave me complete confidence throughout my treatment.",
    name: "Rajan Mehta",
    role: "Cardiac Patient",
    rating: 5,
  },
  {
    quote: "From the moment I arrived, every detail was handled with precision and compassion. The private room was hotel-quality. Recovery felt natural in such a healing environment.",
    name: "Priya Sharma",
    role: "Orthopedic Patient",
    rating: 5,
  },
  {
    quote: "The AI-assisted diagnostics caught something three other hospitals missed. This place genuinely operates on a different level — the future is already here.",
    name: "Dr. Arun Patel",
    role: "Referred Specialist",
    rating: 5,
  },
];

const experienceFeatures = [
  "Private & comfortable patient rooms",
  "Natural daylight & garden views",
  "Noise control & acoustics management",
  "Easy wayfinding & digital signage",
  "Digital patient engagement tools",
  "Family-friendly visitor spaces",
];

export function PatientExperienceSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <section className="relative py-32 bg-[#0B3C6D]/15 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="max-w-7xl mx-auto px-6">
        <RevealSection className="mb-16">
          <SectionTitle
            eyebrow="Patient Experience"
            title="Healing in Luxury & Comfort"
            subtitle="Every touchpoint designed to reduce stress and accelerate recovery."
            centered
          />
        </RevealSection>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Room showcase */}
          <RevealSection direction="left">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=85"
                    alt="Patient Room"
                    fill
                    className="object-cover"
                    style={{ filter: "brightness(0.7) saturate(0.9)" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#091A2B]/30 to-transparent" />
                </div>
              </div>

              {/* Floating feature list */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -bottom-8 -right-4 glass-dark rounded-2xl p-5 border border-[#4FD1FF]/10 max-w-[220px]"
              >
                <div className="text-[#4FD1FF] text-[10px] uppercase tracking-widest font-sans mb-3">
                  Patient Features
                </div>
                {experienceFeatures.slice(0, 4).map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 mb-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#4CAF50] flex-shrink-0" />
                    <span className="text-[#F7F9FC]/70 text-[10px] font-sans">{feat}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </RevealSection>

          {/* Safety features */}
          <RevealSection direction="right">
            <div className="space-y-4">
              <div className="glass rounded-2xl p-6">
                <div className="text-[#4FD1FF] text-xs uppercase tracking-widest font-sans mb-4">
                  Safety & Infection Control
                </div>
                {[
                  { label: "HEPA Filtered Air", desc: "99.97% filtration of airborne particles" },
                  { label: "Anti-Microbial Surfaces", desc: "Copper-infused high-touch surfaces" },
                  { label: "Touchless Access", desc: "Sensor-activated doors and fixtures" },
                  { label: "Isolation Rooms", desc: "Negative pressure rooms available" },
                  { label: "Real-Time Air Quality", desc: "CO₂ and particulate monitoring" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="flex items-start gap-3 py-3 border-b border-white/5 last:border-0"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#4CAF50] mt-1.5 flex-shrink-0" />
                    <div>
                      <div className="text-[#F7F9FC] text-xs font-display font-semibold uppercase tracking-wide">
                        {item.label}
                      </div>
                      <div className="text-[#F7F9FC]/40 text-[10px] font-sans mt-0.5">{item.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </RevealSection>
        </div>

        {/* Testimonials */}
        <RevealSection>
          <div className="relative">
            <div className="glass rounded-3xl p-8 lg:p-12">
              <div className="grid lg:grid-cols-3 gap-6">
                {testimonials.map((t, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    onClick={() => setActiveTestimonial(i)}
                    className={`relative p-6 rounded-2xl cursor-none transition-all duration-300 ${
                      activeTestimonial === i
                        ? "bg-[#0B3C6D]/50 border border-[#4FD1FF]/20"
                        : "hover:bg-white/5"
                    }`}
                  >
                    <Quote className="w-8 h-8 text-[#4FD1FF]/20 mb-4" />
                    <p className="text-[#F7F9FC]/80 text-sm font-sans leading-relaxed italic mb-6">
                      "{t.quote}"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#4FD1FF]/20 to-[#0B3C6D]/50 flex items-center justify-center">
                        <span className="text-[#4FD1FF] font-display font-bold text-sm">
                          {t.name[0]}
                        </span>
                      </div>
                      <div>
                        <div className="text-[#F7F9FC] font-display font-bold text-xs uppercase tracking-wide">
                          {t.name}
                        </div>
                        <div className="text-[#F7F9FC]/40 text-[10px] font-sans">{t.role}</div>
                      </div>
                    </div>
                    <div className="flex gap-0.5 mt-4">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <Star key={j} className="w-3 h-3 text-[#4FD1FF] fill-[#4FD1FF]" />
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
