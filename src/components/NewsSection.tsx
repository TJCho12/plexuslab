import React from "react";
import { motion } from "motion/react";
import { Calendar, ArrowRight } from "lucide-react";

interface NewsItem {
  id: number;
  title: string;
  date: string;
  category: string;
  preview: string;
}

const NewsSection: React.FC = () => {
  const newsItems: NewsItem[] = [
    {
      id: 1,
      title: "Plexus Lab. 공식 웹사이트",
      date: "2025-11-05",
      category: "Company News",
      preview: "Plexus Lab의 공식 웹사이트가 오픈했습니다. K-Beauty의 혁신적인 솔루션과 독보적인 브랜드 가치를 제공합니다.",
    },
    // {
    //   id: 2,
    //   title: "시크릿 의원 파트너십 체결",
    //   date: "2025-11-24",
    //   category: "Partnership",
    //   preview: "글로벌 환자를 위한 프리미엄 K-뷰티 스킨 클리닉 시크릿 의원과 파트너십을 체결했습니다.",
    // },
  ];

  return (
    <section id="news" className="w-full min-h-screen bg-white py-20">
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
            News
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
          >
            Plexus Lab의 최신 소식과 공지사항을 확인하세요
          </p>
        </div>
        
        <div className="space-y-6">
          {newsItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ margin: "-50px", once: true }}
              className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-gray-200"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <span
                    className="inline-block px-3 py-1 bg-white rounded-full border border-gray-200"
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
                
                <div className="flex items-center text-gray-500">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span
                    style={{
                      fontFamily:
                        'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                      fontSize: "14px",
                      fontWeight: "400",
                    }}
                  >
                    {item.date}
                  </span>
                </div>
              </div>
              
              <h3
                className="text-black mb-3"
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
                className="text-gray-700 mb-4"
                style={{
                  fontFamily:
                    'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                  fontSize: "16px",
                  fontWeight: "400",
                  lineHeight: "1.6",
                }}
              >
                {item.preview}
              </p>
              
              
            </motion.div>
          ))}
        </div>
        
        {newsItems.length === 0 && (
          <div className="text-center py-16">
            <p
              className="text-gray-500"
              style={{
                fontFamily:
                  'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                fontSize: "16px",
                fontWeight: "400",
              }}
            >
              등록된 공지사항이 없습니다.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default NewsSection;
