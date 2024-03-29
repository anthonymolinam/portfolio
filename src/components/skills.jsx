import React from "react";
import {
  SiCss3,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiVite,
  SiBootstrap,
  SiTailwindcss,
} from "react-icons/si";

export default function Skills() {
  return (
    <div className="grid grid-cols-3 place-content-center place-items-center gap-3 md:gap-8 p-4 md:p-8 bg-[#ffad7756] rounded-3xl relative overflow-hidden col-span-1 aspect-square shadow-sm text-lg md:text-xl lg:text-5xl text-center text-[#ffffffde]">
      <SiHtml5 />
      <SiCss3 />
      <SiJavascript />
      <SiReact />
      <SiNextdotjs />
      <SiTailwindcss />
      <SiBootstrap/> 
      <SiVite/>
      <SiGit/>
    </div>
  );
}