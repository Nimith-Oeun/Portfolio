import React, { useState, useEffect } from "react";
import Aos from "aos";
import Project1 from "../../assets/Project1.png";
import ecomerce from "../../assets/ecomerce.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare, faEye } from "@fortawesome/free-solid-svg-icons";
import { faGithub as fabGithub } from "@fortawesome/free-brands-svg-icons";

export default function ProjectList() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

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

  const projects = [
    {
      id: 1,
      title: "JobFinder Pro",
      description: "A comprehensive job search platform built with React and Node.js. Features include advanced filtering, real-time notifications, and seamless application management.",
      image: Project1,
      category: "web",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Socket.io"],
      liveUrl: "https://jobfinder-tawny.vercel.app/",
      githubUrl: "https://github.com/username/jobfinder",
      status: "completed",
      featured: true
    },
    {
      id: 2,
      title: "E-Commerce Hub",
      description: "Modern e-commerce platform with secure payment integration, inventory management, and advanced analytics. Built for scalability and performance.",
      image: ecomerce,
      category: "web",
      technologies: ["React", "Stripe", "Firebase", "Tailwind CSS", "Redux"],
      liveUrl: "https://ecommerce-demo.vercel.app/",
      githubUrl: "https://github.com/username/ecommerce",
      status: "completed",
      featured: true
    },
    {
      id: 3,
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, team communication, and progress tracking features.",
      image: Project1,
      category: "mobile",
      technologies: ["React Native", "Firebase", "Redux", "TypeScript"],
      liveUrl: "https://taskapp-demo.vercel.app/",
      githubUrl: "https://github.com/username/taskapp",
      status: "in-progress",
      featured: false
    },
    {
      id: 4,
      title: "Weather Analytics Dashboard",
      description: "Data visualization dashboard for weather analytics with interactive charts, forecasting, and location-based insights.",
      image: ecomerce,
      category: "dashboard",
      technologies: ["Vue.js", "D3.js", "Chart.js", "API Integration"],
      liveUrl: "https://weather-dashboard.vercel.app/",
      githubUrl: "https://github.com/username/weather-app",
      status: "completed",
      featured: false
    },
    {
      id: 5,
      title: "Social Media Platform",
      description: "Full-stack social networking application with real-time messaging, content sharing, and community features.",
      image: Project1,
      category: "web",
      technologies: ["MERN Stack", "Socket.io", "Cloudinary", "JWT"],
      liveUrl: "https://social-platform.vercel.app/",
      githubUrl: "https://github.com/username/social-app",
      status: "completed",
      featured: true
    },
    {
      id: 6,
      title: "Crypto Trading Bot",
      description: "Automated cryptocurrency trading bot with market analysis, risk management, and portfolio optimization features.",
      image: ecomerce,
      category: "fintech",
      technologies: ["Python", "Machine Learning", "APIs", "Data Analysis"],
      liveUrl: "https://crypto-bot.vercel.app/",
      githubUrl: "https://github.com/username/crypto-bot",
      status: "completed",
      featured: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', count: projects.length },
    { id: 'web', name: 'Web Apps', count: projects.filter(p => p.category === 'web').length },
    { id: 'mobile', name: 'Mobile Apps', count: projects.filter(p => p.category === 'mobile').length },
    { id: 'dashboard', name: 'Dashboards', count: projects.filter(p => p.category === 'dashboard').length },
    { id: 'fintech', name: 'FinTech', count: projects.filter(p => p.category === 'fintech').length }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getStatusColor = (status) => {
    switch(status) {
      case 'completed': return 'from-green-500 to-emerald-600';
      case 'in-progress': return 'from-yellow-500 to-orange-600';
      case 'planning': return 'from-blue-500 to-indigo-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getStatusText = (status) => {
    switch(status) {
      case 'completed': return 'Completed';
      case 'in-progress': return 'In Progress';
      case 'planning': return 'Planning';
      default: return 'Unknown';
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 px-6 py-16 lg:px-14 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-[#00A78E]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
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
            <span className="text-sm font-medium text-[#00A78E]">My Work</span>
          </div>

          <h1 
            className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-800 via-gray-600 to-[#00A78E] bg-clip-text text-transparent mb-6"
            {...(!isMobile && {
              "data-aos": "fade-up",
              "data-aos-duration": "800",
              "data-aos-delay": "200",
            })}
          >
            Featured Projects
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
            Explore my diverse portfolio of web applications, mobile apps, and digital solutions. 
            Each project represents a unique challenge solved with creativity and technical expertise.
          </p>
        </div>

        {/* Filter Categories */}
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
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`group relative overflow-hidden px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeFilter === category.id
                  ? 'bg-gradient-to-r from-[#00A78E] to-teal-600 text-white shadow-lg'
                  : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-[#00A78E]/10 border border-gray-200/50'
              }`}
            >
              <span className="relative z-10 flex items-center">
                {category.name}
                <span className={`ml-2 px-2 py-1 text-xs rounded-full ${
                  activeFilter === category.id 
                    ? 'bg-white/20 text-white' 
                    : 'bg-[#00A78E]/10 text-[#00A78E]'
                }`}>
                  {category.count}
                </span>
              </span>
              {activeFilter !== category.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-[#00A78E]/0 via-[#00A78E]/5 to-[#00A78E]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              )}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-200/50 shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:scale-[1.02]"
              {...(!isMobile && {
                "data-aos": "fade-up",
                "data-aos-duration": "800",
                "data-aos-delay": `${1000 + index * 150}`,
              })}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 left-4 z-20">
                  <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-600 text-white text-xs font-bold rounded-full shadow-lg">
                    ⭐ Featured
                  </span>
                </div>
              )}

              {/* Status Badge */}
              <div className="absolute top-4 right-4 z-20">
                <span className={`inline-flex items-center px-3 py-1 bg-gradient-to-r ${getStatusColor(project.status)} text-white text-xs font-semibold rounded-full shadow-lg`}>
                  {getStatusText(project.status)}
                </span>
              </div>

              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Hover Overlay with Actions */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn flex items-center justify-center w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-[#00A78E] hover:text-white transition-all duration-300 hover:scale-110"
                  >
                    <FontAwesomeIcon icon={faUpRightFromSquare} className="text-lg" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn flex items-center justify-center w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-gray-800 hover:text-white transition-all duration-300 hover:scale-110"
                  >
                    <FontAwesomeIcon icon={fabGithub} className="text-lg" />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 lg:p-8">
                <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-3 group-hover:text-[#00A78E] transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 text-sm lg:text-base leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gradient-to-r from-[#00A78E]/10 to-teal-600/10 text-[#00A78E] text-xs font-medium rounded-full border border-[#00A78E]/20 hover:scale-105 transition-transform duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 group/btn relative overflow-hidden bg-gradient-to-r from-[#00A78E] to-teal-600 hover:from-teal-600 hover:to-[#00A78E] text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 text-center"
                  >
                    <span className="relative z-10 flex items-center justify-center text-sm">
                      <FontAwesomeIcon icon={faEye} className="mr-2" />
                      Live Demo
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -skew-x-12 transform -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
                  </a>
                  
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn bg-gray-100 hover:bg-gray-800 text-gray-800 hover:text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 hover:scale-105"
                  >
                    <FontAwesomeIcon icon={fabGithub} className="text-lg" />
                  </a>
                </div>
              </div>

              {/* Decorative gradient */}
              <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br from-[#00A78E]/10 to-transparent rounded-full blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
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
              Have a Project in Mind?
            </h3>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Let's collaborate and bring your ideas to life. I'm always excited to work on new challenges and create innovative solutions.
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
                  View All Projects
                  <svg className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
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
