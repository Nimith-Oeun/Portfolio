import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faEnvelope, faHouse, faServer, faUser, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link, Events, scrollSpy } from 'react-scroll';
import Aos from 'aos';

function Menu() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const sectionIds = ['home', 'about', 'resume', 'portfolio', 'contact'];

  const menuItems = [
    { id: 'home', icon: faHouse, label: 'Home', description: 'Welcome & Introduction' },
    { id: 'about', icon: faUser, label: 'About Me', description: 'Who I Am' },
    { id: 'resume', icon: faServer, label: 'Resume', description: 'Experience & Skills' },
    { id: 'portfolio', icon: faBriefcase, label: 'Portfolio', description: 'My Projects' },
    { id: 'contact', icon: faEnvelope, label: 'Contact', description: 'Get In Touch' }
  ];

  useEffect(() => {
    Events.scrollEvent.register('begin', function (to, element) {
      setActiveSection(to);
    });

    Events.scrollEvent.register('end', function (to, element) {
      setActiveSection(to);
    });

    scrollSpy.update();

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    const handleScroll = () => {
      determineActiveSection();
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const determineActiveSection = () => {
    for (let i = 0; i < sectionIds.length; i++) {
      const section = sectionIds[i];
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
          setActiveSection(section);
          break;
        }
      }
    }
  };

  return (
    <nav className="w-full">
      <ul className="space-y-2">
        {menuItems.map((item, index) => {
          const isActive = activeSection === item.id;
          const isHovered = hoveredItem === item.id;
          
          return (
            <li 
              key={item.id}
              {...(!isMobile && {
                "data-aos": "fade-right",
                "data-aos-duration": "600",
                "data-aos-delay": `${200 + index * 100}`,
              })}
            >
              <Link
                to={item.id}
                smooth={true}
                duration={500}
                className={`group relative block w-full p-4 rounded-2xl transition-all duration-300 cursor-pointer overflow-hidden ${
                  isActive 
                    ? 'bg-gradient-to-r from-[#00A78E]/20 to-teal-600/20 border border-[#00A78E]/30 shadow-lg' 
                    : 'hover:bg-white/10 hover:backdrop-blur-sm border border-transparent hover:border-white/20'
                }`}
                onSetActive={() => setActiveSection(item.id)}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-r from-[#00A78E]/5 to-blue-500/5 transition-opacity duration-300 ${
                  isHovered || isActive ? 'opacity-100' : 'opacity-0'
                }`}></div>

                {/* Active indicator line */}
                {isActive && (
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-[#00A78E] to-teal-600 rounded-r-full"></div>
                )}

                {/* Content */}
                <div className="relative z-10 flex items-center">
                  {/* Icon container */}
                  <div className={`flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 ${
                    isActive 
                      ? 'bg-gradient-to-r from-[#00A78E] to-teal-600 text-white shadow-lg scale-110' 
                      : 'bg-white/10 backdrop-blur-sm text-gray-300 group-hover:bg-[#00A78E]/20 group-hover:text-[#00A78E] group-hover:scale-105'
                  }`}>
                    <FontAwesomeIcon 
                      icon={item.icon} 
                      className={`text-lg transition-all duration-300 ${
                        isActive ? 'scale-110' : 'group-hover:scale-110'
                      }`} 
                    />
                  </div>

                  {/* Text content */}
                  <div className="ml-4 flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className={`font-semibold transition-colors duration-300 ${
                          isActive ? 'text-[#00A78E]' : 'text-white group-hover:text-[#00A78E]'
                        }`}>
                          {item.label}
                        </h3>
                        <p className={`text-xs transition-colors duration-300 ${
                          isActive ? 'text-[#00A78E]/80' : 'text-gray-400 group-hover:text-gray-300'
                        }`}>
                          {item.description}
                        </p>
                      </div>
                      
                      {/* Arrow indicator */}
                      <FontAwesomeIcon 
                        icon={faChevronRight} 
                        className={`text-sm transition-all duration-300 ${
                          isActive 
                            ? 'text-[#00A78E] translate-x-1 opacity-100' 
                            : 'text-gray-500 translate-x-0 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:text-[#00A78E]'
                        }`}
                      />
                    </div>
                  </div>
                </div>

                {/* Animated border */}
                <div className={`absolute inset-0 rounded-2xl transition-all duration-300 ${
                  isActive 
                    ? 'ring-2 ring-[#00A78E]/50 ring-offset-2 ring-offset-transparent' 
                    : ''
                }`}></div>

                {/* Hover glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-r from-[#00A78E]/10 to-blue-500/10 rounded-2xl transition-opacity duration-300 ${
                  isHovered && !isActive ? 'opacity-100' : 'opacity-0'
                }`}></div>
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Menu decoration */}
      <div className="mt-6 flex justify-center">
        <div className="flex space-x-2">
          {menuItems.map((_, index) => (
            <div 
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === menuItems.findIndex(item => item.id === activeSection)
                  ? 'bg-[#00A78E] scale-125' 
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            ></div>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Menu;