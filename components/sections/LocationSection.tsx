"use client";
import { motion } from "framer-motion";
import { MapPin, TrendingUp, Users, Building2, Truck, Landmark } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { RevealSection } from "@/components/ui/RevealSection";

const idealLocations = [
  { icon: Building2, label: "Urban Areas",           desc: "High-density catchment for maximum accessibility." },
  { icon: Users,     label: "High-Population Zones", desc: "Serves large residential and commercial corridors." },
  { icon: Truck,     label: "Near Highways",          desc: "Fast ambulance routing with minimal traffic friction." },
  { icon: Landmark,  label: "Medical Hubs",           desc: "Synergistic proximity to pharma and research centres." },
];

const advantages = [
  { label: "High Operational Efficiency",  color: "#4CAF50" },
  { label: "Better Patient Outcomes",      color: "#4FD1FF" },
  { label: "Lower Operating Costs",        color: "#4CAF50" },
  { label: "Sustainable & Future-Ready",   color: "#4FD1FF" },
  { label: "High Return on Investment",    color: "#4CAF50" },
];

export function LocationSection() {
  return (
    <section className="relative py-28 bg-[#091A2B] overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-20" />
      <div className="absolute bottom-0 left-1/3 w-[400px] h-[300px] rounded-full bg-[#4CAF50]/6 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            <RevealSection>
              <SectionTitle
                eyebrow="Ideal Locations & Advantages"
                title="Strategically Placed. Operationally Superior."
                subtitle="City Care is designed to thrive in high-density, high-need urban environments — delivering maximum impact where it matters most."
              />
            </RevealSection>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {idealLocations.map((loc, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -3 }}
                  className="glass rounded-2xl p-5 group cursor-none"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#4FD1FF]/10 border border-[#4FD1FF]/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                    <loc.icon className="w-5 h-5 text-[#4FD1FF]" />
                  </div>
                  <div className="font-display font-bold text-[#F7F9FC] text-xs uppercase tracking-wide mb-1">
                    {loc.label}
                  </div>
                  <div className="text-[#F7F9FC]/45 text-[10px] font-sans leading-relaxed">{loc.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right — advantages checklist + cost breakdown */}
          <RevealSection direction="right">
            <div className="space-y-5">
              {/* Advantages */}
              <div className="glass rounded-2xl p-6">
                <div className="text-[#4FD1FF] text-[10px] uppercase tracking-widest font-sans mb-5">
                  Key Advantages
                </div>
                <div className="space-y-3">
                  {advantages.map((adv, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.07 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-5 h-5 rounded-full bg-[#4CAF50]/15 border border-[#4CAF50]/35 flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-[#4CAF50]" />
                      </div>
                      <span className="text-[#F7F9FC]/75 text-sm font-sans">{adv.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Cost estimation */}
              <div className="glass rounded-2xl p-6">
                <div className="text-[#4FD1FF] text-[10px] uppercase tracking-widest font-sans mb-4">
                  Cost Estimation (Indicative)
                </div>
                {[
                  { component: "Civil & Structure",    cost: "₹ 220 Cr" },
                  { component: "MEP Services",          cost: "₹ 110 Cr" },
                  { component: "Interior & Finishes",   cost: "₹ 80 Cr" },
                  { component: "Medical Equipment",     cost: "₹ 90 Cr" },
                  { component: "IT & Security Systems", cost: "₹ 25 Cr" },
                  { component: "External Works",        cost: "₹ 25 Cr" },
                ].map((row, i) => (
                  <div key={i} className="flex justify-between items-center py-2 border-b border-white/5 last:border-0">
                    <span className="text-[#F7F9FC]/50 text-xs font-sans">{row.component}</span>
                    <span className="text-[#F7F9FC] text-xs font-display font-bold">{row.cost}</span>
                  </div>
                ))}
                <div className="flex justify-between items-center pt-4 mt-2">
                  <span className="text-[#4FD1FF] text-xs font-display font-bold uppercase tracking-wider">
                    Total (Approx.)
                  </span>
                  <span className="text-[#4FD1FF] font-display font-black text-lg">₹ 550 Cr</span>
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  );
}
