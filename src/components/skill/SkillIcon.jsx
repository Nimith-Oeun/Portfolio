import React from "react";

function SkillIcon({ src, alt }) {
  return (
    <img
      loading="lazy"
      src={src}
      alt={alt}
      className="object-contain shrink-0 self-stretch my-auto aspect-square w-[115px] max-xl:w-[100px] max-md:w-[80px] max-sm:w-[60px]"
    />
  );
}

export default SkillIcon;