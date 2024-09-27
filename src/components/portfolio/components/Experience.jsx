import React from "react";

function ProfessionalExperience() {
  const experiences = [
    {
      title: "System Engineer",
      period: "2023-Present",
      company: "Udaya Technology",
      description:
        'Lorem ipsum" is a placeholder text commonly used in the design and publishing industry. It is derived from a work by',
    },
    {
      title: "IT Support Office",
      period: "2022-2023",
      company: "Unimall co.Ltd",
      description:
        'Lorem ipsum" is a placeholder text commonly used in the design and publishing industry. It is derived from a work by',
    },
  ];

  return (
    <section className="flex flex-col w-full max-md:mt-5">
      <h2 className="self-start text-3xl font-semibold text-black max-md:ml-2">
        Professional Experience
      </h2>
      <div className="flex gap-2.5 mt-2.5 max-sm:mt-0 w-full">
      <div className="flex flex-col self-start mt-5">
           <div className="flex flex-col w-4">
            <div className="flex shrink-0 rounded-full border border-teal-600 border-solid h-[15px]" />
            <div className="z-10 shrink-0 self-center w-px bg-teal-600 border border-teal-600 border-solid xl:h-[180px] lg:h-[200px] sm:h-[200px] max-sm:h-[180px] " />
          </div>
          <div className="flex flex-col w-4">
            <div className="flex shrink-0 rounded-full border border-teal-600 border-solid h-[15px]" />
            <div className="z-10 shrink-0 self-center w-px bg-teal-600 border border-teal-600 border-solid xl:h-[152px] max-sm:h-[160px] lg:h-[200px] sm:h-[200px]" />
          </div>
        </div>
        <div>
          {experiences.map((exp, index) => (
            <div key={index} className="flex gap-2.5 items-start mt-3 max-sm:mt-3">
              <div className="flex flex-col items-start text-base text-black min-w-[240px] ">
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <div className="overflow-hidden gap-2.5 self-stretch px-2.5 py-0.5 mt-2.5 text-xs whitespace-nowrap bg-cyan-200 w-[90px] text-center">
                  {exp.period}
                </div>
                <p className="mt-3 text-black">{exp.company}</p>
                <p className="self-stretch mt-4 text-black">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProfessionalExperience;
