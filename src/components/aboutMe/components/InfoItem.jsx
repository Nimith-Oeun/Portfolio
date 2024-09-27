import React from 'react';

const InfoItem = ({ label, value }) => {
  return (
    <div className="flex gap-1.5 justify-center items-center mt-2">
      <span className="self-stretch my-auto text-xl text-teal-600">&gt;</span>
      <span className="self-stretch my-auto text-lg text-black">{label}</span>
      <span>{value}</span>
    </div>
  );
};

export default InfoItem;