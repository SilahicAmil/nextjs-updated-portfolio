import { FaReact } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/router";

const FilesNav = () => {
  const router = useRouter();
  return (
    <>
      <>
        <div className="flex h-full w-full overflow-x-auto">
          <div
            className={`${
              router.pathname === "/" ? "bg-red-500" : null
            } flex h-8 items-center p2- gap-2 w-40 justify-center`}
          >
            <FaReact />
            <Link href="/">Home.jsx</Link>
          </div>
          <div className="flex h-8 items-center p-2 gap-2 w-40 justify-center">
            <FaReact />
            Home.jsx
          </div>
          <div className="flex h-8 items-center p-2 gap-2 w-40 justify-center">
            <FaReact />
            Home.jsx
          </div>
          <div className="flex h-8 items-center p-2 gap-2 w-40 justify-center">
            <FaReact />
            Home.jsx
          </div>
        </div>
      </>
    </>
  );
};

export default FilesNav;
