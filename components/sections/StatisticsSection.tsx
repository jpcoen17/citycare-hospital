"use client";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { RevealSection } from "@/components/ui/RevealSection";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const stats = [
  { value: 350, suffix: "", label: "Bed Capacity", color: "#4FD1FF", size: "col-span-1" },
  { value: 60, suffix: "", label: "ICU Beds", color: "#4CAF50", size: "col-span-1" },
  { value: 12, suffix: "", label: "Operation Theatres", color: "#4FD1FF", size: "col-span-1" },
  { value: 50, suffix: "", label: "Emergency Capacity", color: "#FF5A5A", size: "col-span-1" },
  { value: 300, suffix: "", label: "Parking Spaces", color: "#4FD1FF", size: "col-span-1" },
  { value: 125000, suffix: " sq ft", label: "Built-up Area", color: "#4CAF50", size: "col-span-2 md:col-span-1" },
  { value: 99, suffix: ".9%", label: "System Uptime", color: "#4FD1FF", size: "col-span-1" },
  { value: 550, prefix: "₹", suffix: " Cr", label: "Total Investment", color: "#4CAF50", size: "col-span-1" },
];

const kpis = [
  { label: "Clinical Departments", value: 40, color: "#4FD1FF" },
  { label: "Patient Rooms", value: 25, color: "#4CAF50" },
  { label: "Support Services", value: 15, color: "#F7F9FC" },
  { label: "Diagnostics & Labs", value: 10, color: "#FF5A5A" },
  { label: "Administration", value: 5, color: "#4FD1FF" },
  { label: "Others", value: 5, color: "#4CAF50" },
];

export function StatisticsSection() {
  return (
    <section className="relative py-32 bg-[#091A2B] overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#4FD1FF]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <RevealSection className="mb-16">
          <SectionTitle
            eyebrow="By the Numbers"
            title="Hospital KPI Dashboard"
            subtitle="Key performance indicators that reflect our commitment to world-class healthcare delivery."
            centered
          />
        </RevealSection>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              whileHover={{ scale: 1.03, y: -2 }}
              className={`glass rounded-2xl p-6 cyan-glow text-center group ${stat.size}`}
            >
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                prefix={stat.prefix}
                label={stat.label}
                valueClassName="text-3xl md:text-4xl group-hover:scale-110 transition-transform duration-300"
                color={stat.color}
              />
            </motion.div>
          ))}
        </div>

        {/* Area distribution */}
        <RevealSection>
          <div className="glass rounded-3xl p-8">
            <div className="text-[#4FD1FF] text-xs uppercase tracking-widest font-sans mb-8 text-center">
              Hospital Space Distribution
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Bar chart */}
              <div className="space-y-4">
                {kpis.map((kpi, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-xs font-sans mb-1.5">
                      <span className="text-[#F7F9FC]/60 uppercase tracking-wider">{kpi.label}</span>
                      <span className="font-display font-bold" style={{ color: kpi.color }}>
                        {kpi.value}%
                      </span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${kpi.value}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="h-full rounded-full"
                        style={{ background: kpi.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Construction timeline */}
              <div>
                <div className="text-[#4FD1FF] text-xs uppercase tracking-widest font-sans mb-4">
                  Construction Timeline
                </div>
                <div className="relative">
                  <div className="absolute left-4 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#4FD1FF]/50 to-transparent" />
                  {[
                    { phase: "Planning & Design", duration: "3 Months" },
                    { phase: "Approvals & Permits", duration: "2 Months" },
                    { phase: "Foundation & Structure", duration: "8 Months" },
                    { phase: "MEP & Interior", duration: "10 Months" },
                    { phase: "Testing & Commissioning", duration: "2 Months" },
                    { phase: "Project Completion", duration: "25 Months" },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="flex items-center gap-4 mb-3 pl-8 relative"
                    >
                      <div className="absolute left-[13px] w-2 h-2 rounded-full bg-[#4FD1FF] border-2 border-[#091A2B]" />
                      <div className="flex-1 flex justify-between items-center">
                        <span className="text-[#F7F9FC]/70 text-xs font-sans">{item.phase}</span>
                        <span className="text-[#4FD1FF] text-xs font-display font-bold">
                          {item.duration}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
