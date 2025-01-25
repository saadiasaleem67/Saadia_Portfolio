"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
const Sidemenubar = () => {
  return (
    <motion.div
      className="backdrop-blur-sm w-full sticky top-0"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <div className="container lg:flex items-center justify-between hidden px-16 my-4">
        <div>
          <h1 className=" font-bold text-[48px] xl:text-[30px] lg:text-[30px]  py-2">
            <Link href={"/"}>Saadia Saleem</Link>
          </h1>
        </div>
        <nav>
          <ul className="flex gap-7">
            <li className="link">
              <Link href={"/"}>Home</Link>
            </li>
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
          <ul className="flex gap-7">
            <li className="links hover:text-darkorange">
              <Link href={"/"}>Home</Link>
            </li>
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
    </motion.div>
  );
};

export default Sidemenubar;
