"use client";
import { motion } from "framer-motion";
import {
  UtensilsCrossed, Pill, Dumbbell, Droplets, Church, Trees, 
  Wifi, Car, Stethoscope, FlaskConical
} from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { RevealSection } from "@/components/ui/RevealSection";
import Image from "next/image";

const facilities = [
  { icon: UtensilsCrossed, name: "Cafeteria & Nutrition", desc: "Nutritionist-managed dietary services for patients and visitors.", color: "#4FD1FF" },
  { icon: Pill, name: "24/7 Pharmacy", desc: "Full-service dispensary with automated medication management.", color: "#4CAF50" },
  { icon: Dumbbell, name: "Rehabilitation Center", desc: "Physical and occupational therapy with modern equipment.", color: "#4FD1FF" },
  { icon: Droplets, name: "Blood Bank", desc: "Comprehensive blood banking with rare blood group inventory.", color: "#FF5A5A" },
  { icon: Church, name: "Prayer Room", desc: "Multi-faith meditation and prayer space for spiritual support.", color: "#4FD1FF" },
  { icon: Trees, name: "Rooftop Garden", desc: "Therapeutic green space promoting healing through nature.", color: "#4CAF50" },
  { icon: Wifi, name: "Smart Connectivity", desc: "High-speed Wi-Fi throughout the hospital for seamless care.", color: "#4FD1FF" },
  { icon: Car, name: "300-Car Parking", desc: "Dedicated patient, visitor, and emergency vehicle parking.", color: "#4FD1FF" },
  { icon: Stethoscope, name: "Executive Suites", desc: "Premium private rooms with hotel-grade amenities.", color: "#4CAF50" },
  { icon: FlaskConical, name: "Research Labs", desc: "Clinical research and genomics capabilities on-site.", color: "#4FD1FF" },
];

export function FacilitiesSection() {
  return (
    <section id="facilities" className="relative py-32 bg-[#091A2B] overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-30" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left image stack */}
          <RevealSection direction="left">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden border border-[#4FD1FF]/10">
                <div className="aspect-[3/4] relative">
                  <Image
                    src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=85"
                    alt="Hospital Facilities"
                    fill
                    className="object-cover"
                    style={{ filter: "brightness(0.6)" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#091A2B]/80 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="glass rounded-2xl p-4">
                      <div className="text-[#4FD1FF] text-xs uppercase tracking-widest font-sans mb-2">
                        Patient-First Design
                      </div>
                      <div className="text-[#F7F9FC] font-display font-bold text-lg leading-tight">
                        Every space designed for comfort, safety, and healing.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating amenity pills */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -right-6 top-16 glass-dark rounded-2xl p-4 border border-[#4FD1FF]/10"
              >
                <div className="text-[#4FD1FF] text-xs uppercase tracking-widest font-sans mb-2">
                  Area Distribution
                </div>
                {[
                  { label: "Clinical Depts", pct: 40, color: "#4FD1FF" },
                  { label: "Patient Rooms", pct: 25, color: "#4CAF50" },
                  { label: "Support", pct: 15, color: "#F7F9FC" },
                  { label: "Diagnostics", pct: 10, color: "#FF5A5A" },
                ].map((item, i) => (
                  <div key={i} className="mb-2">
                    <div className="flex justify-between text-[10px] font-sans mb-1">
                      <span className="text-[#F7F9FC]/60">{item.label}</span>
                      <span style={{ color: item.color }}>{item.pct}%</span>
                    </div>
                    <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 + 0.3, duration: 1 }}
                        className="h-full rounded-full"
                        style={{ background: item.color }}
                      />
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </RevealSection>

          {/* Right: Facilities Grid */}
          <div>
            <RevealSection className="mb-10">
              <SectionTitle
                eyebrow="Facilities & Amenities"
                title="Beyond Just a Hospital"
                subtitle="Comprehensive support services designed for patient comfort, family support, and operational excellence."
              />
            </RevealSection>

            <div className="grid grid-cols-2 gap-3">
              {facilities.map((fac, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="glass rounded-xl p-4 group cursor-none"
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300"
                    style={{ background: `${fac.color}15`, border: `1px solid ${fac.color}25` }}
                  >
                    <fac.icon className="w-4 h-4" style={{ color: fac.color }} />
                  </div>
                  <div className="font-display font-bold text-[#F7F9FC] text-xs uppercase tracking-wide mb-1">
                    {fac.name}
                  </div>
                  <div className="text-[#F7F9FC]/40 text-[10px] font-sans leading-relaxed line-clamp-2">
                    {fac.desc}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
