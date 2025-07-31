import React from 'react';

const InfoItem = ({ label, value }) => {
  return (
    <div className="flex items-center p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300 group">
      <div className="w-3 h-3 bg-gradient-to-r from-[#00A78E] to-teal-600 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300"></div>
      <div className="flex-1">
        <span className="text-sm font-medium text-gray-500 block">{label}</span>
        <span className="text-gray-800 font-semibold">{value}</span>
      </div>
    </div>
  );
};

export default InfoItem;