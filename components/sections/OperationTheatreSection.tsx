"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Wind, Zap, Camera, Bot, Layers, Thermometer } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { RevealSection } from "@/components/ui/RevealSection";
import { GlassCard } from "@/components/ui/GlassCard";

const otFeatures = [
  { icon: Wind,        label: "Laminar Air Flow",      desc: "Ultra-clean HEPA-filtered air circulation in every OT." },
  { icon: Camera,      label: "Integrated Imaging",    desc: "Intraoperative CT/MRI and fluoroscopy capabilities." },
  { icon: Bot,         label: "Robotic Surgery",        desc: "Da Vinci–class robotic arms for precision minimally invasive surgery." },
  { icon: Layers,      label: "Central Sterile Supply", desc: "Adjacent CSS unit with flash sterilisation for sub-30 min turnaround." },
  { icon: Thermometer, label: "Climate Control",        desc: "Independently zoned temp & humidity control per theatre." },
  { icon: Zap,         label: "UPS Backup",             desc: "Uninterruptible power for all 12 OTs — zero downtime." },
];

const otStats = [
  { value: "12",     label: "Modular OTs" },
  { value: "30 min", label: "Avg Turnaround" },
  { value: "100%",   label: "Robotic Ready" },
  { value: "24/7",   label: "OT Availability" },
];

export function OperationTheatreSection() {
  return (
    <section className="relative py-32 bg-[#0B3C6D]/15 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-25" />
      {/* top / bottom rule lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4FD1FF]/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4FD1FF]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <RevealSection className="mb-16">
          <SectionTitle
            eyebrow="Operation Theatres"
            title="12 Theatres. Zero Compromises."
            subtitle="State-of-the-art modular OTs with laminar airflow, robotic integration, and sub-30-minute turnaround times."
          />
        </RevealSection>

        <div className="grid lg:grid-cols-2 gap-14 items-center mb-20">

          {/* Image showcase */}
          <RevealSection direction="left">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden border border-[#4FD1FF]/10">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=900&q=85"
                    alt="Operation Theatre"
                    fill
                    className="object-cover"
                    style={{ filter: "brightness(0.55) saturate(0.75)" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#091A2B]/80 via-transparent to-transparent" />

                  {/* Live badge */}
                  <div className="absolute top-5 left-5 glass-dark rounded-xl px-4 py-2 flex items-center gap-2 border border-[#4FD1FF]/20">
                    <span className="w-2 h-2 rounded-full bg-[#4CAF50] animate-pulse" />
                    <span className="text-[#F7F9FC] text-[10px] uppercase tracking-widest font-sans">
                      OT 4 — In Progress
                    </span>
                  </div>

                  {/* Stat strip */}
                  <div className="absolute bottom-0 left-0 right-0 grid grid-cols-4 divide-x divide-white/10">
                    {otStats.map((s, i) => (
                      <div key={i} className="glass-dark p-4 text-center">
                        <div className="text-[#4FD1FF] font-display font-bold text-lg leading-none">
                          {s.value}
                        </div>
                        <div className="text-[#F7F9FC]/40 text-[9px] uppercase tracking-wider font-sans mt-1">
                          {s.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating robotic chip */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-5 top-12 glass-dark rounded-2xl p-4 border border-[#4FD1FF]/15 w-48"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Bot className="w-4 h-4 text-[#4FD1FF]" />
                  <span className="text-[#4FD1FF] text-[10px] uppercase tracking-widest font-sans">
                    Robotic Arm Status
                  </span>
                </div>
                {["System: Calibrated", "Precision: ±0.1 mm", "Mode: Standby"].map((line, i) => (
                  <div key={i} className="text-[#F7F9FC]/55 text-[10px] font-sans mb-1 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#4CAF50]" />
                    {line}
                  </div>
                ))}
              </motion.div>
            </div>
          </RevealSection>

          {/* Feature cards */}
          <RevealSection direction="right">
            <div className="grid grid-cols-1 gap-4">
              {otFeatures.map((feat, i) => (
                <GlassCard key={i} delay={i * 0.07} hover className="group">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-[#4FD1FF]/10 border border-[#4FD1FF]/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <feat.icon className="w-5 h-5 text-[#4FD1FF]" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-[#F7F9FC] text-xs uppercase tracking-wider mb-1">
                        {feat.label}
                      </h4>
                      <p className="text-[#F7F9FC]/50 text-xs font-sans leading-relaxed">{feat.desc}</p>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </RevealSection>
        </div>

        {/* Second image — sterile supply  */}
        <RevealSection>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                img: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80",
                caption: "Central Sterile Supply Unit",
              },
              {
                img: "https://images.unsplash.com/photo-1576671081837-49000212a370?w=600&q=80",
                caption: "Recovery & Post-Op Suite",
              },
              {
                img: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&q=80",
                caption: "Cardiac Catheterisation Lab",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="group rounded-2xl overflow-hidden relative border border-white/5 hover:border-[#4FD1FF]/20 transition-all duration-500 cursor-none"
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src={item.img}
                    alt={item.caption}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-108"
                    style={{ filter: "brightness(0.5) saturate(0.7)" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#091A2B]/80 to-transparent" />
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-[#F7F9FC]/80 text-xs font-display font-semibold uppercase tracking-wider">
                    {item.caption}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
