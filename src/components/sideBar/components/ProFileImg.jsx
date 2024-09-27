import React from "react";
import Profile from "../../../assets/profile.jpg";
import facebook from "../../../assets/facebook.png";
import twitter from "../../../assets/social.png";
import application from "../../../assets/application.png";
import linkin from "../../../assets/linkedin.png";

function ProfileImage() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className=" rounded-full bg-slate-800 fill-slate-800 p-2 mt-5 w-[120px]">
        <img
          loading="lazy"
          src={Profile}
          alt="Profile picture of O Nimith"
          className="object-cover w-full rounded-full aspect-square"
        />
      </div>

      <h1 className="text-xl font-poppins font-bold mt-3 text-white">O Nimith</h1>

      <div className="flex gap-3 mt-2">
        <div className=" rounded-full bg-slate-800 fill-slate-800 p-2">
          <a href="https://www.facebook.com/Nimith.Oeun" target="blank">
            <img src={facebook} alt="" className="object-contain w-5" />
          </a>
        </div>
        <div className=" rounded-full bg-slate-800 fill-slate-800 p-2">
          <a href="">
            <img src={twitter} alt="" className="object-contain w-5" />
          </a>
        </div>
        <div className=" rounded-full bg-slate-800 fill-slate-800 p-2">
          <a href="">
            <img src={application} alt="" className="object-contain w-5" />
          </a>
        </div>
        <div className=" rounded-full bg-slate-800 fill-slate-800 p-2">
          <a href="https://www.linkedin.com/in/nimith-oeun-824141321/" target="blank">
            <img src={linkin} alt="" className="object-contain w-5" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProfileImage;
