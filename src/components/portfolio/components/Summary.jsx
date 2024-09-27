import React from "react";

function Summary() {
  return (
    <section className="flex flex-col w-full max-md:mt-10 max-md:max-w-full">
      <h2 className="self-start text-3xl font-semibold text-black max-md:ml-2.5">
        Summary
      </h2>
      <div className="flex gap-2.5 mt-2.5">
        <div className="flex flex-col my-auto">
          <div className="flex shrink-0 w-4 h-4 rounded-full border border-teal-600 border-solid" />
          <div className="z-10 shrink-0 self-center w-px bg-teal-600 border border-teal-600 border-solid h-[133px]" />
        </div>
        <div className="flex flex-col grow shrink-0 basis-0 w-fit">
          <h3 className="self-start text-xl font-semibold text-black">
            Oeun Nimith
          </h3>
          <p className="mt-2.5 text-base text-black">
            . National: Cambodia
            <br />
            . Address: 27st,34#,Kakab,Pusenchey,Phnom Penh
            <br />
            . oeunnimith@gmail.com
            <br />
            . Status: Single
            <br />
            . Phone: +855 95 446 136
          </p>
        </div>
      </div>
    </section>
  );
}

export default Summary;