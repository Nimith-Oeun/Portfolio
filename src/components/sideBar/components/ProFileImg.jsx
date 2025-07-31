import React, { useState, useEffect } from "react";
import after from "../../../assets/after.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faLinkedin, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";
import Aos from "aos";

function ProfileImage() {
  const [isMobile, setIsMobile] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

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

  const socialLinks = [
    {
      icon: faFacebook,
      url: "https://www.facebook.com/Nimith.Oeun",
      color: "hover:bg-blue-600 hover:text-white",
      name: "Facebook"
    },
    {
      icon: faTwitter,
      url: "https://twitter.com/nimith_oeun",
      color: "hover:bg-sky-500 hover:text-white",
      name: "Twitter"
    },
    {
      icon: faLinkedin,
      url: "https://www.linkedin.com/in/nimith-oeun-824141321/",
      color: "hover:bg-blue-700 hover:text-white",
      name: "LinkedIn"
    },
    {
      icon: faInstagram,
      url: "https://instagram.com/nimith_oeun",
      color: "hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white",
      name: "Instagram"
    },
    {
      icon: faGithub,
      url: "https://github.com/nimith-oeun",
      color: "hover:bg-gray-800 hover:text-white",
      name: "GitHub"
    }
  ];

  return (
    <div className="flex flex-col justify-center items-center text-center">
      {/* Profile Image Container */}
      <div 
        className="relative group mb-6"
        {...(!isMobile && {
          "data-aos": "fade-down",
          "data-aos-duration": "1000",
          "data-aos-delay": "200",
        })}
      >
        {/* Outer ring with gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#00A78E] via-teal-600 to-blue-600 rounded-full p-1 animate-spin-slow">
          <div className="bg-gray-900 rounded-full p-3 h-full">
            <div className="w-32 h-32 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full"></div>
          </div>
        </div>
        
        {/* Main profile image */}
        <div className="relative z-10 bg-gradient-to-r from-[#00A78E] to-teal-600 rounded-full p-1">
          <div className="bg-gray-900 rounded-full p-3">
            <div className="relative w-32 h-32 rounded-full overflow-hidden group-hover:scale-105 transition-transform duration-300">
              <img
                loading="lazy"
                src={after}
                alt="Profile picture of O Nimith"
                className={`object-cover w-full h-full transition-all duration-500 ${
                  imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                }`}
                onLoad={() => setImageLoaded(true)}
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#00A78E]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-2">
                <span className="text-white text-xs font-semibold">Full Stack Developer</span>
              </div>
            </div>
          </div>
        </div>

        {/* Status indicator */}
        <div className="absolute bottom-2 right-2 z-20">
          <div className="w-6 h-6 bg-green-500 rounded-full border-3 border-gray-900 flex items-center justify-center">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Floating decoration */}
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#00A78E]/20 rounded-full blur-md animate-pulse"></div>
        <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-blue-500/20 rounded-full blur-md animate-pulse delay-1000"></div>
      </div>

      {/* Name and Title */}
      <div 
        className="mb-6"
        {...(!isMobile && {
          "data-aos": "fade-up",
          "data-aos-duration": "800",
          "data-aos-delay": "400",
        })}
      >
        <h1 className="text-2xl font-bold text-white mb-2 bg-gradient-to-r from-white via-gray-100 to-[#00A78E] bg-clip-text text-transparent">
          OEUN Nimith
        </h1>
        <div className="flex items-center justify-center mb-2">
          <div className="w-8 h-px bg-gradient-to-r from-transparent via-[#00A78E] to-transparent"></div>
          <span className="px-3 text-[#00A78E] text-sm font-medium">•</span>
          <div className="w-8 h-px bg-gradient-to-r from-transparent via-[#00A78E] to-transparent"></div>
        </div>
        <p className="text-gray-300 text-sm font-medium">
          Backend Developer
        </p>
        <p className="text-gray-400 text-xs mt-1">
          React • Java • PostgreSQL
        </p>
      </div>

      {/* Social Links */}
      <div 
        className="flex gap-3"
        {...(!isMobile && {
          "data-aos": "fade-up",
          "data-aos-duration": "800",
          "data-aos-delay": "600",
        })}
      >
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center text-gray-300 transition-all duration-300 transform hover:scale-110 hover:rotate-6 ${social.color}`}
            title={social.name}
            {...(!isMobile && {
              "data-aos": "zoom-in",
              "data-aos-duration": "600",
              "data-aos-delay": `${800 + index * 100}`,
            })}
          >
            <FontAwesomeIcon icon={social.icon} className="text-lg transition-transform duration-300 group-hover:scale-110" />
            
            {/* Hover glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#00A78E]/20 to-blue-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
            
            {/* Tooltip */}
            <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-gray-700">
              {social.name}
            </div>
          </a>
        ))}
      </div>

      {/* Availability Badge */}
      <div 
        className="mt-6 px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full"
        {...(!isMobile && {
          "data-aos": "fade-up",
          "data-aos-duration": "600",
          "data-aos-delay": "1000",
        })}
      >
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-green-400 text-xs font-medium">Available for work</span>
        </div>
      </div>
    </div>
  );
}

export default ProfileImage;
