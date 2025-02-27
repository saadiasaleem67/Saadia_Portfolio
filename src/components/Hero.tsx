"use client";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="lg:h-[530px] sm:h-[450px] h-[600px] mt-8" id="/">
      <div className="container lg:px-6 ">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Name */}
          <div className=" lg:pt-24 pt-3">
            <span className="text-darkorange capitalize font-[family-name:var(--font-geist-mono)]">
              frontend developer
            </span>
            <h1 className="h1">
              {"Hello, I'm"}
              <br />
              <span className="text-darkorange">Saadia Saleem</span>
            </h1>
          </div>
          {/* paragraph */}
          <div>
            <p>
              Skilled Frontend Developer with experience building modern and
              responsive websites. I enjoy turning ideas into user-friendly web
              pages that look great and work smoothly. Ready to contribute to
              innovative projects and collaborate. Want to know how I may help
              your project? Check out my projects and resume.
            </p>
          </div>
        </motion.div>
        <div className="mt-6 xl:flex lg:flex gap-16 items-center ">
          {/* Resume Button */}
          <motion.div
            initial={{ y: 35, opacity: 0 }}
            whileInView={{ y: 0, opacity: 2 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {" "}
            <Link href="saadiaresume.pdf" target="_blank">
              <Button variant="default" size="lg">
                Resume{" "}
              </Button>
            </Link>
          </motion.div>
          {/* Socials Links */}
          <div className="flex gap-3 text-2xl lg:mt-0 mt-4">
            <motion.button
              className="  rounded-full p-2 border border-lightorange focus:hover:border-darkorange hover:border-darkorange"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 2 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link
                href={"https://www.linkedin.com/in/saadia-saleem-683878293/"}
              >
                {" "}
                <FaLinkedinIn />
              </Link>
            </motion.button>
            <motion.button
              className="rounded-full p-2 border border-lightorange focus:hover:border-darkorange hover:border-darkorange"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 2 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link href={"https://github.com/saadiasaleem67"}>
                {" "}
                <FaGithub />
              </Link>
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
