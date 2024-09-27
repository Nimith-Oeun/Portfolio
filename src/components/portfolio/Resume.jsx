import React,{useState,useEffect} from "react";
import Summary from "./components/Summary";
import Education from "./components/Education";
import ProfessionalExperience from "./components/Experience";
import Aos from "aos";
function Resume() {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        Aos.init();
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
    <main className="flex overflow-hidden flex-col  px-16 py-5 max-md:px-5">
      <h1 className="self-start text-3xl font-bold text-black">Resume</h1>
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
      <p className="mt-7 text-base text-black max-md:mr-0 max-md:max-w-full">
        Lorem ipsum" is a placeholder text commonly used in the design and publishing industry. It is derived from a work by Cicero and has been used since the 1500s to demonstrate the visual form of a document without relying on meaningful content. If you need a sample or have a specific request related to "lorem ipsum," please let me know!
      </p>
      <section className="mt-10 w-full max-md:mt-10 max-md:max-w-full max-sm:mt-0">
        <div className="grid grid-cols-2 max-sm:grid-cols-1">
          <div className="flex flex-col max-md:ml-0 max-md:w-full">
            <Summary />
            <Education />
          </div>
          <div className="flex flex-col ml-5  max-md:ml-0 max-md:w-full">
            <ProfessionalExperience />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Resume;