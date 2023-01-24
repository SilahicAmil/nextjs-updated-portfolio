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
        <div className="flex h-full w-full overflow-x-auto bg-files 2xl:visible xl:visible lg:visible md:visible sm:visible lg:w-full md:w-screen sm:w-screen xsm:w-screen md:h-8 sm:h-8 xsm:h-16  items-center gap-4 ">
          <div
            className={`${
              router.pathname === "/" ? "border-b-2" : null
            } flex h-8 items-center p2 gap-2 w-40 justify-center`}
          >
            <FaReact />
            <Link href="/">Home.jsx</Link>
          </div>
          <div
            className={`${
              router.pathname === "/projects" ? "border-b-2" : null
            } flex h-8 items-center p2 gap-2 w-40 justify-center`}
          >
            <IoLogoJavascript />
            <Link href="/projects">Projects.js</Link>
          </div>
          <div className="flex h-8 items-center p-2 gap-2 w-40 justify-center">
            <VscJson />
            About.json
          </div>
          <div className="flex h-8 items-center p-2 gap-2 w-40 justify-center">
            <VscMarkdown />
            Github.md
          </div>
        </div>
      </>
    </>
  );
};

export default FilesNav;
