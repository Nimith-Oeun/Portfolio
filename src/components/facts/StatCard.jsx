import React from 'react';

function StatCard({ icon, number, text }) {
  return (
    <div className="flex flex-col">
      <div className="flex gap-3 justify-center items-end self-start text-3xl font-medium text-black whitespace-nowrap">
        <img loading="lazy" src={icon} alt="" className="object-contain shrink-0 w-14 aspect-square fill-teal-600" />
        <div className="w-[74px]">{number}</div>
      </div>
      <div className="mt-2.5 text-base text-black">{text}</div>
    </div>
  );
}

export default StatCard;