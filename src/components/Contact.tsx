import React from "react";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

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
    <div className=" lg:h-[800px] lg:pt-24 pt-24" id="Contact">
      <div className="container lg:px-6">
        <div className=" flex gap-3 pt-9  ">
          <span className="border border-r-4 border-darkorange"></span>
          <h3 className="text-3xl capitalize font-semibold">contact us</h3>
        </div>
        {/* contact */}
        <div className="container bg-[#1e2a3a]">
          <div className="grid lg:grid-cols-2 grid-cols-1 items-center justify-center mt-16 gap-[30px]   ">
            {/* form */}
            <div className="xl:order-none xl:flex-row border-2 lg:m-4">
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
                <div className="grid w-full gap-2">
                  <Textarea
                    placeholder="Type your message here.*"
                    id="message"
                    name="message"
                    required
                  />
                </div>

                <Button variant={"primary"} className="max-w-40 mb-4">
                  Send Message
                </Button>
              </form>
            </div>

            {/* info */}
            <div className="container py-2">
              <div className="">
                <p className="sm:text-5xl text-4xl text-gray-400  font-[family-name:var(--font-geist-mono)]">
                  {" "}
                  Need help? <br />
                  Get in touch now!
                </p>
              </div>
              <ul className="flex flex-col gap-10 mt-6">
                {contact.map((item, idx) => (
                  <li key={idx} className="container flex items-center gap-6">
                    <div className="flex gap-4">
                      <div className="bg-gray-900 hover:bg-gray-600 w-16 h-10 flex items-center justify-center">
                        <p className="text-3xl text-center ">{item.icon}</p>
                      </div>
                      <p className="text-xl">{item.value}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
