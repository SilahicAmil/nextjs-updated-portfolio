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
        <div className="flex h-full w-full lg:overflow-x-auto lg:overflow-y-hidden bg-files 2xl:visible xl:visible lg:visible md:visible sm:visible lg:w-full md:w-screen sm:w-screen xsm:w-screen md:h-8 sm:h-8 xsm:h-16  items-center gap-4 ">
          <Link href="/">
            <div
              className={`${
                router.pathname === "/" ? "lg:border-b-2" : null
              } flex h-8 items-center p2 gap-2 w-40 justify-center`}
            >
              <FaReact className="text-lg text-blue-400" />
              Home.jsx
            </div>
          </Link>
          <Link href="/projects">
            <div
              className={`${
                router.pathname === "/projects" ? "lg:border-b-2" : null
              } flex h-8 items-center p2 gap-2 w-40 justify-center`}
            >
              <IoLogoJavascript className="text-lg text-orange-300" />
              Projects.js
            </div>
          </Link>
          <Link href="/contact">
            <div
              className={`${
                router.pathname === "/contact" ? "lg:border-b-2" : null
              } flex h-8 items-center p-2 gap-2 w-40 justify-center`}
            >
              <VscJson className="text-lg text-orange-300" />
              Contact.json
            </div>
          </Link>
          <div className="flex h-8 items-center p-2 gap-2 w-40 justify-center">
            <VscMarkdown className="text-lg text-blue-400" />
            Github.md
          </div>
        </div>
      </>
    </>
  );
};

export default FilesNav;
