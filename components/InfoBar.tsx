"use client";
import { motion } from "framer-motion";
import { RevealSection } from "@/components/ui/RevealSection";

interface InfoBarProps {
  label: string;
  items: { key: string; value: string }[];
}

export function InfoBar({ label, items }: InfoBarProps) {
  return (
    <div className="border-y border-[#4FD1FF]/10 bg-[#091A2B]/60 backdrop-blur-sm py-5">
      <div className="max-w-7xl mx-auto px-6">
        <RevealSection direction="none">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-0">
            <div className="text-[#4FD1FF] text-[10px] uppercase tracking-[0.3em] font-sans md:w-48 flex-shrink-0">
              {label}
            </div>
            <div className="flex flex-wrap gap-x-10 gap-y-2">
              {items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-[#4FD1FF]/40" />
                  <span className="text-[#F7F9FC]/40 text-[10px] font-sans uppercase tracking-wider">
                    {item.key}
                  </span>
                  <span className="text-[#F7F9FC]/80 text-[10px] font-display font-bold">
                    {item.value}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </RevealSection>
      </div>
    </div>
  );
}
