import Image from "next/image";
import good from "../../public/images/pic1.png";
import Hero from "@/components/Hero";
import Services from "../components/Services";
import { AiOutlineCopyright } from "react-icons/ai";
import Contact from "@/components/Contact";
import About from "@/components/About";
import Project from "@/components/Project";
export default function Home() {
  return (
    <div>
      <div>
        <Hero />
        <About />
        <Services />
        <Project />
        <div className="bg-[#0f455534]">
          <Contact />
        </div>
        <div className="h-10 flex items-center justify-center">
          <p className="flex">
            <AiOutlineCopyright className="mt-[7px] text-base" />
            Made by Saadia.All Rights Reseverd
          </p>
        </div>
      </div>
    </div>
  );
}
