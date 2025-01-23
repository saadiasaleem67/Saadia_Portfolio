"use client";
import React from "react";
import { GrPersonalComputer } from "react-icons/gr";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PiDesktopTower } from "react-icons/pi";
import { FaLaptopCode } from "react-icons/fa";

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
    <div id="Services" className="lg:pt-24  pt-24">
      <div className="container lg:px-6">
        <div className=" flex gap-3 pt-9  ">
          <span className="border border-r-4 border-darkorange"></span>
          <h3 className="text-3xl capitalize font-semibold ">Services</h3>
        </div>
        {/* Services info */}
        <div className="container mt-10 px-4 lg:px-10 ">
          <div className=" grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-8 ">
            {service.map((item, idx) => (
              <div key={idx}>
                <div className=" border-2 border-lightorange p-3 hover:bg-[#264653]">
                  <div className="flex justify-center items-center ">
                    <p className="text-6xl ">{item.icon}</p>
                  </div>
                  <h2 className="text-2xl text-darkorange mt-4 text-center">
                    {item.title}
                  </h2>
                  <p className="text-center text-base mt-5">{item.message}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Contact link*/}
        <div className="lg:mt-40 mt-28 lg:mb-10 ">
          <div className=" lg:mx-20 rounded-2xl bg-gradient-to-tr from-gray-500 via-[#1e2a3a] to-[#264653]">
            <div className="text-center lg:p-24 p-10">
              <p className="text-sm font-normal text-darkorange">Get Started</p>
              <p className="sm:text-4xl text-2xl font-bold mt-2 mb-7 font-[family-name:var(--font-geist-mono)]">
                Lets do something
                <br /> new with me!
              </p>
              <Link href={"/contact"}>
                <Button variant="primary" size="lg">
                  Contact
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

{
  /* <div className="grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 ">
  {service.map((item,idx)=>(
    <div key={idx}>
      <div>
        {item.icon}
        {item.title}
      </div>
    </div>
  ))}
</div> */
}
