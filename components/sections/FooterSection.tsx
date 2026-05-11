"use client";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { RevealSection } from "@/components/ui/RevealSection";
import { PremiumButton } from "@/components/ui/PremiumButton";

export function FooterSection() {
  return (
    <footer id="contact" className="relative bg-[#091A2B] overflow-hidden">
      {/* Top divider */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-[#4FD1FF]/30 to-transparent" />

      {/* Contact Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#0B3C6D]/20 blur-[100px] rounded-full" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Massive typography */}
          <RevealSection>
            <div className="text-center mb-16">
              <div className="text-[#4FD1FF] text-xs uppercase tracking-[0.4em] font-sans mb-4">
                Get In Touch
              </div>
              <h2
                className="font-display font-black text-[#F7F9FC] uppercase leading-[0.9] mb-6"
                style={{
                  fontSize: "clamp(3rem, 8vw, 6rem)",
                  letterSpacing: "-0.02em",
                }}
              >
                Start Your
                <span className="gradient-text block">Journey to</span>
                Better Health.
              </h2>
              <p className="text-[#F7F9FC]/50 text-lg max-w-xl mx-auto font-sans">
                Book an appointment, request information, or reach our 24/7 emergency line.
              </p>
            </div>
          </RevealSection>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact form */}
            <RevealSection direction="left">
              <div className="glass rounded-3xl p-8 space-y-5">
                <div className="text-[#4FD1FF] text-xs uppercase tracking-widest font-sans">
                  Book an Appointment
                </div>
                {[
                  { label: "Full Name", type: "text", placeholder: "Your full name" },
                  { label: "Phone Number", type: "tel", placeholder: "+91 XXXXX XXXXX" },
                  { label: "Email Address", type: "email", placeholder: "your@email.com" },
                ].map((field, i) => (
                  <div key={i}>
                    <label className="text-[#F7F9FC]/50 text-[10px] uppercase tracking-widest font-sans block mb-2">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-[#F7F9FC] text-sm font-sans focus:outline-none focus:border-[#4FD1FF]/40 focus:bg-[#0B3C6D]/20 transition-all duration-300 placeholder:text-white/20"
                    />
                  </div>
                ))}
                <div>
                  <label className="text-[#F7F9FC]/50 text-[10px] uppercase tracking-widest font-sans block mb-2">
                    Department
                  </label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-[#F7F9FC]/70 text-sm font-sans focus:outline-none focus:border-[#4FD1FF]/40 transition-all duration-300 cursor-none appearance-none">
                    <option value="">Select department</option>
                    <option>Cardiology</option>
                    <option>Neurology</option>
                    <option>Oncology</option>
                    <option>Orthopedics</option>
                    <option>Pediatrics</option>
                    <option>Emergency</option>
                    <option>General Medicine</option>
                  </select>
                </div>
                <div>
                  <label className="text-[#F7F9FC]/50 text-[10px] uppercase tracking-widest font-sans block mb-2">
                    Message
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe your concern or inquiry..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-[#F7F9FC] text-sm font-sans focus:outline-none focus:border-[#4FD1FF]/40 resize-none transition-all duration-300 placeholder:text-white/20"
                  />
                </div>
                <PremiumButton size="md" className="w-full justify-center">
                  Submit Request
                </PremiumButton>
              </div>
            </RevealSection>

            {/* Contact Info */}
            <RevealSection direction="right">
              <div className="space-y-6">
                {/* Contact cards */}
                {[
                  {
                    icon: Phone,
                    label: "24/7 Emergency",
                    value: "108 / +91 80000 CITY",
                    color: "#FF5A5A",
                  },
                  {
                    icon: Phone,
                    label: "Appointments",
                    value: "+91 80000 12345",
                    color: "#4FD1FF",
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    value: "care@citycarehospital.in",
                    color: "#4FD1FF",
                  },
                  {
                    icon: MapPin,
                    label: "Location",
                    value: "Sector 12, Healthcare Hub, Urban Centre, India",
                    color: "#4CAF50",
                  },
                  {
                    icon: Clock,
                    label: "OPD Hours",
                    value: "Mon–Sat: 8:00 AM – 8:00 PM",
                    color: "#4FD1FF",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="glass rounded-2xl p-5 flex items-start gap-4 hover:scale-[1.01] transition-transform duration-300 cursor-none"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${item.color}15`, border: `1px solid ${item.color}25` }}
                    >
                      <item.icon className="w-4 h-4" style={{ color: item.color }} />
                    </div>
                    <div>
                      <div className="text-[#F7F9FC]/40 text-[10px] uppercase tracking-widest font-sans mb-0.5">
                        {item.label}
                      </div>
                      <div className="text-[#F7F9FC] text-sm font-sans">{item.value}</div>
                    </div>
                  </motion.div>
                ))}

                {/* Social links */}
                <div className="glass rounded-2xl p-5">
                  <div className="text-[#F7F9FC]/40 text-[10px] uppercase tracking-widest font-sans mb-4">
                    Connect with Us
                  </div>
                  <div className="flex gap-3 flex-wrap">
                    {["LinkedIn", "Twitter/X", "Facebook", "YouTube", "Instagram"].map((s) => (
                      <a
                        key={s}
                        href="#"
                        className="text-[#F7F9FC]/50 hover:text-[#4FD1FF] text-xs font-sans uppercase tracking-widest flex items-center gap-1 transition-colors cursor-none"
                      >
                        {s}
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Bottom bar */}
      <div className="border-t border-white/5 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#4FD1FF] flex items-center justify-center">
              <span className="font-display font-black text-[#091A2B] text-xs">CC</span>
            </div>
            <div className="text-[#F7F9FC]/40 text-xs font-sans">
              © 2024 City Care Hospital. All rights reserved.
            </div>
          </div>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Use", "Accessibility", "Sitemap"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-[#F7F9FC]/30 hover:text-[#4FD1FF] text-[10px] uppercase tracking-widest font-sans transition-colors cursor-none"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
