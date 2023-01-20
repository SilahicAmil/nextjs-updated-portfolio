import ContentLayout from "../ContentLayout/ContentLayout";
import { FaReact } from "react-icons/fa";
import HomePage from "../../pages";
import Layout from "../Layout/Layout";

const FilesNav = ({ children }) => {
  return (
    <>
      <div className="flex   w-full overflow-x-auto">
        <div className="flex h-8  items-center p-2 gap-2 w-40">
          <FaReact />
          Home.jsx
        </div>
        <div className="flex h-8 items-center p-2 gap-2 w-40">
          <FaReact />
          Home.jsx
        </div>
        <div className="flex h-8 items-center p-2 gap-2 w-40">
          <FaReact />
          Home.jsx
        </div>
        <div className="flex h-8 items-center p-2 gap-2 w-40">
          <FaReact />
          Home.jsx
        </div>
        <div className="w-full h-full p-4 m-8 overflow-y-auto">
          <div>{children}</div>
        </div>
      </div>
    </>
  );
};

export default FilesNav;
