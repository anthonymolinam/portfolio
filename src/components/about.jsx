import React from "react";

export default function AboutCard() {
  return (
    <div className="relative md:aspect-auto col-span-2 bg-[#111827] rounded-3xl overflow-hidden">
      <div className="h-full md:w-4/16 top-0 left-0 p-4 md:p-8 flex flex-col ">
        <h1 className="text-3xl md:text-xl lg:text-5xl font-bold text-white mb-4 md:mb-5">
          👋 Hi, I{"'"}m Anthony!
        </h1>
        <p className="text-md md:text-lg lg:text-2xl text-white">
              I am a <b>frontend developer</b> with experience in <b>React</b> and <b>Next JS</b>.
              I love cats, listen to music and video games..
        </p>
        <p className="text-md md:text-lg lg:text-2xl text-white mt-5">
              I am a <b>frontend developer</b>.
        </p>
      </div>
    </div>
  );
}