"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { RevealSection } from "@/components/ui/RevealSection";

const hotspots = [
  {
    x: "20%",
    y: "25%",
    label: "Advanced ICUs",
    description: "60 ICU beds with latest life-support systems, isolation rooms, and continuous monitoring.",
    color: "#4FD1FF",
  },
  {
    x: "50%",
    y: "15%",
    label: "Smart Technology",
    description: "AI-assisted diagnostics, real-time monitoring, and digital workflows enhance accuracy.",
    color: "#4CAF50",
  },
  {
    x: "78%",
    y: "30%",
    label: "Energy Efficient",
    description: "Solar panels, efficient HVAC, low-flow fixtures and smart energy management.",
    color: "#4FD1FF",
  },
  {
    x: "15%",
    y: "65%",
    label: "Emergency Access",
    description: "24/7 emergency bay with dedicated ambulance access and rapid response teams.",
    color: "#FF5A5A",
  },
  {
    x: "65%",
    y: "70%",
    label: "Healing Environment",
    description: "Natural light, green spaces, and calming interiors promote faster patient recovery.",
    color: "#4CAF50",
  },
];

const specs = [
  { label: "Total Built-up Area", value: "1,25,000 sq ft" },
  { label: "Total Floors", value: "G + 7" },
  { label: "Bed Capacity", value: "350 Beds" },
  { label: "ICU Beds", value: "60 Beds" },
  { label: "Operation Theatres", value: "12 Modular OT" },
  { label: "Emergency Capacity", value: "50 Patients" },
  { label: "Parking Capacity", value: "300 Cars" },
  { label: "Green Building Rating", value: "IGBC Gold" },
];

export function OverviewSection() {
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);

  return (
    <section id="overview" className="relative py-32 bg-[#091A2B] overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="max-w-7xl mx-auto px-6">
        <RevealSection>
          <SectionTitle
            eyebrow="Hospital Overview"
            title="Where Architecture Meets Medicine"
            subtitle="A landmark in modern healthcare infrastructure, designed to deliver advanced medical care with operational excellence."
          />
        </RevealSection>

        <div className="mt-16 grid lg:grid-cols-2 gap-12 items-start">
          {/* Interactive Image */}
          <RevealSection direction="left">
            <div className="relative rounded-3xl overflow-hidden bg-[#0B3C6D]/20 border border-[#4FD1FF]/10">
              <div className="aspect-[4/3] relative">
                <Image
                  src="https://images.unsplash.com/photo-1551076805-e1869033e561?w=900&q=85"
                  alt="City Care Hospital Building"
                  fill
                  className="object-cover"
                  style={{ filter: "brightness(0.7) saturate(0.9)" }}
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#091A2B]/60 to-transparent" />

                {/* Hotspots */}
                {hotspots.map((spot, i) => (
                  <div
                    key={i}
                    className="absolute cursor-none"
                    style={{ left: spot.x, top: spot.y, transform: "translate(-50%, -50%)" }}
                    onMouseEnter={() => setActiveHotspot(i)}
                    onMouseLeave={() => setActiveHotspot(null)}
                  >
                    {/* Pulse rings */}
                    <div className="relative">
                      <motion.div
                        className="absolute inset-0 rounded-full border-2"
                        style={{ borderColor: spot.color }}
                        animate={{ scale: [1, 2.5], opacity: [0.8, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                      />
                      <motion.div
                        className="absolute inset-0 rounded-full border-2"
                        style={{ borderColor: spot.color }}
                        animate={{ scale: [1, 2.5], opacity: [0.8, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 + 1 }}
                      />
                      <div
                        className="w-5 h-5 rounded-full border-2 flex items-center justify-center"
                        style={{
                          background: `${spot.color}30`,
                          borderColor: spot.color,
                        }}
                      >
                        <div
                          className="w-2 h-2 rounded-full"
                          style={{ background: spot.color }}
                        />
                      </div>
                    </div>

                    {/* Tooltip */}
                    <AnimatePresence>
                      {activeHotspot === i && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9, y: 8 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.9, y: 8 }}
                          className="absolute z-20 glass-dark rounded-xl p-3 min-w-[180px] pointer-events-none"
                          style={{
                            bottom: "calc(100% + 12px)",
                            left: "50%",
                            transform: "translateX(-50%)",
                            borderColor: `${spot.color}30`,
                          }}
                        >
                          <div
                            className="text-xs font-display font-bold uppercase tracking-wider mb-1"
                            style={{ color: spot.color }}
                          >
                            {spot.label}
                          </div>
                          <div className="text-[#F7F9FC]/70 text-[11px] font-sans leading-relaxed">
                            {spot.description}
                          </div>
                          <div
                            className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45"
                            style={{ background: "rgba(9, 26, 43, 0.8)" }}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}

                {/* Corner label */}
                <div className="absolute bottom-4 left-4">
                  <div className="text-[#4FD1FF] text-[10px] uppercase tracking-widest font-sans">
                    Hover to explore hotspots
                  </div>
                </div>
              </div>
            </div>
          </RevealSection>

          {/* Specs Grid */}
          <RevealSection direction="right">
            <div className="space-y-6">
              <div className="glass rounded-2xl p-6">
                <div className="text-[#4FD1FF] text-xs uppercase tracking-widest font-sans mb-4">
                  Key Specifications
                </div>
                <div className="space-y-3">
                  {specs.map((spec, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="flex justify-between items-center py-2 border-b border-white/5 last:border-0"
                    >
                      <span className="text-[#F7F9FC]/50 text-xs font-sans uppercase tracking-wider">
                        {spec.label}
                      </span>
                      <span className="text-[#F7F9FC] text-sm font-display font-semibold">
                        {spec.value}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Performance Highlights */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { value: "99.9%", label: "System Uptime", color: "#4FD1FF" },
                  { value: "30%", label: "Energy Savings", color: "#4CAF50" },
                  { value: "25%", label: "Water Savings", color: "#4FD1FF" },
                  { value: "40%", label: "Faster Processing", color: "#4CAF50" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="glass rounded-xl p-4 text-center"
                  >
                    <div
                      className="font-display font-bold text-2xl"
                      style={{ color: item.color }}
                    >
                      {item.value}
                    </div>
                    <div className="text-[#F7F9FC]/50 text-[10px] uppercase tracking-wider font-sans mt-1">
                      {item.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  );
}
