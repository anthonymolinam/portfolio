import React from "react";
import Image from "next/image";
import Link from "next/link";
import coding from "../assets/coding.gif";
import { BsArrowRightShort } from "react-icons/bs";

export default function ProjectsCard() {
  return (
    <Link
      href="/projects"
      scroll={false}
      className="relative rounded-3xl col-span-2 md:aspect-auto overflow-hidden hover:scale-[103%] transition duration-500 ease-in-out"
    >
      <BsArrowRightShort className="absolute right-4 bottom-4 top-auto md:right-8 md:top-8 text-white z-10 text-4xl"/>
      <div className="w-full h-full absolute top-0 left-0 text-white p-4 md:p-8 z-10 pointer-events-none">
        <h2 className="font-bold text-md md:text-xl lg:text-4xl">
          My Proyects
        </h2>
        <p className="font-base text-xs md:text-2xl lg:text-2xl md:w-4/5 lg:w-5/6 lg:mt-4">
          Here you can find some of my projects.
        </p>
      </div>
      <div className="w-full h-full bg-[#1c053a9c] absolute">
        <Image src={coding} className="w-full h-full object-cover opacity-50" alt="" loading="lazy" />
      </div>
    </Link>
  );
}