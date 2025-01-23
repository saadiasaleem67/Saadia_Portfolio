import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
const Links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Services",
      path: "/services",
    },
    {
      name: "Project",
      path: "/project",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];
const Sheetlink = () => {
    const pathname = usePathname();
  return (
    <div>
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
  )
}

export default Sheetlink
