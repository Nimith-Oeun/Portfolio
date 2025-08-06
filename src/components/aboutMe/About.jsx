import React, { useEffect, useState } from "react";
import InfoItem from "./components/InfoItem";
import ProfileImage from "./components/ProfileImg";
import aos from "aos";

const AboutMe = () => {
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

  const personalInfo = [
    { label: "Birthday:", value: "06.01.2000" },
    { label: "Website:", value: "#" },
    { label: "Phone:", value: "+855 95 446 136" },
    { label: "City:", value: "Phnum Penh" },
    { label: "Age:", value: "24" },
    { label: "Degree:", value: "Bacholer" },
    { label: "Email:", value: "oeunnimith@gmail.com" },
    { label: "Freelance:", value: "unavilable" },
  ];
  console.log(personalInfo);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 px-6 py-16 lg:px-14">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#00A78E] to-teal-700 bg-clip-text text-transparent mb-4">
            About Me
          </h1>
          <div 
            className="w-24 h-1 bg-gradient-to-r from-[#00A78E] to-teal-600 mx-auto rounded-full mb-6"
            {...(!isMobile && {
              "data-aos": "fade-up",
              "data-aos-duration": "800",
              "data-aos-delay": "200",
            })}
          />
          <p className="text-gray-600 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Passionate about creating beautiful, functional, and user-centered digital experiences. 
            I combine technical expertise with creative vision to bring ideas to life through code.
          </p>
        </div>

        {/* Main Content Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Profile Image with Modern Card */}
          <div 
            className="relative"
            {...(!isMobile && {
              "data-aos": "fade-right",
              "data-aos-duration": "1000",
              "data-aos-delay": "400",
            })}
          >
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 hover:shadow-3xl transition-all duration-500">
              <div className="relative">
                <ProfileImage />
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-[#00A78E] to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">👋</span>
                </div>
              </div>
            </div>
          </div>

          {/* Information Section */}
          <div 
            className="space-y-8"
            {...(!isMobile && {
              "data-aos": "fade-left",
              "data-aos-duration": "1000",
              "data-aos-delay": "600",
            })}
          >
            {/* Role Title */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-3">
                Back-End Developer
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-[#00A78E] to-teal-600 rounded-full mb-4"></div>
              <p className="text-gray-600 text-lg leading-relaxed">
                Crafting modern web experiences with cutting-edge technologies and design principles. 
                Specialized in React, JavaScript, and responsive design to deliver exceptional user interfaces.
              </p>
            </div>

            {/* Personal Information Cards */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                <span className="w-2 h-2 bg-[#00A78E] rounded-full mr-3"></span>
                Personal Information
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  {personalInfo
                    .slice(0, 4)
                    .map((item, index) => (
                      <InfoItem
                        key={index}
                        label={item.label}
                        value={item.value}
                      />
                    ))}
                </div>
                <div className="space-y-4">
                  {personalInfo.slice(4).map((item, index) => (
                    <InfoItem
                      key={index + 4}
                      label={item.label}
                      value={item.value}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-[#00A78E] to-teal-600 rounded-2xl p-6 text-white">
              <h3 className="text-xl font-semibold mb-3">Let's Work Together</h3>
              <p className="text-teal-100 mb-4">
                Ready to bring your ideas to life? Let's create something amazing together.
              </p>
              <button className="bg-white text-[#00A78E] px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg">
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutMe;
