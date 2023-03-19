import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <section
      
      className="relative justify-items-center w-full mt-5 px-8"
    >
      <div className="px-20 max-w-screen-lg flex flex-col justify-center w-full h-full">
        <h1 className="font-bold text-4xl my-8 underline">Introduction</h1>
        <p className="text-2xl">
          Skilled developer in javascript and typescript. Experienced in
          framework like react next js three.js Meet a skilled web developer and
          React Native developer,proficient in crafting high-quality websites
          and web apps
        </p>
      </div>
      <div className="flex justify-between gap-2 px-20 mt-10">
        <Image src={"/js.png"} height={200} width={200} alt="Js" />
        <Image src={"/ts.jpg"} height={200} width={200} alt="ts" />
        <Image src={"/nextjs.png"} height={200} width={200} alt="nextjs" />
        <Image src={"/tailwind.jpg"} height={200} width={200} alt="tailwind" />
      </div>
    </section>
  );
}
