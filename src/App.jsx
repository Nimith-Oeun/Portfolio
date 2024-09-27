import React, { useState, useEffect, useRef } from "react";
import SideBard from "./components/sideBar/SideBard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Aos from "aos";
import "aos/dist/aos.css";
import About from "./components/aboutMe/About";
import Typed from "typed.js";
import Facts from "./components/facts/Facts";
import Skill from "./components/skill/Skill";
import Resume from "./components/portfolio/Resume";
import ProjectList from "./components/project/ProjectList";
import Contact from "./components/contact/Contact";
import { Link, Element } from 'react-scroll';

function App() {
  const [sideBar, setSideBar] = useState(false);
  const el = useRef(null);

  const handleSideBar = () => {
    setSideBar(!sideBar);
  };

  useEffect(() => {
    Aos.init();
    // animation for typed.js
    const typed = new Typed(el.current, {
      strings: ["Front_End Developer", "Web Designer", "Freelancer"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 2000,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  useEffect(() => {
    Aos.refresh(); // Refresh AOS to apply animations
  }, [sideBar]);

  return (
    <>
      <div className="w-full h-screen">
        <header
          className={`lg:w-[25%] md:w-[40%] max-sm:w-[75%] z-20 bg-[#040B14] h-[100%] fixed ${
            sideBar ? "flex" : "max-lg:hidden"
          }`}
          data-aos={sideBar ? "fade-right" : "fade-left"}
          data-aos-duration="1500"
        >
          <SideBard />
        </header>
        <main className="pl-[25%] max-lg:p-0">
          <section id="home" className="relative bg-[url('./assets/bg.jpg')] bg-cover bg-center bg-no-repeat before:bg-[rgba(0,0,0,0.48)] before:apa before:w-full before:h-[550px] before:absolute w-full h-[550px]">
            <article className="relative z-10 text-white h-full flex flex-col justify-center pl-16 max-sm:pl-5">
              <h1 className="text-[50px] font-poppins font-bold max-sm:text-[35px]">
                Hi, This is <br />
                Oeun Nimith <span className="text-[#00A78E]">.</span>{" "}
              </h1>
              <p className="text-[25px] font-poppins font-semibold max-sm:text-[20px]">
                I'm a <span className="text-[#00A78E]" ref={el}></span>
              </p>
            </article>
          </section>
          <section id="about">
            <About />
          </section>
          <section id="facts">
            <Facts />
          </section>
          <section id="skill">
            <Skill />
          </section>
          <section id="resume">
            <Resume />
          </section>
          <section id="portfolio">
            <ProjectList />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>
        <div
          onClick={handleSideBar}
          className="fixed top-[25px] right-[25px] w-[40px] h-[40px] text-[20px] bg-[#00A78E] text-center items-center justify-center rounded-[50%] text-white cursor-pointer z-10 hidden max-lg:flex"
        >
          {sideBar ? (
            <FontAwesomeIcon icon={faXmark} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </div>
      </div>
    </>
  );
}

export default App;