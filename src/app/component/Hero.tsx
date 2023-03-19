import Image from "next/image";
import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

export default function Hero() {
  return (
    <section className="relative w-full flex flex-row h-full">
      <div className="w-1/2 mt-14">
        <Image
          src={"/bilal.jpg"}
          alt="hero"
          width={350}
          height={350}
          className="rounded-2xl mx-auto w-2/3 ml-36 mt-32"
        />
      </div>

      <div className="max-w-screen-lg flex mx-auto item-center justify-center h-full px-4 flex-col mt-14 absolute-inset-0">
        <h1 className="text-4xl font-bold mt-32">Bilal Afridi</h1>
        <h2 className="mt-1 text-4xl sm:text7xl font-bold">I am Full Stack Developer.</h2>
        <p className="py-4 max-w-md">
          Currently, I love to work on web appliction using technologies like
          React, Tailwind and Next Js
        </p>
        <div>
          <button className="group my-2 w-fit animate-bounce bg-gradient-to-r from-cyan-500 to-blue-500 py-3 px-6 flex items-center rounded-lg cursor-pointer">
            Profile 
            <span className="group-hover:rotate-90 duration-300 ml-1">
              <HiOutlineArrowNarrowRight />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
