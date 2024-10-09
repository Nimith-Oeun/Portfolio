import React, { useState, useEffect } from "react";
import Aos from "aos";
import Project1 from "../../assets/Project1.png";
import ecomerce from "../../assets/ecomerce.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function ProjectList() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    Aos.init();
    //set size to the screen for animation
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640); // Adjust the breakpoint as needed
    };

    handleResize(); // Check the screen size on initial render
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div className="flex overflow-hidden flex-col items-start px-16 pt-10 pb-20 bg-white max-md:px-5 max-md:pb-24">
        <div className="text-3xl font-bold text-black">Portfolio</div>
        <hr
          className="w-24 h-2 rounded-full bg-teal-600"
          {...(!isMobile && {
            "data-aos": "fade-right",
            "data-aos-easing": "ease-in-sine",
            "data-aos-duration": "1000",
            "data-aos-cout": "infinite",
            "data-aos-delay": "1000",
          })}
        />
        <div className="self-stretch mt-4 text-base text-black max-md:max-w-full">
          Lorem ipsum&quot; is a placeholder text commonly used in the design
          and publishing industry. It is derived from a work by Cicero and has
          been used since the 1500s to demonstrate the visual form of a document
          without relying on meaningful content. If you need a sample or have a
          specific request related to &quot;lorem ipsum,&quot; please let me
          know!
        </div>
        <div className="grid grid-cols-3 max-sm:grid-cols-1 max-xl:grid-cols-2 w-full 2xl:gap-[35px] gap-5 items-center mt-10 max-md:mt-10 ">
          <div className="rounded-xl xl:h-[260px] min-w-[240px] w-full relative overflow-hidden group max-2xl:h-[220px]">
            <img
              src={Project1}
              alt="Jobfinder"
              className="object-fit w-full h-full rounded-xl transform transition-transform duration-500 ease-in-out group-hover:-translate-y-10"
            />
            <div className="w-full flex-col px-5 h-full bg-teal-600 rounded-xl absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <h1 className="text-white text-2xl font-bold">Jobfinder</h1>
              <p className="text-white font-poppins py-5">This website use for finding job. The website buile resfull whith Api So it More powerful that You can apply job that fit your skill.  </p>
              <a href="https://jobfinder-tawny.vercel.app/" target="blank">
              <div className="w-10 h-10 bg-white rounded-[50%] flex justify-center items-center cursor-pointer"><FontAwesomeIcon icon={faUpRightFromSquare} size="lg" className="text-teal-600" /></div>    
              </a>  
            </div>
          </div>
          <div className="rounded-xl xl:h-[260px] min-w-[240px] w-full relative overflow-hidden group max-2xl:h-[220px]">
            <img
              src={ecomerce}
              alt="Jobfinder"
              className="object-fit w-full h-full rounded-xl transform transition-transform duration-500 ease-in-out group-hover:-translate-y-10"
            />
            <div className="w-full flex-col px-5 h-full bg-teal-600 rounded-xl absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <h1 className="text-white text-2xl font-bold">Ecomerce</h1>
              <p className="text-white font-poppins py-5">This website use for Sell every Product. it's powerful and make easy to finding any product that you want to buy without out your house esye payment esye buy.  </p>
              <a href="https://jobfinder-tawny.vercel.app/" target="blank">
              <div className="w-10 h-10 bg-white rounded-[50%] flex justify-center items-center cursor-pointer"><FontAwesomeIcon icon={faUpRightFromSquare} size="lg" className="text-teal-600" /></div>    
              </a>  
            </div>
          </div>
          <div className="rounded-xl xl:h-[260px] min-w-[240px] w-full cursor-pointer relative overflow-hidden group max-2xl:h-[220px]">
            <img
              src={Project1}
              alt="Jobfinder"
              className="object-fit w-full h-full rounded-xl transform transition-transform duration-500 ease-in-out group-hover:-translate-y-10"
            />
            <div className="w-full h-full bg-teal-600 rounded-xl absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <h1 className="text-white text-2xl font-bold">Jobfinder</h1>
            </div>
          </div>
          <div className="rounded-xl xl:h-[260px] min-w-[240px] w-full cursor-pointer relative overflow-hidden group max-2xl:h-[220px]">
            <img
              src={Project1}
              alt="Jobfinder"
              className="object-fit w-full h-full rounded-xl transform transition-transform duration-500 ease-in-out group-hover:-translate-y-10"
            />
            <div className="w-full h-full bg-teal-600 rounded-xl absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <h1 className="text-white text-2xl font-bold">Jobfinder</h1>
            </div>
          </div>
          <div className="rounded-xl xl:h-[260px] min-w-[240px] w-full cursor-pointer relative overflow-hidden group max-2xl:h-[220px]">
            <img
              src={Project1}
              alt="Jobfinder"
              className="object-fit w-full h-full rounded-xl transform transition-transform duration-500 ease-in-out group-hover:-translate-y-10"
            />
            <div className="w-full h-full bg-teal-600 rounded-xl absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <h1 className="text-white text-2xl font-bold">Jobfinder</h1>
            </div>
          </div>
          <div className="rounded-xl xl:h-[260px] min-w-[240px] w-full cursor-pointer relative overflow-hidden group max-2xl:h-[220px]">
            <img
              src={Project1}
              alt="Jobfinder"
              className="object-fit w-full h-full rounded-xl transform transition-transform duration-500 ease-in-out group-hover:-translate-y-10"
            />
            <div className="w-full h-full bg-teal-600 rounded-xl absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <h1 className="text-white text-2xl font-bold">Jobfinder</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
