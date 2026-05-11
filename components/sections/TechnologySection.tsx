"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Brain, Wifi, Activity, Database, Monitor, Cpu } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GlassCard } from "@/components/ui/GlassCard";
import { RevealSection } from "@/components/ui/RevealSection";
import { useEffect, useState } from "react";

function LiveClock() {
  const [time, setTime] = useState<string | null>(null);
  useEffect(() => {
    const fmt = () =>
      new Date().toLocaleTimeString("en-US", {
        hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false,
      });
    setTime(fmt());
    const id = setInterval(() => setTime(fmt()), 1000);
    return () => clearInterval(id);
  }, []);
  // Render nothing until mounted (avoids SSR mismatch)
  if (!time) return <span className="text-[#4FD1FF] text-xs font-sans font-mono opacity-0">--:--:--</span>;
  return <span className="text-[#4FD1FF] text-xs font-sans font-mono">{time}</span>;
}

const techFeatures = [
  {
    icon: Brain,
    title: "AI-Powered Diagnostics",
    desc: "Deep learning models assist physicians with radiology reads and pathology detection with 97% accuracy.",
    stat: "97%",
    statLabel: "Accuracy",
    color: "#4FD1FF",
  },
  {
    icon: Wifi,
    title: "IoT Connected Devices",
    desc: "Over 2,000 smart devices continuously transmit patient vitals, equipment status, and environmental data.",
    stat: "2,000+",
    statLabel: "Devices",
    color: "#4CAF50",
  },
  {
    icon: Activity,
    title: "Real-Time Monitoring",
    desc: "Centralized command center monitors every patient, room, and system in real time.",
    stat: "24/7",
    statLabel: "Monitoring",
    color: "#4FD1FF",
  },
  {
    icon: Database,
    title: "Digital Health Records",
    desc: "Fully paperless EHR system with instant access, interoperability, and HIPAA compliance.",
    stat: "100%",
    statLabel: "Paperless",
    color: "#4CAF50",
  },
  {
    icon: Monitor,
    title: "Telemedicine Integration",
    desc: "Patients can consult specialists remotely, reducing wait times and improving access to care.",
    stat: "30%",
    statLabel: "Faster Care",
    color: "#4FD1FF",
  },
  {
    icon: Cpu,
    title: "Automated Workflows",
    desc: "Smart scheduling, automated supply chain, and predictive maintenance reduce operational friction.",
    stat: "60%",
    statLabel: "Efficiency",
    color: "#4CAF50",
  },
];

export function TechnologySection() {
  return (
    <section id="technology" className="relative py-32 bg-[#0B3C6D]/20 overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-40" />

      {/* Glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#4FD1FF]/5 blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6">
        <RevealSection className="mb-16">
          <SectionTitle
            eyebrow="Smart Technology"
            title="Powered by Intelligence"
            subtitle="Advanced AI and connected systems work invisibly to deliver smarter, faster, more precise care."
            centered
          />
        </RevealSection>

        {/* Dashboard preview */}
        <RevealSection className="mb-16">
          <div className="relative rounded-3xl overflow-hidden border border-[#4FD1FF]/10 max-w-4xl mx-auto">
            <div className="aspect-video relative">
              <Image
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=85"
                alt="Smart Hospital Command Center"
                fill
                className="object-cover"
                style={{ filter: "brightness(0.5) saturate(0.7) hue-rotate(15deg)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#091A2B] via-[#091A2B]/20 to-transparent" />

              {/* Overlay widgets */}
              <div className="absolute bottom-6 left-6 right-6 grid grid-cols-4 gap-3">
                {[
                  { label: "Active Patients", value: "342", up: true },
                  { label: "OT Active", value: "8/12", up: false },
                  { label: "ICU Occupancy", value: "74%", up: false },
                  { label: "Alerts", value: "2", up: false },
                ].map((w, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="glass rounded-xl p-3 text-center"
                  >
                    <div className="text-[#4FD1FF] font-display font-bold text-lg">{w.value}</div>
                    <div className="text-[#F7F9FC]/50 text-[9px] uppercase tracking-wider font-sans mt-0.5">
                      {w.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Top HUD */}
              <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
                <div className="glass rounded-xl px-4 py-2 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#4CAF50] animate-pulse" />
                  <span className="text-[#F7F9FC] text-xs font-sans uppercase tracking-widest">
                    Systems Online
                  </span>
                </div>
                <div className="glass rounded-xl px-4 py-2">
                  <LiveClock />
                </div>
              </div>
            </div>
          </div>
        </RevealSection>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {techFeatures.map((feat, i) => (
            <GlassCard key={i} delay={i * 0.07} className="group">
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: `${feat.color}15`, border: `1px solid ${feat.color}30` }}
                >
                  <feat.icon className="w-5 h-5" style={{ color: feat.color }} />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-[#F7F9FC] text-sm uppercase tracking-wider mb-2">
                    {feat.title}
                  </h3>
                  <p className="text-[#F7F9FC]/60 text-xs font-sans leading-relaxed">{feat.desc}</p>
                </div>
              </div>
              <div
                className="mt-4 pt-4 border-t flex items-center justify-between"
                style={{ borderColor: `${feat.color}15` }}
              >
                <span className="text-[#F7F9FC]/30 text-[10px] uppercase tracking-widest font-sans">
                  {feat.statLabel}
                </span>
                <span className="font-display font-bold text-lg" style={{ color: feat.color }}>
                  {feat.stat}
                </span>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
