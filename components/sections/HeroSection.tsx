"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { ArrowDown, Activity, Shield, Zap, Users } from "lucide-react";
import { PremiumButton } from "@/components/ui/PremiumButton";

/** Prevent SSR/client mismatch for scroll-driven values */
function useIsClient() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);
  return isClient;
}

const floatingCards = [
  {
    icon: Activity,
    label: "Live Monitoring",
    value: "99.9%",
    sub: "System Uptime",
    color: "#4FD1FF",
    position: "top-[18%] left-[2%]",
    delay: 0.2,
  },
  {
    icon: Shield,
    label: "Safety Rating",
    value: "IGBC",
    sub: "Gold Certified",
    color: "#4CAF50",
    position: "top-[20%] right-[2%]",
    delay: 0.3,
  },
  {
    icon: Zap,
    label: "Response Time",
    value: "<8 min",
    sub: "Emergency",
    color: "#FF5A5A",
    position: "bottom-[28%] left-[2%]",
    delay: 0.4,
  },
  {
    icon: Users,
    label: "Daily Patients",
    value: "500+",
    sub: "Served Daily",
    color: "#4FD1FF",
    position: "bottom-[28%] right-[2%]",
    delay: 0.5,
  },
];

export function HeroSection() {
  const isClient = useIsClient();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const imageY   = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const textY    = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity  = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#091A2B]"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 grid-bg" />

      {/* Background Image with parallax */}
      <motion.div
        style={isClient ? { y: imageY } : {}}
        className="absolute inset-0 parallax-container"
      >
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1920&q=90"
            alt="City Care Hospital"
            fill
            priority
            className="object-cover object-center"
            style={{ filter: "brightness(0.25) saturate(0.8)" }}
          />
        </div>
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#091A2B]/60 via-transparent to-[#091A2B]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#091A2B]/50 via-transparent to-[#091A2B]/50" />
      </motion.div>

      {/* Floating Cards */}
      {floatingCards.map((card, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: card.delay + 1.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ opacity: isClient ? opacity : 1 }}
          className={`absolute ${card.position} z-20 hidden md:block`}
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
            className="glass rounded-2xl p-4 min-w-[160px]"
            style={{ borderColor: `${card.color}20` }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center"
                style={{ background: `${card.color}20` }}
              >
                <card.icon className="w-4 h-4" style={{ color: card.color }} />
              </div>
              <span className="text-[#F7F9FC]/60 text-[10px] uppercase tracking-wider font-sans">
                {card.label}
              </span>
            </div>
            <div
              className="font-display font-bold text-xl"
              style={{ color: card.color }}
            >
              {card.value}
            </div>
            <div className="text-[#F7F9FC]/40 text-[10px] font-sans mt-0.5">{card.sub}</div>
          </motion.div>
        </motion.div>
      ))}

      {/* Main Content */}
      <motion.div
        style={isClient ? { y: textY, opacity } : {}}
        className="relative z-10 text-center px-6 max-w-6xl mx-auto"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <span className="w-12 h-[1px] bg-[#4FD1FF]" />
          <span className="text-[#4FD1FF] text-xs font-sans uppercase tracking-[0.3em]">
            City Care Hospital · Est. 2024
          </span>
          <span className="w-12 h-[1px] bg-[#4FD1FF]" />
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-black text-[#F7F9FC] uppercase leading-[0.9] mb-6"
          style={{ fontSize: "clamp(3.5rem, 10vw, 8.5rem)", letterSpacing: "-0.02em" }}
        >
          Modern
          <span className="gradient-text block">Healthcare.</span>
          Reimagined.
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="text-[#F7F9FC]/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10 font-sans"
        >
          A next-generation hospital integrating cutting-edge medical technology,
          intelligent systems, and sustainable design — putting patients first.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <PremiumButton size="lg" href="#overview">
            Explore Hospital
          </PremiumButton>
          <PremiumButton size="lg" variant="outline" href="#emergency">
            Emergency Care
          </PremiumButton>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
        >
          {[
            { value: "350", label: "Bed Capacity" },
            { value: "60", label: "ICU Beds" },
            { value: "12", label: "Operation Theatres" },
            { value: "24/7", label: "Emergency" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="font-display font-bold text-[#4FD1FF] text-3xl">{stat.value}</div>
              <div className="text-[#F7F9FC]/40 text-xs uppercase tracking-widest font-sans mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        style={isClient ? { opacity } : {}}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-[#F7F9FC]/30 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-sans">Scroll to explore</span>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
