import { VscJson, VscMarkdown } from "react-icons/vsc";

import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import Link from "next/link";
import { useRouter } from "next/router";

const FilesNav = () => {
  const router = useRouter();
  return (
    <>
      <>
        <div className="flex items-center  gap-4 overflow-x-auto bg-files xsm:h-16 xsm:w-screen  sm:h-16 sm:w-screen md:h-8  md:w-screen lg:w-full ">
          <Link href="/">
            <div
              className={`${
                router.pathname === "/" ? "lg:border-b-2" : null
              } p2 flex h-8 w-40 items-center justify-center gap-2 p-2 hover:bg-gray-600 hover:duration-200`}
            >
              <FaReact className="text-lg text-blue-400" />
              Home.jsx
            </div>
          </Link>
          <Link href="/projects">
            <div
              className={`${
                router.pathname === "/projects" ? "lg:border-b-2" : null
              } p2 flex h-8 w-40 items-center justify-center gap-2 hover:bg-gray-600 hover:duration-200`}
            >
              <IoLogoJavascript className="text-lg text-orange-300" />
              Projects.js
            </div>
          </Link>
          <Link href="/contact">
            <div
              className={`${
                router.pathname === "/contact" ? "lg:border-b-2" : null
              } flex h-8 w-40 items-center justify-center gap-2 p-2 hover:bg-gray-600 hover:duration-200`}
            >
              <VscJson className="text-lg text-orange-300" />
              Contact.json
            </div>
          </Link>
          <Link href="/resume">
            <div
              className={`${
                router.pathname === "/resume" ? "lg:border-b-2" : null
              } flex h-8 w-40 items-center justify-center gap-2 p-2 hover:bg-gray-600 hover:duration-200`}
            >
              <VscMarkdown className="text-lg text-blue-400" />
              Resume.md
            </div>
          </Link>
        </div>
      </>
    </>
  );
};

export default FilesNav;
