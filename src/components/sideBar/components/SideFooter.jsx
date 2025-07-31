import React, { useState, useEffect } from "react";
import Aos from "aos";

function SideFooter() {
  const [isMobile, setIsMobile] = useState(false);
  const [currentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <footer className="w-full">
      <div 
        className="text-center space-y-3"
        {...(!isMobile && {
          "data-aos": "fade-up",
          "data-aos-duration": "800",
          "data-aos-delay": "200",
        })}
      >
        {/* Decorative line */}
        <div className="flex items-center justify-center mb-4">
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#00A78E]/50 to-transparent"></div>
          <div className="mx-3 w-2 h-2 bg-[#00A78E] rounded-full animate-pulse"></div>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#00A78E]/50 to-transparent"></div>
        </div>

        {/* Copyright text */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
          <p className="text-xs text-gray-300 mb-2 font-medium">
            © Copyright {currentYear}
          </p>
          
          <div className="flex items-center justify-center gap-2 text-xs">
            <span className="text-gray-400">Designed with</span>
            <span className="text-red-400 text-sm animate-pulse">❤️</span>
            <span className="text-gray-400">by</span>
          </div>
          
          <div className="mt-2">
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#00A78E] via-teal-400 to-blue-500 bg-clip-text text-transparent font-bold text-lg">
                Nimith
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#00A78E] via-teal-400 to-blue-500 opacity-20 blur-sm"></div>
            </span>
          </div>
        </div>

        {/* Made with tech stack */}
        <div 
          className="text-center"
          {...(!isMobile && {
            "data-aos": "fade-up",
            "data-aos-duration": "600",
            "data-aos-delay": "400",
          })}
        >
          <p className="text-xs text-gray-500 mb-2">Built with</p>
          <div className="flex justify-center gap-2 flex-wrap">
            {['React', 'Tailwind', 'AOS'].map((tech, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-[#00A78E]/10 text-[#00A78E] text-xs rounded-md border border-[#00A78E]/20 hover:bg-[#00A78E]/20 transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Version info */}
        <div className="text-center pt-2 border-t border-white/10">
          <p className="text-xs text-gray-500">
            Version 2.0.0
          </p>
        </div>

        {/* Background decoration */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-[#00A78E]/5 rounded-full blur-lg animate-pulse"></div>
      </div>
    </footer>
  );
}

export default SideFooter;
