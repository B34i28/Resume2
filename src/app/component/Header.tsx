import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";


// export default function
// () {
//   return (
//     <section className='fixed font-bold rounded w-full '>
//         <div className="flex justify-end  p-4 mr-5 gap-5">
//           <Link href="" className='text-black'>Home</Link>
//           <Link className='text-black' href="/src/app/component/Skills.tsx">Skills</Link>
//           <Link href="" className='text-black'>Experience</Link>
//           <Link href="/src/app/component/About" className='text-black'>About</Link>
//           <Link href="" className='text-black'>Contact</Link>
//         </div>
//     </section>
//   )
// }

export default function () {
  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "Skills",
    },
    {
      id: 3,
      link: "Experience",
    },
    {
      id: 4,
      link: "About",
    },
    {
      id: 5,
      link: "Contact",
    },
  ];

  return (
    <div className="flex justify-end items-center w-full h-20 px-4 font-bold fixed">
      <ul className="flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium hover:scale-105 duration-200"
          >
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
}
