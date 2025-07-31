import React, { useState, useEffect } from "react";
import Aos from "aos";

function ProfessionalExperience() {
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

    const experienceData = [
        {
            id: 1,
            position: "Senior Full Stack Developer",
            company: "TechCorp Solutions",
            location: "Dhaka, Bangladesh",
            period: "2023 - Present",
            type: "Full-time",
            description: "Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and collaborating with cross-functional teams to deliver high-quality software solutions.",
            responsibilities: [
                "Architected and developed 5+ full-stack applications serving 10K+ users",
                "Led a team of 4 developers in agile development processes",
                "Implemented CI/CD pipelines reducing deployment time by 60%",
                "Optimized application performance resulting in 40% faster load times"
            ],
            technologies: ["React", "Node.js", "MongoDB", "AWS", "Docker", "TypeScript"],
            achievements: [
                "Employee of the Month - March 2024",
                "Led successful migration to microservices architecture",
                "Increased team productivity by 35%"
            ],
            icon: "💼",
            color: "from-blue-600 to-indigo-700",
            status: "current"
        },
        {
            id: 2,
            position: "Full Stack Developer",
            company: "Digital Innovations Ltd",
            location: "Dhaka, Bangladesh",
            period: "2022 - 2023",
            type: "Full-time",
            description: "Developed and maintained multiple client-facing web applications. Collaborated with UI/UX designers to implement responsive and user-friendly interfaces.",
            responsibilities: [
                "Built 8+ responsive web applications using React and Vue.js",
                "Developed RESTful APIs using Express.js and Python Flask",
                "Integrated third-party services and payment gateways",
                "Collaborated with designers to ensure pixel-perfect implementations"
            ],
            technologies: ["React", "Vue.js", "Express.js", "MySQL", "Python", "Git"],
            achievements: [
                "Delivered all projects on time and within budget",
                "Reduced bug reports by 45% through thorough testing",
                "Mentored 2 junior developers"
            ],
            icon: "🚀",
            color: "from-emerald-600 to-teal-700",
            status: "completed"
        },
        {
            id: 3,
            position: "Frontend Developer Intern",
            company: "StartupHub",
            location: "Dhaka, Bangladesh",
            period: "2021 - 2022",
            type: "Internship",
            description: "Assisted in developing user interfaces for startup projects. Gained hands-on experience with modern frontend frameworks and development best practices.",
            responsibilities: [
                "Created responsive UI components using React and Tailwind CSS",
                "Collaborated with backend developers for API integration",
                "Participated in code reviews and team meetings",
                "Contributed to documentation and testing processes"
            ],
            technologies: ["React", "Tailwind CSS", "JavaScript", "Git", "Figma"],
            achievements: [
                "Completed internship with excellent performance rating",
                "Contributed to 3 successful product launches",
                "Received offer for full-time position"
            ],
            icon: "🌱",
            color: "from-purple-600 to-pink-700",
            status: "completed"
        },
        {
            id: 4,
            position: "Freelance Web Developer",
            company: "Self-Employed",
            location: "Remote",
            period: "2020 - Present",
            type: "Freelance",
            description: "Providing web development services to various clients including small businesses and startups. Specializing in custom website development and e-commerce solutions.",
            responsibilities: [
                "Developed 15+ custom websites for diverse clients",
                "Provided ongoing maintenance and support services",
                "Consulted on technical requirements and project planning",
                "Managed client relationships and project timelines"
            ],
            technologies: ["WordPress", "Shopify", "React", "PHP", "MySQL", "CSS"],
            achievements: [
                "Maintained 100% client satisfaction rate",
                "Generated $25K+ in revenue",
                "Built long-term relationships with repeat clients"
            ],
            icon: "💻",
            color: "from-orange-600 to-red-700",
            status: "ongoing"
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
                    Professional Experience
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-[#00A78E] to-teal-600 rounded-full"></div>
            </div>

            {/* Timeline Container */}
            <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00A78E] via-blue-500 to-orange-600"></div>

                {/* Experience Items */}
                <div className="space-y-12">
                    {experienceData.map((item, index) => (
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
                                {/* Status indicator */}
                                {item.status === 'current' && (
                                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                        <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                                    </div>
                                )}
                                {item.status === 'ongoing' && (
                                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                                        <div className="w-3 h-3 bg-white rounded-full"></div>
                                    </div>
                                )}
                                {/* Connecting line to card */}
                                <div className="absolute top-8 left-16 w-8 h-0.5 bg-gradient-to-r from-gray-300 to-transparent"></div>
                            </div>

                            {/* Content Card */}
                            <div className="flex-1 ml-8 bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 border border-gray-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02]">
                                {/* Header */}
                                <div className="mb-6">
                                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                                        <div className="flex-1">
                                            <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-2">
                                                {item.position}
                                            </h3>
                                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-600">
                                                <div className="flex items-center">
                                                    <svg className="w-5 h-5 mr-2 text-[#00A78E]" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                    </svg>
                                                    <span className="font-semibold">{item.company}</span>
                                                </div>
                                                <span className="hidden sm:inline text-gray-400">•</span>
                                                <div className="flex items-center">
                                                    <svg className="w-5 h-5 mr-2 text-[#00A78E]" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                                    </svg>
                                                    <span>{item.location}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-2 mt-4 lg:mt-0">
                                            <span className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${item.color} text-white text-sm font-semibold rounded-full shadow-md`}>
                                                📅 {item.period}
                                            </span>
                                            <span className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-full border border-gray-200">
                                                {item.type}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    {item.description}
                                </p>

                                {/* Responsibilities */}
                                <div className="mb-6">
                                    <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                                        <span className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-xs mr-2">
                                            📋
                                        </span>
                                        Key Responsibilities
                                    </h4>
                                    <div className="grid gap-3">
                                        {item.responsibilities.map((responsibility, respIndex) => (
                                            <div 
                                                key={respIndex}
                                                className="flex items-start p-3 bg-gray-50/80 hover:bg-[#00A78E]/5 rounded-xl transition-all duration-300 border border-gray-100/50"
                                            >
                                                <span className="w-2 h-2 bg-[#00A78E] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                                <span className="text-gray-700 text-sm leading-relaxed">{responsibility}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Technologies */}
                                <div className="mb-6">
                                    <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                                        <span className="w-6 h-6 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center text-white text-xs mr-2">
                                            ⚡
                                        </span>
                                        Technologies Used
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {item.technologies.map((tech, techIndex) => (
                                            <span 
                                                key={techIndex}
                                                className="px-3 py-1 bg-gradient-to-r from-[#00A78E]/10 to-teal-600/10 hover:from-[#00A78E]/20 hover:to-teal-600/20 text-[#00A78E] text-sm font-medium rounded-full border border-[#00A78E]/20 hover:border-[#00A78E]/40 transition-all duration-300 hover:scale-105 cursor-default"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Achievements */}
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                                        <span className="w-6 h-6 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center text-white text-xs mr-2">
                                            🏆
                                        </span>
                                        Key Achievements
                                    </h4>
                                    <div className="grid gap-3">
                                        {item.achievements.map((achievement, achievementIndex) => (
                                            <div 
                                                key={achievementIndex}
                                                className="flex items-center p-3 bg-gradient-to-r from-yellow-50 to-orange-50 hover:from-yellow-100 hover:to-orange-100 rounded-xl transition-all duration-300 border border-yellow-200/50"
                                            >
                                                <span className="text-xl mr-3">🌟</span>
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

            {/* Bottom summary */}
            <div className="mt-12 text-center">
                <div 
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#00A78E]/10 to-blue-500/10 rounded-full border border-[#00A78E]/20"
                    {...(!isMobile && {
                        "data-aos": "fade-up",
                        "data-aos-duration": "600",
                        "data-aos-delay": "1000",
                    })}
                >
                    <span className="text-2xl mr-3">📈</span>
                    <span className="text-gray-700 font-medium">4+ Years of Professional Growth</span>
                </div>
            </div>
        </div>
    );
}

export default ProfessionalExperience;
