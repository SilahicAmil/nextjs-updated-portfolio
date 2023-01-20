import { FaFileCode } from "react-icons/fa";
import Layout from "../Layout/Layout";
import Link from "next/link";
import Navigation from "./Navigation";
import TopNav from "./TopNav";

const ActionsNav = ({}) => {
  return (
    <>
      <div className="flex">
        <aside className="flex h-[93vh] flex-col justify-between items-center w-16 border-2">
          <div className="gap-6 flex flex-col mt-2">
            <div className="text-2xl flex items-center justify-center">
              <FaFileCode />
            </div>
            <div className="text-2xl flex items-center justify-center">
              <FaFileCode />
            </div>
            <div className="text-2xl flex items-center justify-center">
              <FaFileCode />
            </div>
            <div className="text-2xl flex items-center justify-center">
              <FaFileCode />
            </div>
            <div className="text-2xl flex items-center justify-center">
              <FaFileCode />
            </div>
          </div>
          <div className=" flex flex-col gap-6 mb-2">
            <div className="text-2xl flex items-center justify-center">
              <FaFileCode />
            </div>
            <div className="text-2xl flex items-center justify-center">
              <FaFileCode />
            </div>
          </div>
        </aside>

        <Navigation />
      </div>
    </>
  );
};

export default ActionsNav;
