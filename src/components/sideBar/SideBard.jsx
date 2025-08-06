import React, { useState, useEffect } from 'react'
import ProfileImage from './components/ProFileImg'
import SideFooter from './components/SideFooter'
import Menu from './components/Menu'

export default function SideBard() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed left-0 top-0 h-full w-80 z-50">
      {/* Background with glassmorphism */}
      <div className={`absolute inset-0 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/10 backdrop-blur-xl border-r border-white/20' 
          : 'bg-gradient-to-b from-gray-900/95 via-gray-800/90 to-gray-900/95 backdrop-blur-lg'
      }`}>
        {/* Animated background elements */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-[#00A78E]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 left-10 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between p-8">
        {/* Top Section */}
        <div className="flex-1 flex flex-col justify-center space-y-8">
          {/* Profile Section */}
          <div className="transform transition-all duration-500 hover:scale-105">
            <ProfileImage />
          </div>
          
          {/* Navigation Menu */}
          <div className="flex-1 flex items-center justify-center">
            <Menu />
          </div>
        </div>

        {/* Footer Section */}
        <div className="mt-auto">
          <SideFooter />
        </div>
      </div>

      {/* Decorative border */}
      <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#00A78E]/50 to-transparent"></div>
    </div>
  )
}
