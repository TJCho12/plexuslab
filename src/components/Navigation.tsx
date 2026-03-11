import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface NavigationProps {
  onMenuClick: (sectionId: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ onMenuClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { id: "news", label: "News" },
    { id: "who-we-are", label: "Who We Are" },
    { id: "what-we-do", label: "What We Do" },
    { id: "portfolios", label: "Brands" },
    { id: "contact", label: "Contact" },
  ];

  const handleMenuClick = (sectionId: string) => {
    onMenuClick(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Header Container - Fixed Position with Background */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-white/95 backdrop-blur-md shadow-md" 
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4">
          {/* Plexus Lab Logo */}
          <div 
            className="cursor-pointer"
            onClick={() => onMenuClick('hero')}
          >
            <h1
              style={{
                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                fontSize: "28px",
                fontWeight: "700",
                background: "linear-gradient(135deg, #ff006e, #8338ec, #3a86ff, #06ffa5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                letterSpacing: "0.02em",
              }}
            >
              Plexus Lab.
            </h1>
          </div>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ${
              isScrolled ? "bg-white" : "bg-white"
            }`}
            style={{
              border: "1px solid rgba(0, 0, 0, 0.1)",
            }}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-black" />
            ) : (
              <Menu className="w-6 h-6 text-black" />
            )}
          </button>
        </div>
      </header>

      {/* Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 backdrop-blur-sm">
          <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out">
            <div className="p-8 pt-20">
              <nav className="space-y-6">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleMenuClick(item.id)}
                    className="block w-full text-left py-2 px-4 rounded-lg hover:bg-gray-50 transition-all duration-300 group"
                    style={{
                      fontFamily:
                        'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                      fontSize: "18px",
                      fontWeight: "500",
                      color: "#030213",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "linear-gradient(135deg, #ff006e, #8338ec, #3a86ff, #06ffa5)";
                      e.currentTarget.style.webkitBackgroundClip = "text";
                      e.currentTarget.style.webkitTextFillColor = "transparent";
                      e.currentTarget.style.backgroundClip = "text";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "none";
                      e.currentTarget.style.webkitBackgroundClip = "unset";
                      e.currentTarget.style.webkitTextFillColor = "unset";
                      e.currentTarget.style.backgroundClip = "unset";
                      e.currentTarget.style.color = "#030213";
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;