import React, { useState, useEffect } from "react";
import Aos from "aos";

function Education() {
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

    const educationData = [
        {
            id: 1,
            degree: "Bachelor of Science in Computer Science",
            institution: "Dhaka University",
            location: "Dhaka, Bangladesh",
            period: "2019 - 2023",
            grade: "CGPA: 3.75/4.00",
            description: "Specialized in software development, data structures, algorithms, and web technologies. Completed final year project on full-stack web application development.",
            achievements: [
                "Dean's List for 3 consecutive semesters",
                "Best Final Year Project Award",
                "Programming Contest Winner"
            ],
            icon: "🎓",
            color: "from-blue-500 to-indigo-600"
        },
        {
            id: 2,
            degree: "Higher Secondary Certificate (HSC)",
            institution: "Dhaka College",
            location: "Dhaka, Bangladesh",
            period: "2017 - 2019",
            grade: "GPA: 5.00/5.00",
            description: "Focused on Science group with Mathematics, Physics, Chemistry, and ICT. Developed strong analytical and problem-solving skills.",
            achievements: [
                "Scholarship recipient",
                "Science Fair Winner",
                "Perfect attendance"
            ],
            icon: "📚",
            color: "from-emerald-500 to-teal-600"
        },
        {
            id: 3,
            degree: "Secondary School Certificate (SSC)",
            institution: "Dhaka High School",
            location: "Dhaka, Bangladesh",
            period: "2015 - 2017",
            grade: "GPA: 5.00/5.00",
            description: "Strong foundation in mathematics and sciences. Active participant in school computer club and various academic competitions.",
            achievements: [
                "Academic Excellence Award",
                "Computer Club President",
                "Inter-school Competition Winner"
            ],
            icon: "🏫",
            color: "from-purple-500 to-pink-600"
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
                    Educational Background
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-[#00A78E] to-teal-600 rounded-full"></div>
            </div>

            {/* Timeline Container */}
            <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00A78E] via-blue-500 to-purple-600"></div>

                {/* Education Items */}
                <div className="space-y-8">
                    {educationData.map((item, index) => (
                        <div 
                            key={item.id}
                            className="relative flex items-start group"
                            {...(!isMobile && {
                                "data-aos": "fade-up",
                                "data-aos-duration": "800",
                                "data-aos-delay": `${200 + index * 200}`,
                            })}
                        >
                            {/* Timeline Dot */}
                            <div className="relative z-10 flex-shrink-0">
                                <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                    {item.icon}
                                </div>
                                {/* Connecting line to card */}
                                <div className="absolute top-8 left-16 w-8 h-0.5 bg-gradient-to-r from-gray-300 to-transparent"></div>
                            </div>

                            {/* Content Card */}
                            <div className="flex-1 ml-8 bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 border border-gray-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02]">
                                {/* Header */}
                                <div className="mb-6">
                                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                                        <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-2 lg:mb-0">
                                            {item.degree}
                                        </h3>
                                        <span className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${item.color} text-white text-sm font-semibold rounded-full shadow-md`}>
                                            📅 {item.period}
                                        </span>
                                    </div>
                                    
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-600">
                                        <div className="flex items-center">
                                            <svg className="w-5 h-5 mr-2 text-[#00A78E]" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span className="font-semibold">{item.institution}</span>
                                        </div>
                                        
                                        <div className="flex items-center">
                                            <svg className="w-5 h-5 mr-2 text-[#00A78E]" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                            </svg>
                                            <span>{item.location}</span>
                                        </div>
                                        
                                        <div className="flex items-center">
                                            <svg className="w-5 h-5 mr-2 text-[#00A78E]" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span className="font-semibold text-[#00A78E]">{item.grade}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    {item.description}
                                </p>

                                {/* Achievements */}
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                                        <span className="w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center text-white text-xs mr-2">
                                            🏆
                                        </span>
                                        Key Achievements
                                    </h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                        {item.achievements.map((achievement, achievementIndex) => (
                                            <div 
                                                key={achievementIndex}
                                                className="flex items-center p-3 bg-gray-50/80 hover:bg-[#00A78E]/5 rounded-xl transition-all duration-300 hover:scale-105 border border-gray-100/50"
                                            >
                                                <span className="w-2 h-2 bg-[#00A78E] rounded-full mr-3 flex-shrink-0"></span>
                                                <span className="text-gray-700 text-sm font-medium">{achievement}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Decorative elements */}
                                <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-[#00A78E]/10 to-transparent rounded-full blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-500"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom decoration */}
            <div className="mt-12 text-center">
                <div 
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#00A78E]/10 to-blue-500/10 rounded-full border border-[#00A78E]/20"
                    {...(!isMobile && {
                        "data-aos": "fade-up",
                        "data-aos-duration": "600",
                        "data-aos-delay": "800",
                    })}
                >
                    <span className="text-2xl mr-3">🎯</span>
                    <span className="text-gray-700 font-medium">Continuous Learning & Growth</span>
                </div>
            </div>
        </div>
    );
}

export default Education;
