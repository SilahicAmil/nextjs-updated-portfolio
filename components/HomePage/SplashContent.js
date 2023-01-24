import Image from "next/image";
import Link from "next/link";

const SplashContent = ({}) => {
  return (
    <>
      <div className="flex flex-col flex-1 h-[90vh] w-full">
        <div className="flex flex-col m-auto w-1/2">
          <div className="w-2/12 flex ml-auto ">
            {/* <Image
              alt="logo"
              src="/images/logo-black.svg"
              width={250}
              height={250}
              className="rounded-lg "
            /> */}
          </div>
          <h1 className="text-6xl  mb-3">Amil Silahic</h1>

          <p className="text-3xl">Full Stack Web Developer</p>
          <div className="flex gap-8 lg:p-8 md:p-6 sm:p-4 xsm:p-2">
            <Link href="/projects" className="bg-red-500">
              <button className="p-1 w-24 h-12">View Work</button>
            </Link>
            <Link href="/contact" className="border-lime-200 border-2">
              <button className=" p-1 w-24 h-12">Contact</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SplashContent;
