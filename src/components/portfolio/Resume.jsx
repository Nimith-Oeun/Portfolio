import React, { useState, useEffect } from "react";
import Summary from "./components/Summary";
import Education from "./components/Education";
import ProfessionalExperience from "./components/Experience";
import Aos from "aos";

function Resume() {
    const [isMobile, setIsMobile] = useState(false);
    
    useEffect(() => {
        Aos.init();
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
        <section className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 px-6 py-16 lg:px-14 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 right-20 w-72 h-72 bg-[#00A78E]/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-400/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
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
                        <span className="text-sm font-medium text-[#00A78E]">Professional Journey</span>
                    </div>

                    <h1 
                        className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-800 via-gray-600 to-[#00A78E] bg-clip-text text-transparent mb-6"
                        {...(!isMobile && {
                            "data-aos": "fade-up",
                            "data-aos-duration": "800",
                            "data-aos-delay": "200",
                        })}
                    >
                        Resume & Experience
                    </h1>
                    
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
                        A comprehensive overview of my professional journey, educational background, and career milestones. 
                        Discover the experiences that have shaped my expertise in web development and technology.
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Left Column */}
                    <div 
                        className="space-y-12"
                        {...(!isMobile && {
                            "data-aos": "fade-right",
                            "data-aos-duration": "1000",
                            "data-aos-delay": "800",
                        })}
                    >
                        <Summary />
                        <Education />
                    </div>

                    {/* Right Column */}
                    <div 
                        className="space-y-12"
                        {...(!isMobile && {
                            "data-aos": "fade-left",
                            "data-aos-duration": "1000",
                            "data-aos-delay": "1000",
                        })}
                    >
                        <ProfessionalExperience />
                    </div>
                </div>

                {/* Call to Action Section */}
                <div className="mt-20 text-center">
                    <div 
                        className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-gray-200/50 shadow-xl"
                        {...(!isMobile && {
                            "data-aos": "fade-up",
                            "data-aos-duration": "1000",
                            "data-aos-delay": "1400",
                        })}
                    >
                        <h3 className="text-3xl font-bold text-gray-800 mb-4">
                            Ready to Work Together?
                        </h3>
                        <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                            Let's discuss how my experience and skills can contribute to your next project. 
                            I'm always excited to take on new challenges and create amazing digital experiences.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="group relative overflow-hidden bg-gradient-to-r from-[#00A78E] to-teal-600 hover:from-teal-600 hover:to-[#00A78E] text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                                <span className="relative z-10 flex items-center justify-center">
                                    Download Resume
                                    <svg className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                            </button>
                            
                            <button className="group bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg">
                                <span className="flex items-center justify-center">
                                    Get In Touch
                                    <svg className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
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

export default Resume;
