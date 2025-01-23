"use client";
import { IoMenu } from "react-icons/io5";
import { usePathname } from "next/navigation";
import Link from "next/link";

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

// import {
//   Sheet,
//   SheetContent,
//   SheetFooter,
//   SheetHeader,
//   SheetTrigger,
// } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Sheetlink from "./Sheetlink";

export function SheetSide() {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <IoMenu className=" hover:text-darkorange  text-[37px] " />
      </SheetTrigger>
      <SheetContent>
        <div>
          <SheetHeader>
            <p className="text-3xl font-semibold">
              <Link href={"/"}>Saadia Saleem</Link>
            </p>
          </SheetHeader>
          {Links.map((link, idx) => (
            <div key={idx} className="mt-5 tex ">
              {pathname === link.path ? (
                <Link
                  className="text-lg font-semibold border-b-2 text-darkorange  border-darkorange"
                  href={link.path}
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  className="text-lg  transition-all  hover:text-darkorange hover:font-semibold "
                  href={link.path}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </div>
        <SheetFooter>
          <div className="flex gap-3 text-xl lg:mt-0 mt-10">
            <button className="  rounded-full p-2 border border-lightorange focus:hover:border-darkorange hover:border-darkorange">
              <Link
                href={"https://www.linkedin.com/in/saadia-saleem-683878293/"}
              >
                {" "}
                <FaLinkedinIn />
              </Link>
            </button>
            <button className="rounded-full p-2 border border-lightorange focus:hover:border-darkorange hover:border-darkorange">
              <Link href={"https://github.com/saadiasaleem67"}>
                {" "}
                <FaGithub />
              </Link>
            </button>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>

    // <Sheet>
    //   <SheetTrigger asChild>
    //     <Button variant="outline">Open</Button>
    //   </SheetTrigger>
    //   <SheetContent>
    //     <SheetHeader>hello</SheetHeader>
    //     <div className="grid gap-4 py-4">
    //       <div className="grid grid-cols-4 items-center gap-4">
    //         <Input id="name" value="Pedro Duarte" className="col-span-3" />
    //       </div>
    //       <div className="grid grid-cols-4 items-center gap-4">
    //         <Input id="username" value="@peduarte" className="col-span-3" />
    //       </div>
    //     </div>

    //     <SheetFooter>
    //       <SheetClose>
    //       {/* <Button type="submit">Save changes</Button> */}
    //       <Sheetlink/>

    //       </SheetClose>
    //     </SheetFooter>
    //   </SheetContent>
    // </Sheet>
  );
}
//  {Links.map((link, idx) => (
//            <div key={idx} className="mt-5 tex ">
//            {pathname === link.path ? (
//                <Link
//                 className="text-lg font-semibold border-b-2 text-darkorange  border-darkorange"
//                  href={link.path}
//               >
//                  {link.name}
//                </Link>
//              ) : (
//                <Link
//                  className="text-lg  transition-all  hover:text-darkorange hover:font-semibold "
//                  href={link.path}
//                >
//                  {link.name}
//               </Link>
//              )}
// </div>
//      ))}
