import {
  VscAccount,
  VscExtensions,
  VscFiles,
  VscJson,
  VscMarkdown,
  VscSettingsGear,
} from "react-icons/vsc";

import Link from "next/link";
import { useRouter } from "next/router";

const ActionsNav = ({}) => {
  const router = useRouter();

  return (
    <div className="flex w-20 flex-col justify-between bg-sidebar sm:visible md:visible lg:visible xl:visible 2xl:visible ">
      <div className="flex flex-col gap-6 py-4">
        <Link href="/">
          <div
            className={` ${
              router.pathname === "/" ? "border-r-2" : null
            } flex h-8 items-center justify-center hover:bg-gray-600 hover:duration-200`}
          >
            <VscFiles className="text-2xl" />
          </div>
        </Link>
        <Link href="/projects">
          <div
            className={`${
              router.pathname === "/projects" ? "border-r-2" : null
            } flex h-8 items-center justify-center hover:bg-gray-600 hover:duration-200`}
          >
            <VscExtensions className="text-2xl" />
          </div>
        </Link>
        <Link href="/contact">
          <div
            className={`${
              router.pathname === "/contact" ? "border-r-2" : null
            } flex h-8 items-center justify-center hover:bg-gray-600 hover:duration-200`}
          >
            <VscJson className="text-2xl " />
          </div>
        </Link>
      </div>

      <div className="flex flex-col gap-4 py-4">
        <div className="flex h-8 items-center justify-center ">
          <VscAccount className="text-2xl" />
        </div>
        <div className="flex h-8 items-center justify-center">
          <VscSettingsGear className="text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default ActionsNav;
