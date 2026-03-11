import React from "react";

const SpinningCube: React.FC = () => {
  return (
    <div
      className="w-full h-full relative"
      style={{
        backgroundColor: "#ffffff",
        perspective: "800px",
        perspectiveOrigin: "center center",
        willChange: "transform",
      }}
    >


      {/* Main cube container */}
      <div className="w-full h-full flex justify-center" style={{ alignItems: "flex-start", paddingTop: "25vh" }}>
        {/* Cube Shadow */}
        <div
          className="cube-shadow"
          style={{
            position: "absolute",
            width: "350px",
            height: "120px",
            background: "radial-gradient(ellipse, rgba(255,0,128,0.25) 0%, rgba(128,0,255,0.20) 25%, rgba(0,255,128,0.15) 50%, rgba(255,128,0,0.10) 75%, transparent 100%)",
            borderRadius: "50%",
            transform: "translateY(280px)",
            filter: "blur(20px)",
            animation: "shadowPulse 8s ease-in-out infinite",
            zIndex: 0,
          }}
        />
        
        {/* The spinning cube */}
        <div
          className="cube"
          style={{
            width: "200px",
            height: "200px",
            position: "relative",
            transformStyle: "preserve-3d",
            animation: "spin 8s infinite linear",
            zIndex: 1,
            willChange: "transform",
            backfaceVisibility: "hidden",
            transform: "translate3d(0, 0, 0)", // Force hardware acceleration
          }}
        >
          {/* Front face */}
          <div
            className="cube-face front"
            style={{
              position: "absolute",
              width: "200px",
              height: "200px",
              background:
                "linear-gradient(45deg, #ff0080, #00ff80, #8000ff, #ff8000)",
              backgroundSize: "400% 400%",
              animation: "waveColors 4s ease-in-out infinite",
              transform: "rotateY(0deg) translate3d(0, 0, 100px)",
              border: "2px solid rgba(255, 255, 255, 0.3)",
              backfaceVisibility: "hidden",
              willChange: "transform",
            }}
          />

          {/* Back face */}
          <div
            className="cube-face back"
            style={{
              position: "absolute",
              width: "200px",
              height: "200px",
              background:
                "linear-gradient(45deg, #00ff80, #8000ff, #ff8000, #ff0080)",
              backgroundSize: "400% 400%",
              animation:
                "waveColors 4s ease-in-out infinite 1s",
              transform: "rotateY(180deg) translate3d(0, 0, 100px)",
              border: "2px solid rgba(255, 255, 255, 0.3)",
              backfaceVisibility: "hidden",
              willChange: "transform",
            }}
          />

          {/* Right face */}
          <div
            className="cube-face right"
            style={{
              position: "absolute",
              width: "200px",
              height: "200px",
              background:
                "linear-gradient(45deg, #8000ff, #ff8000, #ff0080, #00ff80)",
              backgroundSize: "400% 400%",
              animation:
                "waveColors 4s ease-in-out infinite 2s",
              transform: "rotateY(90deg) translate3d(0, 0, 100px)",
              border: "2px solid rgba(255, 255, 255, 0.3)",
              backfaceVisibility: "hidden",
              willChange: "transform",
            }}
          />

          {/* Left face */}
          <div
            className="cube-face left"
            style={{
              position: "absolute",
              width: "200px",
              height: "200px",
              background:
                "linear-gradient(45deg, #ff8000, #ff0080, #00ff80, #8000ff)",
              backgroundSize: "400% 400%",
              animation:
                "waveColors 4s ease-in-out infinite 3s",
              transform: "rotateY(-90deg) translate3d(0, 0, 100px)",
              border: "2px solid rgba(255, 255, 255, 0.3)",
              backfaceVisibility: "hidden",
              willChange: "transform",
            }}
          />

          {/* Top face */}
          <div
            className="cube-face top"
            style={{
              position: "absolute",
              width: "200px",
              height: "200px",
              background:
                "linear-gradient(45deg, #ff0080, #8000ff, #00ff80, #ff8000)",
              backgroundSize: "400% 400%",
              animation:
                "waveColors 4s ease-in-out infinite 0.5s",
              transform: "rotateX(90deg) translate3d(0, 0, 100px)",
              border: "2px solid rgba(255, 255, 255, 0.3)",
              backfaceVisibility: "hidden",
              willChange: "transform",
            }}
          />

          {/* Bottom face */}
          <div
            className="cube-face bottom"
            style={{
              position: "absolute",
              width: "200px",
              height: "200px",
              background:
                "linear-gradient(45deg, #00ff80, #ff0080, #ff8000, #8000ff)",
              backgroundSize: "400% 400%",
              animation:
                "waveColors 4s ease-in-out infinite 2.5s",
              transform: "rotateX(-90deg) translate3d(0, 0, 100px)",
              border: "2px solid rgba(255, 255, 255, 0.3)",
              backfaceVisibility: "hidden",
              willChange: "transform",
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes spin {
          0% { transform: rotateX(0deg) rotateY(0deg); }
          25% { transform: rotateX(90deg) rotateY(90deg); }
          50% { transform: rotateX(180deg) rotateY(180deg); }
          75% { transform: rotateX(270deg) rotateY(270deg); }
          100% { transform: rotateX(360deg) rotateY(360deg); }
        }
        
        @keyframes waveColors {
          0% { 
            background-position: 0% 50%;
            filter: hue-rotate(0deg) brightness(1.2);
          }
          25% { 
            background-position: 100% 50%;
            filter: hue-rotate(90deg) brightness(1.5);
          }
          50% { 
            background-position: 100% 100%;
            filter: hue-rotate(180deg) brightness(1.8);
          }
          75% { 
            background-position: 0% 100%;
            filter: hue-rotate(270deg) brightness(1.5);
          }
          100% { 
            background-position: 0% 50%;
            filter: hue-rotate(360deg) brightness(1.2);
          }
        }
        
        .cube-face {
          opacity: 0.9;
          box-shadow: 
            inset 0 0 50px rgba(255, 255, 255, 0.1),
            0 0 30px rgba(255, 255, 255, 0.2);
        }
        
        .cube-face::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 70% 70%, rgba(255, 255, 255, 0.2) 0%, transparent 50%);
          animation: shimmer 3s ease-in-out infinite;
        }
        
        @keyframes shimmer {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.7; }
        }
        
        @keyframes shadowPulse {
          0% { 
            transform: translateY(280px) scale(1);
            opacity: 0.7;
          }
          25% { 
            transform: translateY(280px) scale(1.1);
            opacity: 0.9;
          }
          50% { 
            transform: translateY(280px) scale(1.2);
            opacity: 1;
          }
          75% { 
            transform: translateY(280px) scale(1.1);
            opacity: 0.9;
          }
          100% { 
            transform: translateY(280px) scale(1);
            opacity: 0.7;
          }
        }
        
        /* Mobile optimizations */
        @media (max-width: 768px) {
          .cube {
            width: 150px !important;
            height: 150px !important;
          }
          
          .cube-face {
            width: 150px !important;
            height: 150px !important;
          }
          
          .cube-face.front { transform: rotateY(0deg) translate3d(0, 0, 75px) !important; }
          .cube-face.back { transform: rotateY(180deg) translate3d(0, 0, 75px) !important; }
          .cube-face.right { transform: rotateY(90deg) translate3d(0, 0, 75px) !important; }
          .cube-face.left { transform: rotateY(-90deg) translate3d(0, 0, 75px) !important; }
          .cube-face.top { transform: rotateX(90deg) translate3d(0, 0, 75px) !important; }
          .cube-face.bottom { transform: rotateX(-90deg) translate3d(0, 0, 75px) !important; }
          
          .cube-shadow {
            width: 250px !important;
            height: 80px !important;
            transform: translateY(200px) !important;
          }
        }
        
        @media (max-width: 480px) {
          .cube {
            width: 120px !important;
            height: 120px !important;
          }
          
          .cube-face {
            width: 120px !important;
            height: 120px !important;
          }
          
          .cube-face.front { transform: rotateY(0deg) translate3d(0, 0, 60px) !important; }
          .cube-face.back { transform: rotateY(180deg) translate3d(0, 0, 60px) !important; }
          .cube-face.right { transform: rotateY(90deg) translate3d(0, 0, 60px) !important; }
          .cube-face.left { transform: rotateY(-90deg) translate3d(0, 0, 60px) !important; }
          .cube-face.top { transform: rotateX(90deg) translate3d(0, 0, 60px) !important; }
          .cube-face.bottom { transform: rotateX(-90deg) translate3d(0, 0, 60px) !important; }
          
          .cube-shadow {
            width: 200px !important;
            height: 60px !important;
            transform: translateY(160px) !important;
          }
        }
      `}</style>
    </div>
  );
};

export default SpinningCube;