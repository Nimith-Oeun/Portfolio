import React, { useState, useEffect } from "react";
import SkillIcon from "./SkillIcon";
import Aos from "aos";
import "aos/dist/aos.css";

const skillsData = [
    { 
        name: "HTML", 
        level: 95, 
        icon: "html",
        category: "Frontend",
        color: "from-orange-500 to-red-500"
    },
    { 
        name: "CSS", 
        level: 90, 
        icon: "css",
        category: "Frontend",
        color: "from-blue-500 to-blue-600"
    },
    { 
        name: "JavaScript", 
        level: 88, 
        icon: "javascript",
        category: "Frontend",
        color: "from-yellow-400 to-yellow-500"
    },
    { 
        name: "React JS", 
        level: 85, 
        icon: "react",
        category: "Frontend",
        color: "from-cyan-400 to-blue-500"
    },
    { 
        name: "Tailwind CSS", 
        level: 90, 
        icon: "tailwind",
        category: "Frontend",
        color: "from-teal-400 to-cyan-500"
    },
    { 
        name: "Figma", 
        level: 80, 
        icon: "figma",
        category: "Design",
        color: "from-purple-400 to-pink-400"
    },
    { 
        name: "Java", 
        level: 75, 
        icon: "java",
        category: "Backend",
        color: "from-red-600 to-orange-600"
    },
    { 
        name: "Spring Boot", 
        level: 70, 
        icon: "spring",
        category: "Backend",
        color: "from-green-500 to-green-600"
    },
    { 
        name: "PostgreSQL", 
        level: 78, 
        icon: "postgresql",
        category: "Database",
        color: "from-blue-600 to-indigo-600"
    },
    { 
        name: "GitHub", 
        level: 85, 
        icon: "github",
        category: "Tools",
        color: "from-gray-700 to-gray-900"
    }
];

const categories = ["All", "Frontend", "Backend", "Database", "Design", "Tools"];

function SkillSection() {
    const [isMobile, setIsMobile] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [filteredSkills, setFilteredSkills] = useState(skillsData);

    useEffect(() => {
        Aos.init();
        // Set size to the screen for animation
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 640); // Adjust the breakpoint as needed
        };

        handleResize(); // Check the screen size on initial render
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        if (selectedCategory === "All") {
            setFilteredSkills(skillsData);
        } else {
            setFilteredSkills(skillsData.filter(skill => skill.category === selectedCategory));
        }
    }, [selectedCategory]);

    return (
        <section className="relative min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 px-6 py-16 lg:px-14 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-32 right-32 w-72 h-72 bg-[#00A78E]/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-32 left-32 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
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
                        <span className="text-sm font-medium text-[#00A78E]">Technical Expertise</span>
                    </div>

                    <h2 
                        className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-800 via-gray-600 to-[#00A78E] bg-clip-text text-transparent mb-6"
                        {...(!isMobile && {
                            "data-aos": "fade-up",
                            "data-aos-duration": "800",
                            "data-aos-delay": "200",
                        })}
                    >
                        Skills & Technologies
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
                        A comprehensive toolkit of modern technologies and frameworks I use to create 
                        exceptional digital experiences. From frontend magic to backend power.
                    </p>
                </div>

                {/* Category Filter */}
                <div 
                    className="flex flex-wrap justify-center gap-4 mb-12"
                    {...(!isMobile && {
                        "data-aos": "fade-up",
                        "data-aos-duration": "800",
                        "data-aos-delay": "800",
                    })}
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                                selectedCategory === category
                                    ? 'bg-gradient-to-r from-[#00A78E] to-teal-600 text-white shadow-lg'
                                    : 'bg-white/80 text-gray-600 hover:bg-white hover:text-gray-800 shadow-md'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Skills Grid */}
                <div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                    {...(!isMobile && {
                        "data-aos": "fade-up",
                        "data-aos-duration": "1000",
                        "data-aos-delay": "1000",
                    })}
                >
                    {filteredSkills.map((skill, index) => (
                        <SkillIcon 
                            key={skill.name}
                            name={skill.name}
                            level={skill.level}
                            icon={skill.icon}
                            category={skill.category}
                            color={skill.color}
                            delay={index * 100}
                            isMobile={isMobile}
                        />
                    ))}
                </div>

                {/* Additional Section */}
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
                            Always Learning, Always Growing
                        </h3>
                        <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                            Technology evolves rapidly, and so do I. I'm constantly exploring new tools and frameworks 
                            to stay at the forefront of web development.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="group relative overflow-hidden bg-gradient-to-r from-[#00A78E] to-teal-600 hover:from-teal-600 hover:to-[#00A78E] text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                                <span className="relative z-10 flex items-center justify-center">
                                    Let's Collaborate
                                    <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                            </button>
                            
                            <button className="group bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg">
                                <span className="flex items-center justify-center">
                                    Download Resume
                                    <svg className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
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

export default SkillSection;