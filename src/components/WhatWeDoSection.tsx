import React from "react";
import { motion } from "motion/react";

const WhatWeDoSection: React.FC = () => {
  const services = [
    {
      title: "Brand Development ",
      description: "From concept to shelf — we create skincare brands built on clinical insight and consumer desire.",
    },
    {
      title: "Product Development ",
      description: "Formulating post-treatment and cosmeceutical skincare with OEM/ODM partners rooted in dermatological standards.",
    },
    {
      title: "Global Marketing ",
      description: "Driving cross-border growth through reverse e-commerce and strategic market entry into Japan and beyond.",
    },
    {
      title: "Clinic Partnership ",
      description: "Partnering with Korea's leading dermatology clinics to co-develop and distribute trusted skincare solutions.",
    },
  ];

  return (
    <section id="what-we-do" className="w-full min-h-screen bg-white py-20">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="mb-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ margin: "-100px" }}
            style={{
              fontFamily:
                'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              fontSize: "48px",
              fontWeight: "700",
              letterSpacing: "0.02em",
              background: "linear-gradient(135deg, #ff006e, #8338ec, #3a86ff, #06ffa5)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              backgroundSize: "200% 200%",
              animation: "gradientShift 3s ease-in-out infinite",
            }}
          >
            What We Do
          </motion.h2>
          <motion.div 
            className="w-24 h-1 mx-auto mb-8"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "6rem", opacity: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            viewport={{ margin: "-100px" }}
            style={{
              background: "linear-gradient(135deg, #ff006e, #8338ec, #3a86ff, #06ffa5)",
            }}
          ></motion.div>
          
          <p
            className="text-gray-700 max-w-3xl mx-auto"
            style={{
              fontFamily:
                'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              fontSize: "20px",
              fontWeight: "400",
              lineHeight: "1.6",
            }}
          >We build skincare brands that translate Korea's medical beauty culture into products the world wants to use.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300"
            >
              <h3
                className="text-black mb-4"
                style={{
                  fontFamily:
                    'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                  fontSize: "24px",
                  fontWeight: "600",
                }}
              >
                {service.title}
              </h3>
              <p
                className="text-gray-700"
                style={{
                  fontFamily:
                    'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                  fontSize: "16px",
                  fontWeight: "400",
                  lineHeight: "1.6",
                }}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;