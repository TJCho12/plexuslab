import React from "react";
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-4">Plexus Lab Co., Ltd.</h3>
              <p className="text-gray-400 max-w-md leading-relaxed">We develop premium skincare brands at the intersection of K-Beauty and medical aesthetics — partnering with Korea's leading dermatology clinics to bring clinically-inspired products to the global market.</p>
            </div>
            
            {/* 
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            */}
          </div>

          {/* Quick Links */}


          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-gray-500" />
                <span className="text-gray-500 text-sm">
                  contact@plexuslab.kr
                </span>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-gray-400 mt-0.5" />
                <span className="text-gray-400 text-sm whitespace-nowrap">
                  서울시 서초구 서운로 136, 7층
                  <br />
                  7F, 136 Seoun-ro, Seocho-gu, Seoul
                </span>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-800">
              <div className="text-gray-400 text-sm space-y-1">
                <p className="whitespace-nowrap">(주)플렉서스랩 사업자등록번호: 598-81-03920</p>
                <p>대표 조태정</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Plexus Lab Co., Ltd. All rights reserved.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;