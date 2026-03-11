import React from "react";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import NewsSection from "./components/NewsSection";
import WhoWeAreSection from "./components/WhoWeAreSection";
import WhatWeDoSection from "./components/WhatWeDoSection";
import PortfoliosSection from "./components/PortfoliosSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <Navigation onMenuClick={scrollToSection} />
      
      <main>
        <HeroSection />
        <NewsSection />
        <WhoWeAreSection />
        <WhatWeDoSection />
        <PortfoliosSection />
        <ContactSection />
      </main>
      
      <Footer />
      
      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}