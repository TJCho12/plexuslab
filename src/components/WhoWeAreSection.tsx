import React from "react";
import { motion } from "motion/react";

const WhoWeAreSection: React.FC = () => {
  return (
    <section id="who-we-are" className="w-full min-h-screen bg-gray-50 py-20 p-[0px]">
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
            Who We Are
          </motion.h2>
          <motion.div 
            className="w-24 h-1 mx-auto"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "6rem", opacity: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            viewport={{ margin: "-100px" }}
            style={{
              background: "linear-gradient(135deg, #ff006e, #8338ec, #3a86ff, #06ffa5)",
            }}
          ></motion.div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          <div className="bg-white p-8 rounded-2xl shadow-lg h-full">
            <h3
              className="text-black mb-4"
              style={{
                fontFamily:
                  'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                fontSize: "24px",
                fontWeight: "600",
              }}
            >
Our Mission            </h3>
            <p
              className="text-gray-700"
              style={{
                fontFamily:
                  'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "1.6",
              }}
            >Plexus Lab은 K-메디컬 뷰티를 기반으로 글로벌 시장을 겨냥한 프리미엄 스킨케어 브랜드를 개발합니다. 한국 피부과 클리닉과의 파트너십을 통해 의료미용 현장의 인사이트를 담은 제품을 전 세계 소비자에게 연결합니다.</p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg h-full">
            <h3
              className="text-black mb-4"
              style={{
                fontFamily:
                  'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                fontSize: "24px",
                fontWeight: "600",
              }}
            >
              Our Mission
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
            >Plexus Lab develops premium skincare brands rooted in K-Medical Beauty — partnering with Korea's leading dermatology clinics to deliver products inspired by real aesthetic care insights to the global market.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;