import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

import Html from "../../../public/logoimg/htmll.png";
import Css from "../../../public/logoimg/cssl.png";
import Javascript from "../../../public/logoimg/javascriptl.png";
import Typescript from "../../../public/logoimg/typescriptl.png";
import Nextjs from "../../../public/logoimg/nextjsl.png";
import Chakraui from "../../../public/logoimg/chakrauil.png";
import Tailwindcss from "../../../public/logoimg/tailwindl.png";
import Github from "../../../public/logoimg/githubl.png";

export default function Skills() {
  type Skill = {
    id: number;
    src: StaticImageData;
    title: string;
    style: string;
  };

  const techs: any = [
    {
      id: 1,
      src: Html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: Css,
      title: "CSS",
      style: "shadow-yellow-500",
    },
    {
      id: 3,
      src: Javascript,
      title: "JavaScript",
      style: "shadow-orange-500",
    },
    {
      id: 4,
      src: Typescript,
      title: "TypeScript",
      style: "shadow-blue-500",
    },
    {
      id: 5,
      src: Nextjs,
      title: "NextJs",
      style: "shadow-white",
    },
    {
      id: 6,
      src: Chakraui,
      title: "ChakraUi",
      style: "shadow-blue-500",
    },
    {
      id: 7,
      src: Tailwindcss,
      title: "TailwindCss",
      style: "shadow-sky-400",
    },
    {
      id: 8,
      src: Github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
  ];

  return (
    <section id="skills" className="relative w-full h-sreen">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-ful h-full">
        <div>
          <p className="text-4xl font-bold p-2">Skills</p>
          <p className="py-6 text-3xl ">These are skills i know</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-orange-500">
            <Image src={Html} alt="" className="w-20 mx-auto" />
            <p className="mt-4">HTML</p>
          </div>
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-yellow-500">
            <Image src={Css} alt="" className="w-20 mx-auto" />
            <p className="mt-4">CSS</p>
          </div>
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-orange-500">
            <Image src={Javascript} alt="" className="w-20 mx-auto" />
            <p className="mt-4">JavaScript</p>
          </div>
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-blue-500">
            <Image src={Typescript} alt="" className="w-20 mx-auto" />
            <p className="mt-4">TypeScript</p>
          </div>
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-black">
            <Image src={Nextjs} alt="" className="w-20 mx-auto" />
            <p className="mt-4">Next Js</p>
          </div>
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-blue-500">
            <Image src={Chakraui} alt="" className="w-20 mx-auto" />
            <p className="mt-4">Chakra UI</p>
          </div>
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-sky-400">
            <Image src={Tailwindcss} alt="" className="w-20 mx-auto" />
            <p className="mt-4">Tailwind CSS</p>
          </div>
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-black">
            <Image src={Github} alt="" className="w-20 mx-auto" />
            <p className="mt-4">GitHub</p>
          </div>

          {/* {techs.map(({ id, src, title, style }:Skill) => {
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <Image src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>;
          })} */}
        </div>
      </div>
    </section>
  );
}
