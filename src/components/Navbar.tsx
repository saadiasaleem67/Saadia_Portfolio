"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { SheetSide } from "./Sheet";

const Links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "#About",
  },
  {
    name: "Services",
    path: "#Services",
  },
  {
    name: "Project",
    path: "#Project",
  },
  {
    name: "Contact",
    path: "#Contact",
  },
];
const Sidemenubar = () => {
  const pathname = usePathname();

  return (
    // <div>
    //   <div className="container lg:flex justify-between items-center hidden my-6 px-16 ">
    //     <div>
    //       <h1 className=" font-bold text-[48px] xl:text-[30px] lg:text-[30px] ">
    //         <Link href={"/"}>Saadia Saleem</Link>
    //       </h1>
    //     </div>
    //     <nav className="flex gap-7">
    //       {/* Navlinks */}
    //       {Links.map((link, idx) => (
    //         <div key={idx} className=" my-4 text-center  hover:text-darkorange">
    //           {pathname === link.path ? (
    //             <Link
    //               className="text-lg font-bold border-b-2 text-darkorange border-darkorange "
    //               href={link.path}
    //             >
    //               {link.name}
    //             </Link>
    //           ) : (
    //             <Link
    //               className="text-lg font-semibold  transition-all "
    //               href={link.path}
    //             >
    //               {link.name}
    //             </Link>
    //           )}
    //         </div>
    //       ))}
    //     </nav>
    //   </div>
    //   {/* For mobile */}
    //   <div className=" container lg:hidden flex justify-between py-3">
    //     <div>
    //       <h1 className="text-2xl font-bold py-2 ">
    //         <Link href={"/"}>Saadia Saleem</Link>
    //       </h1>
    //     </div>
    //     <div>
    //       <SheetSide />
    //     </div>
    //   </div>
    // </div>
    <div className="backdrop-blur-sm w-full sticky top-0">
      <div className="container lg:flex items-center justify-between hidden px-16 my-4">
      <div>
          <h1 className=" font-bold text-[48px] xl:text-[30px] lg:text-[30px]  py-2">
            <Link href={"/"}>Saadia Saleem</Link>
          </h1>
        </div>
        <nav>
          {/* Navlinks */}
          {/* {Links.map((link, idx) => (
            <div key={idx} className=" my-4 text-center  hover:text-darkorange">
              {pathname === link.path ? (
                <Link
                  className="text-lg font-bold  "
                  href={link.path}
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  className="text-lg font-semibold  transition-all "
                  href={link.path}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))} */}
          <ul  className="flex gap-7">
            <li className="link">
              <Link href={"#About"}>About</Link>
            </li>
            <li className="link">
              <Link href={"#Services"}>Services</Link>
            </li>
            <li className="link">
              <Link href={"#Project"}>Project</Link>
            </li>
            <li className="link">
              <Link href={"#Contact"}>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* For mobile */}
      <div className="my-2 lg:hidden">
      <h1 className=" font-bold text-2xl text-center py-2">
            <Link href={"/"}>Saadia Saleem</Link>
          </h1>
          <nav className="flex  justify-center items-center mt-4">
          {/* Navlinks */}
          <ul  className="flex gap-7">
            <li className="links hover:text-darkorange">
              <Link href={"#About"}>About</Link>
            </li>
            <li className="links">
              <Link href={"#Services"}>Services</Link>
            </li>
            <li className="links">
              <Link href={"#Project"}>Project</Link>
            </li>
            <li className="links">
              <Link href={"#Contact"}>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
     
       {/* <div className=" container lg:hidden flex justify-between py-3">
         <div>
           <h1 className="text-2xl font-bold py-2 ">
             <Link href={"/"}>Saadia Saleem</Link>
           </h1>
       </div>
           <SheetSide />
         </div> */}
    </div>
      
     
      
  );
};

export default Sidemenubar;
