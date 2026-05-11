"use client";
import { motion } from "framer-motion";

const items = [
  "350 Bed Capacity",
  "60 ICU Beds",
  "12 Modular OTs",
  "24/7 Emergency",
  "300 Parking Spaces",
  "IGBC Gold Rated",
  "99.9% Uptime",
  "AI-Powered Diagnostics",
  "Robotic Surgery Ready",
  "₹550 Cr Investment",
  "G + 7 Floors",
  "1,25,000 sq ft",
];

export function MarqueeStrip({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const doubled = [...items, ...items];

  return (
    <div
      className="relative overflow-hidden py-4 border-y"
      style={{
        background: variant === "dark" ? "rgba(9,26,43,0.8)" : "rgba(11,60,109,0.3)",
        borderColor: "rgba(79,209,255,0.1)",
      }}
    >
      <motion.div
        className="flex gap-0 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-6 px-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4FD1FF] flex-shrink-0 opacity-60" />
            <span className="text-[#F7F9FC]/45 text-[10px] font-sans uppercase tracking-[0.25em] flex-shrink-0">
              {item}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
