"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { RevealSection } from "@/components/ui/RevealSection";
import { ArrowRight } from "lucide-react";

const departments = [
  {
    name: "Cardiology",
    desc: "Advanced cardiac care with catheterization labs and electrophysiology suite.",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&q=80",
    stats: "500+ Procedures/Year",
    color: "#FF5A5A",
  },
  {
    name: "Neurology",
    desc: "Comprehensive brain and spine care with 3T MRI and neuro-navigation systems.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80",
    stats: "3T MRI Suite",
    color: "#4FD1FF",
  },
  {
    name: "Oncology",
    desc: "Multidisciplinary cancer care with immunotherapy, radiation, and surgical oncology.",
    image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600&q=80",
    stats: "Tumor Board Weekly",
    color: "#4CAF50",
  },
  {
    name: "Orthopedics",
    desc: "Joint replacement, sports medicine, and spine surgery with robotic assistance.",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&q=80",
    stats: "Robotic Assistance",
    color: "#4FD1FF",
  },
  {
    name: "Pediatrics",
    desc: "Child-friendly environment with dedicated NICU and pediatric ICU.",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=600&q=80",
    stats: "20-Bed NICU",
    color: "#4CAF50",
  },
  {
    name: "Advanced Diagnostics",
    desc: "3 Tesla MRI, 128-slice CT, Digital X-Ray, Ultrasound 4D, Molecular Diagnostics.",
    image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=600&q=80",
    stats: "3 Tesla MRI",
    color: "#4FD1FF",
  },
];

export function DepartmentsSection() {
  return (
    <section id="departments" className="relative py-32 bg-[#0B3C6D]/10 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="max-w-7xl mx-auto px-6">
        <RevealSection className="mb-16">
          <SectionTitle
            eyebrow="Departments & Specialties"
            title="World-Class Care Across Every Specialty"
            subtitle="From complex surgeries to routine diagnostics, our specialist teams deliver excellence."
          />
        </RevealSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((dept, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-2xl overflow-hidden cursor-none border border-white/5 hover:border-[#4FD1FF]/20 transition-all duration-500"
            >
              {/* Image */}
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={dept.image}
                  alt={dept.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  style={{ filter: "brightness(0.5) saturate(0.7)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#091A2B] via-[#091A2B]/40 to-transparent" />

                {/* Stat badge */}
                <div className="absolute top-4 right-4">
                  <span
                    className="text-[10px] font-sans uppercase tracking-widest px-3 py-1.5 rounded-full font-semibold"
                    style={{
                      background: `${dept.color}20`,
                      border: `1px solid ${dept.color}40`,
                      color: dept.color,
                    }}
                  >
                    {dept.stats}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-[#091A2B] to-transparent">
                <h3 className="font-display font-bold text-[#F7F9FC] text-lg uppercase tracking-wide mb-1">
                  {dept.name}
                </h3>
                <p className="text-[#F7F9FC]/60 text-xs font-sans leading-relaxed line-clamp-2">
                  {dept.desc}
                </p>
                <div className="flex items-center gap-1 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[#4FD1FF] text-xs font-sans uppercase tracking-widest">
                    Learn more
                  </span>
                  <ArrowRight className="w-3 h-3 text-[#4FD1FF]" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
