"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiArrowUpRight } from "react-icons/hi2";


const projects = [
  {
    pic: "/images/hajraorganic.png",
    name: "Hajra Organic",
    link: "https://hajra-organic.vercel.app/",
    category: "Frontend",
    extra: "",
    git: "https://github.com/saadiasaleem67/Hajra_Organic",
    stack: [
      { name: "Nextjs" },
      { name: "Tailwindcss" },
      { name: "Sanity" },
      { name: "Typescripts" },
    ],
  },
  {
    pic: "/images/diya.png",
    name: "Diya Cosmetics",
    link: "https://cosmetics-123.vercel.app/",
    category: "Frontend",
    extra: "",
    git: "https://github.com/saadiasaleem67/_Cosmetics_123",
    stack: [
      { name: "Nextjs" },
      { name: "Tailwindcss" },
      { name: "Typescripts" },
    ],
  },
  {
    pic: "/images/furniture-wala.png",
    name: "Furniture Wala",
    link: "/",
    category: "Frontend",
    extra: "In Working",
    git: "/",
    stack: [
      { name: "Nextjs" },
      { name: "Tailwindcss" },
      { name: "Sanity" },
      { name: "Typescripts" },
    ],
  },
];

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <motion.div
      className="lg:pt-24  pt-24 bg-[#0b425331]"
      id="Project"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 2 }}
      transition={{ duration: 2 }}
    >
      <div className="container lg:px-6">
        {/* My Project */}
        <motion.div
          className="flex gap-3 pt-9"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 2 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <span className="border border-r-4 border-darkorange "></span>
          <h3 className="text-3xl capitalize font-semibold">my projects</h3>
        </motion.div>
        {/* project data */}
        <div className="container grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 place-items-center gap-5 xl:gap-5  mt-16 mb-4">
          {projects.map((items, idx) => (
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 2 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              key={idx}
              className=" bg-[#1e2a3a] p-4 "
            >
              <div>
                <Image
                  src={items.pic}
                  alt="photo"
                  width={500}
                  height={500}
                  className="w-[1500px]"
                />
              </div>
              {/* All Project Decsription */}
              <div className="mt-3">
                {/* name */}
                <div>
                  <p className="text-[#dda15e]">{items.category}</p>
                  <p className="text-2xl">{items.name}</p>
                  <p className="text-[#d63232]">{items.extra}</p>
                </div>
                {/* Stack */}
                <div className="flex gap-2 ">
                  {items.stack.map((list, idx) => (
                    <div key={idx}>
                      {list.name}
                      {idx !== items.stack.length - 1 && ","}
                    </div>
                  ))}
                </div>
                <div className="mt-3 ">
                  {/* code Link */}
                  <div>
                    <Link href={items.link} target="_blank">
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger>
                            <div className="w-22 h-11 bg-[#1a4350] flex gap-2 text-xl p-2 rounded-full">
                              <p>
                                <HiArrowUpRight className="text-xl mt-1" />
                              </p>
                              <p className="">Live </p>
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Live Project</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
