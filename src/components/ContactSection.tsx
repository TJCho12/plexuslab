import React from "react";
import { Mail, MapPin } from "lucide-react";
import { motion } from "motion/react";

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="w-full min-h-screen bg-white py-20">
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
            Contact
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
          >Have a question? We'd love to hear from you.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-gray-100 rounded-lg">
                <Mail className="w-6 h-6 text-black" />
              </div>
              <div>
                <h3
                  className="text-black mb-2"
                  style={{
                    fontFamily:
                      'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    fontSize: "18px",
                    fontWeight: "600",
                  }}
                >
                  Email
                </h3>
                <p
                  className="text-gray-700"
                  style={{
                    fontFamily:
                      'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    fontSize: "16px",
                    fontWeight: "400",
                  }}
                >
                  contact@plexuslab.kr
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-gray-100 rounded-lg">
                <MapPin className="w-6 h-6 text-black" />
              </div>
              <div>
                <h3
                  className="text-black mb-2"
                  style={{
                    fontFamily:
                      'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    fontSize: "18px",
                    fontWeight: "600",
                  }}
                >
                  Office
                </h3>
                <p
                  className="text-gray-700"
                  style={{
                    fontFamily:
                      'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    fontSize: "16px",
                    fontWeight: "400",
                  }}
                >
                  서울시 서초구 서운로 136, 7층<br />
                  7F, 136 Seoun-ro, Seocho-gu, Seoul
                </p>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-2xl">
            <h3
              className="text-black mb-6"
              style={{
                fontFamily:
                  'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                fontSize: "24px",
                fontWeight: "600",
              }}
            >
              제휴 문의(Inquiry)
            </h3>
            
            <form className="space-y-6">
              <div>
                <label
                  className="block text-black mb-2"
                  style={{
                    fontFamily:
                      'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    fontSize: "16px",
                    fontWeight: "500",
                  }}
                >
                  이름(Name)
                </label>
                <input
                  type="text"
                  className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label
                  className="block text-black mb-2"
                  style={{
                    fontFamily:
                      'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    fontSize: "16px",
                    fontWeight: "500",
                  }}
                >
                  이메일(Email)
                </label>
                <input
                  type="email"
                  className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="your.email@company.com"
                />
              </div>
              
              <div>
                <label
                  className="block text-black mb-2"
                  style={{
                    fontFamily:
                      'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    fontSize: "16px",
                    fontWeight: "500",
                  }}
                >
                  내용(comments)
                </label>
                <textarea
                  className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent h-32 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors duration-200 text-center"
                style={{
                  fontFamily:
                    'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                  fontSize: "16px",
                  fontWeight: "600",
                }}
              >
               문의하기(Send)
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;