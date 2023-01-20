import { FaChevronRight, FaFile, FaReact } from "react-icons/fa";

import FilesNav from "./FilesNav";
import { useState } from "react";

const Navigation = ({ children }) => {
  const [showFiles, setShowFiles] = useState(undefined);

  const showFilesHandler = () => {
    setShowFiles((prevState) => !prevState);
  };

  return (
    <>
      <div className="flex font-mono">
        <div className="flex flex-col w-32 border-2 justify-between">
          <div className="py-4 gap-6 flex flex-col">
            <div className="flex items-center justify-center text-xl">
              <FaFile />
            </div>
            <div className="flex items-center justify-center text-xl">
              <FaFile />
            </div>
            <div className="flex items-center justify-center text-xl">
              <FaFile />
            </div>
            <div className="flex items-center justify-center text-xl">
              <FaFile />
            </div>
          </div>
          <div className="py-4">
            <div className="flex items-center justify-center text-xl">
              <FaFile />
            </div>
          </div>
        </div>

        <div className="flex flex-col  w-80 px-4  py-2 overflow-y-auto border-2 h-[93vh]">
          <h2 className="flex items-center justify-center">Explorer</h2>

          <div className="flex flex-col justify-between mt-6">
            <aside>
              <ul>
                <label
                  className="flex items-center cursor-pointer"
                  onClick={showFilesHandler}
                >
                  <FaChevronRight
                    className={`${!showFiles ? "rotate-90" : null}`}
                  />
                  <p>Portfolio</p>
                </label>
                {!showFiles ? (
                  <div className="px-4 py-1 gap-2 flex flex-col">
                    <li className="flex items-center gap-2">
                      <FaReact />
                      Home.jsx
                    </li>
                    <li className="flex items-center gap-2">
                      <FaReact />
                      Projects.js
                    </li>
                    <li className="flex items-center gap-2">
                      <FaReact />
                      About.json
                    </li>
                    <li className="flex items-center gap-2">
                      <FaReact />
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
