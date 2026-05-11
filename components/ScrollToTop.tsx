"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.7, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 z-[8000] w-12 h-12 rounded-full glass border border-[#4FD1FF]/30 flex items-center justify-center cursor-none hover:bg-[#4FD1FF]/20 transition-all duration-300 group"
          aria-label="Scroll to top"
          style={{ boxShadow: "0 0 20px rgba(79,209,255,0.15)" }}
        >
          <ArrowUp className="w-4 h-4 text-[#4FD1FF] group-hover:scale-125 transition-transform duration-200" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
