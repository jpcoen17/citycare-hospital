"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(timer);
          setTimeout(() => setVisible(false), 400);
          return 100;
        }
        return p + 2;
      });
    }, 25);
    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="loading-screen"
        >
          {/* Grid background */}
          <div className="absolute inset-0 grid-bg opacity-50" />

          {/* Scan line */}
          <motion.div
            initial={{ top: "-2px" }}
            animate={{ top: "100%" }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#4FD1FF]/50 to-transparent"
            style={{ position: "absolute" }}
          />

          <div className="relative z-10 flex flex-col items-center gap-8">
            {/* Logo Mark */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="w-20 h-20 rounded-2xl bg-[#4FD1FF] flex items-center justify-center"
            >
              <span className="font-display font-black text-[#091A2B] text-3xl">+</span>
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="font-display font-bold text-[#F7F9FC] text-2xl uppercase tracking-[0.2em]">
                City Care Hospital
              </div>
              <div className="text-[#4FD1FF] text-xs uppercase tracking-[0.4em] mt-1 font-sans">
                The Future of Healthcare
              </div>
            </motion.div>

            {/* Progress */}
            <div className="w-64 space-y-2">
              <div className="h-[1px] bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#4FD1FF] to-[#0B3C6D]"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
              <div className="flex justify-between text-[10px] font-sans text-white/30 uppercase tracking-widest">
                <span>Initializing Systems</span>
                <span>{progress}%</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
