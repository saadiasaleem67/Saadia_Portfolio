"use client";
import React from "react";
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const contact = [
  {
    icon: <FaPhone />,
    value: "0343-2236013",
  },
  {
    icon: <IoIosMail />,
    value: "saadia.52004@gmail.com",
  },
  {
    icon: <FaLocationDot />,
    value: "Karachi, Pakistan",
  },
];
const Contact = () => {
  return (
    <motion.div
      className="lg:h-[800px] lg:pt-24 pt-24 "
      id="Contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 2 }}
      transition={{ duration: 2 }}
    >
      <div className="container lg:px-6">
        {/* Contact us */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 2 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className=" flex gap-3 pt-9  "
        >
          <span className="border border-r-4 border-darkorange"></span>
          <h3 className="text-3xl capitalize font-semibold">contact us</h3>
        </motion.div>
        {/* contact Information */}
        <div className="container bg-[#1e2a3a]">
          <div className="grid lg:grid-cols-2 grid-cols-1 items-center justify-center mt-16 gap-[30px]   ">
            {/*  Contact form */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 2 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="xl:order-none xl:flex-row border-2 lg:m-4 mt-2"
            >
              <form
                className="flex flex-col gap-6 px-3 pt-4 pb-7 rounded-xl"
                action="https://formspree.io/f/xannrrlw"
                method="POST"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Name*"
                    type="first name"
                    id="name"
                    name="name"
                    required
                  />
                  <Input
                    placeholder="Subject"
                    type="Subject"
                    id="subject"
                    name="subject"
                  />
                </div>
                <Input
                  placeholder="E-mail Adress*"
                  type="  email"
                  className="w-full"
                  id="email"
                  name="email"
                  required
                />

                <Textarea
                  placeholder="Type your message here.*"
                  id="message"
                  name="message"
                  required
                />

                <Button variant={"primary"} className="max-w-40 mb-4">
                  Send Message
                </Button>
              </form>
            </motion.div>
            {/* My info */}
            <motion.div
              className="container py-2"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 2 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="">
                <p className="sm:text-5xl text-4xl text-gray-400  font-[family-name:var(--font-geist-mono)]">
                  {" "}
                  Need help? <br />
                  Get in touch now!
                </p>
              </div>
              <ul className="flex flex-col gap-7 mt-6">
                {contact.map((item, idx) => (
                  <li key={idx} className="container flex items-center gap-6">
                    <div className="flex gap-4">
                      <div className="bg-gray-900 hover:bg-gray-600 lg:w-16 lg:h-10 w-8 h-8 flex items-center justify-center">
                        <p className="lg:text-3xl  text-xl text-center ">
                          {item.icon}
                        </p>
                      </div>
                      <p className="lg:text-xl ">{item.value}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
