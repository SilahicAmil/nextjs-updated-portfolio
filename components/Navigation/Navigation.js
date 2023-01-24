import { FaChevronRight, FaFolder, FaReact } from "react-icons/fa";
import { VscJson, VscMarkdown } from "react-icons/vsc";

import ActionsNav from "./ActionsNav";
import FilesNav from "./FilesNav";
import { IoLogoJavascript } from "react-icons/io";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const Navigation = ({ children }) => {
  const [showFiles, setShowFiles] = useState(undefined);

  const showFilesHandler = () => {
    setShowFiles((prevState) => !prevState);
  };

  const router = useRouter();

  return (
    <>
      <div className="flex font-JetMono ">
        <ActionsNav />
        <div className="flex flex-col lg:w-64 xl:w-64 2xl:w-64 lg:px-4 xl:px-4 2xl:px-4  py-2 overflow-y-auto max-h-screen  h-[94vh]  bg-navigation 2xl:visible xl:visible lg:visible md:invisible sm:invisible xsm:invisible md:w-0 sm:w-0 xsm:w-0">
          <h2 className="flex tracking-widest">Explorer</h2>
          <div className="flex flex-col justify-between mt-6">
            <aside>
              <ul>
                <label
                  className="flex items-center cursor-pointer gap-2"
                  onClick={showFilesHandler}
                >
                  <FaChevronRight
                    className={`${!showFiles ? "rotate-90 " : null}`}
                  />
                  <FaFolder className="text-md text-yellow-200" />
                  <p className="text-md tracking-widest">Portfolio</p>
                </label>
                {!showFiles ? (
                  <div className="px-4 py-2 gap-2 flex flex-col ">
                    <Link href="/">
                      <li
                        className={`${
                          router.pathname === "/"
                            ? "bg-higlighted  rounded-sm "
                            : null
                        } flex items-center gap-2 `}
                      >
                        <FaReact className="text-lg text-blue-500" />
                        Home.jsx
                      </li>
                    </Link>
                    <Link href="/projects">
                      <li
                        className={`${
                          router.pathname === "/projects"
                            ? "bg-higlighted"
                            : null
                        } flex items-center gap-2`}
                      >
                        <IoLogoJavascript className="text-orange-300 text-lg" />
                        Projects.js
                      </li>
                    </Link>
                    <Link href="/contact">
                      <li
                        className={`${
                          router.pathname === "/contact"
                            ? "bg-higlighted"
                            : null
                        } flex items-center  gap-2`}
                      >
                        <VscJson className="text-orange-300 text-lg" />
                        Contact.json
                      </li>
                    </Link>
                    <li className="flex items-center gap-2">
                      <VscMarkdown className="text-lg text-blue-400" />
                      Github.md
                    </li>
                  </div>
                ) : null}
              </ul>
            </aside>
          </div>
        </div>

        <div className="w-full h-full  overflow-y-auto">
          <div>
            <FilesNav />
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
