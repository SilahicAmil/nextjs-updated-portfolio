import { FaChevronRight, FaFolder, FaReact } from "react-icons/fa";
import { VscJson, VscMarkdown } from "react-icons/vsc";

import ActionsNav from "./ActionsNav";
import FilesNav from "./FilesNav";
import { IoLogoJavascript } from "react-icons/io";
import { useState } from "react";

const Navigation = ({ children }) => {
  const [showFiles, setShowFiles] = useState(undefined);

  const showFilesHandler = () => {
    setShowFiles((prevState) => !prevState);
  };

  return (
    <>
      <div className="flex font-mono">
        <ActionsNav />
        <div className="flex flex-col lg:w-64 xl:w-64 2xl:w-64 lg:px-4 xl:px-4 2xl:px-4  py-2 overflow-y-auto max-h-screen  h-[94vh]  bg-navigation 2xl:visible xl:visible lg:visible md:invisible sm:invisible xsm:invisible md:w-0 sm:w-0 xsm:w-0">
          <h2 className="flex items-center justify-center">Explorer</h2>
          <div className="flex flex-col justify-between mt-6">
            <aside>
              <ul>
                <label
                  className="flex items-center cursor-pointer gap-2"
                  onClick={showFilesHandler}
                >
                  <FaChevronRight
                    className={`${!showFiles ? "rotate-90" : null}`}
                  />
                  <FaFolder />
                  <p>Portfolio</p>
                </label>
                {!showFiles ? (
                  <div className="px-4 py-1 gap-2 flex flex-col">
                    <li className="flex items-center gap-2">
                      <FaReact />
                      Home.jsx
                    </li>
                    <li className="flex items-center gap-2">
                      <IoLogoJavascript />
                      Projects.js
                    </li>
                    <li className="flex items-center gap-2">
                      <VscJson />
                      Contact.json
                    </li>
                    <li className="flex items-center gap-2">
                      <VscMarkdown />
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
