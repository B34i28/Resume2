import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

export default function () {
  return (
    <section className=" font-bold rounded w-full ">
      <div className="p-4 mr-5 gap-5">
        <ul className="flex justify-end gap-3">
          <a href="#home" className="cursor-pointer">
          <li className="hover:scale-125 duration-500">Home</li>
          </a>
          <a href="#skills" className="cursor-pointer">
          <li className="hover:scale-125 duration-500">Skills</li>
          </a>
          <a href="#experience" className="cursor-pointer">
          <li className="hover:scale-125 duration-500">Experience</li>
          </a>
          <a href="#about" className="cursor-pointer">
          <li className="hover:scale-125 duration-500">About</li>
          </a>
          <a href="#contact" className="cursor-pointer">
          <li className="hover:scale-125 duration-500">Contact</li>
          </a>
        </ul>
      </div>
    </section>
  );
}

// export default function () {
//   const links = [
//     {
//       id: 1,
//       link: "Home",
//     },
//     {
//       id: 2,
//       link: "Skills",
//     },
//     {
//       id: 3,
//       link: "Experience",
//     },
//     {
//       id: 4,
//       link: "About",
//     },
//     {
//       id: 5,
//       link: "Contact",
//     },
//   ];

//   return (
//     <div className="flex justify-end items-center w-full h-20 px-4 font-bold fixed">
//       <ul className="flex">
//         {links.map(({ id, link }) => (
//           <li
//             key={id}
//             className="px-4 cursor-pointer capitalize font-medium hover:scale-105 duration-200"
//           >
//             {link}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
