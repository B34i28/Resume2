import Image from "next/image";
import React from "react";
import Chakrai from "../../../public/eimg/chakrai.jpg";
import Javascripti from "../../../public/eimg/javascripti.png";
import Nextjs13 from "../../../public/eimg/nextjs-13.avif";
import Reacti from "../../../public/eimg/reacti.png";
import Tailwind from "../../../public/eimg/tailwindi.jpg";
import Typescripti from "../../../public/eimg/typescripti.png";

export default function Experience() {
  const experiences: any = [
    {
      id: 1,
      src: Javascripti,
    },
    {
      id: 2,
      src: Chakrai,
    },
    {
      id: 3,
      src: Nextjs13,
    },
    {
      id: 4,
      src: Reacti,
    },
    {
      id: 5,
      src: Tailwind,
    },
    {
      id: 6,
      src: Typescripti,
    },
  ];

  return (
    <section className="w-full md:h-screen">
      <div className="max-w-screen-lg p-4 my-10 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold">Experience</p>
          <p className="py-6">Some of my Work</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {/* {experiences.map(({ id, src }: any) => { */}
            <div className="shadow-md shadow-gray-600 rounded-lg">
              <Image
                src={Javascripti}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
            <div className="shadow-md shadow-gray-600 rounded-lg">
              <Image
                src={Typescripti}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
            <div className="shadow-md shadow-gray-600 rounded-lg">
              <Image
                src={Chakrai}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
            <div className="shadow-md shadow-gray-600 rounded-lg">
              <Image
                src={Nextjs13}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
            <div className="shadow-md shadow-gray-600 rounded-lg">
              <Image
                src={Tailwind}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
            <div className="shadow-md shadow-gray-600 rounded-lg">
              <Image
                src={Reacti}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          {/* })} */}
        </div>
      </div>
    </section>
  );
}
