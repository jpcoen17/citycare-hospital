"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, Phone, ChevronRight } from "lucide-react";
import { useScrollProgress } from "@/hooks/useScrollProgress";

const navLinks = [
  { label: "Overview", href: "#overview" },
  { label: "Technology", href: "#technology" },
  { label: "Emergency", href: "#emergency" },
  { label: "Departments", href: "#departments" },
  { label: "Facilities", href: "#facilities" },
  { label: "Sustainability", href: "#sustainability" },
];

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const progress = useScrollProgress();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress */}
      <motion.div
        className="scroll-progress"
        style={{ scaleX: progress }}
      />

      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-[9000] transition-all duration-500 ${
          scrolled ? "glass-dark py-3" : "py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-3 cursor-none"
          >
            <div className="w-9 h-9 rounded-lg bg-[#4FD1FF] flex items-center justify-center">
              <span className="font-display font-black text-[#091A2B] text-sm">CC</span>
            </div>
            <div>
              <div className="font-display font-bold text-[#F7F9FC] text-sm tracking-wider uppercase">
                City Care
              </div>
              <div className="text-[#4FD1FF] text-[9px] uppercase tracking-[0.3em] font-sans">
                Smart Hospital
              </div>
            </div>
          </motion.div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.05 }}
                className="text-[#F7F9FC]/60 hover:text-[#4FD1FF] text-xs font-sans uppercase tracking-[0.15em] transition-colors duration-300 cursor-none"
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+1800CITYCARE"
              className="flex items-center gap-2 text-[#4FD1FF] text-xs font-sans uppercase tracking-widest hover:text-white transition-colors cursor-none"
            >
              <Phone className="w-3 h-3" />
              24/7 Emergency
            </a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-[#4FD1FF] text-[#091A2B] text-xs font-display font-bold uppercase tracking-wider px-5 py-2.5 rounded-full hover:bg-white transition-all duration-300 cursor-none"
            >
              Book Appointment
            </motion.a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-[#F7F9FC] cursor-none"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-dark mt-2 mx-4 rounded-2xl overflow-hidden"
          >
            <div className="p-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between text-[#F7F9FC]/80 hover:text-[#4FD1FF] text-sm font-sans uppercase tracking-widest py-2 border-b border-white/5 cursor-none"
                >
                  {link.label}
                  <ChevronRight className="w-4 h-4 opacity-40" />
                </a>
              ))}
              <a
                href="#contact"
                className="block text-center bg-[#4FD1FF] text-[#091A2B] text-sm font-display font-bold uppercase tracking-wider px-6 py-3 rounded-full mt-4"
              >
                Book Appointment
              </a>
            </div>
          </motion.div>
        )}
      </motion.nav>
    </>
  );
}
