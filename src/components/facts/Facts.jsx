import React,{useState,useEffect} from 'react';
import StatCard from './StatCard';
import aos from "aos";

const statsData = [
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ce22f8717d94f99fe548bf87e283b1986874e66f321c2bcb0d5e6d38173e03e5?placeholderIfAbsent=true&apiKey=61e0f926b16d41ccaa361aad4310ee3b", number: "11+", text: "Project Complet" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4377acc7bd2abe354a815af301399084503877f4a884a4449b05b4e1c1985adc?placeholderIfAbsent=true&apiKey=61e0f926b16d41ccaa361aad4310ee3b", number: "8/24", text: "Support Hour" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2bdbc07e17d83edbee771147c79c2074ee005bdebdf27ddb4baf30c425313794?placeholderIfAbsent=true&apiKey=61e0f926b16d41ccaa361aad4310ee3b", number: "5+", text: "Proccesing" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3c3a1b1124921a5c08323ffdcb51f0bbb440efdabbbc082c0f7c0614477bfbd0?placeholderIfAbsent=true&apiKey=61e0f926b16d41ccaa361aad4310ee3b", number: "3+", text: "Peding" }
];

function Facts() {
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

  return (
    <article className="flex overflow-hidden flex-col px-14 pt-10 pb-32 bg-neutral-100 max-md:px-5 max-md:pb-24">
      <h2 className="self-start text-3xl font-bold text-black">Facts</h2>
      <hr
        className="w-16 h-2 rounded-full bg-teal-600"
        {...(!isMobile && {
          "data-aos": "fade-right",
          "data-aos-easing": "ease-in-sine",
          "data-aos-duration": "1000",
          "data-aos-cout": "infinite",
          "data-aos-delay": "1000",
        })}
      />
      <p className="mt-7 text-base text-black max-md:max-w-full">
        Lorem ipsum" is a placeholder text commonly used in the design and publishing industry. It is derived from a work by Cicero and has been used since the 1500s to demonstrate the visual form of a document without relying on meaningful content. If you need a sample or have a specific request related to "lorem ipsum," please let me know!
      </p>
      <div className="flex flex-wrap gap-5 justify-between items-start self-center mt-24 w-full max-w-[830px] max-md:mt-10 max-md:max-w-full">
        {statsData.map((stat, index) => (
          <StatCard key={index} icon={stat.icon} number={stat.number} text={stat.text} />
        ))}
      </div>
    </article>
  );
}

export default Facts;