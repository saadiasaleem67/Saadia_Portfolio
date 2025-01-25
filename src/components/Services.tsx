"use client";
import React from "react";
import { GrPersonalComputer } from "react-icons/gr";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PiDesktopTower } from "react-icons/pi";
import { FaLaptopCode } from "react-icons/fa";
import { motion } from "framer-motion";

const service = [
  {
    title: "Web development",
    icon: <FaLaptopCode />,
    message:
      "Creating web applications to meet unique business requirements Focus on scalability, performance, and seamless user experience.",
  },
  {
    title: "Web Desigen",
    icon: <GrPersonalComputer />,
    message:
      "I design Website that not only look beautiful but also offer expceptional functionality.",
  },
  {
    title: "Responsive Desigen",
    icon: <PiDesktopTower />,
    message:
      "Designing websites optimized for mobile devices first, ensuring they work perfectly on all screen sizes.",
  },
];

const Services = () => {
  return (
    <motion.div
      id="Services"
      className="lg:pt-24  pt-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 2 }}
      transition={{ duration: 2 }}
    >
      <div className="container lg:px-6">
        {/* Services */}
        <motion.div
          className="flex gap-3 pt-9  "
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 2 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <span className="border border-r-4 border-darkorange"></span>
          <h3 className="text-3xl capitalize font-semibold ">Services</h3>
        </motion.div>
        {/* Services info */}
        <div className="container mt-10 px-4 lg:px-10 ">
          <div className=" grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-8 ">
            {service.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <div className=" border-2 border-lightorange p-3 hover:bg-[#264653]">
                  <div className="flex justify-center items-center ">
                    <p className="text-6xl ">{item.icon}</p>
                  </div>
                  <h2 className="text-2xl text-darkorange mt-4 text-center">
                    {item.title}
                  </h2>
                  <p className="text-center text-base mt-5">{item.message}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Contact link*/}
        <div className="lg:mt-40 mt-28 lg:mb-10 ">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 2 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className=" lg:mx-20 rounded-2xl bg-gradient-to-tr from-gray-500 via-[#1e2a3a] to-[#264653]"
          >
            <div className="text-center lg:p-24 p-10">
              <p className="text-sm font-normal text-darkorange">Get Started</p>
              <p className="sm:text-4xl text-2xl font-bold mt-2 mb-7 font-[family-name:var(--font-geist-mono)]">
                Lets do something
                <br /> new with me!
              </p>
              <Link href={"#Contact"}>
                <Button variant="primary" size="lg">
                  Contact
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
