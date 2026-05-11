"use client";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { RevealSection } from "@/components/ui/RevealSection";
import {
  FileText, Wifi, BarChart3, Workflow, Stethoscope, Video,
  MapPin, ShieldAlert
} from "lucide-react";

const ecosystemNodes = [
  { icon: FileText,    label: "EHR & Digital Records",       angle: 315, color: "#4FD1FF" },
  { icon: Wifi,        label: "IoT Enabled Devices",         angle: 0,   color: "#4CAF50" },
  { icon: BarChart3,   label: "AI & Data Analytics",         angle: 45,  color: "#4FD1FF" },
  { icon: Stethoscope, label: "Real-time Location Systems",  angle: 90,  color: "#4CAF50" },
  { icon: ShieldAlert, label: "Automated Workflows",         angle: 135, color: "#4FD1FF" },
  { icon: Video,       label: "Telemedicine Integration",    angle: 180, color: "#4CAF50" },
  { icon: MapPin,      label: "Smart Wayfinding",            angle: 225, color: "#4FD1FF" },
  { icon: Workflow,    label: "Central Dashboard",           angle: 270, color: "#4CAF50" },
];

const ORBIT_R = 160; // px radius for the orbit

function polarToXY(angleDeg: number, r: number) {
  const rad = (angleDeg - 90) * (Math.PI / 180);
  return { x: r * Math.cos(rad), y: r * Math.sin(rad) };
}

const capabilities = [
  { label: "Predictive Maintenance", value: "98%", sub: "Uptime" },
  { label: "Bed Management", value: "<2 min", sub: "Allocation" },
  { label: "Drug Dispensing", value: "Zero", sub: "Errors" },
  { label: "Patient Tracking", value: "Real-Time", sub: "Everywhere" },
];

export function SmartSystemsSection() {
  return (
    <section className="relative py-32 bg-[#091A2B] overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#4FD1FF]/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[300px] h-[300px] rounded-full bg-[#4CAF50]/5 blur-[80px] pointer-events-none" />
      <div className="absolute inset-0 dot-grid opacity-20" />

      <div className="max-w-7xl mx-auto px-6">
        <RevealSection className="mb-20">
          <SectionTitle
            eyebrow="Smart Hospital Ecosystem"
            title="Everything Connected. Always Intelligent."
            subtitle="Our integrated digital backbone synchronises every system — from admission to discharge — in real time."
            centered
          />
        </RevealSection>

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* ── Orbital Diagram ── */}
          <RevealSection direction="left">
            <div className="flex items-center justify-center">
              {/* wrapper gives the SVG a stable coordinate space */}
              <div className="relative w-[380px] h-[380px] flex-shrink-0">

                {/* Rotating dashed ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full"
                  style={{
                    border: "1px dashed rgba(79,209,255,0.15)",
                  }}
                />
                {/* Static second ring */}
                <div
                  className="absolute rounded-full"
                  style={{
                    inset: "20px",
                    border: "1px solid rgba(79,209,255,0.07)",
                  }}
                />

                {/* Centre core */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.06, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="glass rounded-full flex flex-col items-center justify-center text-center p-6"
                    style={{
                      width: 130, height: 130,
                      border: "1px solid rgba(79,209,255,0.3)",
                      boxShadow: "0 0 40px rgba(79,209,255,0.15)",
                    }}
                  >
                    <span className="text-[#4FD1FF] font-display font-black text-[11px] uppercase tracking-widest leading-tight">
                      Smart<br />Hospital<br />Ecosystem
                    </span>
                  </motion.div>
                </div>

                {/* Orbit nodes */}
                {ecosystemNodes.map((node, i) => {
                  const { x, y } = polarToXY(node.angle, ORBIT_R);
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.07, type: "spring", stiffness: 200 }}
                      whileHover={{ scale: 1.15 }}
                      className="absolute flex flex-col items-center gap-1 cursor-none group"
                      style={{
                        left: "50%",
                        top: "50%",
                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                        width: 68,
                      }}
                    >
                      {/* Connector line */}
                      <svg
                        className="absolute pointer-events-none"
                        style={{
                          left: "50%", top: "50%",
                          width: Math.abs(x) + 2, height: Math.abs(y) + 2,
                          transform: `translate(${x > 0 ? "-100%" : "0"}, ${y > 0 ? "-100%" : "0"})`,
                          overflow: "visible",
                          opacity: 0.18,
                        }}
                      >
                        <line
                          x1={x > 0 ? Math.abs(x) : 0}
                          y1={y > 0 ? Math.abs(y) : 0}
                          x2={x > 0 ? 0 : Math.abs(x)}
                          y2={y > 0 ? 0 : Math.abs(y)}
                          stroke={node.color}
                          strokeWidth="1"
                          strokeDasharray="4 3"
                        />
                      </svg>

                      {/* Icon bubble */}
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:shadow-lg"
                        style={{
                          background: `${node.color}18`,
                          border: `1px solid ${node.color}35`,
                        }}
                      >
                        <node.icon className="w-5 h-5" style={{ color: node.color }} />
                      </div>
                      <span className="text-[#F7F9FC]/55 text-[8px] font-sans text-center leading-tight uppercase tracking-wide">
                        {node.label}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </RevealSection>

          {/* ── Capabilities ── */}
          <div className="space-y-6">
            <RevealSection direction="right">
              <p className="text-[#F7F9FC]/60 text-base font-sans leading-relaxed">
                Eight integrated subsystems communicate over a private cloud backbone, eliminating
                data silos and enabling clinical staff to make faster, evidence-based decisions —
                from triage to discharge.
              </p>
            </RevealSection>

            <div className="grid grid-cols-2 gap-4">
              {capabilities.map((cap, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -3, scale: 1.02 }}
                  className="glass rounded-2xl p-5 text-center group cursor-none"
                >
                  <div className="font-display font-black text-2xl text-[#4FD1FF] group-hover:scale-110 transition-transform duration-300">
                    {cap.value}
                  </div>
                  <div className="text-[#F7F9FC] text-xs font-display font-semibold uppercase tracking-wider mt-1">
                    {cap.label}
                  </div>
                  <div className="text-[#F7F9FC]/35 text-[10px] font-sans mt-0.5">{cap.sub}</div>
                </motion.div>
              ))}
            </div>

            <RevealSection direction="right" delay={0.3}>
              <div className="glass rounded-2xl p-5 space-y-3">
                <div className="text-[#4FD1FF] text-[10px] uppercase tracking-widest font-sans">
                  Live System Status
                </div>
                {[
                  { label: "EHR Server Uptime",       pct: 99, color: "#4CAF50" },
                  { label: "IoT Device Connectivity",  pct: 96, color: "#4FD1FF" },
                  { label: "AI Inference Accuracy",    pct: 97, color: "#4FD1FF" },
                  { label: "Network Redundancy",       pct: 100, color: "#4CAF50" },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-[10px] font-sans mb-1">
                      <span className="text-[#F7F9FC]/50">{item.label}</span>
                      <span style={{ color: item.color }} className="font-semibold">{item.pct}%</span>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 + 0.2, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="h-full rounded-full"
                        style={{ background: item.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </RevealSection>
          </div>
        </div>
      </div>
    </section>
  );
}
