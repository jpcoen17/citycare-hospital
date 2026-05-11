"use client";
import { motion } from "framer-motion";
import { Trophy, Star, CheckCircle2, TrendingUp, Globe, Award } from "lucide-react";
import { RevealSection } from "@/components/ui/RevealSection";

const facts = [
  {
    icon: Globe,
    number: "01",
    title: "Future-Expansion Ready",
    desc: "Designed to scale up to 500 beds with pre-planned structural extensions and MEP stub-outs.",
  },
  {
    icon: TrendingUp,
    number: "02",
    title: "30% Faster Response",
    desc: "Integrated smart systems reduce emergency response time by 30% versus conventional hospitals.",
  },
  {
    icon: CheckCircle2,
    number: "03",
    title: "40% Greener Building",
    desc: "Green building design reduces energy use by 30–40% compared to standard healthcare construction.",
  },
  {
    icon: Star,
    number: "04",
    title: "Highest Infection Safety",
    desc: "Advanced infection control systems — HEPA air, antimicrobial surfaces, touchless fixtures throughout.",
  },
  {
    icon: Trophy,
    number: "05",
    title: "Patient-Centric Design",
    desc: "Clinically proven patient-centric layout improves comfort scores and accelerates recovery metrics.",
  },
];

const awards = [
  "IGBC Gold Certified",
  "NABH Accredited",
  "ISO 9001:2015",
  "JCI Standards Compliant",
  "Green Building 4-Star",
];

export function FactsSection() {
  return (
    <section className="relative py-28 bg-[#0B3C6D]/20 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4FD1FF]/25 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">

        {/* Award pills */}
        <RevealSection className="mb-16">
          <div className="flex flex-wrap justify-center gap-3">
            {awards.map((award, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex items-center gap-2 glass rounded-full px-5 py-2.5"
              >
                <Award className="w-3.5 h-3.5 text-[#4FD1FF]" />
                <span className="text-[#F7F9FC]/75 text-xs font-sans uppercase tracking-widest">
                  {award}
                </span>
              </motion.div>
            ))}
          </div>
        </RevealSection>

        {/* Heading */}
        <RevealSection className="mb-14 text-center">
          <div className="text-[#4FD1FF] text-xs uppercase tracking-[0.3em] font-sans mb-3">
            Top 5 Incredible Facts
          </div>
          <h2
            className="font-display font-black text-[#F7F9FC] uppercase leading-[0.92]"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", letterSpacing: "-0.02em" }}
          >
            A Hospital That Cares Today<br />
            <span className="gradient-text">And Builds a Healthier Tomorrow.</span>
          </h2>
        </RevealSection>

        {/* Facts grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {facts.map((fact, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass rounded-2xl p-7 group cursor-none relative overflow-hidden"
            >
              {/* Number watermark */}
              <div
                className="absolute top-4 right-5 font-display font-black text-6xl leading-none pointer-events-none select-none"
                style={{ color: "rgba(79,209,255,0.06)" }}
              >
                {fact.number}
              </div>

              <div className="w-12 h-12 rounded-xl bg-[#4FD1FF]/10 border border-[#4FD1FF]/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <fact.icon className="w-6 h-6 text-[#4FD1FF]" />
              </div>
              <h3 className="font-display font-bold text-[#F7F9FC] text-sm uppercase tracking-wider mb-3">
                {fact.title}
              </h3>
              <p className="text-[#F7F9FC]/55 text-xs font-sans leading-relaxed">{fact.desc}</p>
            </motion.div>
          ))}

          {/* Last card — CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="animated-border rounded-2xl p-7 flex flex-col items-start justify-between cursor-none"
            style={{ background: "rgba(11,60,109,0.3)" }}
          >
            <div>
              <div className="text-[#4FD1FF] text-[10px] uppercase tracking-widest font-sans mb-3">
                High Return on Investment
              </div>
              <h3 className="font-display font-black text-[#F7F9FC] text-2xl leading-tight mb-3">
                Built for Sustainability. Designed for Profit.
              </h3>
              <p className="text-[#F7F9FC]/50 text-xs font-sans leading-relaxed">
                Lower operating costs, better patient outcomes, and a future-proof structure
                make City Care a benchmark for modern hospital investment.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {["High ROI", "Low OpEx", "Future-Proof"].map((tag, i) => (
                <span
                  key={i}
                  className="text-[10px] font-sans uppercase tracking-widest px-3 py-1.5 rounded-full"
                  style={{ background: "rgba(79,209,255,0.12)", color: "#4FD1FF", border: "1px solid rgba(79,209,255,0.25)" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
