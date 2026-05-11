"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface PremiumButtonProps {
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost" | "emergency";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  href?: string;
  className?: string;
  icon?: ReactNode;
}

export function PremiumButton({
  children,
  variant = "primary",
  size = "md",
  onClick,
  href,
  className,
  icon,
}: PremiumButtonProps) {
  const base =
    "btn-premium inline-flex items-center gap-2 font-display font-semibold uppercase tracking-wider rounded-full cursor-none select-none transition-all duration-300";

  const variants = {
    primary:
      "bg-[#4FD1FF] text-[#091A2B] hover:bg-white hover:shadow-[0_0_40px_rgba(79,209,255,0.4)]",
    outline:
      "border border-[#4FD1FF]/40 text-[#4FD1FF] hover:bg-[#4FD1FF]/10 hover:border-[#4FD1FF]",
    ghost:
      "text-[#F7F9FC]/70 hover:text-[#F7F9FC] hover:bg-white/5",
    emergency:
      "bg-[#FF5A5A] text-white hover:bg-red-400 hover:shadow-[0_0_40px_rgba(255,90,90,0.5)]",
  };

  const sizes = {
    sm: "text-xs px-5 py-2.5",
    md: "text-sm px-7 py-3.5",
    lg: "text-base px-10 py-5",
  };

  const Component = href ? "a" : "button";

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="inline-block"
    >
      <Component
        href={href}
        onClick={onClick}
        className={cn(base, variants[variant], sizes[size], className)}
      >
        {icon && <span>{icon}</span>}
        {children}
      </Component>
    </motion.div>
  );
}
