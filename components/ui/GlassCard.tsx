"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "light" | "dark" | "emergency";
  hover?: boolean;
  delay?: number;
}

export function GlassCard({
  children,
  className,
  variant = "default",
  hover = true,
  delay = 0,
}: GlassCardProps) {
  const variants = {
    default: "glass",
    light: "glass-light",
    dark: "glass-dark",
    emergency: "glass border-[#FF5A5A]/20 emergency-glow",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={hover ? { y: -4, scale: 1.01 } : undefined}
      className={cn(
        variants[variant],
        "rounded-2xl p-6 transition-all duration-300",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
