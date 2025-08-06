import React from 'react';
import img1 from '../../../assets/img1.jpg';

const ProfileImage = () => {
  return (
    <div className="relative group">
      <div className="relative overflow-hidden rounded-3xl shadow-2xl">
        <img 
          src={img1} 
          alt='Profile Image' 
          className="w-full h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -top-3 -left-3 w-6 h-6 bg-[#00A78E] rounded-full opacity-80"></div>
      <div className="absolute -bottom-3 -right-3 w-4 h-4 bg-teal-400 rounded-full opacity-60"></div>
      <div className="absolute top-1/2 -left-2 w-3 h-3 bg-teal-300 rounded-full opacity-40"></div>
    </div>
  );
};

export default ProfileImage;