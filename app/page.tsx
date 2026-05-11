"use client";

import { useEffect } from "react";
import { LoadingScreen }            from "@/components/LoadingScreen";
import { CustomCursor }             from "@/components/CustomCursor";
import { Navigation }               from "@/components/Navigation";
import { MarqueeStrip }             from "@/components/MarqueeStrip";
import { ScrollToTop }              from "@/components/ScrollToTop";
import { InfoBar }                  from "@/components/InfoBar";

import { HeroSection }              from "@/components/sections/HeroSection";
import { OverviewSection }          from "@/components/sections/OverviewSection";
import { SmartSystemsSection }      from "@/components/sections/SmartSystemsSection";
import { TechnologySection }        from "@/components/sections/TechnologySection";
import { EmergencySection }         from "@/components/sections/EmergencySection";
import { ICUSection }               from "@/components/sections/ICUSection";
import { OperationTheatreSection }  from "@/components/sections/OperationTheatreSection";
import { DepartmentsSection }       from "@/components/sections/DepartmentsSection";
import { FacilitiesSection }        from "@/components/sections/FacilitiesSection";
import { PatientExperienceSection } from "@/components/sections/PatientExperienceSection";
import { SustainabilitySection }    from "@/components/sections/SustainabilitySection";
import { FloorPlanSection }         from "@/components/sections/FloorPlanSection";
import { StatisticsSection }        from "@/components/sections/StatisticsSection";
import { FactsSection }             from "@/components/sections/FactsSection";
import { LocationSection }          from "@/components/sections/LocationSection";
import { FooterSection }            from "@/components/sections/FooterSection";

export default function Home() {
  useEffect(() => {
    const initLenis = async () => {
      try {
        const Lenis = (await import("lenis")).default;
        const lenis = new Lenis({
          duration: 1.4,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smooth: true,
          smoothTouch: false,
          touchMultiplier: 2,
        } as any);
        function raf(time: number) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
        return () => lenis.destroy();
      } catch { /* native scroll fallback */ }
    };
    initLenis();
  }, []);

  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <Navigation />
      <ScrollToTop />

      <main>
        {/* 01 Hero */}
        <HeroSection />

        {/* Marquee ticker */}
        <MarqueeStrip />

        {/* 02 Overview + hotspot map */}
        <OverviewSection />

        <InfoBar
          label="Hospital Intelligence"
          items={[
            { key: "Total Area", value: "1,25,000 sq ft" },
            { key: "Floors", value: "G + 7" },
            { key: "Beds", value: "350" },
            { key: "ICU", value: "60 Beds" },
            { key: "OTs", value: "12 Modular" },
          ]}
        />

        {/* 03 Smart Hospital Ecosystem */}
        <SmartSystemsSection />

        {/* 04 AI Technology */}
        <TechnologySection />

        {/* 05 Emergency */}
        <EmergencySection />

        <InfoBar
          label="Critical Care"
          items={[
            { key: "Response Time", value: "< 8 min" },
            { key: "Emergency Capacity", value: "50 Patients" },
            { key: "Ambulance Bays", value: "4" },
            { key: "Trauma Theatres", value: "3" },
            { key: "Code Blue", value: "< 90 sec" },
          ]}
        />

        {/* 06 ICU */}
        <ICUSection />

        {/* 07 Operation Theatres */}
        <OperationTheatreSection />

        {/* 08 Departments */}
        <DepartmentsSection />

        <MarqueeStrip variant="light" />

        {/* 09 Facilities */}
        <FacilitiesSection />

        {/* 10 Patient Experience */}
        <PatientExperienceSection />

        {/* 11 Sustainability */}
        <SustainabilitySection />

        <InfoBar
          label="Green Metrics"
          items={[
            { key: "Solar Capacity", value: "500 kW" },
            { key: "CO₂ Reduction", value: "450 T/yr" },
            { key: "Water Saved", value: "8M L/yr" },
            { key: "Energy Savings", value: "30%" },
            { key: "Rating", value: "IGBC Gold" },
          ]}
        />

        {/* 12 Floor Plan */}
        <FloorPlanSection />

        {/* 13 Statistics */}
        <StatisticsSection />

        {/* 14 Incredible Facts */}
        <FactsSection />

        {/* 15 Location & Cost */}
        <LocationSection />
      </main>

      {/* 16 Footer */}
      <FooterSection />
    </>
  );
}
