import {
  VscAccount,
  VscExtensions,
  VscFiles,
  VscGithubAlt,
  VscJson,
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
              router.pathname === "/" ? "border-l-2" : null
            } flex h-8 items-center justify-center`}
          >
            <VscFiles className="text-2xl" />
          </div>
        </Link>
        <div className="flex h-8 items-center justify-center ">
          <VscGithubAlt className="text-2xl" />
        </div>
        <Link href="/projects">
          <div
            className={`${
              router.pathname === "/projects" ? "border-l-2" : null
            } flex h-8 items-center justify-center`}
          >
            <VscExtensions className="text-2xl" />
          </div>
        </Link>
        <Link href="/contact">
          <div
            className={`${
              router.pathname === "/contact" ? "border-l-2" : null
            } flex h-8 items-center justify-center `}
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
