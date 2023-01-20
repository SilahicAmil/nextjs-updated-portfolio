import { FaChevronRight, FaReact } from "react-icons/fa";

import FilesNav from "./FilesNav";
import { useState } from "react";

const Navigation = ({ children }) => {
  const [showFiles, setShowFiles] = useState(undefined);

  const showFilesHandler = () => {
    setShowFiles((prevState) => !prevState);
  };

  return (
    <>
      <div className="border-r-2 border-t-2 border-b-2 w-48 flex flex-col gap-2">
        <p className="p-2  text-lg tracking-widest">Explorer</p>
        <div>
          <label
            htmlFor="portfolio-checkbox"
            className="flex items-center gap-1 ml-1 cursor-pointer"
            onClick={showFilesHandler}
          >
            <FaChevronRight className={`${!showFiles ? `rotate-90` : null} `} />
            PORTFOLIO
          </label>

          {!showFiles ? (
            <div className="p-2 flex flex-col justify-center text-md ">
              <div className="flex gap-2">
                <FaReact />
                <p>Home.jsx</p>
              </div>
              <div className="flex gap-2">
                <FaReact />
                <p>Projects.js</p>
              </div>
              <div className="flex gap-2">
                <FaReact />
                <p>About.json</p>
              </div>
              <div className="flex gap-2">
                <FaReact />
                <p>Github.md</p>
              </div>
            </div>
          ) : null}
        </div>
      </div>
      <FilesNav />
    </>
  );
};

export default Navigation;
