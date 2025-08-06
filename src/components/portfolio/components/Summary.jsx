import React, { useState, useEffect } from "react";
import Aos from "aos";

function Summary() {
    const [isMobile, setIsMobile] = useState(false);
    
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

    const personalInfo = [
        { 
            label: "Full Name", 
            value: "Mohammad Salehin", 
            icon: "👤"
        },
        { 
            label: "Date of Birth", 
            value: "16 Aug 2001", 
            icon: "🎂"
        },
        { 
            label: "Location", 
            value: "Dhaka, Bangladesh", 
            icon: "📍"
        },
        { 
            label: "Languages", 
            value: "Bengali (Native), English (Fluent)", 
            icon: "🌐"
        },
        { 
            label: "Freelance", 
            value: "Available", 
            icon: "💼"
        },
        { 
            label: "Remote Work", 
            value: "Available", 
            icon: "💻"
        }
    ];

    return (
        <div className="relative">
            {/* Section Header */}
            <div 
                className="mb-8"
                {...(!isMobile && {
                    "data-aos": "fade-up",
                    "data-aos-duration": "600",
                })}
            >
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-3">
                    Personal Summary
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-[#00A78E] to-teal-600 rounded-full"></div>
            </div>

            {/* Main Card */}
            <div 
                className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 group"
                {...(!isMobile && {
                    "data-aos": "fade-up",
                    "data-aos-duration": "800",
                    "data-aos-delay": "200",
                })}
            >
                {/* Decorative gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00A78E]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Content */}
                <div className="relative z-10">
                    {/* About Text */}
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                            <span className="w-8 h-8 bg-gradient-to-r from-[#00A78E] to-teal-600 rounded-lg flex items-center justify-center text-white text-sm mr-3">
                                ✨
                            </span>
                            About Me
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-base">
                            Passionate full-stack developer with a strong foundation in modern web technologies. 
                            I specialize in creating responsive, user-friendly applications using React, Node.js, 
                            and various other cutting-edge technologies. Always eager to learn and adapt to new 
                            challenges in the ever-evolving world of web development.
                        </p>
                    </div>

                    {/* Personal Information Grid */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-gray-800 mb-6 flex items-center">
                            <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-sm mr-3">
                                📋
                            </span>
                            Personal Information
                        </h4>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {personalInfo.map((item, index) => (
                                <div 
                                    key={index}
                                    className="group/item flex items-center p-4 bg-gray-50/80 hover:bg-[#00A78E]/5 rounded-xl transition-all duration-300 hover:scale-105 border border-gray-100/50 hover:border-[#00A78E]/20"
                                    {...(!isMobile && {
                                        "data-aos": "fade-up",
                                        "data-aos-duration": "600",
                                        "data-aos-delay": `${400 + index * 100}`,
                                    })}
                                >
                                    <div className="text-2xl mr-4 group-hover/item:scale-110 transition-transform duration-300">
                                        {item.icon}
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm text-gray-500 font-medium">{item.label}</p>
                                        <p className="text-gray-800 font-semibold">{item.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Skills Highlight */}
                    <div className="mt-8 pt-8 border-t border-gray-200/50">
                        <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                            <span className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center text-white text-sm mr-3">
                                🎯
                            </span>
                            Core Strengths
                        </h4>
                        
                        <div className="flex flex-wrap gap-3">
                            {[
                                "Problem Solving",
                                "Team Collaboration", 
                                "Continuous Learning",
                                "Attention to Detail",
                                "Project Management",
                                "Client Communication"
                            ].map((strength, index) => (
                                <span 
                                    key={index}
                                    className="px-4 py-2 bg-gradient-to-r from-[#00A78E]/10 to-teal-600/10 hover:from-[#00A78E]/20 hover:to-teal-600/20 text-[#00A78E] text-sm font-medium rounded-full border border-[#00A78E]/20 hover:border-[#00A78E]/40 transition-all duration-300 hover:scale-105 cursor-default"
                                    {...(!isMobile && {
                                        "data-aos": "fade-up",
                                        "data-aos-duration": "400",
                                        "data-aos-delay": `${800 + index * 50}`,
                                    })}
                                >
                                    {strength}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Floating decoration */}
                <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-[#00A78E]/10 to-transparent rounded-full blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-500"></div>
            </div>
        </div>
    );
}

export default Summary;