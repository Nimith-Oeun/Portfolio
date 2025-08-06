import React, { useState, useEffect, useRef } from "react";
import SideBard from "./components/sideBar/SideBard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Aos from "aos";
import "aos/dist/aos.css";
import About from "./components/aboutMe/About";
import Typed from "typed.js";
import Facts from "./components/facts/Facts";
import Skill from "./components/skill/Skill";
import Resume from "./components/portfolio/Resume";
import ProjectList from "./components/project/ProjectList";
import ContactPage from "./components/contact/ContactPage";

function App() {
  const [sideBar, setSideBar] = useState(false);
  const el = useRef(null);

  const handleSideBar = () => {
    setSideBar(!sideBar);
  };

  useEffect(() => {
    Aos.init();
    // animation for typed.js
    const typed = new Typed(el.current, {
      strings: ["Back_End Developer", "System Engineer", "Freelancer"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 2000,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  useEffect(() => {
    Aos.refresh(); // Refresh AOS to apply animations
  }, [sideBar]);

  return (
    <>
      <div className="w-full min-h-screen relative overflow-x-hidden">
        {/* Enhanced Sidebar with Modern Design */}
        <header
          className={`w-80 max-md:w-[75%] z-30 bg-gradient-to-b from-[#040B14] via-[#0a1525] to-[#040B14] h-[100vh] fixed backdrop-blur-xl border-r border-[#00A78E]/20 shadow-2xl ${
            sideBar ? "flex" : "max-lg:hidden"
          }`}
          data-aos={sideBar ? "fade-right" : "fade-left"}
          data-aos-duration="700"
        >
          <SideBard />
          {/* Decorative gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#00A78E]/5 to-transparent pointer-events-none"></div>
        </header>

        {/* Enhanced Main Content */}
        <main className="ml-80 max-lg:ml-0 relative">
          {/* Modern Hero Section */}
          <section id="home" className="relative min-h-screen bg-[url('./assets/BG.jpg')] bg-cover bg-center bg-no-repeat overflow-hidden">
            {/* Enhanced overlay with gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-[#00A78E]/20"></div>
            
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-20 right-20 w-72 h-72 bg-[#00A78E]/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-20 left-20 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-white/5 rounded-full blur-2xl animate-pulse delay-2000"></div>
            </div>

            {/* Enhanced hero content */}
            <article className="relative z-10 text-white h-screen flex flex-col justify-center pl-16 max-sm:pl-5 max-w-4xl">
              <div 
                className="space-y-6"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="300"
              >
                {/* Greeting badge */}
                <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-4">
                  <span className="w-2 h-2 bg-[#00A78E] rounded-full mr-3 animate-pulse"></span>
                  <span className="text-sm font-medium text-gray-200">Welcome to my portfolio</span>
                </div>

                {/* Enhanced main heading */}
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight max-sm:text-4xl">
                  <span className="block text-gray-100">Hi, This is</span>
                  <span className="block bg-gradient-to-r from-white via-gray-100 to-[#00A78E] bg-clip-text text-transparent">
                    Oeun Nimith
                  </span>
                  <span className="text-[#00A78E] text-6xl lg:text-8xl">.</span>
                </h1>

                {/* Enhanced subtitle with typing effect */}
                <div className="space-y-4">
                  <p className="text-2xl lg:text-3xl font-semibold max-sm:text-xl text-gray-200">
                    I'm a <span className="text-[#00A78E] font-bold" ref={el}></span>
                  </p>
                  <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
                    Passionate about creating beautiful, functional, and user-centered digital experiences. 
                    Let's build something amazing together.
                  </p>
                </div>

                {/* Enhanced CTA buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-8">
                  <button className="group relative overflow-hidden bg-gradient-to-r from-[#00A78E] to-teal-600 hover:from-teal-600 hover:to-[#00A78E] text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                    <span className="relative z-10 flex items-center justify-center">
                      View My Work
                      <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </button>
                  
                  <button className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-xl">
                    <span className="flex items-center justify-center">
                      Get In Touch
                      <svg className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </span>
                  </button>
                </div>

                {/* Social proof or scroll indicator */}
                <div className="flex items-center space-x-6 pt-8">
                  <div className="flex items-center space-x-2">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#00A78E] to-teal-400 border-2 border-white/20"></div>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-teal-400 to-blue-400 border-2 border-white/20"></div>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 border-2 border-white/20"></div>
                    </div>
                    <span className="text-sm text-gray-300">Trusted by clients worldwide</span>
                  </div>
                </div>
              </div>

              {/* Scroll indicator */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                  <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
                </div>
              </div>
            </article>
          </section>
          {/* Enhanced Sections with Modern Transitions */}
          <section id="about" className="relative">
            <About />
          </section>
          
          <section id="facts" className="relative">
            <Facts />
          </section>
          
          <section id="skill" className="relative">
            <Skill />
          </section>
          
          <section id="resume" className="relative">
            <Resume />
          </section>
          
          <section id="portfolio" className="relative">
            <ProjectList />
          </section>
          
          <section id="contact" className="relative">
            <ContactPage />
          </section>
        </main>

        {/* Enhanced Mobile Menu Button */}
        <div
          onClick={handleSideBar}
          className="fixed top-6 right-6 w-12 h-12 bg-gradient-to-r from-[#00A78E] to-teal-600 hover:from-teal-600 hover:to-[#00A78E] items-center justify-center rounded-2xl text-white cursor-pointer z-40 max-lg:flex lg:hidden shadow-2xl backdrop-blur-sm border border-white/10 transition-all duration-300 hover:scale-110 group"
        >
          <div className="relative">
            {sideBar ? (
              <FontAwesomeIcon 
                icon={faXmark} 
                className="text-xl transition-transform duration-300 group-hover:rotate-90" 
              />
            ) : (
              <FontAwesomeIcon 
                icon={faBars} 
                className="text-xl transition-transform duration-300 group-hover:scale-110" 
              />
            )}
          </div>
          
          {/* Button glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#00A78E] to-teal-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
        </div>

        {/* Background overlay for mobile menu */}
        {sideBar && (
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-20 lg:hidden"
            onClick={handleSideBar}
            data-aos="fade-in"
            data-aos-duration="300"
          ></div>
        )}

        {/* Floating elements for modern aesthetic */}
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#00A78E]/30 rounded-full animate-ping delay-1000"></div>
          <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-teal-400/40 rounded-full animate-ping delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-white/20 rounded-full animate-ping delay-3000"></div>
        </div>
      </div>
    </>
  );
}

export default App;