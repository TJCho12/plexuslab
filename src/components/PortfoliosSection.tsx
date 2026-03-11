import React from "react";
import { motion } from "motion/react";

const PortfoliosSection: React.FC = () => {
  const portfolioItems = [
    {
      title: "Dermatology Clinics",
      category: "Skin Clinic",
      description: "A premium K-beauty skin clinic for global patients",
      url: "https://mysecretclinic.com/",
    },
    {
      title: "Equation",
      category: "Cosmetics",
      description: "From clinic to your home — experience professional post-treatment skincare.",
      url: null,
    }
  ];

  return (
    <section id="portfolios" className="w-full min-h-screen bg-gray-50 py-20">
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
            Brands
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
          ></p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {portfolioItems.map((item, index) => {
            const CardContent = (
              <>
                <div className="mb-4">
                  <span
                    className="inline-block px-3 py-1 bg-gray-100 rounded-full"
                    style={{
                      fontFamily:
                        'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#6B7280",
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                    }}
                  >
                    {item.category}
                  </span>
                </div>
                
                <h3
                  className="text-gray mb-4"
                  style={{
                    fontFamily:
                      'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    fontSize: "24px",
                    fontWeight: "600",
                  }}
                >
                  {item.title}
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
                  {item.description}
                </p>
              </>
            );

            return item.url ? (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 block hover:scale-105 cursor-pointer"
              >
                {CardContent}
              </a>
            ) : (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                {CardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PortfoliosSection;