"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { AlertCircle, Clock, Ambulance, HeartPulse, Radio, ShieldCheck } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { RevealSection } from "@/components/ui/RevealSection";
import { GlassCard } from "@/components/ui/GlassCard";
import { PremiumButton } from "@/components/ui/PremiumButton";

const timeline = [
  { time: "0 min", event: "Emergency Call Received", icon: Radio, detail: "24/7 dispatch center activated" },
  { time: "< 2 min", event: "Ambulance Dispatched", icon: Ambulance, detail: "GPS-tracked rapid response" },
  { time: "< 8 min", event: "On-Scene Arrival", icon: HeartPulse, detail: "Paramedic assessment begins" },
  { time: "< 15 min", event: "Hospital Transfer", icon: AlertCircle, detail: "Pre-alert sent to ER team" },
  { time: "< 20 min", event: "Specialist Engaged", icon: ShieldCheck, detail: "Immediate specialist consultation" },
];

export function EmergencySection() {
  return (
    <section id="emergency" className="relative py-32 bg-[#091A2B] overflow-hidden">
      {/* Emergency glow background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#FF5A5A]/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#FF5A5A]/30 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#FF5A5A]/5 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <RevealSection>
              <SectionTitle
                eyebrow="Emergency & Trauma Care"
                title="Every Second Counts."
                subtitle="Our dedicated trauma center operates 24/7 with the fastest response protocols in the region. Fully equipped, always ready."
              />
            </RevealSection>

            <RevealSection delay={0.2} className="mt-12">
              <div className="space-y-3">
                {timeline.map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="flex-shrink-0 flex flex-col items-center">
                      <div className="w-10 h-10 rounded-xl bg-[#FF5A5A]/15 border border-[#FF5A5A]/30 flex items-center justify-center group-hover:bg-[#FF5A5A]/25 transition-all duration-300">
                        <step.icon className="w-4 h-4 text-[#FF5A5A]" />
                      </div>
                      {i < timeline.length - 1 && (
                        <div className="w-[1px] h-6 bg-gradient-to-b from-[#FF5A5A]/30 to-transparent mt-1" />
                      )}
                    </div>
                    <div className="pb-4">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-[#FF5A5A] font-display font-bold text-xs uppercase tracking-widest">
                          {step.time}
                        </span>
                        <span className="text-[#F7F9FC] font-sans text-sm">{step.event}</span>
                      </div>
                      <span className="text-[#F7F9FC]/40 text-xs font-sans">{step.detail}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </RevealSection>

            <RevealSection delay={0.4} className="mt-8 flex gap-4">
              <PremiumButton variant="emergency" href="tel:108">
                Call Emergency: 108
              </PremiumButton>
              <PremiumButton variant="outline" href="#contact">
                Learn More
              </PremiumButton>
            </RevealSection>
          </div>

          {/* Right: Image */}
          <RevealSection direction="right">
            <div className="relative">
              {/* Main image */}
              <div className="relative rounded-3xl overflow-hidden emergency-glow">
                <div className="aspect-[3/4] relative">
                  <Image
                    src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=85"
                    alt="Emergency Room"
                    fill
                    className="object-cover"
                    style={{ filter: "brightness(0.6) saturate(0.8)" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#091A2B] via-transparent to-transparent" />

                  {/* Emergency badge */}
                  <div className="absolute top-6 left-6">
                    <motion.div
                      animate={{
                        boxShadow: [
                          "0 0 20px rgba(255,90,90,0.4)",
                          "0 0 50px rgba(255,90,90,0.8)",
                          "0 0 20px rgba(255,90,90,0.4)",
                        ],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="bg-[#FF5A5A] text-white font-display font-black text-sm uppercase tracking-widest px-5 py-2.5 rounded-full"
                    >
                      Emergency 24/7
                    </motion.div>
                  </div>

                  {/* Stats overlay */}
                  <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-3">
                    {[
                      { v: "50", l: "Emergency Capacity" },
                      { v: "<8min", l: "Response Time" },
                    ].map((s, i) => (
                      <div key={i} className="glass-dark rounded-xl p-3 text-center border border-[#FF5A5A]/20">
                        <div className="text-[#FF5A5A] font-display font-bold text-xl">{s.v}</div>
                        <div className="text-[#F7F9FC]/50 text-[9px] uppercase tracking-wider font-sans mt-0.5">
                          {s.l}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-6 top-1/3 glass-dark rounded-2xl p-4 border border-[#FF5A5A]/20 w-44"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-[#FF5A5A] animate-pulse" />
                  <span className="text-[#FF5A5A] text-[10px] uppercase tracking-widest font-sans">
                    Live Status
                  </span>
                </div>
                <div className="space-y-2">
                  {["Trauma Bay: Ready", "OT: Available", "ICU: 26 open"].map((item, i) => (
                    <div key={i} className="text-[#F7F9FC]/60 text-[10px] font-sans flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-[#4CAF50]" />
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  );
}
