"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Heart, Activity, Eye, Users, Clock, ShieldCheck } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { RevealSection } from "@/components/ui/RevealSection";

const icuFeatures = [
  { icon: Heart,      label: "60 ICU Beds",          desc: "Fully equipped beds with advanced ventilators and monitoring." },
  { icon: Activity,   label: "Central Monitoring",   desc: "Nurse station with live feeds for every patient in the unit." },
  { icon: Eye,        label: "24/7 Intensivist",     desc: "Board-certified critical care specialists on-site round the clock." },
  { icon: Users,      label: "Isolation Units",      desc: "Negative-pressure rooms for infectious disease management." },
  { icon: Clock,      label: "Rapid Response Team",  desc: "Code Blue team on-floor with defibrillator < 90 seconds." },
  { icon: ShieldCheck, label: "Zero-infection Goal",  desc: "CAUTI / VAP / CLABSI prevention protocols exceed national benchmarks." },
];

export function ICUSection() {
  return (
    <section className="relative py-32 bg-[#091A2B] overflow-hidden">
      {/* Subtle blue glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#0B3C6D]/40 blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 dot-grid opacity-20" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — content */}
          <div>
            <RevealSection>
              <SectionTitle
                eyebrow="ICU & Critical Care"
                title="When Every Heartbeat Matters."
                subtitle="Our Critical Care Unit is purpose-built to keep the most vulnerable patients safe, monitored, and on the road to recovery."
              />
            </RevealSection>

            <div className="mt-10 grid grid-cols-1 gap-3">
              {icuFeatures.map((feat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ x: 5 }}
                  className="glass rounded-xl p-4 flex items-start gap-4 group cursor-none"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#4FD1FF]/10 border border-[#4FD1FF]/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <feat.icon className="w-4 h-4 text-[#4FD1FF]" />
                  </div>
                  <div>
                    <div className="text-[#F7F9FC] font-display font-bold text-xs uppercase tracking-wider mb-0.5">
                      {feat.label}
                    </div>
                    <div className="text-[#F7F9FC]/50 text-[11px] font-sans leading-relaxed">
                      {feat.desc}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right — image + widget */}
          <RevealSection direction="right">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden border border-[#4FD1FF]/10 cyan-glow">
                <div className="aspect-[3/4] relative">
                  <Image
                    src="https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=800&q=85"
                    alt="ICU Critical Care"
                    fill
                    className="object-cover"
                    style={{ filter: "brightness(0.45) saturate(0.7) hue-rotate(5deg)" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#091A2B] via-transparent to-transparent" />

                  {/* Vitals overlay widget */}
                  <div className="absolute top-5 left-5 right-5">
                    <motion.div
                      className="glass-dark rounded-2xl p-4 border border-[#4FD1FF]/20"
                      animate={{ borderColor: ["rgba(79,209,255,0.2)", "rgba(79,209,255,0.5)", "rgba(79,209,255,0.2)"] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <div className="text-[#4FD1FF] text-[9px] uppercase tracking-widest font-sans mb-3">
                        Patient Monitor — Bed 14
                      </div>
                      <div className="grid grid-cols-4 gap-2">
                        {[
                          { label: "HR", value: "72", unit: "bpm",  color: "#FF5A5A" },
                          { label: "SpO2", value: "98", unit: "%",   color: "#4FD1FF" },
                          { label: "BP", value: "120/80", unit: "mmHg", color: "#4CAF50" },
                          { label: "Temp", value: "37.1", unit: "°C",  color: "#FFD700" },
                        ].map((v, j) => (
                          <div key={j} className="text-center">
                            <div className="font-display font-bold text-sm leading-none" style={{ color: v.color }}>
                              {v.value}
                            </div>
                            <div className="text-[8px] font-sans text-white/30 mt-0.5">{v.unit}</div>
                            <div className="text-[8px] font-sans text-white/25">{v.label}</div>
                          </div>
                        ))}
                      </div>
                      {/* Fake ECG line */}
                      <svg className="w-full mt-3" height="28" viewBox="0 0 300 28">
                        <motion.polyline
                          points="0,14 30,14 40,2 50,26 60,14 90,14 100,2 110,26 120,14 150,14 160,2 170,26 180,14 300,14"
                          fill="none"
                          stroke="#FF5A5A"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: 1 }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        />
                      </svg>
                    </motion.div>
                  </div>

                  {/* Bottom stats */}
                  <div className="absolute bottom-0 left-0 right-0 grid grid-cols-3 divide-x divide-white/10">
                    {[
                      { v: "60", l: "Total ICU Beds" },
                      { v: "26", l: "Available Now" },
                      { v: "34", l: "Occupied" },
                    ].map((s, i) => (
                      <div key={i} className="glass-dark p-4 text-center">
                        <div className="text-[#4FD1FF] font-display font-bold text-xl">{s.v}</div>
                        <div className="text-[#F7F9FC]/40 text-[9px] uppercase tracking-wider font-sans mt-1">{s.l}</div>
                      </div>
                    ))}
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
