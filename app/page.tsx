import React from "react";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/hero/HeroSection";
import DestinationsSection from "@/components/sections/DestinationsSection";
import EnquirySection from "@/components/sections/EnquirySection";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/common/FloatingWhatsApp";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-bg-page)] text-[var(--color-text-primary)] relative selection:bg-blue-600 selection:text-white">
      {/* 1. Header Navigation Bar */}
      <Navbar />

      {/* 2. Main Hero Section (Matching Image Design Exactly) */}
      <main className="flex-1 flex flex-col">
        <HeroSection />

        {/* 3. Study Destinations (Connected to Hero "Explore Programs" CTA) */}
        <DestinationsSection />

        {/* 4. Consultation & Call Back (Connected to Hero "Get a Call Back" & "Enquire Now" CTAs) */}
        <EnquirySection />
      </main>

      {/* 5. Footer */}
      <Footer />

      {/* 6. Floating Action WhatsApp Widget (Bottom Right) */}
      <FloatingWhatsApp />
    </div>
  );
}
