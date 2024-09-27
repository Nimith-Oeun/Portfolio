import React from "react";

function Footer() {
  return (
    <footer className=" w-full flex justify-center ">
      <div className="flex flex-col justify-center items-center mt-2 max-w-full w-[206px]">
        <p className="text-[13px] text-white">©Copyright 2024</p>
        <p className="text-[13px] text-white ">
          Designed By{" "}
          <span className="text-[#00A78E] text-lg font-medium">Nimith</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
