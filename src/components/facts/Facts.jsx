import React,{useState,useEffect} from 'react';
import StatCard from './StatCard';
import aos from "aos";

const statsData = [
  { 
    iconType: "project", 
    number: "11+", 
    text: "Projects Completed",
    description: "Successfully delivered projects",
    color: "from-blue-500 to-blue-600"
  },
  { 
    iconType: "support", 
    number: "24/7", 
    text: "Support Available",
    description: "Round the clock assistance",
    color: "from-green-500 to-green-600"
  },
  { 
    iconType: "process", 
    number: "5+", 
    text: "Years Experience",
    description: "Professional development",
    color: "from-purple-500 to-purple-600"
  },
  { 
    iconType: "client", 
    number: "25+", 
    text: "Happy Clients",
    description: "Satisfied customers worldwide",
    color: "from-[#00A78E] to-teal-600"
  }
];

function Facts() {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
      aos.init();
      //set size to the screen for animation 
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 640); // Adjust the breakpoint as needed
      };
  
      handleResize(); // Check the screen size on initial render
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 px-6 py-16 lg:px-14 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-[#00A78E]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-teal-400/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div 
            className="inline-flex items-center px-4 py-2 bg-[#00A78E]/10 rounded-full border border-[#00A78E]/20 mb-6"
            {...(!isMobile && {
              "data-aos": "fade-up",
              "data-aos-duration": "600",
            })}
          >
            <span className="w-2 h-2 bg-[#00A78E] rounded-full mr-3 animate-pulse"></span>
            <span className="text-sm font-medium text-[#00A78E]">Statistics & Achievements</span>
          </div>

          <h2 
            className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-800 via-gray-600 to-[#00A78E] bg-clip-text text-transparent mb-6"
            {...(!isMobile && {
              "data-aos": "fade-up",
              "data-aos-duration": "800",
              "data-aos-delay": "200",
            })}
          >
            Facts & Figures
          </h2>
          
          <div 
            className="w-24 h-1 bg-gradient-to-r from-[#00A78E] to-teal-600 mx-auto rounded-full mb-8"
            {...(!isMobile && {
              "data-aos": "fade-up",
              "data-aos-duration": "600",
              "data-aos-delay": "400",
            })}
          />
          
          <p 
            className="text-gray-600 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed"
            {...(!isMobile && {
              "data-aos": "fade-up",
              "data-aos-duration": "800",
              "data-aos-delay": "600",
            })}
          >
            Numbers that showcase my journey, dedication, and the impact I've made through 
            passionate web development and design. Each statistic represents a milestone in my professional growth.
          </p>
        </div>

        {/* Stats Grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
          {...(!isMobile && {
            "data-aos": "fade-up",
            "data-aos-duration": "1000",
            "data-aos-delay": "800",
          })}
        >
          {statsData.map((stat, index) => (
            <StatCard 
              key={index} 
              iconType={stat.iconType} 
              number={stat.number} 
              text={stat.text} 
              description={stat.description}
              color={stat.color}
              delay={index * 200}
              isMobile={isMobile}
            />
          ))}
        </div>

        {/* Additional Achievement Section */}
        <div className="mt-20 text-center">
          <div 
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-gray-200/50 shadow-xl"
            {...(!isMobile && {
              "data-aos": "fade-up",
              "data-aos-duration": "1000",
              "data-aos-delay": "1200",
            })}
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Ready to Create Something Amazing?
            </h3>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Let's turn your ideas into reality with cutting-edge web solutions and exceptional user experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group relative overflow-hidden bg-gradient-to-r from-[#00A78E] to-teal-600 hover:from-teal-600 hover:to-[#00A78E] text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                <span className="relative z-10 flex items-center justify-center">
                  Start a Project
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </button>
              
              <button className="group bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <span className="flex items-center justify-center">
                  View Portfolio
                  <svg className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Facts;