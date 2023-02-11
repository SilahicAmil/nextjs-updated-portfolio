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
        <div className="flex h-[94vh] max-h-screen flex-col overflow-y-auto bg-navigation py-2 xsm:invisible  xsm:w-0 sm:invisible sm:w-0  md:invisible  md:w-0 lg:visible lg:w-64 lg:px-4 xl:visible xl:w-64 xl:px-4 2xl:visible 2xl:w-64 2xl:px-4">
          <h2 className="flex tracking-widest">Explorer</h2>
          <div className="mt-6 flex flex-col justify-between">
            <aside>
              <ul>
                <label
                  className="flex cursor-pointer items-center gap-2"
                  onClick={showFilesHandler}
                >
                  <FaChevronRight
                    className={`${!showFiles ? "rotate-90 " : null}`}
                  />
                  <FaFolder className="text-md text-yellow-200" />
                  <p className="text-md tracking-widest">Portfolio</p>
                </label>
                {!showFiles ? (
                  <div className="flex flex-col gap-2 px-4 py-2 ">
                    <Link href="/">
                      <li
                        className={`${
                          router.pathname === "/"
                            ? "rounded-sm  bg-higlighted "
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
                            ? "rounded-sm bg-higlighted"
                            : null
                        } flex items-center gap-2`}
                      >
                        <IoLogoJavascript className="text-lg text-orange-300" />
                        Projects.js
                      </li>
                    </Link>
                    <Link href="/contact">
                      <li
                        className={`${
                          router.pathname === "/contact"
                            ? "rounded-sm bg-higlighted"
                            : null
                        } flex items-center  gap-2`}
                      >
                        <VscJson className="text-lg text-orange-300" />
                        Contact.json
                      </li>
                    </Link>
                    <Link href="/resume">
                      <li
                        className={`${
                          router.pathname === "/resume"
                            ? "rounded-sm bg-higlighted"
                            : null
                        } flex items-center  gap-2`}
                      >
                        <VscMarkdown className="text-lg text-blue-400" />
                        Resume.md
                      </li>
                    </Link>
                  </div>
                ) : null}
              </ul>
            </aside>
          </div>
        </div>

        <div className="h-full w-full  overflow-y-auto">
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
