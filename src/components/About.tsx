"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa6";

const About = () => {
  return (
    <motion.div
      className="lg:h-screen bg-[#165a6f34] lg:pt-24 pt-24"
      id="About"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 2 }}
      transition={{ duration: 2 }}
    >
      <div className="container lg:px-6">
        {/* About us */}
        <motion.div
          className=" flex gap-3 pt-9  "
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 2 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <span className="border border-r-4 border-darkorange"></span>
          <h3 className="text-3xl capitalize font-semibold ">About me</h3>
        </motion.div>
        <div className="container">
          {/* Paragrapah */}
          <motion.div
            className="mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 2 }}
            transition={{ duration: 2 }}
          >
            <p>
              Hi, I am Passionate Frontend Developer utilizing Next.js,
              TypeScript, and Tailwind CSS to build fast, secure, and visually
              stunning applications. I specialize in crafting responsive and
              creative websites. I enjoy turning ideas into user-friendly web
              pages that look great and work smoothly.
            </p>
          </motion.div>
          {/* My Skills and courses Section */}
          <motion.div className=" p-4 mt-3 ">
            <div className=" grid xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 justify-between mt-5 lg:gap-24 gap-10 ">
              {/* Cources */}
              <motion.div
                initial={{ y: 35, opacity: 0 }}
                whileInView={{ y: 0, opacity: 2 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-2xl pl-3 ">Courses</h3>
                <div className="flex mt-2 ">
                  <div className="w-full h-1 rounded-full bg-darkorange inline-flex" />
                </div>
                <div className="pl-14 ">
                  <div className="mt-3">
                    <ul>
                      <li className="cources list-disc">Bano Qabil</li>
                    </ul>
                    <p className="pl-3 ">
                      Micro Soft Office and Python programming
                    </p>
                    <p className="pl-3 ">2025 - Present</p>
                  </div>
                  <div className="mt-2">
                    <ul>
                      <li className="cources list-disc">PIAIC</li>
                    </ul>
                    <p className="pl-3 ">Next js</p>
                    <p className="pl-3 ">2023 - 2024</p>
                  </div>
                </div>
              </motion.div>
              {/* Skills */}
              <motion.div
                initial={{ y: 35, opacity: 0 }}
                whileInView={{ y: 0, opacity: 2 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-2xl pl-3 ">Skills</h3>
                <div className="flex mt-2 ">
                  <div className="w-full h-1 rounded-full bg-darkorange inline-flex" />
                </div>
                <div className="pl-14 cources ">
                  <ul className="list-disc">
                    <li>html</li>
                    <li>CSS</li>
                    <li>Typescript</li>
                    <li>Tailwind CSS</li>
                    <li>Nextjs</li>
                    <li>Sanity.io</li>
                  </ul>
                </div>
              </motion.div>
            </div>
            {/* Resume button */}
            <motion.div
              className="mt-5"
              initial={{ y: 35, opacity: 0 }}
              whileInView={{ y: 0, opacity: 2 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {" "}
              <Link href="saadiaresume.pdf" target="_blank">
                <Button variant="outline" size="lg" className="rounded-full">
                  <FaArrowLeft className="text-2xl mr-2" /> Resume
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
