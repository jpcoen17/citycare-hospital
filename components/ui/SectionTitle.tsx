"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  centered = false,
  light = false,
  className,
}: SectionTitleProps) {
  return (
    <div className={cn("space-y-4", centered && "text-center", className)}>
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, x: centered ? 0 : -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 text-[#4FD1FF] text-xs font-sans font-semibold uppercase tracking-[0.25em]"
          style={{ justifyContent: centered ? "center" : "flex-start" }}
        >
          <span className="w-8 h-[1px] bg-[#4FD1FF]" />
          {eyebrow}
          <span className="w-8 h-[1px] bg-[#4FD1FF]" />
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "font-display font-bold leading-[0.95] tracking-tight",
          light ? "text-[#091A2B]" : "text-[#F7F9FC]"
        )}
        style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className={cn(
            "text-lg leading-relaxed max-w-2xl",
            light ? "text-[#091A2B]/70" : "text-[#F7F9FC]/60",
            centered && "mx-auto"
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
