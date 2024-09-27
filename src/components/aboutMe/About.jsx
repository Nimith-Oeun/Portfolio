import React, { useEffect, useState } from "react";
import InfoItem from "./components/InfoItem";
import ProfileImage from "./components/ProfileImg";
import aos from "aos";

const AboutMe = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    aos.init();
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

  const personalInfo = [
    { label: "Birthday:", value: "06.01.2000" },
    { label: "Website:", value: "#" },
    { label: "Phone:", value: "+855 95 446 136" },
    { label: "City:", value: "Phnum Penh" },
    { label: "Age:", value: "24" },
    { label: "Degree:", value: "Bacholer" },
    { label: "Email:", value: "oeunnimith@gmail.com" },
    { label: "Freelance:", value: "unavilable" },
  ];
  console.log(personalInfo);

  return (
    <main className="flex overflow-hidden flex-col items-start px-14 pt-9 pb-24 bg-white max-md:px-5">
      <h1 className="text-3xl font-bold text-black">About Me</h1>
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
      <p className="self-stretch mt-7 text-base text-black max-md:max-w-full">
        Lorem ipsum is a placeholder text commonly used in the design and
        publishing industry. It is derived from a work by Cicero and has been
        used since the 1500s to demonstrate the visual form of a document
        without relying on meaningful content. If you need a sample or have a
        specific request related to lorem ipsum, please let me know!
      </p>
      <section className="mt-11 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <ProfileImage />
          <div className="flex flex-col ml-5 w-[63%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-start w-full max-md:mt-10 max-md:max-w-full">
              <h2 className="text-3xl font-bold text-teal-600">
                Front-End Developer
              </h2>
              <p className="self-stretch mt-1.5 text-base text-black max-md:max-w-full">
                Lorem ipsum is a placeholder text commonly used in the design
                and publishing industry. It is derived from a work by Cicero and
                has been
              </p>
              <div className="flex gap-10 mt-5 max-w-full font-medium max-sm:flex-col max-sm:gap-0 ">
                <div className="flex flex-col items-start">
                  {personalInfo
                    .slice(0, 4)
                    .map(
                      (item, index) => (
                        console.warn(item.value),
                        (
                          <InfoItem
                            key={index}
                            label={item.label}
                            value={item.value}
                          />
                        )
                      )
                    )}
                </div>
                <div className="flex flex-col flex-1 items-start">
                  {personalInfo.slice(4).map((item, index) => (
                    <InfoItem
                      key={index + 4}
                      label={item.label}
                      value={item.value}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutMe;
