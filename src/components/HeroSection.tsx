import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import SpinningCube from "./SpinningCube";

const HeroSection: React.FC = () => {

  return (
    <section id="hero" className="w-full h-screen relative bg-white">
      {/* Spinning Cube */}
      <div className="w-full h-full relative">
        <SpinningCube />
      </div>

      {/* Enhanced Animated Text */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center w-full px-8">
        <div>
          {/* First Line - With fade and slide animation */}
          <motion.div 
            className="font-bold text-[20px] text-right font-[Inria_Sans]"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
            style={{ color: '#6B7280' }}
          >
            Innovating K-beauty with K-Medical
          </motion.div>
          
          {/* Second Line - With wave effect */}
          <motion.div 
            className="font-bold text-[20px] text-right font-[Inria_Sans]"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 2.2, ease: "easeOut" }}
            style={{ color: '#6B7280' }}
          >
            with unique value,
          </motion.div>
          
          {/* Third Line - With gradient and enhanced animation */}
          <motion.div 
            className="text-[20px] text-right font-bold font-[Inria_Sans]"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 2.9, ease: "easeOut" }}
            style={{
              background: "linear-gradient(135deg, #ff006e, #8338ec, #3a86ff, #06ffa5)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              backgroundSize: "200% 200%",
              animation: "gradientShift 3s ease-in-out infinite",
            }}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
          >
            Plexus Lab is redefining tomorrow.
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;