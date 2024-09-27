import React, { useState, useEffect } from "react";
import SkillIcon from "./SkillIcon";
import Aos from "aos";
import "aos/dist/aos.css";

const skillIcons = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/18490615950fd38fe558515a3105f0ce595227cc09f7aaccd8ee56eb9041e440?placeholderIfAbsent=true&apiKey=61e0f926b16d41ccaa361aad4310ee3b", alt: "Skill icon 1" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/da100e516b41e17ed2955c902e7c28bf1e8a14542c05a78a71bf7fea6ca63309?placeholderIfAbsent=true&apiKey=61e0f926b16d41ccaa361aad4310ee3b", alt: "Skill icon 2" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/c7504711ba22f98891f2b1b94f504db03aafab8a8554e4c99595d239566af658?placeholderIfAbsent=true&apiKey=61e0f926b16d41ccaa361aad4310ee3b", alt: "Skill icon 3" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/1c6b30e44dc4583a71962a71f74b3f17b78762e1c7168c2fa742b1cdddbda0d2?placeholderIfAbsent=true&apiKey=61e0f926b16d41ccaa361aad4310ee3b", alt: "Skill icon 4" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/d2765d89b09d4012a2e5095a25688c8964ec36602568b17e6b12becf39b692e4?placeholderIfAbsent=true&apiKey=61e0f926b16d41ccaa361aad4310ee3b", alt: "Skill icon 5" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/a89749c0feef7c1cea8a36f77c0aa4897d4c035fbe3739fa0c7e25488401a677?placeholderIfAbsent=true&apiKey=61e0f926b16d41ccaa361aad4310ee3b", alt: "Skill icon 6" },
];

const SkillSelect = [
    "CSS Style",
    "HTML",
    "Javascript",
    "Tailwindcss",
    "Figma",
    "React JS",
]

function SkillSection() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        Aos.init();
        // Set size to the screen for animation
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
        <section className="flex overflow-hidden flex-col px-16 py-12 bg-white max-md:px-5">
            <h2 className="self-start text-3xl font-bold text-black">Skill</h2>
            <hr
                className="w-14 h-2 rounded-full bg-teal-600"
                {...(!isMobile && {
                    "data-aos": "fade-right",
                    "data-aos-easing": "ease-in-sine",
                    "data-aos-duration": "1000",
                    "data-aos-cout": "infinite",
                    "data-aos-delay": "1000",
                })}
            />
             <div className="grid lg:grid-cols-3 max-lg:grid-cols-2 gap-16 self-center mt-12 w-full max-w-[845px] max-md:mt-10 max-md:max-w-full max-lg:pl-24 max-sm:pl-12">
                {skillIcons.map((icon, index) => (
                    <div key={index} className="relative group">
                        <SkillIcon src={icon.src} alt={icon.alt} className="transition-transform duration-500 ease-in-out transform" />
                        <div className="absolute inset-0 flex items-center justify-end text-[#00A78E] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0">
                            <p className="text-center font-poppins font-bold pr-10 transform translate-x-10 group-hover:translate-x-0 transition-transform duration-500 ease-in-out drop-shadow-md">{SkillSelect[index]}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default SkillSection;