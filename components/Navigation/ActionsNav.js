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
    <div className="flex flex-col w-20 justify-between bg-sidebar">
      <div className="py-4 gap-6 flex flex-col">
        <div className="flex items-center h-8 justify-center ">
          <VscFiles className="text-2xl" />
        </div>
        <div className="flex items-center h-8 justify-center ">
          <VscGithubAlt className="text-2xl" />
        </div>
        <Link href="/projects">
          <div
            className={`${
              router.pathname === "/projects"
                ? "bg-higlighted rounded-md"
                : null
            } flex items-center h-8 justify-center`}
          >
            <VscExtensions className="text-2xl" />
          </div>
        </Link>
        <div className="flex items-center h-8 justify-center">
          <VscJson className="text-2xl" />
        </div>
      </div>

      <div className="py-4 flex flex-col gap-4">
        <div className="flex items-center h-8 justify-center ">
          <VscAccount className="text-2xl" />
        </div>
        <div className="flex items-center h-8 justify-center">
          <VscSettingsGear className="text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default ActionsNav;
