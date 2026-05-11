"use client";
import { motion } from "framer-motion";
import { AnimatedCounter } from "./AnimatedCounter";

interface Stat {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

interface FloatingStatsProps {
  stats: Stat[];
  className?: string;
}

export function FloatingStats({ stats, className }: FloatingStatsProps) {
  return (
    <div className={`grid grid-cols-2 gap-3 ${className}`}>
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="glass rounded-xl p-4 cyan-glow"
        >
          <AnimatedCounter
            value={stat.value}
            suffix={stat.suffix}
            prefix={stat.prefix}
            label={stat.label}
            valueClassName="text-2xl text-[#4FD1FF]"
          />
        </motion.div>
      ))}
    </div>
  );
}
