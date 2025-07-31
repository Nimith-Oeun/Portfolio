import React from 'react';

// Modern icon components
const IconComponents = {
  project: ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  support: ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  process: ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  client: ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  )
};

function StatCard({ iconType, number, text, description, color, delay = 0, isMobile }) {
  const IconComponent = IconComponents[iconType];

  return (
    <div 
      className="group relative"
      {...(!isMobile && {
        "data-aos": "fade-up",
        "data-aos-duration": "800",
        "data-aos-delay": delay.toString(),
      })}
    >
      {/* Main Card */}
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group-hover:scale-105 relative overflow-hidden">
        
        {/* Background Gradient Effect */}
        <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
        
        {/* Icon Container */}
        <div className="relative z-10 mb-6">
          <div className={`w-16 h-16 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
            <IconComponent className="w-8 h-8 text-white" />
          </div>
          
          {/* Decorative elements */}
          <div className={`absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br ${color} rounded-full opacity-20 group-hover:scale-125 transition-transform duration-300`}></div>
          <div className={`absolute -bottom-1 -left-1 w-4 h-4 bg-gradient-to-br ${color} rounded-full opacity-30 group-hover:scale-110 transition-transform duration-300 delay-75`}></div>
        </div>
        
        {/* Number Display */}
        <div className="relative z-10 mb-4">
          <h3 className="text-4xl lg:text-5xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
            {number}
          </h3>
          <div className={`w-12 h-1 bg-gradient-to-r ${color} rounded-full mt-2 group-hover:w-16 transition-all duration-300`}></div>
        </div>
        
        {/* Text Content */}
        <div className="relative z-10">
          <h4 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-gray-900 transition-colors duration-300">
            {text}
          </h4>
          <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
            {description}
          </p>
        </div>
        
        {/* Hover Glow Effect */}
        <div className={`absolute inset-0 bg-gradient-to-br ${color} rounded-3xl blur opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10`}></div>
        
        {/* Corner Accent */}
        <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-3xl">
          <div className={`absolute top-0 right-0 w-8 h-8 bg-gradient-to-br ${color} transform rotate-45 translate-x-4 -translate-y-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute -top-1 -left-1 w-3 h-3 bg-gray-300 rounded-full opacity-30 group-hover:animate-ping"></div>
      <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-gray-400 rounded-full opacity-40 group-hover:animate-ping delay-150"></div>
    </div>
  );
}

export default StatCard;