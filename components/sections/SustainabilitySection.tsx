"use client";
import { motion } from "framer-motion";
import { Sun, Droplets, Wind, Leaf, Recycle, Zap } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { RevealSection } from "@/components/ui/RevealSection";
import { GlassCard } from "@/components/ui/GlassCard";
import Image from "next/image";

const sustainFeatures = [
  { icon: Sun, label: "Rooftop Solar Panels", value: "500kW", desc: "Peak solar generation capacity", color: "#FFD700" },
  { icon: Droplets, label: "Rainwater Harvesting", value: "25%", desc: "Water need met from rainwater", color: "#4FD1FF" },
  { icon: Wind, label: "Natural Ventilation", value: "40%", desc: "Reduction in HVAC energy load", color: "#4CAF50" },
  { icon: Leaf, label: "Low-E Glass Windows", value: "35%", desc: "Heat gain reduction vs standard", color: "#4CAF50" },
  { icon: Recycle, label: "Waste Segregation", value: "95%", desc: "Bio-medical waste compliance", color: "#4FD1FF" },
  { icon: Zap, label: "Energy Efficient HVAC", value: "30%", desc: "Energy savings vs conventional", color: "#4CAF50" },
];

export function SustainabilitySection() {
  return (
    <section id="sustainability" className="relative py-32 bg-[#091A2B] overflow-hidden">
      {/* Green glow */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-[#4CAF50]/8 blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-[#4FD1FF]/6 blur-[80px]" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <RevealSection>
              <SectionTitle
                eyebrow="Sustainability"
                title="Built for the Planet's Future"
                subtitle="IGBC Gold certified for green building excellence. Every design decision considers environmental impact and long-term sustainability."
              />
            </RevealSection>

            <RevealSection delay={0.2} className="mt-10">
              <div className="grid grid-cols-2 gap-4">
                {sustainFeatures.map((feat, i) => (
                  <GlassCard key={i} delay={i * 0.06} className="group" hover>
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300"
                      style={{ background: `${feat.color}15` }}
                    >
                      <feat.icon className="w-5 h-5" style={{ color: feat.color }} />
                    </div>
                    <div
                      className="font-display font-black text-2xl mb-1"
                      style={{ color: feat.color }}
                    >
                      {feat.value}
                    </div>
                    <div className="text-[#F7F9FC] text-xs font-display font-semibold uppercase tracking-wide">
                      {feat.label}
                    </div>
                    <div className="text-[#F7F9FC]/40 text-[10px] font-sans mt-1">{feat.desc}</div>
                  </GlassCard>
                ))}
              </div>
            </RevealSection>
          </div>

          {/* Right: Visual */}
          <RevealSection direction="right">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden border border-[#4CAF50]/15">
                <div className="aspect-square relative">
                  <Image
                    src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=85"
                    alt="Sustainable Hospital"
                    fill
                    className="object-cover"
                    style={{ filter: "brightness(0.5) saturate(0.8) hue-rotate(20deg)" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#091A2B] via-[#091A2B]/20 to-transparent" />

                  {/* IGBC Badge */}
                  <div className="absolute top-6 left-6">
                    <motion.div
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="glass-dark rounded-2xl p-4 border border-[#4CAF50]/30"
                      style={{ boxShadow: "0 0 30px rgba(76, 175, 80, 0.2)" }}
                    >
                      <div className="text-[#4CAF50] font-display font-black text-2xl">IGBC</div>
                      <div className="text-[#F7F9FC]/60 text-[10px] uppercase tracking-widest font-sans">Gold Rated</div>
                    </motion.div>
                  </div>

                  {/* Energy savings display */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="glass rounded-2xl p-4">
                      <div className="text-[#4CAF50] text-[10px] uppercase tracking-widest font-sans mb-3">
                        Annual Environmental Impact
                      </div>
                      {[
                        { label: "CO₂ Reduction", value: "450 Tons/Year" },
                        { label: "Water Saved", value: "8M Litres/Year" },
                        { label: "Energy Saved", value: "30% vs Standard" },
                      ].map((item, i) => (
                        <div key={i} className="flex justify-between items-center py-1.5 border-b border-white/5 last:border-0">
                          <span className="text-[#F7F9FC]/50 text-[10px] font-sans">{item.label}</span>
                          <span className="text-[#4CAF50] text-xs font-display font-bold">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  );
}
