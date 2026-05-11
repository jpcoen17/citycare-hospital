"use client";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { RevealSection } from "@/components/ui/RevealSection";
import { useState } from "react";

const floors = [
  {
    id: "basement",
    label: "Basement",
    departments: ["Parking (300 Cars)", "Support Services", "Storage", "MEP Systems"],
    color: "#4FD1FF",
  },
  {
    id: "ground",
    label: "Ground Floor",
    departments: ["OPD / Outpatient", "Diagnostic Center", "Pharmacy", "Emergency", "Reception & Admin"],
    color: "#4FD1FF",
  },
  {
    id: "1-4",
    label: "Floors 1–4",
    departments: ["Patient Rooms (260 Beds)", "ICU / HDU (60 Beds)", "Nursing Stations", "Conference Rooms"],
    color: "#4CAF50",
  },
  {
    id: "5-6",
    label: "Floors 5–6",
    departments: ["Operation Theatres (12 OT)", "Laminar Flow Suites", "Recovery Rooms", "Central Sterile Supply"],
    color: "#4FD1FF",
  },
  {
    id: "7",
    label: "Floor 7 (Top)",
    departments: ["Executive Suites", "Administration", "Staff Facilities", "Rooftop Solar Array"],
    color: "#4CAF50",
  },
  {
    id: "roof",
    label: "Rooftop",
    departments: ["Helipad", "Solar Panels", "Rainwater Harvesting", "Green Garden"],
    color: "#FFD700",
  },
];

export function FloorPlanSection() {
  const [activeFloor, setActiveFloor] = useState("ground");

  const active = floors.find((f) => f.id === activeFloor);

  return (
    <section className="relative py-32 bg-[#0B3C6D]/10 overflow-hidden">
      {/* Blueprint grid overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(79, 209, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(79, 209, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <RevealSection className="mb-16">
          <SectionTitle
            eyebrow="Floor Plan Overview"
            title="Architectural Intelligence"
            subtitle="Every floor purpose-built for workflow efficiency, patient safety, and operational excellence."
            centered
          />
        </RevealSection>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Building cross section viz */}
          <RevealSection direction="left">
            <div className="relative bg-[#091A2B]/80 border border-[#4FD1FF]/10 rounded-3xl p-8">
              <div className="text-[#4FD1FF] text-[10px] uppercase tracking-widest font-sans mb-6">
                Section View — City Care Hospital
              </div>

              {/* Building floors visual */}
              <div className="space-y-2">
                {[...floors].reverse().map((floor, i) => (
                  <motion.button
                    key={floor.id}
                    onClick={() => setActiveFloor(floor.id)}
                    whileHover={{ x: 4 }}
                    className={`w-full text-left rounded-xl border transition-all duration-300 cursor-none ${
                      activeFloor === floor.id
                        ? "border-[#4FD1FF]/40 bg-[#4FD1FF]/10"
                        : "border-white/5 bg-white/3 hover:border-white/10"
                    }`}
                    style={{ padding: "12px 16px" }}
                  >
                    <div className="flex items-center gap-4">
                      {/* Floor indicator bar */}
                      <div
                        className="w-1.5 rounded-full"
                        style={{
                          height: "36px",
                          background: activeFloor === floor.id ? floor.color : `${floor.color}30`,
                        }}
                      />
                      <div className="flex-1">
                        <div
                          className="font-display font-bold text-xs uppercase tracking-wider"
                          style={{ color: activeFloor === floor.id ? floor.color : "#F7F9FC80" }}
                        >
                          {floor.label}
                        </div>
                        <div className="text-[#F7F9FC]/40 text-[10px] font-sans mt-0.5">
                          {floor.departments[0]}
                          {floor.departments.length > 1 && ` +${floor.departments.length - 1} more`}
                        </div>
                      </div>
                      {activeFloor === floor.id && (
                        <div
                          className="w-2 h-2 rounded-full animate-pulse"
                          style={{ background: floor.color }}
                        />
                      )}
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Compass */}
              <div className="absolute top-6 right-6 glass rounded-full w-10 h-10 flex items-center justify-center">
                <span className="text-[#4FD1FF] text-xs font-display font-bold">N</span>
              </div>
            </div>
          </RevealSection>

          {/* Floor detail */}
          <RevealSection direction="right">
            <div className="sticky top-24">
              {active && (
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className="glass rounded-3xl p-8 border"
                  style={{ borderColor: `${active.color}20` }}
                >
                  <div
                    className="text-[10px] uppercase tracking-widest font-sans mb-2"
                    style={{ color: active.color }}
                  >
                    Selected Floor
                  </div>
                  <h3
                    className="font-display font-black text-3xl uppercase tracking-tight mb-6"
                    style={{ color: active.color }}
                  >
                    {active.label}
                  </h3>

                  <div className="space-y-3 mb-8">
                    {active.departments.map((dept, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.07 }}
                        className="flex items-center gap-3 p-3 rounded-xl"
                        style={{ background: `${active.color}08` }}
                      >
                        <div
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: active.color }}
                        />
                        <span className="text-[#F7F9FC]/80 text-sm font-sans">{dept}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Dimension chip */}
                  <div className="flex items-center gap-2 text-[10px] font-sans text-[#F7F9FC]/30 uppercase tracking-widest">
                    <div className="w-8 h-[1px]" style={{ background: `${active.color}40` }} />
                    Approximately {Math.round(125000 / floors.length).toLocaleString("en-US")} sq ft per floor
                  </div>
                </motion.div>
              )}
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  );
}